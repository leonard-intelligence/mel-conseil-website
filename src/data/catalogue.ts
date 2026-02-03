export interface CatalogueItem {
    id: string;
    category: string;
    sector: string;
    mission: string;
    tags?: string[];
    features?: { label: string; icon?: string }[];
    image?: string;
}

export const USE_CASES: CatalogueItem[] = [
    // --- CONVERSATION IA ---
    {
        id: 'conversation-intelligence',
        category: 'Conversation IA',
        sector: 'Intelligence Conversationnelle',
        mission: 'Analyse automatique des interactions, insights clients et coaching commercial.',
        tags: ['IA', 'COACHING', 'AUDIO'],
        features: [
            { label: 'Analyse Sentiment', icon: 'heart' },
            { label: 'Temps Réel', icon: 'lightning' }
        ],
        image: '/assets/audio_background.jpg'
    },
    {
        id: 'contact-centers',
        category: 'Conversation IA',
        sector: 'Centre de Contact',
        mission: 'Automatisation du support, routage intelligent et priorisation des appels.',
        tags: ['SUPPORT', 'ROUTAGE', 'IA'],
        features: [
            { label: 'Routage Auto', icon: 'route' },
            { label: 'Analytique', icon: 'chart' }
        ],
        image: '/assets/callcenter_background.png'
    },
    {
        id: 'voice-agents',
        category: 'Conversation IA',
        sector: 'Agents Vocaux',
        mission: 'Agents conversationnels vocaux pour la prise de commande et le service client.',
        tags: ['VOCAL', 'BOT', '24/7'],
        features: [
            { label: 'Latence < 500ms', icon: 'clock' },
            { label: 'Voix Naturelle', icon: 'wave' }
        ],
        image: '/assets/voice_agent.jpg'
    },
    {
        id: 'ai-notetakers',
        category: 'Conversation IA',
        sector: 'Prise de Notes IA',
        mission: 'Compte-rendu automatique, résumé et liste d\'actions pour vos réunions.',
        tags: ['PRODUCTIVITÉ', 'RÉUNION', 'SYNTHÈSE'],
        features: [
            { label: 'Multi-locuteurs', icon: 'mic' },
            { label: 'Résumés', icon: 'document' }
        ],
        image: '/assets/meeting_background.jpg'
    },
    {
        id: 'medical-transcription',
        category: 'Conversation IA',
        sector: 'Transcription Médicale',
        mission: 'Transcription sécurisée des consultations et génération de comptes-rendus.',
        tags: ['SANTÉ', 'HDS', 'SECRET'],
        features: [
            { label: 'Diarisation', icon: 'users' },
            { label: 'Conformité', icon: 'shield' }
        ],
        image: '/assets/medical_background.png'
    },

    // --- VISION & INDUSTRIE ---
    {
        id: 'cv-quality-control',
        category: 'Vision & Industrie',
        sector: 'Contrôle Qualité',
        mission: 'Détection automatique de défauts sur chaîne de production avec précision.',
        tags: ['INDUSTRIE', 'QUALITÉ', 'VISION'],
        features: [
            { label: 'Zéro Défaut', icon: 'check-circle' },
            { label: 'Temps Réel', icon: 'lightning' }
        ],
        image: '/assets/vision_background.png'
    },
    {
        id: 'cv-safety-epi',
        category: 'Vision & Industrie',
        sector: 'Sécurité & EPI',
        mission: 'Vérification du port des équipements (EPI) et sécurisation des zones.',
        tags: ['SÉCURITÉ', 'CHANTIER', 'IA'],
        features: [
            { label: 'Alertes SMS', icon: 'bell' },
            { label: 'Monitoring', icon: 'eye' }
        ],
        image: '/assets/vision_background.png'
    },
    {
        id: 'cv-inventory',
        category: 'Vision & Industrie',
        sector: 'Inventaire & Logistique',
        mission: 'Comptage automatique de stock et détection de ruptures en rayon.',
        tags: ['LOGISTIQUE', 'STOCK', 'AUTOMATION'],
        features: [
            { label: 'Inventaire', icon: 'box' },
            { label: 'Gain Temps', icon: 'clock' }
        ],
        image: '/assets/vision_background.png'
    },
    {
        id: 'industry-maintenance',
        category: 'Vision & Industrie',
        sector: 'Maintenance Terrain',
        mission: 'Assistant maintenance déconnecté (Edge) sur tablette durcie.',
        tags: ['EDGE IA', 'OFFLINE', 'MAINTENANCE'],
        features: [
            { label: 'Mode Hors-Ligne', icon: 'wifi-off' },
            { label: 'Mobile', icon: 'tablet' }
        ],
        image: '/assets/vision_background.png'
    },

    // --- INTELLIGENCE DOCUMENTAIRE ---
    {
        id: 'rag-soverain',
        category: 'Intelligence Documentaire',
        sector: 'Moteur de Recherche (RAG)',
        mission: 'Retrouvez toute votre connaissance interne instantanément et sans fuite de données.',
        tags: ['SOUVERAINETÉ', 'RAG', 'KNOWLEDGE'],
        features: [
            { label: 'Indexation Locale', icon: 'server' },
            { label: 'Sources', icon: 'file-text' }
        ],
        image: '/assets/textdata_background.png'
    },
    {
        id: 'legal-compliance',
        category: 'Intelligence Documentaire',
        sector: 'Juridique & Conformité',
        mission: 'Audit de contrats et veille réglementaire automatisée.',
        tags: ['JURIDIQUE', 'AUDIT', 'RISQUE'],
        features: [
            { label: 'Comparateur', icon: 'scales' },
            { label: 'Citations', icon: 'quote' }
        ],
        image: '/assets/textdata_background.png'
    },
    {
        id: 'finance-idp',
        category: 'Intelligence Documentaire',
        sector: 'Finance & IDP',
        mission: 'Extraction automatique de factures et détection de fraudes.',
        tags: ['FINANCE', 'OCR', 'COMPTA'],
        features: [
            { label: 'Export ERP', icon: 'database' },
            { label: 'Anti-Fraude', icon: 'shield-alert' }
        ],
        image: '/assets/textdata_background.png'
    },
    {
        id: 'doc-processing',
        category: 'Intelligence Documentaire',
        sector: 'Tri & Routage',
        mission: 'Classification et distribution automatique des emails et documents entrants.',
        tags: ['PROCESS', 'EMAIL', 'TRI'],
        features: [
            { label: 'Routage Auto', icon: 'mail' },
            { label: 'Gain Admin', icon: 'check' }
        ],
        image: '/assets/textdata_background.png'
    },
    {
        id: 'rh-recrutement',
        category: 'Intelligence Documentaire',
        sector: 'Ressources Humaines',
        mission: 'Analyse de CV et aide au recrutement sans biais.',
        tags: ['RH', 'RECRUTEMENT', 'IA'],
        features: [
            { label: 'Anonymisation', icon: 'user-x' },
            { label: 'Matching', icon: 'search' }
        ],
        image: '/assets/textdata_background.png'
    },

    // --- INFRASTRUCTURE & SÉCURITÉ ---
    {
        id: 'infra-llmops',
        category: 'Infrastructure & Sécurité',
        sector: 'Déploiement Sur-Mesure',
        mission: 'Installation de modèles (Mistral, Llama) sur vos serveurs (On-Premise).',
        tags: ['ON-PREMISE', 'INFRA', 'SOUVERAIN'],
        features: [
            { label: 'Optimisation', icon: 'cpu' },
            { label: 'Contrôle Total', icon: 'lock' }
        ],
        image: '/assets/vision_background.png'
    },
    {
        id: 'agent-workflow',
        category: 'Infrastructure & Sécurité',
        sector: 'Automatisation & Agents',
        mission: 'Agents autonomes pour nettoyer vos données (Green IT) et gérer vos workflows.',
        tags: ['AGENTS', 'GREEN IT', 'AUTO'],
        features: [
            { label: 'Nettoyage', icon: 'trash' },
            { label: 'Efficacité', icon: 'zap' }
        ],
        image: '/assets/vision_background.png'
    },

    // --- MARKETING & VENTES ---
    {
        id: 'marketing-content',
        category: 'Marketing & Ventes',
        sector: 'Création de Contenu',
        mission: 'Génération automatique de posts LinkedIn, articles de blog et visuels marketing.',
        tags: ['GÉNÉRATION', 'MARKETING', 'CONTENU'],
        features: [
            { label: 'Multicanal', icon: 'share-2' },
            { label: 'SEO Friendly', icon: 'search' }
        ],
        image: '/assets/textdata_background.png'
    },
    {
        id: 'sales-outreach',
        category: 'Marketing & Ventes',
        sector: 'Ventes B2B',
        mission: 'Hyper-personnalisation des emails de prospection à partir du profil LinkedIn.',
        tags: ['SALES', 'EMAIL', 'B2B'],
        features: [
            { label: 'Scraping', icon: 'download' },
            { label: 'Personnalisation', icon: 'user-check' }
        ],
        image: '/assets/meeting_background.jpg'
    },
    {
        id: 'lead-scoring',
        category: 'Marketing & Ventes',
        sector: 'CRM & Data',
        mission: 'Analyse des comportements pour identifier les prospects les plus chauds.',
        tags: ['DATA', 'SCORING', 'CRM'],
        features: [
            { label: 'Prédiction', icon: 'trending-up' },
            { label: 'ROI', icon: 'dollar-sign' }
        ],
        image: '/assets/textdata_background.png'
    }
];

// Keeping TECHNOLOGIES for reference if needed, or can be removed if unused.
// Brief doesn't explicitly use this list anymore as Stack is now Section 08.
export const TECHNOLOGIES = [];
