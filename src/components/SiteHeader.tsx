import brandLogo from '../assets/CoE Brand Logo.png'

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#home" aria-label="BFSI Bulletin">
          <img className="brandLogoImg" src={brandLogo} alt="BFSI Bulletin" />
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#competence">Our Competence</a>
          <a href="#value">Value we +</a>
        </nav>

        <div className="headerCta">
          <a className="btnPrimary btnSm" href="#contact">
            Let's talk
          </a>
        </div>
      </div>
    </header>
  )
}
