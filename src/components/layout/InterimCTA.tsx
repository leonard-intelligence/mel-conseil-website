import { DotIcon, leonardIcons } from "@/components/ui/LeonardIcons";

export function InterimCTA() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-mono text-white mb-8">
                    Prêt à déployer votre IA souveraine ?
                </h3>
                <div className="flex justify-center">
                    <a
                        href="#section-contact"
                        className="group relative px-8 py-4 bg-[#E67E22] text-white font-mono font-semibold uppercase text-sm tracking-wider hover:bg-white hover:text-[#E67E22] transition-colors duration-300 flex items-center gap-3"
                    >
                        <span>Demander un audit</span>
                        <div className="group-hover:translate-x-1 transition-transform">
                            <DotIcon icon={leonardIcons.arrowRight} size={16} fillColor="currentColor" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
