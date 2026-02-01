import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CGU — Conditions Générales d’Utilisation",
  description:
    "Conditions Générales d’Utilisation : accès, compte, règles d’usage, responsabilité, données personnelles.",
  robots: { index: true, follow: true },
};

export default function CGUPage() {
  const lastUpdate = "01/02/2026"; // <-- mets ta vraie date

  return (
    <main className="page-transition legal-page">
      <div className="container">
        <header className="legal-header">
          <span className="badge">Juridique</span>
          <h1 className="legal-title">Conditions Générales d’Utilisation (CGU)</h1>
          <p className="muted">Dernière mise à jour : {lastUpdate}</p>

          {/* <div className="alert alert--info">
            <div className="grid" style={{ gap: "8px" }}>
              <strong>À personnaliser</strong>
              <p>
                Remplace les champs entre crochets : <em>[Nom]</em>, <em>[Adresse]</em>,{" "}
                <em>[Email]</em>, <em>[URL]</em>, etc. Ces CGU sont un modèle.
              </p>
            </div>
          </div> */}
        </header>

        <section className="section">
          <div className="card legal-toc">
            <h2>Sommaire</h2>
            <ul className="legal-list">
              <li>
                <a href="#definitions">1. Définitions</a>
              </li>
              <li>
                <a href="#objet">2. Objet</a>
              </li>
              <li>
                <a href="#acces">3. Accès au service</a>
              </li>
              <li>
                <a href="#compte">4. Compte utilisateur</a>
              </li>
              <li>
                <a href="#usage">5. Règles d’usage</a>
              </li>
              <li>
                <a href="#propriete">6. Propriété intellectuelle</a>
              </li>
              <li>
                <a href="#donnees">7. Données personnelles</a>
              </li>
              <li>
                <a href="#responsabilite">8. Responsabilité</a>
              </li>
              <li>
                <a href="#modifs">9. Modification des CGU</a>
              </li>
              <li>
                <a href="#droit">10. Droit applicable & litiges</a>
              </li>
              <li>
                <a href="#contact">11. Contact</a>
              </li>
            </ul>
          </div>

          <div className="card" id="definitions">
            <h2>1. Définitions</h2>
            <ul className="legal-list">
              <li>
                <strong>Site</strong> : la plateforme accessible via <em>[URL]</em>.
              </li>
              <li>
                <strong>Service</strong> : fonctionnalités proposées (compte, catalogue,
                commande, suivi, etc.).
              </li>
              <li>
                <strong>Utilisateur</strong> : toute personne utilisant le Site/Service.
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="objet">
            <h2>2. Objet</h2>
            <p>
              Les présentes CGU définissent les conditions d’accès et d’utilisation du Site
              et des services associés. En utilisant le Site, l’Utilisateur accepte les CGU.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="acces">
            <h2>3. Accès au service</h2>
            <ul className="legal-list">
              <li>Le Service est fourni “en l’état”.</li>
              <li>
                Certaines fonctionnalités nécessitent un compte (ex : achat, suivi, avis).
              </li>
              <li>
                Le Service peut être suspendu temporairement (maintenance, incident, sécurité).
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="compte">
            <h2>4. Compte utilisateur</h2>
            <ul className="legal-list">
              <li>Vous êtes responsable de vos identifiants et de leur confidentialité.</li>
              <li>Vous vous engagez à fournir des informations exactes et à les maintenir à jour.</li>
              <li>
                En cas de suspicion d’accès frauduleux : contactez <em>[support@email]</em>.
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="usage">
            <h2>5. Règles d’usage</h2>
            <p>Il est notamment interdit de :</p>
            <ul className="legal-list">
              <li>utiliser le Service à des fins illégales, frauduleuses ou nuisibles ;</li>
              <li>contourner des mesures de sécurité, attaquer ou perturber le Site ;</li>
              <li>publier du contenu illicite / diffamatoire / haineux ;</li>
              <li>extraire massivement des données sans autorisation.</li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="propriete">
            <h2>6. Propriété intellectuelle</h2>
            <p>
              Les éléments du Site (design, textes, logos, interfaces, etc.) sont protégés.
              Toute reproduction non autorisée est interdite, sauf mention contraire.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="donnees">
            <h2>7. Données personnelles</h2>
            <p>
              Le traitement des données personnelles est détaillé dans la politique de confidentialité.
              Droits (accès, rectification, suppression, opposition) : <em>[dpo@email]</em>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="responsabilite">
            <h2>8. Responsabilité</h2>
            <p>
              Sauf obligations légales impératives, la responsabilité du Site ne peut être engagée
              pour des dommages indirects ou résultant d’une mauvaise utilisation du Service.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="modifs">
            <h2>9. Modification des CGU</h2>
            <p>
              Les CGU peuvent être modifiées. La version applicable est celle publiée sur le Site
              à la date d’utilisation.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="droit">
            <h2>10. Droit applicable & litiges</h2>
            <p>
              Droit applicable : <em>[France]</em>. En cas de litige : tentative amiable, puis
              juridiction compétente : <em>[Ville]</em>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="contact">
            <h2>11. Contact</h2>
            <ul className="legal-list">
              <li>Éditeur : <em>[Nom / Société]</em></li>
              <li>Adresse : <em>[Adresse]</em></li>
              <li>Email : <em>[support@email]</em></li>
            </ul>
          </div>

          <div className="banner">
            <p className="muted">Besoin des CGV ?</p>
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
