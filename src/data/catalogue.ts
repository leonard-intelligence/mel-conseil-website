export interface CatalogueItem {
    title: string;
    description: string;
}

export interface CatalogueCategory {
    id: string;
    label: string;
    emoji: string;
    description: string;
    items: CatalogueItem[];
}

export const CATALOGUE: CatalogueCategory[] = [
    {
        id: 'strategy',
        label: 'Stratégie, Gouvernance & Conformité',
        emoji: '🏛️',
        // Keywords: Sia Partners (AI Act, Compliance), Onepoint (Sovereignty), Ekimetrics (CSRD/Green)
        description: 'Cadrage stratégique, conformité AI Act et gouvernance Data — les fondations pour réussir vos projets IA en toute sécurité. De l\'audit de vos systèmes existants à la mise en conformité réglementaire, nous posons les bases d\'une IA responsable et pérenne.',
        items: [
            { title: 'Audit AI Act', description: 'On identifie vos systèmes IA, on évalue les risques et on vous donne un plan pour être conforme avant l\'échéance.' },
            { title: 'Gouvernance des Données', description: 'Qui accède à quoi, comment les données circulent : on structure tout pour éviter les failles.' },
            { title: 'Charte IA & Formation', description: 'Règles d\'usage claires pour vos équipes + formations pour monter en compétences rapidement.' },
            { title: 'Reporting RSE Automatisé', description: 'Collecte et consolidation automatique de vos données ESG pour vos rapports extra-financiers.' },
            { title: 'Déploiement Souverain', description: 'On installe les modèles IA (Mistral, Llama...) directement sur vos serveurs ou cloud européen.' },
            { title: 'Infrastructure IA', description: 'On dimensionne vos serveurs GPU et on met en place les outils pour gérer vos modèles en production.' },
            { title: 'IA Adaptée à Votre Métier', description: 'On entraîne des modèles compacts qui comprennent le vocabulaire et les règles de votre secteur.' },
            { title: 'Détection des Biais', description: 'On vérifie que vos algorithmes RH, crédit ou assurance ne discriminent pas, avec des rapports clairs.' }
        ]
    },
    {
        id: 'knowledge',
        label: 'Base de Connaissances IA',
        emoji: '🧠',
        // Keywords: Illuin (NLP/Search), Artefact (Adoption), proprietary platform emphasis
        description: 'Transformez vos documents en un assistant intelligent qui répond instantanément. Posez vos questions en langage naturel, obtenez des réponses sourcées et vérifiables — fini les heures perdues à chercher l\'information.',
        items: [
            { title: 'Recherche Intelligente', description: 'Trouvez l\'info en tapant une question, pas des mots-clés. Fonctionne sur Sharepoint, Confluence, serveurs de fichiers.' },
            { title: 'Assistant Technicien', description: 'Les procédures et fiches techniques accessibles en une question. Réponse en moins de 2 secondes.' },
            { title: 'Support Augmenté', description: 'Les tickets passés alimentent une base qui aide le support à résoudre plus vite.' },
            { title: 'Chatbot Client', description: 'Répond 24/7 aux questions fréquentes et transfère à un humain quand c\'est nécessaire.' },
            { title: 'FAQ Automatique', description: 'Une base de connaissances qui se met à jour seule à partir des questions réellement posées.' },
            { title: 'Aide Appels d\'Offres', description: 'Génère des réponses structurées en s\'appuyant sur vos références passées et le cahier des charges.' },
            { title: 'Quiz Formation', description: 'Crée automatiquement des tests de connaissances à partir de vos supports (PDF, vidéos, présentations).' }
        ]
    },
    {
        id: 'documents',
        label: 'Traitement de Documents',
        emoji: '📄',
        // Keywords: Illuin (NLP, VLM), Artefact (automation), technical depth
        description: 'Convertissez vos PDF, scans et emails en données structurées et exploitables. L\'IA lit, analyse et génère des synthèses pertinentes — libérez vos équipes des tâches répétitives de saisie et de classement.',
        items: [
            { title: 'Lecture Intelligente', description: 'L\'IA lit vos documents complexes (factures, formulaires) et en extrait les données structurées automatiquement.' },
            { title: 'Tri Automatique', description: 'Emails, courriers, pièces jointes : tout est classé et envoyé au bon endroit avec plus de 95% de précision.' },
            { title: 'Analyse de Contrats', description: 'Détection des clauses importantes, des risques et des échéances. Des heures de lecture en quelques minutes.' },
            { title: 'Comparaison de Versions', description: 'Identifie les changements de sens entre deux versions d\'un document, pas juste les mots modifiés.' },
            { title: 'Traitement Factures', description: 'Lecture, vérification des données (TVA, SIRET), rapprochement commandes et export comptable automatique.' },
            { title: 'Relances Intelligentes', description: 'Analyse le risque de chaque client et personnalise les relances pour améliorer vos délais de paiement.' },
            { title: 'Analyse de CV', description: 'Évalue les candidatures sur des critères objectifs, sans biais, en respectant la réglementation AI Act.' },
            { title: 'Vérification de Dossiers', description: 'Contrôle automatique que toutes les pièces requises sont présentes et valides (onboarding, conformité KYC).' }
        ]
    },
    {
        id: 'automation',
        label: 'Agents IA & Automatisation',
        emoji: '🤖',
        // Keywords: Artefact (GenAI Factory, Agents), Onepoint (Architecture), Illuin (Products)
        description: 'Des assistants IA qui agissent pour vous — ils orchestrent, exécutent et enchaînent des tâches complexes en autonomie, sous votre supervision. Plus qu\'un outil, un collaborateur numérique disponible 24/7.',
        items: [
            { title: 'Qualité des Données', description: 'Un agent qui surveille vos bases, détecte les erreurs, supprime les doublons et archive ce qui doit l\'être.' },
            { title: 'Routage Intelligent', description: 'Comprend les demandes (texte, voix, image) et les dirige vers le bon service. Plus de 90% résolus dès le premier contact.' },
            { title: 'Copilote Commercial', description: 'Enrichit les fiches prospects, synthétise l\'historique CRM et prépare vos rendez-vous automatiquement.' },
            { title: 'Propositions Commerciales', description: 'Génère des propositions personnalisées en s\'appuyant sur le brief client et vos références passées.' },
            { title: 'Gestion des Emails', description: 'Trie votre boîte, prépare des brouillons de réponse et vous fait un résumé quotidien.' },
            { title: 'Écoute Client', description: 'Analyse les retours clients, détecte les tendances et vous alerte quand quelque chose ne va pas.' }
        ]
    },
    {
        id: 'verticals',
        label: 'Solutions Sectorielles',
        emoji: '🏛️',
        // Keywords: Sia Partners (Banque/Assurance, Régulation), Onepoint (Public), Ekimetrics (Industries)
        description: 'Des solutions conçues pour les exigences de votre secteur — Santé (HDS), Banque (DORA), Secteur Public, Industrie. Conformité réglementaire intégrée, vocabulaire métier maîtrisé, déploiement adapté à vos contraintes.',
        items: [
            { title: 'Synthèse Dossier Patient', description: 'Résumé structuré de l\'historique médical pour les praticiens. Hébergé sur infrastructure certifiée HDS.' },
            { title: 'Anonymisation Santé', description: 'Supprime les informations personnelles des données de santé pour la recherche, en conformité RGPD.' },
            { title: 'Vérification d\'Identité', description: 'Contrôle automatique des documents, détection de fraude et scoring de risque pour banques et assurances.' },
            { title: 'Veille Réglementaire', description: 'Surveille les évolutions réglementaires (DORA, Bâle III...) et vous alerte sur les impacts pour votre activité.' },
            { title: 'Assistant Agent Public', description: 'Aide les agents à trouver rapidement les textes de loi et procédures pour instruire les dossiers.' },
            { title: 'Courrier Citoyen', description: 'Analyse les demandes des usagers, les classe et propose des réponses adaptées.' },
            { title: 'Maintenance Industrielle', description: 'Aide au diagnostic des pannes en croisant la documentation technique et l\'historique des interventions.' },
            { title: 'Évaluation Fournisseurs', description: 'Analyse la solidité financière, la réputation ESG et les risques de dépendance de vos fournisseurs.' }
        ]
    }
];

