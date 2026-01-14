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
        label: 'Stratégie, Gouvernance & Infrastructure',
        emoji: '🏗️',
        description: 'Bâtir des fondations souveraines, éthiques et conformes (AI Act) pour une IA durable.',
        items: [
            { title: 'Cartographie AI Act', description: 'Inventaire des IA et classification des risques selon la loi européenne.' },
            { title: 'Gouvernance des données', description: 'Gestion des droits d\'accès et sécurisation des systèmes RAG.' },
            { title: 'Rédaction Charte IA', description: 'Définition des règles d\'usage éthique pour les collaborateurs.' },
            { title: 'Collecte Data CSRD', description: 'Extraction et consolidation de données RSE depuis sources multiples.' },
            { title: 'Déploiement Souverain', description: 'Installation de modèles Open Source (Llama, Mistral) On-Premise ou Cloud SecNumCloud.' },
            { title: 'Dimensionnement Infra', description: 'Conseil sur l\'achat de GPU et l\'architecture technique optimale.' },
            { title: 'Fine-tuning sur mesure', description: 'Adaptation de modèles (SLM) au "langage" et aux spécificités de l\'entreprise.' },
            { title: 'Analyse des Biais', description: 'Audit automatique pour détecter les biais discriminatoires (RH, Crédit).' }
        ]
    },
    {
        id: 'knowledge',
        label: 'Moteurs de Recherche & Savoir',
        emoji: '🧠',
        description: 'Transformer la documentation passive en intelligence active et accessible instantanément.',
        items: [
            { title: 'Moteur de recherche unifié', description: 'Interrogation en langage naturel de tout le fonds documentaire (Sharepoint, NAS).' },
            { title: 'Assistant Technique', description: 'Réponse immédiate sur procédures de maintenance pour techniciens terrain.' },
            { title: 'Recherche Historique Support', description: 'Capitalisation sur les incidents résolus pour accélérer le niveau 1/2.' },
            { title: 'Chatbot Service Client', description: 'Filtrage et qualification automatique des demandes (24/7).' },
            { title: 'Bot FAQ Interne', description: 'Réponses instantanées aux questions récurrentes (RH, IT, Procédures).' },
            { title: 'Assistant Appels d\'Offres', description: 'Génération de premiers jets basés sur les réussites passées et le cahier des charges.' },
            { title: 'Génération de Quiz', description: 'Création automatique de tests de connaissances à partir de PDF de formation.' }
        ]
    },
    {
        id: 'documents',
        label: 'Analyse Documentaire & Support',
        emoji: '📄',
        description: 'Automatiser le traitement des flux administratifs, juridiques et financiers.',
        items: [
            { title: 'OCR Intelligent (IDP)', description: 'Transformation de documents scannés/factures en données structurées (JSON/ERP).' },
            { title: 'Classification Automatique', description: 'Tri et routage automatique des emails et pièces jointes entrants.' },
            { title: 'Analyse de Contrats', description: 'Extraction des clauses à risques et synthèse juridique accélérée.' },
            { title: 'Comparateur Sémantique', description: 'Détection fine des écarts de fond entre deux versions d\'un document.' },
            { title: 'Extraction Factures', description: 'Lecture automatique, vérification TVA/SIRET et export comptable.' },
            { title: 'Recouvrement Intelligent', description: 'Relances hyper-personnalisées pour réduire les délais de paiement.' },
            { title: 'Matching CV', description: 'Analyse objective des compétences et pré-qualification des candidats.' },
            { title: 'Vérification Complétude', description: 'Contrôle automatique de la présence des pièces obligatoires dans un dossier.' }
        ]
    },
    {
        id: 'automation',
        label: 'Agents Intelligents & Workflow',
        emoji: '🤖',
        description: 'Des agents autonomes qui exécutent des tâches complexes et multimodales.',
        items: [
            { title: 'Agent Nettoyage Data', description: 'Scan des serveurs, détection de doublons et archivage intelligent.' },
            { title: 'Routeur Intelligent', description: 'Analyse d\'intentions complexes et dispatch vers les bons services.' },
            { title: 'Assistant Commercial', description: 'Synthèse "360°" du prospect et préparation de dossier avant RDV.' },
            { title: 'Rédaction Propositions', description: 'Génération de propales commerciales sur-mesure.' },
            { title: 'Agent Email', description: 'Brouillons de réponse contextuels et gestion de la boîte de réception.' },
            { title: 'Analyse "Voice of Customer"', description: 'Détection de sentiments et tendances dans les interactions clients.' }
        ]
    },
    {
        id: 'verticals',
        label: 'Solutions Sectorielles & Métiers',
        emoji: '🏥',
        description: 'Des solutions expertes pour les exigences spécifiques (Santé, Industrie, Public, Banque).',
        items: [
            { title: 'Synthèse Dossier Patient', description: 'Résumé structuré de l\'historique médical pour aide au diagnostic.' },
            { title: 'Anonymisation Recherche', description: 'Dé-identification forte des données de santé (HDS) pour la recherche.' },
            { title: 'Automatisation KYC', description: 'Vérification d\'identité et détection de fraude documentaire (Banque).' },
            { title: 'Veille Réglementaire Bancaire', description: 'Suivi des directives (DORA, Bâle) et analyse d\'impact.' },
            { title: 'Assistant Agent Public', description: 'Accès simplifié aux codes et règlements pour l\'instruction de dossiers.' },
            { title: 'Traitement Courrier Citoyen', description: 'Réponses pré-rédigées aux requêtes administratives.' },
            { title: 'Assistant Maintenance Ind.', description: 'Aide au diagnostic panne sur machine via documentation technique.' },
            { title: 'Risques Fournisseurs', description: 'Analyse croisée de la santé financière et de la réputation des partenaires.' }
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
