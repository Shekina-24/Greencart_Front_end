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
              Les présentes Conditions Générales de Vente (CGV) s’appliquent à toute commande
              passée sur le site internet <em>Greencart</em> (accessible à l’adresse{" "}
              <em>https://greencartfrontend-six.vercel.app</em>), entre la société{" "}
              <em>Greencart</em>, ci-après dénommée le « Vendeur », et toute personne physique
              agissant en qualité de consommateur, ci-après dénommée le « Client ».
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
              <li>Les prix des produits sont indiqués en <em>euros (€)</em>, toutes taxes
                  comprises (TTC), et affichés avant la validation de la commande par le Client.
              </li>
              <li>Les éventuels frais de livraison ou de service sont indiqués avant le paiement
                  et font l’objet d’un récapitulatif présenté au Client avant la validation
                  définitive de la commande.
              </li>
              <li>
                  En cas d’erreur manifeste de prix (prix dérisoire, erreur typographique ou
                  technique), le Vendeur se réserve le droit d’annuler la commande, après en avoir
                  informé le Client dans les meilleurs délais.
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
              Le paiement des commandes s’effectue en ligne par carte bancaire via une solution
              de paiement sécurisée fournie par <em>Stripe</em> ou par tout autre moyen de
              paiement proposé sur le site au moment de la commande. La commande est considérée
              comme définitive uniquement après la validation complète du paiement par
              l’organisme de paiement.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="livraison">
            <h2>6. Livraison / retrait</h2>
            <ul className="legal-list">
              <li>Les produits proposés sur le site Greencart sont disponibles en livraison à
                  domicile et/ou en retrait auprès des producteurs partenaires, selon les options
                  proposées au moment de la commande.
              </li>
              <li>Les zones de livraison ainsi que les modalités de retrait sont précisées lors du
                  processus de commande et peuvent varier en fonction de la localisation du
                  producteur et du Client.
              </li>
              <li>Les délais de livraison ou de mise à disposition sont indiqués à titre indicatif
                  de la commande. Greencart s’efforce de respecter les délais annoncés.
              </li>
              <li>
                En cas de retard significatif non justifié, le Client peut demander l’annulation
                de la commande conformément aux dispositions légales en vigueur.
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
              <li>En cas de remboursement accepté, celui-ci est effectué via le même moyen de
                  paiement que celui utilisé lors de la commande, sauf accord exprès du Client.
              </li>
              <li>Les produits concernés doivent être non consommés, non ouverts, dans leur état
                  d’origine et accompagnés, le cas échéant, de leur emballage d’origine.
              </li>
            </ul>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="garanties">
            <h2>9. Garanties</h2>
            <p>
                Les produits vendus sur le site Greencart bénéficient des garanties légales
                prévues par la réglementation en vigueur, notamment la garantie légale de
                conformité et la garantie contre les vices cachés.
                Contact : <em>contact@greencart.fr</em>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="litiges">
            <h2>10. Litiges / médiation</h2>
            <p>
              En cas de litige, le Client est invité à contacter en priorité le service
              client de <em>Greencart</em> afin de rechercher une solution amiable.
              À défaut d’accord amiable, le Client peut recourir gratuitement à un médiateur
              de la consommation, conformément aux articles L.612-1 et suivants du Code de la
              consommation. À défaut de médiation ou en cas d’échec de celle-ci, tout litige
              sera soumis aux tribunaux compétents de <em>Paris</em>.
            </p>
          </div>

          <hr className="legal-hr" />

          <div className="card" id="identite">
            <h2>11. Identité du vendeur</h2>
            <ul className="legal-list">
              <li>
                Vendeur : <em>Greencart (SAS)</em>
              </li>
              <li>
                Adresse : <em>12 rue des Circuits Courts, 75010 Paris, France</em>
              </li>
              <li>
                Email : <em>contact@greencart.fr</em>
              </li>
              <li>
                SIRET : <em>912 345 678 00019</em>
              </li>
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
