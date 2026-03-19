import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales — GreenCart",
  description:
    "Mentions légales du site GreenCart : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  const lastUpdate = "19/03/2026";

  return (
    <main className="page-transition legal-page">
      <div className="container">
        <header className="legal-header">
          <span className="badge badge--promo">Légal</span>
          <h1 className="legal-title">Mentions Légales</h1>
          <p className="muted">Dernière mise à jour : {lastUpdate}</p>
        </header>

        <section className="section">
          <div className="card legal-toc">
            <h2>Sommaire</h2>
            <ul className="legal-list">
              <li><a href="#editeur">1. Éditeur du site</a></li>
              <li><a href="#hebergeur">2. Hébergeur</a></li>
              <li><a href="#propriete">3. Propriété intellectuelle</a></li>
              <li><a href="#responsabilite">4. Responsabilité</a></li>
              <li><a href="#donnees">5. Données personnelles</a></li>
              <li><a href="#cookies">6. Cookies</a></li>
              <li><a href="#liens">7. Liens hypertextes</a></li>
              <li><a href="#droit">8. Droit applicable</a></li>
              <li><a href="#contact">9. Contact</a></li>
            </ul>
          </div>

          <div className="card" id="editeur">
            <h2>1. Éditeur du site</h2>
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
              confiance dans l&apos;économie numérique (LCEN), le présent site internet{" "}
              <em>https://greencartfrontend-six.vercel.app</em> est édité par :
            </p>
            <ul className="legal-list" style={{ marginTop: "var(--space-3)" }}>
              <li><strong>Raison sociale</strong> : Greencart (SAS)</li>
              <li><strong>Siège social</strong> : 12 rue des Circuits Courts, 75010 Paris, France</li>
              <li><strong>SIRET</strong> : 912 345 678 00019</li>
              <li><strong>Directeur de la publication</strong> : <em>Greencart</em></li>
              <li>
                <strong>Email</strong> :{" "}
                <a href="mailto:contact@greencart.fr">contact@greencart.fr</a>
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="hebergeur">
            <h2>2. Hébergeur</h2>
            <p>Le site est hébergé par :</p>
            <ul className="legal-list" style={{ marginTop: "var(--space-3)" }}>
              <li><strong>Société</strong> : Vercel Inc.</li>
              <li><strong>Adresse</strong> : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>
                <strong>Site web</strong> :{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                  https://vercel.com
                </a>
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="propriete">
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, icônes,
              vidéos, design, architecture) est la propriété exclusive de{" "}
              <em>Greencart</em> ou de ses partenaires, et est protégé par les lois françaises
              et internationales relatives à la propriété intellectuelle.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              Toute reproduction, représentation, modification, publication ou adaptation de
              tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
              est interdite sauf autorisation écrite préalable de <em>Greencart</em>.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              Toute exploitation non autorisée du site ou de son contenu sera considérée comme
              constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="responsabilite">
            <h2>4. Responsabilité</h2>
            <p>
              <em>Greencart</em> s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur ce site. Toutefois, <em>Greencart</em> ne peut garantir
              l&apos;exactitude, la complétude ou l&apos;actualité des informations mises à disposition.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              En conséquence, l&apos;utilisateur reconnaît utiliser ces informations sous sa
              responsabilité exclusive. <em>Greencart</em> ne saurait être tenu responsable de
              tout dommage direct ou indirect résultant de l&apos;accès au site ou de l&apos;utilisation
              des informations qui y sont publiées.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              <em>Greencart</em> se réserve le droit de modifier ou d&apos;interrompre, temporairement
              ou de manière permanente, tout ou partie du site sans préavis.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="donnees">
            <h2>5. Données personnelles</h2>
            <p>
              Dans le cadre de l&apos;utilisation du site, des données personnelles peuvent être
              collectées. Conformément au Règlement Général sur la Protection des Données
              (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978,
              l&apos;utilisateur dispose des droits suivants :
            </p>
            <ul className="legal-list" style={{ marginTop: "var(--space-3)" }}>
              <li>Droit d&apos;accès à ses données personnelles ;</li>
              <li>Droit de rectification des données inexactes ;</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli ») ;</li>
              <li>Droit d&apos;opposition au traitement ;</li>
              <li>Droit à la limitation du traitement ;</li>
              <li>Droit à la portabilité des données.</li>
            </ul>
            <p style={{ marginTop: "var(--space-3)" }}>
              Pour exercer ces droits, l&apos;utilisateur peut contacter :{" "}
              <a href="mailto:contact@greencart.fr">contact@greencart.fr</a>.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              Pour plus d&apos;informations sur la gestion des données personnelles, consultez notre{" "}
              <Link href="/privacy">Politique de confidentialité</Link>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="cookies">
            <h2>6. Cookies</h2>
            <p>
              Le site utilise des cookies afin d&apos;améliorer l&apos;expérience utilisateur et de
              réaliser des statistiques de visites. Conformément à la réglementation applicable,
              le dépôt de cookies non essentiels est soumis au consentement préalable de
              l&apos;utilisateur.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              L&apos;utilisateur peut à tout moment configurer ses préférences en matière de cookies
              via le bandeau de consentement affiché lors de sa première visite, ou en modifiant
              les paramètres de son navigateur.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="liens">
            <h2>7. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Ces liens sont fournis à
              titre informatif. <em>Greencart</em> n&apos;exerce aucun contrôle sur le contenu de
              ces sites et décline toute responsabilité quant aux informations qui y sont
              publiées.
            </p>
            <p style={{ marginTop: "var(--space-3)" }}>
              La création de liens hypertextes pointant vers le site de <em>Greencart</em>
              est soumise à l&apos;accord préalable et écrit de l&apos;éditeur.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="droit">
            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige
              relatif à l&apos;interprétation ou à l&apos;exécution des présentes, les tribunaux français
              seront seuls compétents.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="contact">
            <h2>9. Contact</h2>
            <ul className="legal-list">
              <li>Éditeur : <em>Greencart (SAS)</em></li>
              <li>Adresse : <em>12 rue des Circuits Courts, 75010 Paris, France</em></li>
              <li>
                Email :{" "}
                <a href="mailto:contact@greencart.fr">contact@greencart.fr</a>
              </li>
            </ul>
          </div>

          <div className="banner">
            <p className="muted">Consulter nos autres pages légales</p>
            <div className="nav-actions">
              <Link className="btn btn--secondary" href="/cgv">
                Voir les CGV
              </Link>
              <Link className="btn btn--ghost" href="/">
                Retour accueil
              </Link>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}