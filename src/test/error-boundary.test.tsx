import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../components/ErrorBoundary';

function ThrowingComponent(): React.JSX.Element {
    throw new Error('Test error');
}

describe('ErrorBoundary', () => {
    it('renders children when no error', () => {
        render(
            <ErrorBoundary>
                <div>Hello</div>
            </ErrorBoundary>
        );
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    it('renders fallback when child throws', () => {
        // Suppress console.error for this test
        const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

        render(
            <ErrorBoundary>
                <ThrowingComponent />
            </ErrorBoundary>
        );
        expect(screen.getByText(/erreur est survenue/i)).toBeInTheDocument();

        spy.mockRestore();
    });

    it('renders custom fallback when provided', () => {
        const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

        render(
            <ErrorBoundary fallback={<div>Custom fallback</div>}>
                <ThrowingComponent />
            </ErrorBoundary>
        );
        expect(screen.getByText('Custom fallback')).toBeInTheDocument();

        spy.mockRestore();
    });
});
