import { useState } from "react";
import { TechCard, TechCardImage } from "../ui/TechCard";
import { CATALOGUE } from "../../data/catalogue";

// Map some default images for categories if they don't have specifics
// For now we'll adhere to a simple logic or random allocation to avoid broken images
const DEFAULT_IMAGES = [
    'assets/illu-1.png', 'assets/illu-2.png', 'assets/illu-3.png', 'assets/illu-4.png', 'assets/illu-5.png'
];

export function UseCaseGrid() {
    const [activeTabId, setActiveTabId] = useState(CATALOGUE[0].id);

    const activeCategory = CATALOGUE.find(c => c.id === activeTabId) || CATALOGUE[0];

    return (
        <section className="catalogue-section py-24 bg-black reveal delay-200 border-b border-white/10">
            <div className="section-header centered mb-12 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 font-mono">CATALOGUE STRATÉGIQUE</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Nos solutions IA souveraines classées par domaines d'application.
                </p>
            </div>

            {/* Scrollable Tabs */}
            <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md border-y border-white/10 mb-12">
                <div className="flex overflow-x-auto py-4 px-6 gap-2 no-scrollbar max-w-7xl mx-auto" style={{ scrollbarWidth: 'none' }}>
                    {CATALOGUE.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTabId(cat.id)}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 font-mono text-xs uppercase tracking-wider border
                                ${activeTabId === cat.id
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'}
                            `}
                        >
                            <span className="text-base">{cat.emoji}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Content */}
            <div className="max-w-7xl mx-auto px-6 min-h-[500px]">
                <div key={activeTabId} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="mb-8 p-6 border border-white/10 bg-white/5 rounded-lg border-l-4 border-l-brand-blue">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">{activeCategory.emoji}</span>
                            <h3 className="text-2xl font-bold font-mono text-white">{activeCategory.label}</h3>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base pl-12">{activeCategory.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeCategory.items.map((item, index) => (
                            <TechCard key={index} className="flex flex-col h-full group">
                                <div className="h-40 overflow-hidden relative border-b border-white/10 bg-gray-900/50">
                                    {/* 
                                        Since we don't have specific images for every 64 items, 
                                        we'll use a placeholder pattern or the TechCardImage with a generic asset.
                                        We can rotate the default images based on index.
                                     */}
                                    <TechCardImage
                                        src={DEFAULT_IMAGES[index % DEFAULT_IMAGES.length]}
                                        alt={item.title}
                                        layout="full"
                                        className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-lg font-bold mb-3 font-mono text-white group-hover:text-brand-blue transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                                        {item.description}
                                    </p>
                                </div>
                            </TechCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
