import { useEffect, useRef } from 'react';

export function useReveal() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.05
        };

        observerRef.current = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealedElements = document.querySelectorAll('.reveal, .reveal-left');
        revealedElements.forEach(el => observerRef.current?.observe(el));

        const safetyTimeout = setTimeout(() => {
            revealedElements.forEach(el => {
                const htmlEl = el as HTMLElement;
                if (window.getComputedStyle(htmlEl).opacity === '0') {
                    htmlEl.classList.add('active');
                }
            });
        }, 3000);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            clearTimeout(safetyTimeout);
        };
    }, []);
}
