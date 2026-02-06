import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
);

// Web Vitals monitoring (lazy-loaded to avoid impacting initial load)
if (typeof window !== 'undefined') {
    import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
        const logVital = (metric: { name: string; value: number }) => {
            console.debug(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)}`);
        };
        onCLS(logVital);
        onINP(logVital);
        onLCP(logVital);
        onFCP(logVital);
        onTTFB(logVital);
    });
}
