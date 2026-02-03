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
    {
        id: 'conversation-intelligence',
        category: 'Conversation',
        sector: 'Conversation Intelligence',
        mission: 'Analyse automatique des interactions, insights clients et coaching commercial.',
        tags: ['AI', 'INTELLIGENCE'],
        features: [
            { label: 'Sentiment Analysis', icon: 'heart' },
            { label: 'Real-time', icon: 'lightning' }
        ],
        image: '/assets/audio_background.jpg'
    },
    {
        id: 'medical-transcription',
        category: 'Conversation',
        sector: 'Medical Transcription',
        mission: 'Transcription précise des consultations et génération de comptes-rendus médicaux.',
        tags: ['HEALTH', 'AUDIO'],
        features: [
            { label: 'Diarization', icon: 'users' },
            { label: 'HIPAA Compliant', icon: 'shield' }
        ],
        image: '/assets/medical_background.png' // Fallback
    },
    {
        id: 'contact-centers',
        category: 'Conversation',
        sector: 'Contact Centers',
        mission: 'Automatisation du support, routing intelligent et analyse de sentiment en temps réel.',
        tags: ['SUPPORT', 'AUTOMATION'],
        features: [
            { label: 'Auto-Routing', icon: 'route' },
            { label: 'Analytics', icon: 'chart' }
        ],
        image: '/assets/callcenter_background.png'
    },
    {
        id: 'voice-agents',
        category: 'Conversation',
        sector: 'Voice Agents',
        mission: 'Agents conversationnels vocaux pour la prise de commande et le service client.',
        tags: ['VOICE', 'BOT'],
        features: [
            { label: '< 500ms Latency', icon: 'clock' },
            { label: 'Natural Voice', icon: 'wave' }
        ],
        image: '/assets/voice_agent.jpg'
    },
    {
        id: 'ai-notetakers',
        category: 'Conversation',
        sector: 'AI Notetakers',
        mission: 'Prise de note automatique, résumés et action items pour toutes vos réunions.',
        tags: ['PRODUCTIVITY', 'MEETING'],
        features: [
            { label: 'Multi-speaker', icon: 'mic' },
            { label: 'Summaries', icon: 'document' }
        ],
        image: '/assets/meeting_background.jpg'
    },
    // Computer Vision / SMB Items
    {
        id: 'cv-quality-control',
        category: 'Computer Vision',
        sector: 'Industrie & Manufacture',
        mission: 'Détection automatique de défauts sur chaîne de production avec 99.9% de précision.',
        tags: ['INDUSTRIE', 'QUALITÉ', 'VISION'],
        features: [
            { label: 'Zéro Défaut', icon: 'check-circle' },
            { label: 'Temps Réel', icon: 'lightning' }
        ],
        image: '/assets/vision_background.png'
    },
    {
        id: 'cv-safety-epi',
        category: 'Computer Vision',
        sector: 'BTP & Sécurité',
        mission: 'Vérification du port des équipements (EPI) et détection de zones dangereuses.',
        tags: ['SÉCURITÉ', 'BTP', 'DETECTION'],
        features: [
            { label: 'Alertes SMS', icon: 'bell' },
            { label: 'Conformité', icon: 'shield' }
        ],
        image: '/assets/vision_background.png'
    },
    {
        id: 'cv-inventory',
        category: 'Computer Vision',
        sector: 'Retail & Logistique',
        mission: 'Comptage automatique de stock et détection de rupture en rayon par analyse d\'image.',
        tags: ['RETAIL', 'STOCK', 'AUTOMATION'],
        features: [
            { label: 'Inventory Check', icon: 'box' },
            { label: 'Gain de Temps', icon: 'clock' }
        ],
        image: '/assets/vision_background.png'
    }
];

// Keeping TECHNOLOGIES for reference if needed, or can be removed if unused.
// Brief doesn't explicitly use this list anymore as Stack is now Section 08.
export const TECHNOLOGIES = [];
