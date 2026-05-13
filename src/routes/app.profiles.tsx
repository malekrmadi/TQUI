import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadProfiles, saveProfiles } from "@/lib/auth";
import type { Profile } from "@/data/profiles";
import { ProfileRenderer } from "@/templates/ProfileRenderer";

export const Route = createFileRoute("/app/profiles")({
  component: Profiles,
});

function Profiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  useEffect(() => { setProfiles(loadProfiles()); }, []);

  function update(id: string, patch: Partial<Profile>) {
    const next = profiles.map((p) => (p.id === id ? { ...p, ...patch } : p));
    setProfiles(next); saveProfiles(next);
  }
  function remove(id: string) {
    if (!confirm("Supprimer ce profil ? Cette action est irréversible.")) return;
    const next = profiles.filter((p) => p.id !== id);
    setProfiles(next); saveProfiles(next);
  }

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Mes profils</h1>
          <p>Chaque profil est une identité numérique distincte. Personnalisez, prévisualisez et publiez.</p>
        </div>
        <div className="actions">
          <Link to="/app/profiles/new" className="btn btn-primary">+ Nouveau profil</Link>
        </div>
      </div>

      <div className="profiles-grid">
        {profiles.map((p) => (
          <div key={p.id} className="card pcard">
            <div className="pcard-preview"><ProfileRenderer profile={p} /></div>
            <div className="pcard-head">
              <img src={p.avatar} alt="" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="name">{p.firstName} {p.lastName}</div>
                <div className="sub">{p.jobTitle} · {p.company}</div>
              </div>
              <span className={`badge ${p.status === "live" ? "badge-live" : "badge-draft"}`}>{p.status === "live" ? "● En ligne" : "○ Brouillon"}</span>
            </div>
            <div className="pcard-url">
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>tqui.fr/p/{p.slug}</span>
              <button className="btn btn-ghost btn-sm" onClick={() => navigator.clipboard?.writeText(`https://tqui.fr/p/${p.slug}`)}>Copier</button>
            </div>
            <div className="pcard-actions">
              <Link to="/p/$slug" params={{ slug: p.slug }} className="btn btn-outline btn-sm" target="_blank">Aperçu</Link>
              {p.status === "live"
                ? <button className="btn btn-outline btn-sm" onClick={() => update(p.id, { status: "draft" })}>Dépublier</button>
                : <button className="btn btn-primary btn-sm" onClick={() => update(p.id, { status: "live" })}>Publier</button>}
              <Link to="/app/orders" className="btn btn-ghost btn-sm">Commander NFC</Link>
              <button className="btn btn-ghost btn-sm" onClick={() => remove(p.id)} style={{ color: "var(--red)" }}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
