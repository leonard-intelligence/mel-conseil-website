import { DotIcon, leonardIcons } from "@/components/ui/LeonardIcons";
import { TechIllustration } from "@/components/ui/TechIllustration";
import { cn } from "@/lib/utils";
import { ServerVaultDemo } from "./ServerVaultDemo";
import { ModelNetworkDemo } from "./ModelNetworkDemo";
import sovereigntyBg from "@/assets/images/illustrations/illustration-infra-dark-side.webp";
import performanceBg from "@/assets/images/illustrations/illustration-tech-blade-runner.webp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MODEL_DATA = {
    sovereign: {
        badge: "INFRASTRUCTURE SOUVERAINE",
        title: "Vos données",
        highlight: "ne sortent jamais.",
        description: "Modèles Open Source déployés sur votre infra, en cloud privé européen, ou selon vos normes de conformité. Vos données, votre périmètre.",
        categories: [
            { title: "LLM", icon: leonardIcons.languageProcess, models: ['Qwen 3', 'Mistral Large 3 🇫🇷', 'MiniMax M1', 'GPT-OSS'] },
            { title: "Code", icon: leonardIcons.architectureAgnostique, models: ['Kimi k2.5 Think', 'GLM 4.7', 'MiniMax M2.1', 'DeepSeek V3.2 Think', 'Qwen 3 Coder'] },
            { title: "Vision", icon: leonardIcons.computerVision, models: ['Nvila 15B', 'Qwen 3 VL', 'Mistral Small 3 🇫🇷'] },
            { title: "Image Gen", icon: leonardIcons.imageGeneration, models: ['Flux 2 Klein', 'Qwen Image 2.5', 'SD 3.5 Large', 'GLM Image'] },
            { title: "Image Edit", icon: leonardIcons.productionAutomatisee, models: ['Qwen Edit 2.5', 'Flux 2 Klein'] },
            { title: "Video Gen", icon: leonardIcons.videoIntelligence, models: ['Wan 2.2', 'Mochi v1', 'LTX 2'] }
        ]
    },
    performance: {
        badge: "PERFORMANCE MAXIMALE",
        title: "Le meilleur modèle",
        highlight: "pour chaque tâche.",
        description: "Accès à tous les modèles frontier du marché. On sélectionne et intègre celui qui correspond à votre cas d'usage. Aucune dépendance fournisseur.",
        categories: [
            { title: "LLM", icon: leonardIcons.languageProcess, models: ['Gemini 3 Pro', 'Claude 4.5', 'GPT-5.1'] },
            { title: "Code", icon: leonardIcons.architectureAgnostique, models: ['Claude 4.5', 'GPT-5.2', 'Gemini 3'] },
            { title: "Vision", icon: leonardIcons.computerVision, models: ['Gemini 3 Pro', 'GPT-5.2', 'Kimi k2.5'] },
            { title: "Image Gen", icon: leonardIcons.imageGeneration, models: ['GPT Image 1.5', 'Flux 2 Max', 'Hunyuan 3'] },
            { title: "Image Edit", icon: leonardIcons.productionAutomatisee, models: ['ChatGPT Edit', 'Seedream 4.5', 'Hunyuan Instruct'] },
            { title: "Video Gen", icon: leonardIcons.videoIntelligence, models: ['Veo 3.1', 'Sora 2 Pro', 'Kling 3.0', 'Runway gen 4.5'] }
        ]
    }
};


