import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
    type?: 'Organization' | 'BreadcrumbList';
    breadcrumbs?: { name: string; item: string }[];
}

export function JsonLd({ type = 'Organization', breadcrumbs }: JsonLdProps) {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://leonardintelligence.com';

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Leonard Intelligence',
        url: siteUrl,
        logo: `${siteUrl}/logo_black_512.png`,
        description: 'Cabinet de conseil expert en IA Générative et Data pour entreprises.',
        inLanguage: 'fr-FR',
        sameAs: ['https://www.linkedin.com/company/leonard-intelligence', 'https://twitter.com/leonardintelligence'],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'hello@leonardintelligence.com',
        },
    };

    // ProfessionalService schema for richer search results
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Leonard Intelligence',
        url: siteUrl,
        description:
            'Automatisez vos processus internes avec une IA souveraine et sécurisée. Texte, image, audio, vidéo.',
        areaServed: 'FR',
        serviceType: [
            'Conseil en Intelligence Artificielle',
            'Automatisation de processus',
            'Déploiement IA souverain',
        ],
        knowsAbout: [
            'Intelligence Artificielle Générative',
            'Agents IA Autonomes',
            'Traitement du Langage Naturel',
            'Vision par Ordinateur',
            'Traitement Audio et Signal',
        ],
    };

    const breadcrumbSchema =
        type === 'BreadcrumbList' && breadcrumbs
            ? {
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: breadcrumbs.map((crumb, index) => ({
                      '@type': 'ListItem',
                      position: index + 1,
                      name: crumb.name,
                      item: crumb.item.startsWith('http') ? crumb.item : `${siteUrl}${crumb.item}`,
                  })),
              }
            : null;

    return (
        <Helmet>
            {type === 'Organization' && (
                <>
                    {/* Organization schema - static data only, safe for dangerouslySetInnerHTML */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                    />
                </>
            )}
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}
        </Helmet>
    );
}
