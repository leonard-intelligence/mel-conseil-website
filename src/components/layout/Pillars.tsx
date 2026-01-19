import { TechCard } from "@/components/ui/TechCard";

export function Pillars() {
    return (
        <section className="pillars-section" id="solutions">
            <div className="bento-container reveal delay-200">
                <TechCard className="card-text p-8 bg-black relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="text-[10px] font-mono text-white tracking-widest leading-none">
                            /// SUR-MESURE /// OPS ///
                        </div>
                    </div>
                    <div className="card-icon text-3xl mb-6">🎯</div>
                    <h3 className="text-xl font-bold mb-4">Conçu pour votre métier</h3>
                    <p className="text-muted-foreground mb-6">Des assistants IA adaptés à vos processus : facturation, RH, juridique, support client. Pas de solution générique.</p>
                    <div className="tags flex gap-2">
                        <span className="bg-white/10 px-3 py-1 text-xs">ERP/CRM</span>
                        <span className="bg-white/10 px-3 py-1 text-xs">Slack/Teams</span>
                        <span className="bg-white/10 px-3 py-1 text-xs">API Internes</span>
                    </div>
                </TechCard>
                <div className="bento-stack flex flex-col gap-6">
                    <TechCard className="card-visual p-8 flex-1 bg-black relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                            <div className="text-[10px] font-mono text-white tracking-widest leading-none">
                                /// MULTIMODAL /// VISION ///
                            </div>
                        </div>
                        <div className="card-icon text-3xl mb-6">👁️</div>
                        <h3 className="text-xl font-bold mb-4">Texte, Image, Audio, Vidéo</h3>
                        <p className="text-muted-foreground">Automatisez tous vos flux : documents, visuels, enregistrements, vidéos. Une seule équipe, toutes les modalités.</p>
                    </TechCard>
                    <TechCard className="card-auto p-8 border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-50 transition-opacity">
                            <div className="text-[10px] font-mono text-emerald-400 tracking-widest leading-none">
                                /// SECURE /// SOUVERAIN ///
                            </div>
                        </div>
                        <div className="card-icon text-3xl mb-6">🇪🇺</div>
                        <h3 className="text-xl font-bold mb-4 text-emerald-400">Vos données restent chez vous</h3>
                        <p className="text-emerald-500/80">Déploiement sur <strong className="text-emerald-400">vos serveurs</strong> ou <strong className="text-emerald-400">cloud européen</strong> dédié. Zéro transfert vers l'étranger.</p>
                    </TechCard>
                </div>
            </div>

            {/* SOVEREIGN IMPACT FLOAT */}
            <div className="services-float reveal mt-24 px-10">
                <div className="float-tags left flex flex-col gap-4">
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper orange w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">📉</div>
                        <span className="text-sm">−40% Temps Administratif</span>
                    </div>
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper green w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">🔒</div>
                        <span className="text-sm">100% Données Privées</span>
                    </div>
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper blue w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">⚡️</div>
                        <span className="text-sm">Valeur en 4 Semaines</span>
                    </div>
                </div>
                <div className="float-intro text-center">
                    <span className="intro-label block text-xs opacity-40 mb-4">— Pourquoi nous ?</span>
                    <h2 className="text-3xl font-bold leading-tight">
                        Du conseil à <span className="highlight text-white">l'industrialisation</span>,<br />
                        on vous accompagne.<br />
                        <span className="faded text-sm opacity-40 mt-4 block">Expertise. Souveraineté. Résultats mesurables.</span>
                    </h2>
                </div>
                <div className="float-tags right flex flex-col gap-4">
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper purple w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">🏰</div>
                        <span className="text-sm">On-Premises</span>
                    </div>
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper pink w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">👁️</div>
                        <span className="text-sm">Multimodal</span>
                    </div>
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper yellow w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">⚖️</div>
                        <span className="text-sm">Traçabilité Complète</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
