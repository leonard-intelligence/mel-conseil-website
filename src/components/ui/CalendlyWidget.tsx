import { useEffect } from 'react';

interface CalendlyWidgetProps {
    className?: string;
    style?: React.CSSProperties;
    url?: string;
}

export function CalendlyWidget({ className, style, url = "https://calendly.com/leonard-intelligence" }: CalendlyWidgetProps) {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
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
