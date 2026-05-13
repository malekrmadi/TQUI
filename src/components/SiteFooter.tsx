import { Logo } from "./Logo";
import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p className="muted" style={{ marginTop: 12, maxWidth: 320 }}>
              La nouvelle façon française de partager votre identité professionnelle. Un tap, un scan, un lien.
            </p>
          </div>
          <div>
            <h4>Produit</h4>
            <a href="/#features">Fonctionnalités</a>
            <a href="/#templates">Templates</a>
            <a href="/#pricing">Tarifs</a>
          </div>
          <div>
            <h4>Entreprise</h4>
            <a href="/#contact">Contact</a>
            <a href="/#faq">FAQ</a>
            <a href="/login">Connexion</a>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p className="muted" style={{ fontSize: 14 }}>Actualités produit, une fois par mois. Zéro spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="footer-form">
              <input className="input" type="email" placeholder="vous@entreprise.com" />
              <button className="btn btn-primary btn-sm">S'inscrire</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tqui SAS — Fait en France.</span>
          <span>Confidentialité · CGU · Mentions légales</span>
        </div>
      </div>
    </footer>
  );
}
