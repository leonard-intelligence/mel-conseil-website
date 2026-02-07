import { useEffect } from 'react';

interface CalendlyWidgetProps {
    className?: string;
    style?: React.CSSProperties;
    url?: string;
}

export function CalendlyWidget({ className, style, url = "https://calendly.com/leonard-intelligence" }: CalendlyWidgetProps) {
    useEffect(() => {
        const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
        const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
        if (existingScript) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className={`w-full ${className || 'mt-8 animate-fade-in'}`}>
            <div
                className="calendly-inline-widget mx-auto"
                data-url={url}
                style={style || { minWidth: '320px', height: '550px' }}
            ></div>
        </div>
    );
}
