import { useState, useEffect } from 'react';

interface SplashScreenProps {
    onExitStart: () => void;
    onComplete: () => void;
}

export function SplashScreen({ onExitStart, onComplete }: SplashScreenProps) {
    const [phase, setPhase] = useState<'visible' | 'exiting' | 'done'>('visible');

    useEffect(() => {
        // Phase 1: Show logo briefly (100ms) before revealing site
        const showTimer = setTimeout(() => {
            setPhase('exiting');
            onExitStart();
        }, 100);

        // Phase 2: Exit animation (800ms), then mark done
        const exitTimer = setTimeout(() => {
            setPhase('done');
            onComplete();
        }, 900);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(exitTimer);
        };
    }, [onExitStart, onComplete]);

    // Allow keyboard skip for accessibility
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
                setPhase('done');
                onComplete();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center pointer-events-none transition-colors duration-700 ${
                phase === 'exiting' ? 'bg-transparent' : 'bg-black'
            }`}
        >
            <div
                className={`w-[60%] max-w-[300px] aspect-square transition-all duration-700 ease-out ${
                    phase === 'visible' ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.2]'
                }`}
            >
                <img
                    src="/logo_white_512.png"
                    alt="Leonard Intelligence"
                    width={512}
                    height={512}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}
