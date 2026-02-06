import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    twitterHandle?: string;
}

const heroBg = '/logo_black_512.png';

export function SEO({
    title = 'Leonard Intelligence - Experts IA & Automatisation',
    description = 'Automatisez vos processus internes avec une IA souveraine et sécurisée. Texte, image, audio, vidéo. Déploiement Local ou Cloud UE.',
    canonical,
    image = heroBg,
    type = 'website',
    twitterHandle = '@leonardintelligence',
}: SEOProps) {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://leonardintelligence.com';
    const location = useLocation();
    const fullUrl = canonical ? canonical : `${siteUrl}${location.pathname}`;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
}
