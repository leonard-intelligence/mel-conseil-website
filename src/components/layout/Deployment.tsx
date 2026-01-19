import { TechCard, TechCardImage } from "@/components/ui/TechCard";
import serverImage from "../../assets/abstract-network.png"; // Using available abstract asset
import { DeploymentIcon } from "./DeploymentIcon";
import iconShield from "../../assets/icon-shield.png";
import iconCloud from "../../assets/icon-astrolab.png"; // Using astrolab for 'complex structure/cloud' metaphor
import iconEdge from "../../assets/icon-loupe.png"; // Using loupe for 'edge/analysis' metaphor

export function Deployment() {
    return (
        <section id="section-deployment" className="deployment-section deployment py-24 bg-black border-b border-white/10 reveal" aria-labelledby="deployment-heading">
            <div className="max-w-7xl mx-auto px-6 deployment__container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch deployment__grid">
                    <div className="deployment__content flex flex-col justify-center">
                        {/* AI Act compliance badge - like Sia Partners' regulatory focus */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-brand-blue font-mono text-sm tracking-widest uppercase">Infrastructure</span>
                            <span className="text-[10px] font-mono px-2 py-1 border border-emerald-500/50 text-emerald-400 bg-emerald-500/10">
                                CONFORME AI ACT
                            </span>
                        </div>
                        <h2 id="deployment-heading" className="text-4xl md:text-5xl font-bold mb-6 font-display text-white leading-tight deployment__heading">
                            L'IA tourne <span className="text-emerald-400">chez vous</span>,<br />
                            <span className="text-white/50">pas chez un tiers.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Vos données sensibles ne doivent pas quitter votre périmètre. On déploie vos solutions IA sur <strong className="text-white">vos serveurs</strong> (on-premise) 
                            ou sur un <strong className="text-emerald-400">cloud européen certifié</strong> — conformité AI Act et RGPD garantie.
                        </p>
                        
                        {/* Compliance indicators - like Sia Partners & Ekimetrics */}
                        <div className="flex flex-wrap gap-3 mb-12">
                            <span className="text-[11px] font-mono px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400">🏛️ AI Act Ready</span>
                            <span className="text-[11px] font-mono px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400">🔒 RGPD Compliant</span>
                            <span className="text-[11px] font-mono px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400">☁️ SecNumCloud</span>
                            <span className="text-[11px] font-mono px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400">🏥 HDS Compatible</span>
                        </div>

                        <div className="space-y-4 deployment__cards">
                            <TechCard id="deployment-card-1" className="bg-white/5 p-0 !pb-0 transition-colors cursor-default group deployment__card">
                                <div className="flex items-stretch h-32">
                                    <div className="w-32 h-full shrink-0 border-r border-white/10">
                                        <DeploymentIcon
                                            src={iconShield}
                                            alt="On-Premise Icon"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <h4 className="text-white font-bold font-mono text-lg mb-1 group-hover:text-brand-blue transition-colors">Sur vos serveurs</h4>
                                        <p className="text-sm text-gray-400">Installation locale, totalement isolée. Aucune connexion externe requise.</p>
                                    </div>
                                </div>
                            </TechCard>

                            <TechCard id="deployment-card-2" className="bg-white/5 p-0 !pb-0 transition-colors cursor-default group deployment__card">
                                <div className="flex items-stretch h-32">
                                    <div className="w-32 h-full shrink-0 border-r border-white/10">
                                        <DeploymentIcon
                                            src={iconCloud}
                                            alt="Private Cloud Icon"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <h4 className="text-white font-bold font-mono text-lg mb-1 group-hover:text-brand-blue transition-colors">Cloud privé européen</h4>
                                        <p className="text-sm text-gray-400">Infrastructure dédiée chez OVH, NumSpot ou Outscale (certifié SecNumCloud).</p>
                                    </div>
                                </div>
                            </TechCard>

                            <TechCard id="deployment-card-3" className="bg-white/5 p-0 !pb-0 transition-colors cursor-default group deployment__card">
                                <div className="flex items-stretch h-32">
                                    <div className="w-32 h-full shrink-0 border-r border-white/10">
                                        <DeploymentIcon
                                            src={iconEdge}
                                            alt="Edge AI Icon"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <h4 className="text-white font-bold font-mono text-lg mb-1 group-hover:text-brand-blue transition-colors">IA embarquée</h4>
                                        <p className="text-sm text-gray-400">Modèles légers sur postes de travail, tablettes ou équipements terrain.</p>
                                    </div>
                                </div>
                            </TechCard>
                        </div>
                    </div>

                    <div className="deployment__visual hidden lg:block h-full min-h-[500px]">
                        <TechCard className="h-full border-none p-0 overflow-hidden" showMarkers={false}>
                            <TechCardImage
                                src={serverImage}
                                alt="Server Rack"
                                layout="full"
                                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 h-full w-full"
                            />
                            {/* Overlay UI elements to make it look 'tech' */}
                            <div id="deployment-panel" className="absolute top-10 left-10 right-10 tech-panel p-6 deployment__panel bg-black/80 backdrop-blur-md border border-white/10 max-w-xs ml-auto mr-auto lg:mr-0 lg:ml-10">
                                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                                    <span className="font-mono text-xs text-green-400">● SYSTEM ONLINE</span>
                                    <span className="font-mono text-xs text-gray-500">UNK-800 X1</span>
                                </div>
                                <div className="space-y-2 font-mono text-xs text-gray-300">
                                    <div className="flex justify-between"><span>GPU_LOAD</span><span>[||||||||||--] 84%</span></div>
                                    <div className="flex justify-between"><span>MEM_USAGE</span><span>[||||||-----] 42%</span></div>
                                    <div className="flex justify-between"><span>TEMP</span><span>62°C</span></div>
                                </div>
                            </div>
                        </TechCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
