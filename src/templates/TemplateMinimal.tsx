import type { Profile } from "@/data/profiles";
import { ActionRow, SaveContact, SocialsRow } from "./_shared";

export function TemplateMinimal({ profile }: { profile: Profile }) {
  return (
    <div className="tpl tpl-min">
      <img className="avatar" src={profile.avatar} alt="" />
      <h1>{profile.firstName} {profile.lastName}</h1>
      <p className="role">{profile.jobTitle} · {profile.company}</p>
      {profile.bio && <p className="bio">{profile.bio}</p>}
      <div style={{ height: 24 }} />
      <ActionRow profile={profile} />
      <SaveContact />
      <SocialsRow profile={profile} />
    </div>
  );
}
