import type { Profile } from "@/data/profiles";
import { TemplateMinimal } from "./TemplateMinimal";
import { TemplateGradient } from "./TemplateGradient";
import { TemplateBold } from "./TemplateBold";
import "./templates.css";

export function ProfileRenderer({ profile }: { profile: Profile }) {
  if (profile.template === "gradient") return <TemplateGradient profile={profile} />;
  if (profile.template === "bold") return <TemplateBold profile={profile} />;
  return <TemplateMinimal profile={profile} />;
}