export interface TechCapability {
    id: string;
    label: string;
    description: string;
    items: string[];
}

export const TECHNOLOGIES: TechCapability[] = [
    {
        id: 'vision',
        label: 'Computer Vision & Video',
        description: 'Analyse temps réel de flux visuels, détection d\'objets et segmentation pour la sécurité, l\'industrie et le contrôle qualité.',
        items: [
            'Detect, segment and track every example of any object category in an image or video, using text or examples',
            'Segment an object from a click',
            'Track segmented objects in videos',
            'Refine prediction with follow up clicks',
            'Detect and segment matching instances from text',
            'Refine detection with visual examples'
        ]
    },
    {
        id: 'nlp',
        label: 'Natural Language Processing (NLP)',
        description: 'Compréhension et génération de langage naturel pour automatiser les interactions et le traitement de l\'information.',
        items: [
            'RAG (Retrieval-Augmented Generation) sur corpus documentaire sécurisé',
            'Traduction neuronale contextuelle temps réel',
            'Analyse de sentiment et classification d\'intentions (Emails, Support)',
            'Extraction d\'entités nommées (NER) et anonymisation',
            'Résumés automatiques (Réunions, Rapports, Dossiers)'
        ]
    },
    {
        id: 'idp',
        label: 'Intelligent Document Processing (IDP)',
        description: 'Transformation de documents non structurés en données exploitables pour les ERP et CRM.',
        items: [
            'OCR Intelligent et Vision-Language Models (VLM)',
            'Classification automatique de flux documentaires hétérogènes',
            'Extraction de paires clé-valeur sur factures et formulaires',
            'Vérification de signature et détection de falsification',
            'Comparaison sémantique de versions (Diff)'
        ]
    },
    {
        id: 'predictive',
        label: 'Analyse Prédictive & Scoring',
        description: 'Anticipation des tendances et aide à la décision basée sur l\'historique de données.',
        items: [
            'Scoring de leads et prédiction de churn',
            'Détection d\'anomalies et de fraudes (Pattern Recognition)',
            'Prévision de ventes et optimisation de stock',
            'Systèmes de recommandation personnalisés',
            'Maintenance prédictive industrielle'
        ]
    },
    {
        id: 'genai',
        label: 'Generative AI & Content',
        description: 'Création automatisée de contenus textuels, visuels et structurés.',
        items: [
            'Génération de descriptions produits et contenus marketing',
            'Synthèse vocale (TTS) et clonage de voix sécurisé',
            'Génération de code et documentation technique',
            'Création d\'images et d\'assets visuels sur-mesure'
        ]
    }
];
