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
                    <h3 className="text-xl font-bold mb-4">Sur-Mesure "Métier"</h3>
                    <p className="text-muted-foreground mb-6">Pas de gadget. Des copilotes et agents alignés sur vos process réels (Factures, RH, Juridique, Support).</p>
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
                        <h3 className="text-xl font-bold mb-4">Multimodal Natif</h3>
                        <p className="text-muted-foreground">Texte, Image, Audio, Vidéo. Une IA qui voit, écoute et analyse tout.</p>
                    </TechCard>
                    <TechCard className="card-auto p-8 border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-50 transition-opacity">
                            <div className="text-[10px] font-mono text-emerald-400 tracking-widest leading-none">
                                /// SECURE /// SOUVERAIN ///
                            </div>
                        </div>
                        <div className="card-icon text-3xl mb-6">🇪🇺</div>
                        <h3 className="text-xl font-bold mb-4 text-emerald-400">Souveraineté Totale</h3>
                        <p className="text-emerald-500/80">Déploiement <strong className="text-emerald-400">Local</strong> ou <strong className="text-emerald-400">Cloud UE</strong> dédié. Vos données ne fuitent jamais.</p>
                    </TechCard>
                </div>
            </div>

            {/* SOVEREIGN IMPACT FLOAT */}
            <div className="services-float reveal mt-24 px-10">
                <div className="float-tags left flex flex-col gap-4">
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper orange w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">📉</div>
                        <span className="text-sm">-40% Temps Admin</span>
                    </div>
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper green w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">🔒</div>
                        <span className="text-sm">100% Privé</span>
                    </div>
                    <div className="tag-pill bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="tag-icon-wrapper blue w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">⚡️</div>
                        <span className="text-sm">Time-to-Value</span>
                    </div>
                </div>
                <div className="float-intro text-center">
                    <span className="intro-label block text-xs opacity-40 mb-4">— Pourquoi nous ?</span>
                    <h2 className="text-3xl font-bold leading-tight">
                        L'IA qui délivre du <span className="highlight text-white">résultat</span>,<br />
                        pas juste du rêve.<br />
                        <span className="faded text-sm opacity-40 mt-4 block">Transparence. Souveraineté. Performance.</span>
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
                        <span className="text-sm">Audit Logs</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
