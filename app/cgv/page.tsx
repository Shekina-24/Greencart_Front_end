import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CGV — Conditions Générales de Vente",
  description:
    "Conditions Générales de Vente : prix, commande, paiement, livraison, rétractation, remboursements, garanties.",
  robots: { index: true, follow: true },
};

export default function CGVPage() {
  const lastUpdate = "01/02/2026"; // <-- mets ta vraie date

  return (
    <main className="page-transition legal-page">
      <div className="container">
        <header className="legal-header">
          <span className="badge badge--promo">Vente</span>
          <h1 className="legal-title">Conditions Générales de Vente (CGV)</h1>
          <p className="muted">Dernière mise à jour : {lastUpdate}</p>

          {/* <div className="alert alert--warning">
            <div className="grid" style={{ gap: "8px" }}>
              <strong>Point critique</strong>
              <p>
                Si tu es une <strong>marketplace</strong> (tiers vendeurs), tes CGV doivent préciser
                qui est le vendeur réel, qui facture, qui livre, et qui gère les retours.
              </p>
            </div>s
          </div> */}
        </header>

        <section className="section">
          <div className="card legal-toc">
            <h2>Sommaire</h2>
            <ul className="legal-list">
              <li><a href="#champ">1. Champ d’application</a></li>
              <li><a href="#produits">2. Produits / services</a></li>
              <li><a href="#prix">3. Prix</a></li>
              <li><a href="#commande">4. Commande</a></li>
              <li><a href="#paiement">5. Paiement</a></li>
              <li><a href="#livraison">6. Livraison / retrait</a></li>
              <li><a href="#retractation">7. Rétractation</a></li>
              <li><a href="#remboursement">8. Remboursements</a></li>
              <li><a href="#garanties">9. Garanties</a></li>
              <li><a href="#litiges">10. Litiges / médiation</a></li>
              <li><a href="#identite">11. Identité du vendeur</a></li>
            </ul>
          </div>

          <div className="card" id="champ">
            <h2>1. Champ d’application</h2>
            <p>
              Les présentes CGV s’appliquent à toute commande passée sur <em>[URL]</em>
              entre <em>[Nom société]</em> (“Vendeur”) et un consommateur (“Client”).
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="produits">
            <h2>2. Produits / services</h2>
            <p>
              Les caractéristiques essentielles (description, prix, disponibilité) figurent sur les fiches.
              En cas d’indisponibilité après commande, le Client est informé.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="prix">
            <h2>3. Prix</h2>
            <ul className="legal-list">
              <li>Prix en <em>[EUR]</em>, TTC, affichés avant validation.</li>
              <li>Frais (livraison/service) indiqués avant paiement.</li>
              <li>
                En cas d’erreur manifeste, le Vendeur peut annuler la commande après information.
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="commande">
            <h2>4. Commande</h2>
            <ul className="legal-list">
              <li>Le Client vérifie le récapitulatif (produits, quantités, prix) avant validation.</li>
              <li>La confirmation est envoyée par e-mail.</li>
              <li>Le Vendeur peut refuser une commande en cas de suspicion de fraude.</li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="paiement">
            <h2>5. Paiement</h2>
            <p>
              Paiement par <em>[Stripe / carte bancaire / PayPal]</em>. La commande est définitive
              après validation du paiement.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="livraison">
            <h2>6. Livraison / retrait</h2>
            <ul className="legal-list">
              <li>Zone : <em>[Zone]</em></li>
              <li>Modalité : <em>[Livraison / Retrait / Les deux]</em></li>
              <li>Délais indicatifs : <em>[X]</em></li>
              <li>
                En cas de retard significatif, le Client peut demander l’annulation selon la loi applicable.
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="retractation">
            <h2>7. Rétractation</h2>
            <p>
              Le Client dispose en principe d’un délai de 14 jours.{" "}
              <strong>Exception importante :</strong> les denrées périssables et certains produits
              peuvent être exclus du droit de rétractation.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="remboursement">
            <h2>8. Remboursements</h2>
            <ul className="legal-list">
              <li>Remboursement via le même moyen de paiement, sous <em>[X]</em> jours.</li>
              <li>Conditions : <em>[produits non consommés / non ouverts / etc.]</em></li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="garanties">
            <h2>9. Garanties</h2>
            <p>
              Les garanties légales s’appliquent (conformité, vices cachés) selon la réglementation.
              Contact : <em>[support@email]</em>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="litiges">
            <h2>10. Litiges / médiation</h2>
            <p>
              En cas de litige : contact support, tentative amiable, puis médiation/tribunal compétent :{" "}
              <em>[Ville]</em>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="identite">
            <h2>11. Identité du vendeur</h2>
            <ul className="legal-list">
              <li>Vendeur : <em>[Nom / Société]</em></li>
              <li>Adresse : <em>[Adresse]</em></li>
              <li>Email : <em>[support@email]</em></li>
              <li>SIRET : <em>[SIRET]</em></li>
            </ul>
          </div>

          <div className="banner">
            <p className="muted">Besoin des CGU ?</p>
            <div className="nav-actions">
              <Link className="btn btn--secondary" href="/cgu">
                Voir les CGU
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
