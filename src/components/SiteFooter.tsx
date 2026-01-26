export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div className="footerBrand">
          <div className="brand brandFooter" aria-label="BFSI Bulletin">
            <div className="brandLogoPlaceholder">BFSI Bulletin</div>
          </div>
          <p className="footerTagline">
            A platform for BFSI Leaders to engage, reflect, and chart the way forward.
          </p>
        </div>

        <div className="footerCols">
          <div className="footerCol">
            <div className="footerColTitle">Company</div>
            <a href="/">Home</a>
            <a href="/value">Value we +</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footerCol">
            <div className="footerColTitle">Contact</div>
            <div className="footerMeta">Use the contact form</div>
            <div className="footerMeta">1–2 business days</div>
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <div>© {new Date().getFullYear()} BFSI Bulletin. All rights reserved.</div>
        <div className="footerLinks">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </div>
    </footer>
  )
}
