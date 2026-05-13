import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/app/settings")({
  component: Settings,
});

function Settings() {
  const [tab, setTab] = useState<"account" | "billing" | "notifications">("account");
  const tabLabels = { account: "Compte", billing: "Abonnement", notifications: "Notifications" };
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Paramètres</h1>
          <p>Compte, abonnement et notifications.</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
        {(["account", "billing", "notifications"] as const).map((t) => (
          <button key={t}
            className={`btn ${tab === t ? "btn-primary" : "btn-outline"} btn-sm`}
            onClick={() => setTab(t)}>
            {tabLabels[t]}
          </button>
        ))}
      </div>

      {tab === "account" && (
        <div className="card" style={{ padding: 28, maxWidth: 640 }}>
          <h2 style={{ fontSize: 18, marginBottom: 16 }}>Compte</h2>
          <div className="stack gap-16">
            <div className="row">
              <div className="field"><label>Nom complet</label><input className="input" defaultValue="Alex Morel" /></div>
              <div className="field"><label>E-mail</label><input className="input" defaultValue="demo@tqui.fr" /></div>
            </div>
            <div className="field"><label>Langue</label>
              <select className="select"><option>Français</option><option>English</option></select>
            </div>
            <button className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Enregistrer</button>
          </div>
        </div>
      )}

      {tab === "billing" && (
        <div className="card" style={{ padding: 28, maxWidth: 640 }}>
          <h2 style={{ fontSize: 18, marginBottom: 4 }}>Abonnement</h2>
          <p className="muted" style={{ fontSize: 14 }}>Vous êtes actuellement sur le plan Pro.</p>
          <div className="card card-soft" style={{ marginTop: 18, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <strong>Pro · €6 / mois</strong>
              <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>Renouvellement le 12 juin 2026 · Visa se terminant par 4242</p>
            </div>
            <button className="btn btn-outline btn-sm">Gérer le plan</button>
          </div>
          <div style={{ marginTop: 24, fontSize: 14 }}>
            <strong>Utilisation</strong>
            <ul style={{ paddingLeft: 18, marginTop: 8, color: "var(--muted)" }}>
              <li>3 profils sur 3 utilisés</li>
              <li>1 926 vues de profil ce mois-ci</li>
              <li>Domaine personnalisé : non connecté</li>
            </ul>
          </div>
        </div>
      )}

      {tab === "notifications" && (
        <div className="card" style={{ padding: 28, maxWidth: 640 }}>
          <h2 style={{ fontSize: 18, marginBottom: 16 }}>Notifications</h2>
          <div className="stack gap-12">
            {[
              "M'envoyer un e-mail à chaque vue de profil",
              "Récapitulatif analytique hebdomadaire",
              "Mises à jour produit et nouveaux templates",
              "Notifications d'expédition de commandes",
            ].map((label, i) => (
              <div key={i} className="card card-soft" style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{label}</span>
                <label className="toggle"><input type="checkbox" defaultChecked={i !== 2} /><span className="slider" /></label>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
