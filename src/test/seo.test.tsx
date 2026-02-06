import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { JsonLd } from '../components/seo/JsonLd';

function renderWithProviders(ui: React.ReactElement) {
    return render(
        <HelmetProvider>
            <MemoryRouter>{ui}</MemoryRouter>
        </HelmetProvider>
    );
}

describe('SEO Component', () => {
    it('renders without crashing', () => {
        const { container } = renderWithProviders(<SEO />);
        expect(container).toBeTruthy();
    });

    it('accepts custom title and description', () => {
        const { container } = renderWithProviders(<SEO title="Custom Title" description="Custom Description" />);
        expect(container).toBeTruthy();
    });
});

describe('JsonLd Component', () => {
    it('renders Organization schema without crashing', () => {
        const { container } = renderWithProviders(<JsonLd />);
        expect(container).toBeTruthy();
    });

    it('renders BreadcrumbList schema', () => {
        const { container } = renderWithProviders(
            <JsonLd
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: 'Accueil', item: '/' },
                    { name: 'CGV', item: '/cgv' },
                ]}
            />
        );
        expect(container).toBeTruthy();
    });
});
