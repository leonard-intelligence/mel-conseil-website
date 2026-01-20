import { ArrowUpRight, Eye, Video, ScanFace } from 'lucide-react';
import { TechIllustration } from "@/components/ui/TechIllustration";

export function SectionVision() {
    return (
        <section id="section-expertise-vision" className="sections-container expertise expertise--vision border-y border-border bg-black" aria-labelledby="expertise-vision-heading">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] expertise__grid">

                {/* LEFT COLUMN: Main Visual - Spans 8 cols */}
                <div className="lg:col-span-8 border-r border-border relative p-12 flex flex-col justify-between overflow-hidden expertise__main">

                    {/* Header Area */}
                    <div className="relative z-10 mb-12 expertise__header">
                        <div className="text-blue-500 font-mono mb-2 text-lg expertise__number expertise__number--01">01 Vision.</div>
                        <h2 id="expertise-vision-heading" className="text-4xl md:text-5xl font-mono text-white max-w-4xl leading-tight expertise__heading">
                            Donnez des yeux à vos datas.<br />
                            <span className="text-muted-foreground expertise__heading-sub">Analyse visuelle souveraine en temps réel.</span>
                        </h2>
                    </div>

                    {/* Central Image Area */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center expertise__background">
                        <TechIllustration
                            src="/assets/vision_background.png"
                            alt="Vision AI Background"
                            className="absolute inset-0 w-full h-full"
                            aspectRatio=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Left Card */}
                    <div className="mt-auto relative z-10 expertise__card-wrapper">
                        <div id="expertise-vision-card" className="max-w-lg tech-panel p-6 group expertise__card">
                            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3 expertise__card-header">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="font-mono text-xs text-blue-400 tracking-widest">LIVE STREAM</span>
                                </div>
                                <span className="font-mono text-xs text-zinc-500 expertise__card-badge">MISTRAL LARGE 3 / MINISTRAL 3</span>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl text-white font-mono expertise__card-title">Vision Open Source / Local</h3>
                                <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-muted-foreground border border-white/10 px-2 py-1 rounded expertise__card-meta">
                                    <Eye className="w-3 h-3" /> Suivi d'objets
                                </div>
                            </div>

                            <p className="text-zinc-400 text-sm font-mono leading-relaxed mb-6 expertise__card-description">
                                Modèles de vision open source déployés sur votre infrastructure. Détection d'anomalies, suivi de stocks et conformité sécurité sans fuite de données.
                            </p>

                            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-500 bg-white/5 p-3 rounded border border-white/5 expertise__card-stats">
                                <div className="flex justify-between"><span>FPS</span><span className="text-white">60+</span></div>
                                <div className="flex justify-between"><span>LATENCE</span><span className="text-blue-400">&lt;50ms</span></div>
                                <div className="flex justify-between"><span>DONNÉES</span><span className="text-green-400">LOCALES</span></div>
                                <div className="flex justify-between"><span>STATUT</span><span className="text-green-400">ACTIF</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: List / Descriptions - Spans 4 cols */}
                <div className="lg:col-span-4 flex flex-col expertise__sidebar">

                    {/* Top Description Block */}
                    <div className="p-12 border-b border-border bg-zinc-900/20 relative overflow-hidden group expertise__description">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none expertise__watermark">
                            <div className="text-[10px] font-mono text-white tracking-widest leading-none">
                                /// VISION /// DETECTION ///
                            </div>
                        </div>
                        <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-8 expertise__text">
                            Détection, segmentation et suivi d'objets en temps réel sur vos données visuelles.<br />Des modèles multimodaux qui comprennent le contexte et déployés localement pour garantir la confidentialité de vos images.
                        </p>
                        <button id="expertise-vision-cta" className="bg-white text-black font-mono font-bold uppercase px-6 py-3 text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors w-full justify-center expertise__cta">
                            Voir les cas d'usage <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Research Items List */}
                    <div className="flex-1 flex flex-col expertise__items">
                        <div id="expertise-vision-item-1" className="flex-1 border-b border-border p-8 group hover:bg-white/5 transition-colors cursor-pointer relative expertise__item">
                            <ArrowUpRight className="absolute top-8 right-8 text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-8 h-8 bg-black tech-strips border border-white/10 flex items-center justify-center mb-4 text-white expertise__item-icon">
                                <ScanFace className="w-4 h-4" />
                            </div>
                            <h3 className="text-white font-mono text-lg mb-2 expertise__item-title">Industrie & Qualité</h3>
                            <p className="text-muted-foreground text-sm font-mono expertise__item-description">Détection de défauts sur lignes de production, comptage de stocks et conformité sécurité (EPI).</p>
                        </div>

                        <div id="expertise-vision-item-2" className="flex-1 border-b border-border p-8 group hover:bg-white/5 transition-colors cursor-pointer relative expertise__item">
                            <ArrowUpRight className="absolute top-8 right-8 text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-8 h-8 bg-black tech-strips border border-white/10 flex items-center justify-center mb-4 text-white expertise__item-icon">
                                <Video className="w-4 h-4" />
                            </div>
                            <h3 className="text-white font-mono text-lg mb-2 expertise__item-title">Retail & Espaces</h3>
                            <p className="text-muted-foreground text-sm font-mono expertise__item-description">Analyse de fréquentation, parcours client et optimisation des espaces de vente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
