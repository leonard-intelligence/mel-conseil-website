import { TechCard } from "../ui/TechCard";

export function Methodology() {
    // Branded methodology like Artefact's "GenAI Factory" - positions us as industrialization experts
    const steps = [
        {
            num: "01",
            title: "Diagnostic & Conformité",
            desc: "On évalue vos besoins, vos données et votre niveau de risque AI Act. Vous repartez avec un plan d'action clair.",
            duration: "1-2 semaines",
        },
        {
            num: "02",
            title: "Prototype Rapide",
            desc: "Un premier assistant IA fonctionnel, déployé sur votre infrastructure. Vous validez la valeur avant d'aller plus loin.",
            duration: "2-4 semaines",
        },
        {
            num: "03",
            title: "Mise en Production",
            desc: "Connexion à vos outils existants (ERP, CRM, emails). Tests de sécurité et montée en charge.",
            duration: "1-3 mois",
            tag: "SCALE"
        },
        {
            num: "04",
            title: "Évolution & Autonomie",
            desc: "On forme vos équipes, on optimise les performances. Vous gagnez en autonomie, on reste disponible.",
            duration: "Continu",
        }
    ];

    return (
        <section id="section-methodology" className="method-section methodology py-24 bg-black border-b border-white/10 reveal" aria-labelledby="methodology-heading">
            <div className="max-w-7xl mx-auto px-6 methodology__container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 methodology__header">
                    <div>
                        <div className="absolute -inset-4 bg-blue-500/10 blur-3xl -z-10 rounded-full opacity-50" aria-hidden="true" />
                        {/* Branded methodology name like Artefact's GenAI Factory */}
                        <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Notre Approche
                        </span>
                        <h2 id="methodology-heading" className="text-4xl font-bold font-display text-white relative z-10 methodology__heading">
                            Du conseil au <span className="text-white">déploiement</span>.
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-right hidden md:block">
                        Un accompagnement structuré pour <strong className="text-white">réduire les risques</strong>,<br />
                        garantir la <strong className="text-emerald-400">conformité réglementaire</strong> et livrer de la valeur rapidement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative methodology__steps">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/10 -z-10 translate-y-1/2" />

                    {steps.map((step, i) => (
                        <TechCard key={i} className="bg-black p-6 group transition-transform duration-500 relative">
                            <div className="flex items-center justify-between mb-8">
                                <span className={`font-mono text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity ${i === 0 ? 'text-orange-500' :
                                    i === 1 ? 'text-blue-500' :
                                        i === 2 ? 'text-purple-500' : 'text-green-500'
                                    }`}>{step.num}</span>
                                <span className="text-xs font-mono border border-white/10 px-2 py-1 rounded text-gray-500 group-hover:text-white transition-colors">{step.duration}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </TechCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
