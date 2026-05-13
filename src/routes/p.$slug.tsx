import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ProfileRenderer } from "@/templates/ProfileRenderer";
import { initialProfiles, type Profile } from "@/data/profiles";
import { loadProfiles } from "@/lib/auth";

export const Route = createFileRoute("/p/$slug")({
  head: () => ({ meta: [{ title: "Profil · Tqui" }] }),
  component: PublicProfile,
});

function PublicProfile() {
  const { slug } = Route.useParams();
  const [profile, setProfile] = useState<Profile | undefined>(
    initialProfiles.find((p) => p.slug === slug)
  );

  useEffect(() => {
    const all = loadProfiles();
    const found = all.find((p) => p.slug === slug);
    setProfile(found);
  }, [slug]);

  if (!profile) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
        <div>
          <h1 className="h2">Profil introuvable</h1>
          <p className="muted" style={{ marginTop: 8 }}>Ce profil Tqui n'est pas encore publié ou n'existe pas.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>Retour à Tqui</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", padding: "32px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18, background: "linear-gradient(180deg, var(--bg) 0%, var(--surface-2) 100%)" }}>
      {profile.status === "draft" && (
        <span className="badge badge-draft">Aperçu · non encore publié</span>
      )}
      <ProfileRenderer profile={profile} />
      <Link to="/" style={{ marginTop: 12, fontSize: 13, color: "var(--muted)" }}>
        Propulsé par Tqui
      </Link>
    </div>
  );
}
