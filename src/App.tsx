import { Suspense, lazy, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { FxProvider } from './components/fx';
import { SectionLoader } from './components/ui/SectionLoader';
import { SplashScreen } from './components/layout/SplashScreen';
import { ErrorBoundary } from './components/ErrorBoundary';

// Eager load Home since it's the main entry
import Home from './pages/Home';

// Lazy load Legal pages
const CGV = lazy(() => import('./pages/Legal/CGV'));
const MentionsLegales = lazy(() => import('./pages/Legal/MentionsLegales'));
const Footer = lazy(() => import('./components/layout/Footer').then((m) => ({ default: m.Footer })));

// 404 page component
function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-mono font-bold text-white mb-4">404</h1>
            <p className="text-gray-400 text-lg mb-8">Cette page n'existe pas.</p>
            <a
                href="/"
                className="bg-[#E67E22] text-white px-6 py-3 font-normal uppercase text-sm inline-block transition-all hover:bg-white hover:text-[#E67E22]"
            >
                Retour a l'accueil
            </a>
        </div>
    );
}

// Component to conditionally render layout based on route
function AppLayout() {
    const location = useLocation();
    const isLegalPage = location.pathname === '/cgv' || location.pathname === '/mentions-legales';

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            {/* Skip to content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] focus:bg-[#E67E22] focus:text-white focus:px-4 focus:py-2 focus:text-sm"
            >
                Aller au contenu principal
            </a>

            {!isLegalPage && <Navbar />}

            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cgv"
                        element={
                            <Suspense fallback={<SectionLoader />}>
                                <CGV />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/mentions-legales"
                        element={
                            <Suspense fallback={<SectionLoader />}>
                                <MentionsLegales />
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ErrorBoundary>

            {!isLegalPage && (
                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            )}
        </div>
    );
}

export default function App() {
    const [splashComplete, setSplashComplete] = useState(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('splash') === 'force') return false;
            return sessionStorage.getItem('splash_shown') === 'true';
        }
        return false;
    });

    const handleExitStart = useCallback(() => {
        // No-op - content is always visible behind splash
    }, []);

    const handleSplashComplete = useCallback(() => {
        setSplashComplete(true);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('splash_shown', 'true');
        }
    }, []);

    return (
        <FxProvider>
            <Router>
                {!splashComplete && <SplashScreen onExitStart={handleExitStart} onComplete={handleSplashComplete} />}
                <AppLayout />
            </Router>
        </FxProvider>
    );
}
