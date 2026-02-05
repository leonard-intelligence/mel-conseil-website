import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
    type?: 'Organization' | 'BreadcrumbList';
    breadcrumbs?: { name: string; item: string }[];
}

export function JsonLd({ type = 'Organization', breadcrumbs }: JsonLdProps) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Leonard Intelligence",
        "url": "https://leonardintelligence.com",
        "logo": "https://leonardintelligence.com/logo_black_512.png",
        "description": "Cabinet de conseil expert en IA Générative et Data pour entreprises.",
        "inLanguage": "fr-FR",
        "sameAs": [
            "https://www.linkedin.com/company/leonard-intelligence",
            "https://twitter.com/leonardintelligence"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "hello@leonardintelligence.com"
        }
    };

    const breadcrumbSchema = type === 'BreadcrumbList' && breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.item.startsWith('http') ? crumb.item : `https://leonardintelligence.com${crumb.item}`
        }))
    } : null;

    return (
        <Helmet>
            {type === 'Organization' && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
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
