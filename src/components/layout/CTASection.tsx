import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="cta-section py-32 bg-black relative overflow-hidden border-b border-white/10">
            {/* Background Grain/Noise could go here */}

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-8 tracking-tight">
                    Prêt à reprendre le <br />
                    contrôle ?
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Discutons de vos enjeux de souveraineté et identifions ensemble votre premier cas d'usage à fort impact.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a href="#contact" className="group relative px-8 h-14 flex items-center justify-center bg-white text-black font-mono font-bold uppercase text-lg hover:bg-gray-200 transition-all w-full md:w-auto">
                        <span className="flex items-center gap-3">
                            Réserver un Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a href="#contact" className="px-8 h-14 flex items-center justify-center border border-white/20 text-white font-mono uppercase text-sm hover:bg-white/5 transition-all w-full md:w-auto">
                        Voir les disponibilités
                    </a>
                </div>

                <div className="mt-16 pt-16 border-t border-white/5 flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Trust indicators / badges could go here */}
                    <span className="font-mono text-xs">SOC2 COMPLIANT</span>
                    <span className="font-mono text-xs">ISO 27001</span>
                    <span className="font-mono text-xs">GDPR READY</span>
                </div>
            </div>
        </section>
    );
}
