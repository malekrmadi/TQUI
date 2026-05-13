import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadProfiles } from "@/lib/auth";
import type { Profile } from "@/data/profiles";

export const Route = createFileRoute("/app/")({
  component: Overview,
});

function Overview() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  useEffect(() => { setProfiles(loadProfiles()); }, []);

  const live = profiles.filter((p) => p.status === "live");
  const totalViews = profiles.reduce((a, p) => a + p.views, 0);
  const totalSaves = profiles.reduce((a, p) => a + p.saves, 0);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Bonjour, Alex.</h1>
          <p>Voici ce qui s'est passé sur vos profils Tqui cette semaine.</p>
        </div>
        <div className="actions">
          <Link to="/app/profiles/new" className="btn btn-primary">+ Nouveau profil</Link>
        </div>
      </div>

      <div className="stats">
        <div className="card stat"><div className="label">Profils en ligne</div><div className="value">{live.length}</div><div className="delta">+1 ce mois-ci</div></div>
        <div className="card stat"><div className="label">Vues de profil</div><div className="value">{totalViews.toLocaleString()}</div><div className="delta">+18 % vs semaine passée</div></div>
        <div className="card stat"><div className="label">Contacts sauvegardés</div><div className="value">{totalSaves}</div><div className="delta">+6 cette semaine</div></div>
        <div className="card stat"><div className="label">Taps NFC</div><div className="value">412</div><div className="delta">+24 % vs semaine passée</div></div>
      </div>

      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, margin: "40px 0 16px" }}>Actions rapides</h2>
      <div className="quick-grid">
        <Link to="/app/profiles/new" className="card quick"><span className="i">＋</span><strong>Créer un profil</strong><span className="muted" style={{ fontSize: 13 }}>Lancez une nouvelle identité en 60 secondes.</span></Link>
        <Link to="/app/templates" className="card quick"><span className="i">▤</span><strong>Parcourir les templates</strong><span className="muted" style={{ fontSize: 13 }}>Trois styles artisanaux au choix.</span></Link>
        <Link to="/app/orders" className="card quick"><span className="i">▢</span><strong>Commander NFC</strong><span className="muted" style={{ fontSize: 13 }}>Cartes, porte-clés et supports QR.</span></Link>
      </div>

      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, margin: "40px 0 16px" }}>Profils récents</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th>Profil</th><th>Template</th><th>Statut</th><th>Vues</th><th>Mis à jour</th></tr></thead>
          <tbody>
            {profiles.slice(0, 5).map((p) => (
              <tr key={p.id}>
                <td>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <img src={p.avatar} alt="" style={{ width: 32, height: 32, borderRadius: 999 }} />
                    <div>
                      <div style={{ fontWeight: 500 }}>{p.firstName} {p.lastName}</div>
                      <div className="muted" style={{ fontSize: 12 }}>{p.jobTitle}</div>
                    </div>
                  </div>
                </td>
                <td style={{ textTransform: "capitalize" }}>{p.template}</td>
                <td><span className={`badge ${p.status === "live" ? "badge-live" : "badge-draft"}`}>{p.status === "live" ? "● En ligne" : "○ Brouillon"}</span></td>
                <td>{p.views}</td>
                <td className="muted">{p.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
