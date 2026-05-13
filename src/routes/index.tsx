import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProfileRenderer } from "@/templates/ProfileRenderer";
import { initialProfiles, TEMPLATES } from "@/data/profiles";
import "@/styles/landing.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tqui — Votre identité professionnelle, en un geste" },
      { name: "description", content: "Belles cartes de visite numériques propulsées par NFC et QR codes. Conçu en France pour les pros modernes." },
      { property: "og:title", content: "Tqui — Votre identité professionnelle, en un geste" },
      { property: "og:description", content: "Belles cartes de visite numériques propulsées par NFC et QR codes." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const showcase = initialProfiles;
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="eyebrow"><span className="dot" />Fait en France · Utilisé dans 47 pays</span>
            <h1 className="display">
              Votre identité,<br /><em>en un geste.</em>
            </h1>
            <p className="lead" style={{ marginTop: 20 }}>
              Tqui transforme votre carte de visite en un profil vivant et élégant.
              Partagez-le instantanément par NFC, QR code ou un simple lien — sans application.
            </p>
            <div className="hero-cta">
              <Link to="/register" className="btn btn-primary btn-lg btn-shine">Créer mon Tqui →</Link>
              <Link to="/login" className="btn btn-ghost btn-lg">Voir la démo</Link>
            </div>
            <div className="hero-meta">
              <div><strong>4,9 / 5</strong><span>2 400 avis</span></div>
              <div><strong>120k+</strong><span>profils créés</span></div>
              <div><strong>0,3s</strong><span>temps de partage moyen</span></div>
            </div>
          </div>
          <div className="hero-phone fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <ProfileRenderer profile={showcase[0]} />
              </div>
            </div>
            <div className="floating-card card">
              <div className="ping" />
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Tap NFC détecté</div>
                <div style={{ fontWeight: 600 }}>Profil partagé ✓</div>
              </div>
            </div>
            <div className="floating-card card card-2">
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Cette semaine</div>
              <div style={{ fontWeight: 600 }}>+128 vues de profil</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <div className="container">
          <p className="muted text-center" style={{ fontSize: 13, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 20 }}>
            Utilisé par des équipes chez
          </p>
          <div className="logos-row logos-scroll">
            {["Veltra", "Studio Nord", "Halonn", "Pennylane", "Alma", "Doctolib", "Qonto", "Shine"].map((n) => (
              <div key={n} className="logo-name">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pourquoi Tqui</span>
            <h2 className="h2">Une poignée de main moderne,<br />réinventée pour 2026.</h2>
            <p className="lead" style={{ marginTop: 12, color: "var(--muted)", maxWidth: 540, margin: "16px auto 0" }}>
              Fini les cartes perdues, les contacts oubliés et les profils obsolètes. Tqui vit avec vous.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="card feature-card" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: 15 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-alt" id="how">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Comment ça marche</span>
            <h2 className="h2">Prêt en 3 étapes.</h2>
          </div>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: 15 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="section" id="templates">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Templates</span>
            <h2 className="h2">Trois styles. Un seul vous.</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Changez de template en un clic. Vos informations restent les mêmes — seul le style change.
            </p>
          </div>
          <div className="templates-grid">
            {showcase.map((p) => (
              <div key={p.id} className="template-card">
                <div className="template-frame">
                  <ProfileRenderer profile={p} />
                </div>
                <div className="template-meta">
                  <strong>{TEMPLATES.find((t) => t.id === p.template)?.name}</strong>
                  <span className="muted">{TEMPLATES_FR.find((t) => t.id === p.template)?.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt" id="temoignages">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Témoignages</span>
            <h2 className="h2">Ce qu'ils en disent.</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card testimonial-card">
                <div className="stars">{"★★★★★"}</div>
                <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.65 }}>"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Tarifs</span>
            <h2 className="h2">Simple, français, honnête.</h2>
          </div>
          <div className="pricing-grid">
            {PLANS.map((p) => (
              <div key={p.name} className={`card pricing-card ${p.featured ? "featured" : ""}`}>
                {p.featured && <div className="pricing-tag">Le plus populaire</div>}
                <h3>{p.name}</h3>
                <div className="pricing-price">
                  <span className="amount">€{p.price}</span>
                  <span className="muted">/mois</span>
                </div>
                <p className="muted" style={{ fontSize: 14 }}>{p.tag}</p>
                <hr className="divider" style={{ margin: "20px 0" }} />
                <ul className="pricing-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/register" className={`btn ${p.featured ? "btn-primary" : "btn-outline"} btn-block`} style={{ marginTop: 24 }}>
                  Commencer avec {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div className="container faq-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="h2" style={{ marginTop: 12 }}>Des questions ?<br />Voici les réponses.</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <p className="muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-card card">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="h2" style={{ marginTop: 12 }}>Parlez à un humain.</h2>
              <p className="muted" style={{ marginTop: 12, maxWidth: 360 }}>
                Vous équipez une équipe de 10 personnes ou plus ? Nous vous aidons à intégrer, personnaliser et livrer les cartes physiques en une semaine.
              </p>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Merci — on revient vers vous rapidement."); }}>
              <div className="row">
                <div className="field"><label>Nom</label><input className="input" required /></div>
                <div className="field"><label>E-mail professionnel</label><input className="input" type="email" required /></div>
              </div>
              <div className="field"><label>Comment pouvons-nous vous aider ?</label><textarea className="textarea" /></div>
              <button className="btn btn-primary">Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

const FEATURES = [
  { icon: "⚡", title: "Partage instantané par tap", desc: "Appuyez votre Tqui NFC sur n'importe quel téléphone. Sans appli, sans configuration — juste votre profil." },
  { icon: "🎨", title: "Templates élégants", desc: "Des designs soignés à la main. Changez de style sans perdre vos informations." },
  { icon: "📱", title: "Mobile-first by design", desc: "Chaque profil est optimisé pour l'appareil que vos contacts utilisent vraiment." },
  { icon: "🔒", title: "Vous contrôlez ce qui est affiché", desc: "Activez ou désactivez téléphone, e-mail, réseaux et liens — pour chaque profil." },
  { icon: "🪄", title: "Brouillons & mode live", desc: "Peaufinez votre profil en privé. Publiez-le quand vous êtes prêt." },
  { icon: "🌍", title: "QR code partout", desc: "Un QR code unique est généré automatiquement pour vos affiches, e-mails et présentations." },
];

const STEPS = [
  { title: "Créez votre profil", desc: "Remplissez vos informations, choisissez un template et personnalisez votre couleur en moins de 2 minutes." },
  { title: "Partagez votre identité", desc: "Tap NFC, scan QR ou envoyez simplement votre lien. Aucune application requise pour vos contacts." },
  { title: "Suivez vos performances", desc: "Consultez vos vues, taps et contacts sauvegardés directement depuis votre tableau de bord." },
];

const TEMPLATES_FR = [
  { id: "gradient", description: "Couverture dégradée chaleureuse avec détails vitreux. Idéal pour les créatifs." },
  { id: "minimal", description: "Épuré, éditorial, mobile-first. Parfait pour les cadres et consultants." },
  { id: "bold", description: "Typographie affirmée sur fond uni. Idéal pour les fondateurs et designers." },
];

const TESTIMONIALS = [
  { text: "Nous avons remplacé 6 000 cartes papier avec Tqui. Les équipes commerciales ont adoré le retour immédiat.", name: "Marie Dubois", role: "VP Sales, Veltra" },
  { text: "La configuration a pris 90 secondes. Mes équipes avaient des cartes NFC brandées sur leur bureau dès vendredi.", name: "Julien Marchand", role: "CEO, Halonn" },
  { text: "Un outil pensé pour les pros français. Simple, rapide, et vraiment élégant.", name: "Sophie Blanc", role: "Brand Lead, Studio Nord" },
];

const PLANS = [
  { name: "Starter", price: 0, tag: "Pour les étudiants et freelances.", features: ["1 profil", "QR code Tqui", "Templates de base", "Branding Tqui"], featured: false },
  { name: "Pro", price: 6, tag: "Pour les professionnels actifs.", features: ["3 profils", "Tous les templates", "Couleur d'accent personnalisée", "Suppression du branding", "Analytiques de profil"], featured: true },
  { name: "Team", price: 18, tag: "Par siège. Pour les organisations.", features: ["Profils illimités", "Commandes NFC groupées", "Kit marque & logos", "Administration", "Support prioritaire"], featured: false },
];

const FAQ = [
  { q: "Mes contacts ont-ils besoin d'une application ?", a: "Non. Tqui fonctionne sur n'importe quel téléphone moderne — Android ou iPhone — via le lecteur NFC intégré ou l'appareil photo." },
  { q: "Puis-je avoir plusieurs profils ?", a: "Oui. Pro en inclut 3, Team est illimité. Utilisez-en un pour la vente, un autre pour le perso, un autre pour votre projet secondaire." },
  { q: "Que se passe-t-il si je perds ma carte ?", a: "Dépubliez-la depuis votre tableau de bord en un clic. Le lien devient inactif instantanément. Commandez un remplacement au prix coûtant." },
  { q: "Puis-je garder mon propre domaine ?", a: "Oui, sur Team. Connectez lyn.votreentreprise.com et diffusez des profils brandés à chaque collaborateur." },
  { q: "Où sont hébergées mes données ?", a: "Tqui est une société française. Les données sont hébergées en France avec une infrastructure conforme au RGPD." },
];
