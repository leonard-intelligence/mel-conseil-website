import { TechCard } from "@/components/ui/TechCard";

export function Solutions() {
    return (
        <section className="solutions-section">
            <div className="section-header centered">
                <h2>L'IA au service de vos équipes</h2>
                <p className="subtitle">Des gains mesurables, département par département.</p>
            </div>
            <div className="solutions-grid">
                <TechCard className="bg-black p-6">
                    <div className="icon-wrapper blue mb-6 rounded-none bg-white/10 w-12 h-12 flex items-center justify-center text-2xl">💼</div>
                    <h3 className="text-xl font-bold mb-4">Équipes Commerciales</h3>
                    <ul className="space-y-3">
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Emails personnalisés</strong> : Prospection à grande échelle sans perdre en qualité.</li>
                        <li className="text-sm text-muted-foreground"><strong className="text-white">CRM enrichi</strong> : Mise à jour automatique des fiches prospects.</li>
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Qualification 24/7</strong> : Chatbot qui identifie les bons leads sur votre site.</li>
                    </ul>
                </TechCard>
                <TechCard className="bg-black p-6">
                    <div className="icon-wrapper purple mb-6 rounded-none bg-white/10 w-12 h-12 flex items-center justify-center text-2xl">🎨</div>
                    <h3 className="text-xl font-bold mb-4">Équipes Marketing</h3>
                    <ul className="space-y-3">
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Contenu à la demande</strong> : Articles, posts sociaux, visuels générés rapidement.</li>
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Ton de marque respecté</strong> : L'IA apprend votre charte éditoriale.</li>
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Veille automatique</strong> : Détection des tendances et rapports synthétiques.</li>
                    </ul>
                </TechCard>
                <TechCard className="bg-black p-6">
                    <div className="icon-wrapper green mb-6 rounded-none bg-white/10 w-12 h-12 flex items-center justify-center text-2xl">⚙️</div>
                    <h3 className="text-xl font-bold mb-4">Opérations & RH</h3>
                    <ul className="space-y-3">
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Recrutement accéléré</strong> : Tri intelligent des candidatures et parcours d'intégration.</li>
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Documents traités</strong> : Extraction automatique des données de factures et contrats.</li>
                        <li className="text-sm text-muted-foreground"><strong className="text-white">Questions internes</strong> : Chatbot qui répond sur vos procédures et politiques RH.</li>
                    </ul>
                </TechCard>
            </div>
        </section>
    );
}