export function Methodology() {
    const [activeTab, setActiveTab] = useState<'sovereign' | 'performance'>('sovereign');

    return (
        <section id="section-methodology" className="py-24 bg-black" aria-labelledby="methodology-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col mb-16">
                    <div className="reveal-up mb-12">
                        <div className="absolute -inset-4 bg-[#E67E22]/10 blur-3xl -z-10 rounded-full opacity-50" aria-hidden="true" />
                        <span className="text-[#E67E22] text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#E67E22] rounded-full animate-pulse"></span>
                            Approche Sur-Mesure
                        </span>
                        <h2 id="methodology-heading" className="text-4xl md:text-5xl font-medium font-mono text-white relative z-10 uppercase mb-4">
                            De l'audit au déploiement. <br className="hidden md:block" />
                            <span className="text-zinc-400">En 8 semaines.</span>
                        </h2>
                        <p className="text-zinc-400 font-mono text-sm">
                            Souverain par défaut. Open-source en priorité.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) with Flow Arrows */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-10 z-0 pointer-events-none">
                            {/* Line */}
                            <div className="absolute top-1/2 left-[16%] right-[16%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#E67E22]/20 via-[#E67E22]/50 to-[#E67E22]/20"></div>

                            {/* Arrow 1 (Between 1 & 2) */}
                            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 bg-black px-3">
                                <DotIcon icon={leonardIcons.arrowRight || "arrow-right"} size={20} fillColor="#E67E22" />
                            </div>

                            {/* Arrow 2 (Between 2 & 3) */}
                            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 bg-black px-3">
                                <DotIcon icon={leonardIcons.arrowRight || "arrow-right"} size={20} fillColor="#E67E22" />
                            </div>
                        </div>

                        {/* STEP 1 */}
                        <div className="group relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-[#121110] border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-[#E67E22]/50 group-hover:bg-[#121110] transition-all duration-500 relative">
                                <div className="absolute inset-0 bg-[#E67E22]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                                <DotIcon icon={leonardIcons.search} size={32} fillColor="#E67E22" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1A1918] border border-white/10 flex items-center justify-center text-[#E67E22] font-mono text-sm font-bold shadow-lg shadow-black/50">1</div>
                            </div>
                            <h3 className="text-xl font-mono text-white uppercase mb-2 group-hover:text-[#E67E22] transition-colors">AUDIT</h3>
                            <span className="text-[#E67E22] text-xs font-mono mb-3 py-1 px-2 bg-[#E67E22]/10 rounded border border-[#E67E22]/20">Semaine 1-2</span>
                            <p className="text-zinc-400 text-sm max-w-[240px]">On identifie vos cas d'usage à fort ROI. Vous voyez les <span className="text-white">premiers résultats</span>.</p>
                        </div>

                        {/* STEP 2 */}
                        <div className="group relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-[#121110] border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-[#E67E22]/50 group-hover:bg-[#121110] transition-all duration-500 relative">
                                <div className="absolute inset-0 bg-[#E67E22]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                                <DotIcon icon={leonardIcons.workflows} size={32} fillColor="#E67E22" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1A1918] border border-white/10 flex items-center justify-center text-[#E67E22] font-mono text-sm font-bold shadow-lg shadow-black/50">2</div>
                            </div>
                            <h3 className="text-xl font-mono text-white uppercase mb-2 group-hover:text-[#E67E22] transition-colors">Prototype fonctionnel</h3>
                            <span className="text-[#E67E22] text-xs font-mono mb-3 py-1 px-2 bg-[#E67E22]/10 rounded border border-[#E67E22]/20">Semaine 3-5</span>
                            <p className="text-zinc-400 text-sm max-w-[240px]">Un agent fonctionnel, sur vos données, <span className="text-white">intégré à vos outils</span>.</p>
                        </div>

                        {/* STEP 3 */}
                        <div className="group relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-[#121110] border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-[#E67E22]/50 group-hover:bg-[#121110] transition-all duration-500 relative">
                                <div className="absolute inset-0 bg-[#E67E22]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                                <DotIcon icon={leonardIcons.building} size={32} fillColor="#E67E22" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1A1918] border border-white/10 flex items-center justify-center text-[#E67E22] font-mono text-sm font-bold shadow-lg shadow-black/50">3</div>
                            </div>
                            <h3 className="text-xl font-mono text-white uppercase mb-2 group-hover:text-[#E67E22] transition-colors">Production</h3>
                            <span className="text-[#E67E22] text-xs font-mono mb-3 py-1 px-2 bg-[#E67E22]/10 rounded border border-[#E67E22]/20">Semaine 6-8</span>
                            <p className="text-zinc-400 text-sm max-w-[240px]">Déploiement, formation des équipes, <span className="text-white">monitoring</span>.</p>
                        </div>
                    </div>
                </div>


                {/* TAB CONTROLLER (inline) */}
                <div className="mt-16 flex items-center justify-center mb-6">
                    <div className="bg-[#121110]/80 backdrop-blur-md border border-white/10 rounded-full p-1 flex gap-1">
                        <button
                            onClick={() => setActiveTab('sovereign')}
                            className={cn(
                                "px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
                                activeTab === 'sovereign'
                                    ? "bg-[#E67E22] text-black font-bold shadow-[0_0_20px_rgba(230,126,34,0.3)]"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <span className={cn("w-1.5 h-1.5 rounded-full bg-current", activeTab === 'sovereign' ? "animate-pulse" : "")} />
                            Infra Souveraine
                        </button>
                        <button
                            onClick={() => setActiveTab('performance')}
                            className={cn(
                                "px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
                                activeTab === 'performance'
                                    ? "bg-[#3B82F6] text-black font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <span className={cn("w-1.5 h-1.5 rounded-full bg-current", activeTab === 'performance' ? "animate-pulse" : "")} />
                            Modèles Frontier
                        </button>
                    </div>
                </div>

                <div className="border border-white/10 overflow-hidden relative">
                    {/* DYNAMIC CONTENT AREA */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="border-b border-white/10 relative"
                        >

                        {/* 1. HERO SECTION (DYNAMIC) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[420px]">

                            {/* CONTENT SIDE */}
                            <div className="lg:col-span-7 relative border-r border-white/10 bg-[#121110]/20 p-12 flex flex-col justify-center group overflow-hidden">
                                <div className="absolute inset-0 z-0">
                                    <div className={cn("absolute inset-0 transition-opacity duration-700", activeTab === 'sovereign' ? "opacity-100" : "opacity-0 ")}>
                                        <TechIllustration
                                            src={sovereigntyBg}
                                            alt=""
                                            className="w-full h-full"
                                            overlayGradient="bg-gradient-to-r from-[#121110] via-[#121110]/80 to-transparent"
                                            imageClassName="opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                            aspectRatio=""
                                        />
                                    </div>
                                    <div className={cn("absolute inset-0 transition-opacity duration-700", activeTab === 'performance' ? "opacity-100" : "opacity-0")}>
                                        <TechIllustration
                                            src={performanceBg}
                                            alt=""
                                            className="w-full h-full"
                                            overlayGradient="bg-gradient-to-r from-[#121110] via-[#121110]/80 to-transparent"
                                            imageClassName="opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                            aspectRatio=""
                                        />
                                    </div>
                                </div>

                                <div className="relative z-10 w-full">
                                    <div className="font-mono text-sm flex items-center gap-4 mb-6 text-[#E67E22]">
                                        <span className="w-8 h-[1px] bg-current" />
                                        {MODEL_DATA[activeTab].badge}
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-mono font-medium text-white max-w-2xl leading-tight uppercase tracking-tight mb-8">
                                        {MODEL_DATA[activeTab].title} <br />
                                        <span className="text-[#E67E22]">
                                            {MODEL_DATA[activeTab].highlight}
                                        </span>
                                    </h3>

                                    <p className="text-zinc-400 font-mono text-sm max-w-lg leading-relaxed">
                                        {MODEL_DATA[activeTab].description}
                                    </p>
                                </div>
                            </div>

                            {/* DEMO SIDE */}
                            <div className="lg:col-span-5 bg-[#1A1918] flex items-center justify-center relative overflow-hidden group min-h-[250px] lg:min-h-[300px]">
                                {activeTab === 'sovereign' ? <ServerVaultDemo /> : <ModelNetworkDemo />}
                            </div>
                        </div>

                        {/* 2. GRID SECTION (DYNAMIC) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-white/10 bg-black/50">
                            {MODEL_DATA[activeTab].categories.map((card, i) => (
                                <div
                                    key={`${activeTab}-${i}`}
                                    className={cn(
                                        "group/card relative flex flex-col p-4 lg:p-6 hover:bg-white/5 transition-all duration-300",
                                        activeTab === 'sovereign' ? "border-l-2 border-l-[#E67E22]/20" : "border-l-2 border-l-[#3B82F6]/20",
                                        i % 6 !== 5 ? "lg:border-r border-r-white/5" : "",
                                        i % 2 !== 1 ? "border-r border-r-white/5 md:border-r" : "",
                                        i > 1 ? "border-t border-t-white/5 md:border-t-0" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded mb-4 flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110",
                                        activeTab === 'sovereign' ? "text-[#E67E22] bg-[#E67E22]/10" : "text-[#3B82F6] bg-[#3B82F6]/10"
                                    )}>
                                        <DotIcon icon={card.icon} size={16} fillColor={activeTab === 'sovereign' ? "#E67E22" : "#3B82F6"} />
                                    </div>
                                    <h4 className={cn(
                                        "font-mono text-xs uppercase tracking-wider mb-3 transition-colors",
                                        activeTab === 'sovereign' ? "text-zinc-300 group-hover/card:text-[#E67E22]" : "text-zinc-300 group-hover/card:text-[#3B82F6]"
                                    )}>
                                        {card.title}
                                    </h4>
                                    <div className="flex flex-col gap-1.5">
                                        {card.models.map(m => (
                                            <span key={m} className="text-[10px] font-mono text-zinc-400 hover:text-zinc-300 transition-colors cursor-default whitespace-nowrap truncate">
                                                {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
