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

        // Function to observe elements
        const observeElements = (elements: NodeListOf<Element> | HTMLElement[]) => {
            elements.forEach(el => observerRef.current?.observe(el));
        };

        // Initial scan
        observeElements(document.querySelectorAll('.reveal, .reveal-left'));

        // Mutation Observer to catch lazy loaded modules
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        // Check if the node itself is revealable
                        if (node.matches('.reveal, .reveal-left')) {
                            observerRef.current?.observe(node);
                        }
                        // Check for revealable children
                        const children = node.querySelectorAll('.reveal, .reveal-left');
                        if (children.length > 0) {
                            observeElements(children);
                        }
                    }
                });
            });
        });

        // Observe the entire body for added nodes
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Safety timeout fallback
        const safetyTimeout = setTimeout(() => {
            const revealedElements = document.querySelectorAll('.reveal, .reveal-left');
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
            mutationObserver.disconnect();
            clearTimeout(safetyTimeout);
        };
    }, []);
}
