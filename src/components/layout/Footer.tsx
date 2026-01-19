export function Footer() {
    return (
        <footer id="section-footer" className="footer bg-black py-20 border-t border-white/10 text-sm">
            <div className="max-w-7xl mx-auto px-6 footer__container">

                {/* Top Section: Brand + Tagline */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 mb-12 border-b border-white/10">
                    <div>
                        <h3 className="font-display font-bold text-2xl text-white mb-2 tracking-tighter">MELIES<span className="text-gray-500">.ai</span></h3>
                        <p className="text-gray-500 font-mono text-xs">
                            Conseil en IA Générative & Data pour les Entreprises — Paris
                        </p>
                    </div>
                    {/* Sovereign positioning statement like Onepoint */}
                    <div className="mt-4 md:mt-0 text-right">
                        <p className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-1">IA Souveraine & Conforme</p>
                        <p className="text-gray-500 font-mono text-[10px]">Expert Mistral AI · Infrastructure SecNumCloud</p>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

                    {/* Expertise - like Illuin's R&D focus */}
                    <div className="footer__column footer__column--expertise">
                        <h4 className="font-mono font-bold text-white mb-6 uppercase text-xs tracking-wider">Expertises</h4>
                        <ul className="space-y-3 text-gray-500 font-mono text-xs">
                            <li className="hover:text-white cursor-pointer transition-colors">RAG & Knowledge</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Computer Vision</li>
                            <li className="hover:text-white cursor-pointer transition-colors">NLP & LLMs</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Agents Autonomes</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Audio & Voice AI</li>
                        </ul>
                    </div>

                    {/* Industries - like Sia Partners */}
                    <div className="footer__column footer__column--industries">
                        <h4 className="font-mono font-bold text-white mb-6 uppercase text-xs tracking-wider">Industries</h4>
                        <ul className="space-y-3 text-gray-500 font-mono text-xs">
                            <li className="hover:text-white cursor-pointer transition-colors">Banque & Assurance</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Santé (HDS)</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Secteur Public</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Industrie & Energie</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Retail & E-commerce</li>
                        </ul>
                    </div>

                    {/* Resources - like Artefact's Ideas section */}
                    <div className="footer__column footer__column--resources">
                        <h4 className="font-mono font-bold text-white mb-6 uppercase text-xs tracking-wider">Ressources</h4>
                        <ul className="space-y-3 text-gray-500 font-mono text-xs">
                            <li className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
                                Guide AI Act 2026
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors">Cas d'Usage</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog R&D</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Livre Blanc Souveraineté</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Webinaires</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer__column footer__column--company">
                        <h4 className="font-mono font-bold text-white mb-6 uppercase text-xs tracking-wider">Entreprise</h4>
                        <ul className="space-y-3 text-gray-500 font-mono text-xs">
                            <li className="hover:text-white cursor-pointer transition-colors">À propos</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Notre Équipe</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Carrières</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Partenaires</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    {/* Legal + Status */}
                    <div className="footer__column footer__column--legal">
                        <h4 className="font-mono font-bold text-white mb-6 uppercase text-xs tracking-wider">Légal</h4>
                        <ul className="space-y-3 text-gray-500 font-mono text-xs">
                            <li className="hover:text-white cursor-pointer transition-colors">Mentions Légales</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Politique de Confidentialité</li>
                            <li className="hover:text-white cursor-pointer transition-colors">CGV</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Politique Cookies</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-mono text-xs text-gray-500">
                        © 2026 Melies AI Conseil SAS. Tous droits réservés.
                    </div>
                    <div className="flex items-center gap-6">
                        <span id="footer-status" className="flex items-center gap-2 text-emerald-400 font-mono text-xs footer__status footer__status--online">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Tous systèmes opérationnels
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
