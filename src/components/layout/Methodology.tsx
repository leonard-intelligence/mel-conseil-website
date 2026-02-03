import { TechCard } from "../ui/TechCard";

export function Methodology() {
    return (
        <section id="section-methodology" className="py-24 bg-black" aria-labelledby="methodology-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="reveal-up">
                        <div className="absolute -inset-4 bg-[#E67E22]/10 blur-3xl -z-10 rounded-full opacity-50" aria-hidden="true" />
                        <span className="text-[#E67E22] font-mono text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#E67E22] rounded-full animate-pulse"></span>
                            Approche Sur-Mesure
                        </span>
                        <h2 id="methodology-heading" className="text-4xl font-medium font-mono text-white relative z-10">
                            Liberté <span className="text-[#E67E22]">Architecturale.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-lg text-right hidden md:block font-mono text-sm">
                        Nous choisissons la meilleure technologie pour votre besoin,<br />
                        sans dogmatisme.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">
                    {/* LEFT COLUMN: THE CORE (OPEN SOURCE) - 7 COLUMNS */}
                    <TechCard
                        className="lg:col-span-7 group relative !bg-[#121110] p-10 flex flex-col justify-between overflow-hidden"
                        style={{ "--hover-border-color": "#E67E22" } as React.CSSProperties}
                    >
                        {/* Technical Grid Background */}
                        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E67E22]/5 blur-[100px] -z-10" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="font-mono text-xs text-[#E67E22] flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-[#E67E22]"></span>
                                    SOUVERAINETÉ & CONTRÔLE
                                </div>
                            </div>

                            <h3 className="text-4xl font-mono font-medium text-white mb-8 group-hover:translate-x-2 transition-transform duration-500">
                                LE CHOIX <br />
                                <span className="text-[#E67E22]">OPEN SOURCE</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Notre Priorité</h4>
                                    <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                                        Favoriser les solutions Open Source et locales pour garantir la confidentialité totale de vos données et l'indépendance technologique.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Stack Souveraine</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Mistral 🇫🇷', 'DeepSeek', 'Qwen', 'Llama', 'Kimi'].map(t => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono hover:border-[#E67E22]/50 hover:text-white transition-colors cursor-default">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                            <span className="text-zinc-600 font-mono text-[10px]">INFRASTRUCTURE : ON-PREMISE / CLOUD PRIVÉ</span>
                            <div className="w-12 h-12 rounded-full border border-[#E67E22]/20 flex items-center justify-center group-hover:bg-[#E67E22] group-hover:text-black transition-all duration-500">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </TechCard>

                    {/* RIGHT COLUMN: THE EDGE (PROPRIETARY) - 5 COLUMNS */}
                    <TechCard
                        className="lg:col-span-5 group relative !bg-[#0A0B10] p-10 flex flex-col justify-between overflow-hidden"
                        style={{ "--hover-border-color": "#E67E22" } as React.CSSProperties}
                    >
                        {/* Orange Glow Effect (Replaces Blue) */}
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E67E22]/5 blur-[80px] -z-10" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="font-mono text-xs text-[#E67E22] flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-[#E67E22]"></span>
                                    PERFORMANCE SOTA
                                </div>
                            </div>

                            <h3 className="text-4xl font-mono font-medium text-white mb-8 group-hover:translate-x-2 transition-transform duration-500">
                                FLEXIBILITÉ <br />
                                <span className="text-[#E67E22]">PROPRIÉTAIRE</span>
                            </h3>

                            <div className="space-y-6">
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                                    Nous connectons votre infrastructure à l'élite des modèles mondiaux. Une sélection rigoureuse et agnostique pour garantir l'excellence sur chaque modalité.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                    {/* Row 1 */}
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Texte</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['Gemini 3 Pro', 'Claude 4.5', 'GPT-5.1'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Code</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['Claude 4.5', 'GPT-5.2', 'Gemini 3'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Vision</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['Gemini 3 Pro', 'GPT-5.2', 'Kimi k2.5'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Search</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['Gemini Grounding', 'GPT-5.2', 'PPL Sonar'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Image Gen</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['GPT Image 1.5', 'Flux 2 Max', 'Hunyuan 3'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Image Edit</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['ChatGPT Edit', 'Seedream 4.5', 'Hunyuan Instruct'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Row 4 */}
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Video Gen</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['Veo 3.1', 'Sora 2 Pro', 'Wan 2.5'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-white/5 pb-1">Video Edit</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {['Veo 3.1', 'Wan 2.5', 'Kling 2.6'].map(t => (
                                                <span key={t} className="px-1.5 py-0.5 bg-[#E67E22]/5 border border-[#E67E22]/10 text-zinc-300 text-[9px] font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px]">
                                <span className="w-2 h-2 rounded-full bg-[#E67E22]/40 animate-pulse"></span>
                                STATUS : INTEGRATION PREVIEW
                            </div>
                        </div>
                    </TechCard>
                </div>
            </div>
        </section>
    );
}
