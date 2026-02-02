// Basic Event Bus for Contact Form signals
// Allows any component to trigger the contact form with a specific subject pre-filled

type ContactSignalDetails = {
    subject: string;
};

const EVENT_NAME = 'leonard:contact-signal';

export const contactSignal = {
    /**
     * Triggers the contact form to open/scroll and pre-fill the message.
     * @param subject The expertise or context (e.g., "Computer Vision", "RAG")
     */
    trigger: (subject: string) => {
        const event = new CustomEvent<ContactSignalDetails>(EVENT_NAME, {
            detail: { subject }
        });
        window.dispatchEvent(event);
    },

    /**
     * Subscribes to the contact signal.
     * @param callback Function to call when signal is received
     * @returns Cleanup function to remove listener
     */
    subscribe: (callback: (subject: string) => void) => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<ContactSignalDetails>).detail;
            callback(detail.subject);
        };

        window.addEventListener(EVENT_NAME, handler);
        return () => window.removeEventListener(EVENT_NAME, handler);
    }
};
