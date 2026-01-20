
import { FxImage } from '../fx/FxImage';
import { useFxConfig } from '../fx/FxContext';

export function Hero() {
    const config = useFxConfig();

    return (
        <section id="section-hero" className="hero-section hero reveal">
            <div className="absolute inset-0 z-0 select-none pointer-events-none hero__background">
                <FxImage
                    src={config.heroImage || '/assets/hero_background.webp'}
                    alt="Fond abstrait représentant le flux de données dans un réseau de neurones artificiels"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ height: '100%', objectFit: 'cover' }}
                    config={{
                        interaction: {
                            enabled: true,
                            mode: 'shape',
                            variant: 'push',
                            radius: 0.3,
                            softness: 0,
                            activeSize: 10
                        }
                    }}
                />
            </div>

            <div className="hero-content-wrapper hero__content z-10 relative">
                {/* Eyebrow - Competitor-inspired status indicator */}
                <div className="status-badge hero__badge mb-6">
                    <span className="dot"></span>
                    <span>Expert Mistral AI · Infrastructure SecNumCloud</span>
                </div>

                <h1 id="hero-headline" className="hero-headline hero__headline">
                    L'IA Générative souveraine<br />
                    <span className="gradient-text hero__headline-accent">pour votre entreprise.</span>
                </h1>

                <p className="hero-subtext hero__subtext">
                    Conseil et déploiement de solutions IA.<br />Transformez vos processus métier sans exposer vos données sensibles.
                </p>

                <div className="action-group hero__actions">
                    <a href="#section-contact" id="hero-cta-primary" className="hero-cta hero__cta hero__cta--primary">
                        PARLER À UN EXPERT →
                    </a>
                    <a href="#section-solutions" id="hero-cta-secondary" className="hero-cta-secondary hero__cta hero__cta--secondary">
                        VOIR LES CAS D'USAGE
                    </a>
                </div>
            </div>
        </section>
    );
}
