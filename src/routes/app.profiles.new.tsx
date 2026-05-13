import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { TEMPLATES, type Profile } from "@/data/profiles";
import { loadProfiles, saveProfiles } from "@/lib/auth";
import { ProfileRenderer } from "@/templates/ProfileRenderer";

export const Route = createFileRoute("/app/profiles/new")({
  component: NewProfile,
});

const STEPS = ["Template", "Informations", "Visibilité", "Aperçu"];

function NewProfile() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<Profile>({
    id: "p_" + Date.now(),
    slug: "nouveau-profil",
    template: "minimal",
    status: "draft",
    firstName: "Alex",
    lastName: "Morel",
    jobTitle: "Product Designer",
    company: "Tqui",
    bio: "Conception d'outils qui disparaissent. Actuellement en train de façonner Tqui depuis Paris.",
    email: "alex@tqui.fr",
    phone: "+33 6 00 00 00 00",
    whatsapp: "+33 6 00 00 00 00",
    website: "tqui.fr",
    avatar: "https://i.pravatar.cc/240?img=15",
    cover: "",
    accent: "#0d0d0f",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/alex" },
      { platform: "twitter", url: "https://twitter.com/alex" },
    ],
    visibility: { email: true, phone: true, whatsapp: true, website: true, socials: true },
    views: 0, saves: 0, updatedAt: new Date().toISOString().slice(0, 10),
  });

  const slug = useMemo(
    () => `${profile.firstName}-${profile.lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "profil",
    [profile.firstName, profile.lastName]
  );
  useEffect(() => { setProfile((p) => ({ ...p, slug })); }, [slug]);

  function set<K extends keyof Profile>(k: K, v: Profile[K]) { setProfile((p) => ({ ...p, [k]: v })); }
  function setVis<K extends keyof Profile["visibility"]>(k: K, v: boolean) {
    setProfile((p) => ({ ...p, visibility: { ...p.visibility, [k]: v } }));
  }

  function publish(live: boolean) {
    const next: Profile = { ...profile, status: live ? "live" : "draft", updatedAt: new Date().toISOString().slice(0, 10) };
    saveProfiles([...loadProfiles(), next]);
    nav({ to: "/app/profiles" });
  }

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Créer un profil</h1>
          <p>Quatre étapes rapides. Vous pourrez tout modifier plus tard.</p>
        </div>
      </div>

      <div className="wizard-steps">
        {STEPS.map((s, i) => (
          <div key={s} className={`wizard-step ${i === step ? "active" : ""}`}>
            <span className="num">{i + 1}</span>{s}
          </div>
        ))}
      </div>

      <div className="wizard">
        <div className="card" style={{ padding: 28 }}>
          {step === 0 && (
            <>
              <h2 style={{ fontSize: 22, marginBottom: 6 }}>Choisissez un template</h2>
              <p className="muted" style={{ marginBottom: 20 }}>Vous pourrez changer plus tard — vos données ne bougeront pas.</p>
              <div className="template-pick">
                {TEMPLATES.map((t) => (
                  <div key={t.id}
                    className={`template-pick-card ${profile.template === t.id ? "selected" : ""}`}
                    onClick={() => set("template", t.id)}>
                    <div className="swatch" style={{
                      background: t.id === "gradient" ? "var(--grad-warm)"
                        : t.id === "bold" ? "var(--ink)"
                        : "var(--surface-2)",
                    }} />
                    <strong>{t.name}</strong>
                    <span className="muted" style={{ fontSize: 13 }}>{t.description}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 style={{ fontSize: 22, marginBottom: 20 }}>Vos informations</h2>
              <div className="stack gap-16">
                <div className="row">
                  <div className="field"><label>Prénom</label><input className="input" value={profile.firstName} onChange={(e) => set("firstName", e.target.value)} /></div>
                  <div className="field"><label>Nom</label><input className="input" value={profile.lastName} onChange={(e) => set("lastName", e.target.value)} /></div>
                </div>
                <div className="row">
                  <div className="field"><label>Poste</label><input className="input" value={profile.jobTitle} onChange={(e) => set("jobTitle", e.target.value)} /></div>
                  <div className="field"><label>Entreprise</label><input className="input" value={profile.company} onChange={(e) => set("company", e.target.value)} /></div>
                </div>
                <div className="field"><label>Bio</label><textarea className="textarea" value={profile.bio} onChange={(e) => set("bio", e.target.value)} /></div>
                <div className="field"><label>URL de la photo de profil</label><input className="input" value={profile.avatar} onChange={(e) => set("avatar", e.target.value)} /></div>
                <div className="row">
                  <div className="field"><label>E-mail</label><input className="input" value={profile.email} onChange={(e) => set("email", e.target.value)} /></div>
                  <div className="field"><label>Téléphone</label><input className="input" value={profile.phone} onChange={(e) => set("phone", e.target.value)} /></div>
                </div>
                <div className="row">
                  <div className="field"><label>WhatsApp</label><input className="input" value={profile.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} /></div>
                  <div className="field"><label>Site web</label><input className="input" value={profile.website} onChange={(e) => set("website", e.target.value)} /></div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 style={{ fontSize: 22, marginBottom: 6 }}>Visibilité</h2>
              <p className="muted" style={{ marginBottom: 20 }}>Choisissez ce que vous souhaitez partager publiquement.</p>
              <div className="stack gap-12">
                {(["email", "phone", "whatsapp", "website", "socials"] as const).map((k) => (
                  <div key={k} className="card card-soft" style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 500, textTransform: "capitalize" }}>{k}</div>
                      <div className="muted" style={{ fontSize: 13 }}>Visible sur votre profil public</div>
                    </div>
                    <label className="toggle">
                      <input type="checkbox" checked={profile.visibility[k]} onChange={(e) => setVis(k, e.target.checked)} />
                      <span className="slider" />
                    </label>
                  </div>
                ))}
              </div>
              <div className="field" style={{ marginTop: 20 }}>
                <label>URL du profil</label>
                <div className="input" style={{ background: "var(--surface-2)", display: "flex", alignItems: "center" }}>
                  <span className="muted">tqui.fr/p/</span><strong>{profile.slug}</strong>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 style={{ fontSize: 22, marginBottom: 6 }}>Aperçu final</h2>
              <p className="muted" style={{ marginBottom: 20 }}>C'est exactement ce que les gens verront.</p>
              <div style={{ background: "var(--surface-2)", borderRadius: 16, padding: 24, display: "grid", placeItems: "center" }}>
                <ProfileRenderer profile={profile} />
              </div>
            </>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28 }}>
            <button className="btn btn-ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>← Retour</button>
            {step < STEPS.length - 1
              ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Continuer →</button>
              : <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-outline" onClick={() => publish(false)}>Enregistrer brouillon</button>
                  <button className="btn btn-primary" onClick={() => publish(true)}>Publier le profil</button>
                </div>}
          </div>
        </div>

        <aside className="wizard-preview">
          <ProfileRenderer profile={profile} />
        </aside>
      </div>
    </>
  );
}
