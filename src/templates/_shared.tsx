import type { Profile } from "@/data/profiles";

export function ActionRow({ profile }: { profile: Profile }) {
  const v = profile.visibility;
  return (
    <div className="tpl-actions">
      {v.phone && (
        <a className="tpl-action" href={`tel:${profile.phone}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          Call
        </a>
      )}
      {v.email && (
        <a className="tpl-action" href={`mailto:${profile.email}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          Email
        </a>
      )}
      {v.whatsapp && (
        <a className="tpl-action" href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp
        </a>
      )}
      {v.website && (
        <a className="tpl-action" href={`https://${profile.website}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
          Web
        </a>
      )}
    </div>
  );
}

export function SocialsRow({ profile }: { profile: Profile }) {
  if (!profile.visibility.socials || profile.socials.length === 0) return null;
  return (
    <div className="tpl-socials">
      {profile.socials.map((s) => (
        <a key={s.platform} href={s.url} title={s.platform}>{s.platform.slice(0, 2)}</a>
      ))}
    </div>
  );
}

export function SaveContact() {
  return (
    <button className="tpl-save" onClick={() => alert("Contact saved (demo).")}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
      Save to contacts
    </button>
  );
}
