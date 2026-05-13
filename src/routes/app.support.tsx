import { createFileRoute } from "@tanstack/react-router";
import { FAKE_TICKETS } from "@/data/profiles";

export const Route = createFileRoute("/app/support")({
  component: Support,
});

function Support() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Support</h1>
          <p>Nous répondons en moins de 4 heures, en français et en anglais.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }} className="support-grid">
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>Vos tickets</strong>
            <button className="btn btn-primary btn-sm">+ Nouveau ticket</button>
          </div>
          <table className="tbl">
            <thead><tr><th>ID</th><th>Sujet</th><th>Statut</th><th>Mis à jour</th></tr></thead>
            <tbody>
              {FAKE_TICKETS.map((t) => (
                <tr key={t.id}>
                  <td style={{ fontFamily: "ui-monospace, monospace" }}>{t.id}</td>
                  <td>{t.subject}</td>
                  <td><span className="badge">{t.status}</span></td>
                  <td className="muted">{t.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <strong>Nous contacter</strong>
          <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>Envoyez-nous un message, nous répondons vite.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Ticket envoyé (démo)."); }} className="stack gap-12" style={{ marginTop: 16 }}>
            <div className="field"><label>Sujet</label><input className="input" /></div>
            <div className="field"><label>Message</label><textarea className="textarea" /></div>
            <button className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>

      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, margin: "40px 0 16px" }}>Questions fréquentes</h2>
      <div className="card" style={{ padding: 0 }}>
        {[
          { q: "Comment activer ma carte NFC ?", a: "Appuyez simplement sur un téléphone. La carte est pré-associée à votre profil actif." },
          { q: "Puis-je commander des cartes en gros ?", a: "Oui, allez dans Commandes → Achat groupé et nous gérons la production en 5 jours ouvrés." },
          { q: "Comment changer le profil lié à ma carte ?", a: "Ouvrez la carte dans Commandes, puis assignez-la à l'un de vos profils en ligne." },
        ].map((f, i) => (
          <details key={i} style={{ padding: "18px 20px", borderBottom: i < 2 ? "1px solid var(--line)" : "0" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500 }}>{f.q}</summary>
            <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
