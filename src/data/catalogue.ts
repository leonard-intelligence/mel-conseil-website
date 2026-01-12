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
        id: 'knowledge',
        label: 'Knowledge Management & RAG',
        emoji: '🔍',
        description: 'Transformer la documentation passive en base de connaissance active sans exposer les secrets industriels.',
        items: [
            { title: 'Moteur de recherche unifié', description: 'Interrogation en langage naturel de l\'ensemble du fonds documentaire (NAS, Sharepoint) avec citations.' },
            { title: 'Assistant technique', description: 'Réponse immédiate sur procédures de réparation pour techniciens terrain (accès hors ligne).' },
            { title: 'Recherche historique Support', description: 'Capitalisation sur les incidents résolus pour accélérer le support niveau 1/2.' },
            { title: 'Base de connaissance Chatbot', description: 'Chatbot interne sourcé exclusivement sur les données validées (zéro hallucination).' },
            { title: 'Assistant appels d\'offres', description: 'RAG sur les réponses passées + génération de premiers jets adaptés au cahier des charges.' }
        ]
    },
    {
        id: 'legal',
        label: 'Juridique & Conformité',
        emoji: '⚖️',
        description: 'Sécuriser l\'analyse contractuelle et gagner du temps sur la veille.',
        items: [
            { title: 'Analyse & Audit de contrats', description: 'Extraction et synthèse des clauses (résiliation, pénalités) sur des lots massifs.' },
            { title: 'Comparateur sémantique', description: 'Analyse des écarts de fond et de risques entre deux versions d\'un contrat.' },
            { title: 'Génération de contrats', description: 'Création de premiers jets sécurisés basés sur les modèles validés du cabinet.' },
            { title: 'Veille réglementaire', description: 'Suivi des évolutions légales (JO, Directives) avec alertes d\'impact métier.' }
        ]
    },
    {
        id: 'finance',
        label: 'Finance & Comptabilité',
        emoji: '💴',
        description: 'Réduire la charge de saisie manuelle et sécuriser les données financières.',
        items: [
            { title: 'Extraction IDP Factures', description: 'Lecture intelligente, extraction des champs (TVA, SIRET) et export vers l\'ERP.' },
            { title: 'Recouvrement intelligent', description: 'Génération de relances personnalisées selon le profil payeur pour réduire le DSO.' },
            { title: 'Détection d\'anomalies', description: 'Audit continu pour repérer doublons ou montants atypiques (prévention fraude).' }
        ]
    },
    {
        id: 'documents',
        label: 'Traitement Documents (IDP)',
        emoji: '📄',
        description: 'Extraire la donnée bloquée dans des documents non structurés à grande échelle.',
        items: [
            { title: 'OCR Intelligent', description: 'Transformation de documents scannés en données structurées (JSON/XML).' },
            { title: 'Classification automatique', description: 'L\'IA analyse la pièce jointe entrante et la route vers le bon service.' },
            { title: 'Résumé documents longs', description: 'Synthèse structurée de rapports annuels ou études techniques (100+ pages).' },
            { title: 'Vérification de complétude', description: 'Contrôle automatique de la présence des pièces obligatoires dans un dossier.' }
        ]
    },
    {
        id: 'industry',
        label: 'Industrie & Supply Chain',
        emoji: '⚙️',
        description: 'Optimiser les opérations et sécuriser le savoir-faire technique.',
        items: [
            { title: 'Assistant Maintenance', description: 'Aide au diagnostic via tablettes durcies connectées à la documentation locale.' },
            { title: 'Analyse prédictive stock', description: 'Recommandations de réapprovisionnement basées sur l\'historique.' },
            { title: 'Risques fournisseurs', description: 'Analyse automatique des rapports financiers et actualités des partenaires.' },
            { title: 'Fiches techniques', description: 'Création automatisée de documentation produit multilingue.' }
        ]
    },
    {
        id: 'rh',
        label: 'RH & Recrutement',
        emoji: '👥',
        description: 'Gérer la masse administrative en respectant strictement le RGPD.',
        items: [
            { title: 'Matching & Analyse CV', description: 'Extraction des compétences et pré-qualification sans biais.' },
            { title: 'Fiches de Poste & Annonces', description: 'Rédaction rapide et inclusive des offres d\'emploi.' },
            { title: 'Onboarding Assistant', description: 'Chatbot d\'accueil pour les nouveaux arrivants (procédures, culture).' },
            { title: 'Assistant Évaluations', description: 'Aide à la formalisation des entretiens annuels.' }
        ]
    },
    {
        id: 'rse',
        label: 'RSE & ESG',
        emoji: '🌱',
        description: 'Collecter la donnée et garantir l\'éthique des contenus.',
        items: [
            { title: 'Collecte Data CSRD', description: 'Extraction de données depuis factures énergétiques et rapports divers.' },
            { title: 'Rédaction Rapport RSE', description: 'Génération des textes narratifs à partir des KPI consolidés.' },
            { title: 'Analyse des Biais', description: 'Audit automatique des offres d\'emploi pour détecter les biais discriminatoires.' }
        ]
    },
    {
        id: 'sales',
        label: 'Commercial & Ventes',
        emoji: '📈',
        description: 'Hyper-personnalisation de l\'approche commerciale sans exposer le fichier client.',
        items: [
            { title: 'Préparation de RDV', description: 'Synthèse "360°" du prospect avant l\'appel.' },
            { title: 'Propositions Commerciales', description: 'Génération sur-mesure à partir des briques existantes.' },
            { title: 'Analyse Voice of Customer', description: 'Analyse des sentiments dans les emails ou transcriptions d\'appels.' }
        ]
    },
    {
        id: 'health',
        label: 'Santé & Healthcare',
        emoji: '🏥',
        description: 'Réduire la charge administrative des soignants en conformité HDS.',
        items: [
            { title: 'Synthèse dossiers patients', description: 'Résumé structuré de l\'historique pour le médecin.' },
            { title: 'Aide au codage PMSI', description: 'Suggestion des codes actes à partir des comptes-rendus.' },
            { title: 'Assistant documentation', description: 'Génération de CR de consultation via dictée vocale locale.' },
            { title: 'Anonymisation recherche', description: 'Dé-identification forte des données patients pour la recherche clinique.' }
        ]
    },
    {
        id: 'public',
        label: 'Secteur Public',
        emoji: '🏛️',
        description: 'Efficacité administrative et souveraineté numérique.',
        items: [
            { title: 'Assistant agent public', description: 'Accès instantané aux procédures et textes réglementaires.' },
            { title: 'Analyse courriers citoyens', description: 'Classification et pré-rédaction de réponses.' },
            { title: 'Aide rédaction admin', description: 'Génération d\'arrêtés et délibérations conformes.' },
            { title: 'Pré-instruction dossiers', description: 'Vérification automatique de complétude (urbanisme, aides).' }
        ]
    },
    {
        id: 'bank',
        label: 'Banque & Assurance',
        emoji: '🏦',
        description: 'Conformité, explicabilité et sécurité maximale.',
        items: [
            { title: 'Automatisation KYC', description: 'Extraction/Vérification des pièces justificatives.' },
            { title: 'Synthèse crédit/sinistre', description: 'Résumé des pièces pour aide à la décision humaine.' },
            { title: 'Veille réglementaire', description: 'Suivi ACPR/BCE et conformité DORA.' },
            { title: 'Détection fraude doc', description: 'Analyse de cohérence des documents fournis.' }
        ]
    },
    {
        id: 'agents',
        label: 'Agents IA & Workflows',
        emoji: '🤖',
        description: 'Automatiser des tâches complexes multimodales.',
        items: [
            { title: 'Agent Nettoyage Data', description: 'Scanne les serveurs, identifie les doublons et propose l\'archivage.' },
            { title: 'Routeur intelligent', description: 'Réception -> Analyse -> Injection dans l\'outil métier.' },
            { title: 'Agent Email', description: 'Brouillons de réponse et classification des urgences.' },
            { title: 'Agent Préparateur', description: 'Dossier de briefing automatique avant RDV.' }
        ]
    },
    {
        id: 'training',
        label: 'Interfaces & Formation',
        emoji: '💬',
        description: 'Accès simplifié au savoir et montée en compétence.',
        items: [
            { title: 'Bot FAQ Interne', description: 'Réponses aux questions récurrentes sur les process (RH/IT).' },
            { title: 'Chatbot Service Client', description: 'Filtrage et qualification des demandes niveau 1.' },
            { title: 'Génération de Quiz', description: 'Création automatique d\'évaluations depuis supports PDF.' }
        ]
    },
    {
        id: 'infra',
        label: 'Infrastructure & LLMOps',
        emoji: '🏗️',
        description: 'Déployer et maintenir l\'IA chez le client ou sur un cloud souverain.',
        items: [
            { title: 'Dimensionnement Hardware', description: 'Conseil achat serveurs/GPU ou choix Cloud Souverain (OVH, NumSpot).' },
            { title: 'Déploiement On-Premise', description: 'Installation sécurisée de modèles (Ollama, vLLM) dans le SI client.' },
            { title: 'Optimisation (Quantization)', description: 'Faire tourner des modèles performants sur des infrastructures légères.' }
        ]
    },
    {
        id: 'finetuning',
        label: 'Fine-tuning & SLM',
        emoji: '🧠',
        description: 'Une IA qui parle "le langage de l\'entreprise".',
        items: [
            { title: 'Création de SLM', description: 'Entraînement de petits modèles spécialisés sur corpus client.' },
            { title: 'Adaptation style & ton', description: 'Ajustement du modèle pour l\'identité de marque.' },
            { title: 'Performance ciblée', description: 'Rendre un petit modèle local aussi fort qu\'un GPT-4 sur une tâche précise.' }
        ]
    },
    {
        id: 'governance',
        label: 'Gouvernance & AI Act',
        emoji: '🔐',
        description: 'Structurer l\'usage et se conformer à la loi européenne.',
        items: [
            { title: 'Rédaction Charte IA', description: 'Définition des règles d\'usage pour les employés.' },
            { title: 'Cartographie AI Act', description: 'Inventaire des IA et classification des risques selon la loi.' },
            { title: 'Gouvernance des données', description: 'Gestion des droits d\'accès pour les systèmes RAG.' },
            { title: 'Acculturation Comex', description: 'Formation des dirigeants aux enjeux souverains.' }
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
