export function Navbar() {
    return (
        <nav className="agency-nav reveal delay-100">
            <div className="nav-left">
                <div className="nav-brand">
                    <div className="brand-logo">MELIES<span className="text-light">.ai</span></div>
                </div>
            </div>

            <div className="nav-tabs-container">
                <a href="#solutions" className="nav-tab active">
                    <span className="tab-label">SOLUTIONS</span>
                    <span className="tab-number">01</span>
                </a>
                <a href="#agence" className="nav-tab">
                    <span className="tab-label">AGENCE</span>
                    <span className="tab-number">02</span>
                </a>
                <a href="#rd" className="nav-tab">
                    <span className="tab-label">R&D</span>
                    <span className="tab-number">03</span>
                </a>
            </div>

            <div className="nav-right">
                <a href="#contact" className="nav-cta">CONTACT →</a>
            </div>
        </nav>
    );
}
