import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devenir producteur partenaire — GreenCart",
  description:
    "Rejoignez le réseau GreenCart : vendez vos produits locaux en direct, réduisez le gaspillage et bénéficiez d'outils IA pour anticiper vos ventes. Inscription gratuite.",
  robots: { index: true, follow: true },
};

export default function DevenirProducteurPage() {
  return (
    <main className="page-transition">
      <div className="container">

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="section">
          <header style={{ display: "grid", gap: "var(--space-3)" }}>
            <span className="badge badge--impact">Espace producteur</span>
            <h1 style={{ fontSize: "var(--fs-display)", lineHeight: "var(--lh-display)", margin: 0 }}>
              Rejoignez le réseau GreenCart
            </h1>
            <p className="muted" style={{ fontSize: "18px", maxWidth: "640px" }}>
              Vendez vos produits locaux directement aux consommateurs, réduisez votre gaspillage
              et développez votre activité grâce à nos outils numériques sobres.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
              <Link className="btn btn--primary" href="/producteurs">
                Démarrer mon inscription
              </Link>
              <Link className="btn btn--secondary" href="/catalogue">
                Voir le catalogue
              </Link>
            </div>
          </header>
        </section>

        {/* ─── Avantages ────────────────────────────────────────── */}
        <section className="section">
          <h2>Pourquoi rejoindre GreenCart ?</h2>
          <div className="grid cards-2">
            <article className="card">
              <h3>💰 Accès direct aux consommateurs</h3>
              <p className="muted">
                Sans intermédiaires, pour maximiser vos marges. Vous fixez vos prix et gérez
                vos disponibilités en temps réel.
              </p>
            </article>
            <article className="card">
              <h3>📍 Visibilité régionale</h3>
              <p className="muted">
                Atteignez des clients dans votre région qui recherchent activement des produits
                locaux et de saison.
              </p>
            </article>
            <article className="card">
              <h3>♻️ Réduction du gaspillage</h3>
              <p className="muted">
                Vendre directement signifie moins de pertes et de surproduction. Notre IA
                vous aide à anticiper la demande sur 4 semaines.
              </p>
            </article>
            <article className="card">
              <h3>📊 Suivi d&apos;impact carbone</h3>
              <p className="muted">
                Suivez l&apos;impact carbone de vos livraisons et communiquez vos efforts durables
                à vos clients.
              </p>
            </article>
            <article className="card">
              <h3>🛠️ Outils de gestion complets</h3>
              <p className="muted">
                Tableau de bord pour gérer vos produits, commandes et recommandations.
                Export mensuel automatique pour votre comptabilité.
              </p>
            </article>
            <article className="card">
              <h3>🤝 Communauté d&apos;entrepreneurs</h3>
              <p className="muted">
                Connectez-vous avec d&apos;autres producteurs partenaires et bénéficiez d&apos;un
                accompagnement humain par un coach anti-gaspi.
              </p>
            </article>
          </div>
        </section>

        {/* ─── Comment ça marche ────────────────────────────────── */}
        <section className="section">
          <h2>Comment ça marche ?</h2>
          <div className="grid cards-2">
            <article className="card">
              <h3>1. Inscription</h3>
              <p className="muted">
                Créez votre compte producteur en quelques minutes. Vérification KYC simplifiée
                et import de vos références (CSV/ERP).
              </p>
            </article>
            <article className="card">
              <h3>2. Vérification</h3>
              <p className="muted">
                Notre équipe valide votre profil et vos documents. Un coach anti-gaspi vous
                accompagne dès cette étape.
              </p>
            </article>
            <article className="card">
              <h3>3. Configuration</h3>
              <p className="muted">
                Ajoutez vos produits grâce à notre formulaire guidé, configurez vos horaires
                de livraison et zones de couverture.
              </p>
            </article>
            <article className="card">
              <h3>4. Lancement & croissance</h3>
              <p className="muted">
                Commencez à vendre, analysez vos données et optimisez votre offre grâce aux
                recommandations IA personnalisées.
              </p>
            </article>
          </div>
        </section>

        {/* ─── Fonctionnalités clés ─────────────────────────────── */}
        <section className="section">
          <h2>Fonctionnalités clés</h2>
          <div className="grid cards-2">
            <article className="card">
              <h3>Smart Publishing</h3>
              <p className="muted">
                Formulaire multi-étapes avec compression d&apos;images, suggestions de titres
                et descriptions auto-complétées.
              </p>
            </article>
            <article className="card">
              <h3>Intelligence artificielle</h3>
              <p className="muted">
                Projections de ventes selon la saison, recommandations de lots à mettre en avant
                et clustering client (Découverte, Fidèles éco, Grands paniers, Locavores).
              </p>
            </article>
            <article className="card">
              <h3>Tableau de bord temps réel</h3>
              <p className="muted">
                Suivi des ventes, stocks proches de la DLC, alertes prix et engagements clients
                en un seul endroit.
              </p>
            </article>
            <article className="card">
              <h3>Outils de prévision</h3>
              <p className="muted">
                Anticipez vos surplus probables sur les 4 prochaines semaines pour ajuster
                vos prix et éviter les pertes.
              </p>
            </article>
          </div>
        </section>

        {/* ─── Mission partagée ─────────────────────────────────── */}
        <section className="section">
          <div className="card" style={{ background: "var(--gc-primary-weak)", border: "1px solid var(--gc-primary)" }}>
            <h2 style={{ color: "var(--gc-primary-strong)" }}>💚 Mission partagée</h2>
            <p>
              Ensemble, créons une alimentation plus responsable et réduisons l&apos;impact
              environnemental du système alimentaire. Chaque producteur qui rejoint GreenCart
              contribue directement à un circuit court plus durable.
            </p>
          </div>
        </section>

        {/* ─── CTA final ────────────────────────────────────────── */}
        <section className="section" style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <div className="card">
            <h2>Prêt à rejoindre l&apos;aventure ?</h2>
            <p className="muted">
              L&apos;inscription est gratuite. Commencez à vendre vos produits locaux dès aujourd&apos;hui.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center", marginTop: "var(--space-4)" }}>
              <Link className="btn btn--primary" href="/producteurs">
                Créer mon compte producteur
              </Link>
              <Link className="btn btn--ghost" href="/">
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}