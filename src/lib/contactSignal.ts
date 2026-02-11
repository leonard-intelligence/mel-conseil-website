// Basic Event Bus for Contact Form signals
// Allows any component to trigger the contact form with a specific subject pre-filled

type ContactSignalDetails = {
    subject: string;
    mode?: 'form' | 'calendly';
};

const EVENT_NAME = 'leonard:contact-signal';

export const contactSignal = {
    /**
     * Triggers the contact form or calendly widget.
     * @param subject The expertise or context (e.g., "Computer Vision", "RAG")
     * @param mode The mode to open: 'form' (default) or 'calendly'
     */
    trigger: (subject: string, mode: 'form' | 'calendly' = 'form') => {
        const event = new CustomEvent<ContactSignalDetails>(EVENT_NAME, {
            detail: { subject, mode }
        });
        window.dispatchEvent(event);
    },

    /**
     * Subscribes to the contact signal.
     * @param callback Function to call when signal is received
     * @returns Cleanup function to remove listener
     */
    subscribe: (callback: (subject: string, mode?: 'form' | 'calendly') => void) => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<ContactSignalDetails>).detail;
            callback(detail.subject, detail.mode);
        };

        window.addEventListener(EVENT_NAME, handler);
        return () => window.removeEventListener(EVENT_NAME, handler);
    }
};
