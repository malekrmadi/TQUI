import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { register } from "@/lib/auth";
import "@/styles/auth.css";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Créer un compte — Tqui" }] }),
  component: Register,
});

function Register() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    register(name || "Alex Morel", email || "vous@tqui.fr");
    nav({ to: "/app" });
  };
  return (
    <div className="auth">
      <div className="auth-aside">
        <Logo light />
        <blockquote>
          "La configuration a pris 90 secondes. Nos équipes avaient des cartes NFC brandées sur leur bureau dès vendredi."
          <cite>— Julien Marchand, Halonn</cite>
        </blockquote>
      </div>
      <div className="auth-main">
        <div className="auth-card">
          <h1 className="h2" style={{ fontSize: 32 }}>Démarrez en 60 secondes.</h1>
          <p className="muted" style={{ marginTop: 8 }}>Sans carte bancaire. Plan Starter inclus gratuitement.</p>

          <form onSubmit={submit} className="stack gap-16" style={{ marginTop: 28 }}>
            <div className="field"><label>Nom complet</label>
              <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Morel" />
            </div>
            <div className="field"><label>E-mail professionnel</label>
              <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@entreprise.com" />
            </div>
            <div className="field"><label>Mot de passe</label>
              <input className="input" type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary btn-lg btn-block">Créer mon compte</button>
          </form>
          <p className="muted" style={{ marginTop: 24, fontSize: 14, textAlign: "center" }}>
            Déjà membre ? <Link to="/login" style={{ color: "var(--ink)", fontWeight: 500 }}>Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
