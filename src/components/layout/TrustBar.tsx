export function TrustBar() {
    const logos = [
        { name: 'Mistral AI', src: '/assets/logos/mistral.svg' },
        { name: 'OpenAI', src: '/assets/logos/openai.svg' },
        { name: 'Meta', src: '/assets/logos/meta.svg' },
        { name: 'Anthropic', src: '/assets/logos/anthropic.svg' },
        { name: 'Gemini', src: '/assets/logos/gemini.svg' },
        { name: 'Hugging Face', src: '/assets/logos/huggingface.svg' },
        { name: 'NVIDIA', src: '/assets/logos/nvidia.svg' },
        { name: 'AssemblyAI', src: '/assets/logos/assemblyai.svg' },
    ];

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="backers-bar reveal delay-100">
            <div className="backers-grid">
                <div className="backer-label">Propulsé par les meilleurs modèles.</div>
                <div className="logos-scroll-container">
                    <div className="logos-scroll-track">
                        {duplicatedLogos.map((logo, index) => (
                            <div key={`${logo.name}-${index}`} className="backer-item" title={logo.name}>
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-8 w-auto"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
