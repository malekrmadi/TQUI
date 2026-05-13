import type { Profile } from "@/data/profiles";
import { ActionRow, SaveContact, SocialsRow } from "./_shared";

export function TemplateGradient({ profile }: { profile: Profile }) {
  return (
    <div className="tpl tpl-grad">
      <div className="cover" />
      <div className="head">
        <img className="avatar" src={profile.avatar} alt="" />
        <h1>{profile.firstName} {profile.lastName}</h1>
        <p className="role">{profile.jobTitle}</p>
        <span className="company">{profile.company}</span>
      </div>
      {profile.bio && <p className="bio">{profile.bio}</p>}
      <div style={{ height: 18 }} />
      <ActionRow profile={profile} />
      <SaveContact />
      <SocialsRow profile={profile} />
    </div>
  );
}
