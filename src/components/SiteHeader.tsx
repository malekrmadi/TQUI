import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import "./SiteHeader.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Logo />
        <nav className={`site-nav ${open ? "open" : ""}`}>
          <a href="/#features" onClick={() => setOpen(false)}>Fonctionnalités</a>
          <a href="/#templates" onClick={() => setOpen(false)}>Templates</a>
          <a href="/#pricing" onClick={() => setOpen(false)}>Tarifs</a>
          <a href="/#faq" onClick={() => setOpen(false)}>FAQ</a>
        </nav>
        <div className="site-cta">
          <Link to="/login" className="btn btn-ghost btn-sm">Connexion</Link>
          <Link to="/register" className="btn btn-primary btn-sm">Créer mon Tqui</Link>
        </div>
        <button className="site-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
