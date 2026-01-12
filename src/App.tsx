import { useReveal } from './hooks/useReveal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { TrustBar } from './components/layout/TrustBar';
import { UseCaseGrid } from './components/layout/UseCaseGrid';
import { SectionResearch } from './components/layout/SectionResearch';
import { Pillars } from './components/layout/Pillars';
import { Solutions } from './components/layout/Solutions';
import { Methodology } from './components/layout/Methodology';
import { Deployment } from './components/layout/Deployment';
import { CTASection } from './components/layout/CTASection';
import { Footer } from './components/layout/Footer';
import { FxDebugPanel, FxProvider } from './components/fx';

export function App() {
    // Initialize reveal animations
    useReveal();

    return (
        <FxProvider>
            <div className="min-h-screen bg-background text-foreground font-sans">
                {/* Light Gradient Overlay */}
                <div className="gradient-overlay"></div>

                <Navbar />
                <Hero />
                <TrustBar />
                <UseCaseGrid />

                {/* Sovereign AI Catalog V2 replaces the individual sections */}

                <SectionResearch />    {/* Block 6: Research (Kept as distinct) */}

                <Pillars />
                <Solutions />
                <Methodology />
                <Deployment />
                <CTASection />
                <Footer />

                {/* Debug Panel - visible with ?fxdebug=1 */}
                <FxDebugPanel />
            </div>
        </FxProvider>
    );
}

export default App;