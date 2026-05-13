import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { DEMO, login } from "@/lib/auth";
import "@/styles/auth.css";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Connexion — Tqui" }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState(DEMO.email);
  const [password, setPassword] = useState(DEMO.password);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const u = login(email, password);
    if (u) nav({ to: "/app" });
    else setErr("Identifiants invalides. Utilisez le compte démo ci-dessous.");
  };

  return (
    <div className="auth">
      <div className="auth-aside">
        <Logo light />
        <blockquote>
          "Nous avons remplacé 6 000 cartes papier avec Tqui. Les équipes commerciales ont adoré le retour sur investissement immédiat."
          <cite>— Marie Dubois, Veltra</cite>
        </blockquote>
      </div>
      <div className="auth-main">
        <div className="auth-card">
          <h1 className="h2" style={{ fontSize: 32 }}>Bon retour.</h1>
          <p className="muted" style={{ marginTop: 8 }}>Connectez-vous pour gérer vos profils.</p>

          <form onSubmit={submit} className="stack gap-16" style={{ marginTop: 28 }}>
            <div className="field"><label>E-mail</label>
              <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="field"><label>Mot de passe</label>
              <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {err && <p style={{ color: "var(--red)", fontSize: 13 }}>{err}</p>}
            <button className="btn btn-primary btn-lg btn-block">Se connecter</button>
          </form>

          <div className="demo-hint">
            <strong>Compte démo</strong>
            <span><span className="kbd">{DEMO.email}</span> · <span className="kbd">{DEMO.password}</span></span>
          </div>

          <p className="muted" style={{ marginTop: 24, fontSize: 14, textAlign: "center" }}>
            Nouveau sur Tqui ? <Link to="/register" style={{ color: "var(--ink)", fontWeight: 500 }}>Créer un compte</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
