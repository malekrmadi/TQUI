import { createFileRoute } from "@tanstack/react-router";
import { TEMPLATES, initialProfiles } from "@/data/profiles";
import { ProfileRenderer } from "@/templates/ProfileRenderer";

export const Route = createFileRoute("/app/templates")({
  component: Templates,
});

function Templates() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Templates</h1>
          <p>Three handcrafted layouts. Pick one when creating a new profile.</p>
        </div>
      </div>

      <div className="profiles-grid">
        {TEMPLATES.map((t) => {
          const sample = initialProfiles.find((p) => p.template === t.id) ?? initialProfiles[0];
          return (
            <div key={t.id} className="card pcard">
              <div className="pcard-preview" style={{ height: 280 }}>
                <ProfileRenderer profile={{ ...sample, template: t.id }} />
              </div>
              <div style={{ marginTop: 14 }}>
                <strong style={{ fontSize: 16 }}>{t.name}</strong>
                <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>{t.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
