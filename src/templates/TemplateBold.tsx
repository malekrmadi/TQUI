import type { Profile } from "@/data/profiles";
import { ActionRow, SaveContact, SocialsRow } from "./_shared";

export function TemplateBold({ profile }: { profile: Profile }) {
  return (
    <div className="tpl tpl-bold">
      <div className="head">
        <img className="avatar" src={profile.avatar} alt="" />
        <h1>{profile.firstName}<br /><em>{profile.lastName}</em></h1>
        <p className="role">{profile.jobTitle} — {profile.company}</p>
      </div>
      {profile.bio && <p className="bio">{profile.bio}</p>}
      <ActionRow profile={profile} />
      <SaveContact />
      <SocialsRow profile={profile} />
    </div>
  );
}
