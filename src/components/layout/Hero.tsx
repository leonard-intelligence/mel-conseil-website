
import { FxImage } from '../fx/FxImage';
import { useFxConfig } from '../fx/FxContext';

export function Hero() {
    const config = useFxConfig();

    return (
        <section className="hero-section reveal">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <FxImage
                    src={config.heroImage || '/assets/hero_background.webp'}
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ height: '100%', objectFit: 'cover' }}
                    config={{
                        interaction: {
                            enabled: true,
                            mode: 'shape',
                            variant: 'push',
                            radius: 0.3
                        }
                    }}
                />
            </div>

            <div className="hero-content-wrapper z-10 relative">
                <h1 className="hero-headline">
                    L’IA sur-mesure pour vos<br />
                    <span className="gradient-text">process internes</span>
                </h1>

                <p className="hero-subtext">
                    Texte, image, audio, vidéo. Automatisez vos opérations et fiabilisez l'analyse,
                    sans exposer vos données (Local ou Cloud UE).
                </p>

                <div className="action-group">
                    <a href="#contact" className="hero-cta">
                        PARLER À UN EXPERT →
                    </a>
                </div>
            </div>
        </section>
    );
}
