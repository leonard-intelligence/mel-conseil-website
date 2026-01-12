/**
 * FxContext - Global state for FX configuration
 * Allows FxDebugPanel to control FxImage effects in real-time
 */

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { FxConfig } from './fxConfig';
import { FX_DEFAULTS } from './fxConfig';

interface FxContextValue {
    config: FxConfig;
    setConfig: (config: FxConfig) => void;
    updateConfig: (updates: Partial<FxConfig>) => void;
}

const FxContext = createContext<FxContextValue | null>(null);

interface FxProviderProps {
    children: ReactNode;
    initialConfig?: Partial<FxConfig>;
}

/**
 * Provider component - wrap your app with this
 */
export function FxProvider({ children, initialConfig }: FxProviderProps) {
    const [config, setConfigState] = useState<FxConfig>({
        ...FX_DEFAULTS,
        ...initialConfig,
        beads: { ...FX_DEFAULTS.beads, ...initialConfig?.beads },
        duotone: { ...FX_DEFAULTS.duotone, ...initialConfig?.duotone },
        hover: { ...FX_DEFAULTS.hover, ...initialConfig?.hover },
        interaction: { ...FX_DEFAULTS.interaction, ...initialConfig?.interaction },
    });

    const setConfig = useCallback((newConfig: FxConfig) => {
        setConfigState(newConfig);
    }, []);

    const updateConfig = useCallback((updates: Partial<FxConfig>) => {
        setConfigState(prev => ({
            ...prev,
            ...updates,
            beads: { ...prev.beads, ...updates.beads },
            duotone: { ...prev.duotone, ...updates.duotone },
            hover: { ...prev.hover, ...updates.hover },
            interaction: { ...prev.interaction, ...updates.interaction },
        }));
    }, []);

    return (
        <FxContext.Provider value={{ config, setConfig, updateConfig }}>
            {children}
        </FxContext.Provider>
    );
}

/**
 * Hook for FxImage - read-only access to config
 */
export function useFxConfig(): FxConfig {
    const context = useContext(FxContext);
    // Return defaults if used outside provider (graceful degradation)
    return context?.config ?? FX_DEFAULTS;
}

/**
 * Hook for FxDebugPanel - full access to update config
 */
export function useFxDebug() {
    const context = useContext(FxContext);
    if (!context) {
        // Return no-op functions if used outside provider
        return {
            config: FX_DEFAULTS,
            setConfig: () => { },
            updateConfig: () => { },
        };
    }
    return context;
}
