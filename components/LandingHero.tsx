'use client';

import Link from "next/link";

interface LandingHeroProps {
  onOpenRegister: () => void;
}

export default function LandingHero({ onOpenRegister }: LandingHeroProps) {
  return (
    <section className="landing-hero" aria-labelledby="landing-hero-title">
      <div className="landing-hero__media" role="presentation" />
      <div className="landing-hero__content container">
        <div className="landing-hero__inner">
          <div className="badge badge--landing">Circuit court, anti-gaspi</div>
          <h1 id="landing-hero-title">
            Produits frais, au plus pres de chez vous.
          </h1>
          <p>
            Reliez-vous directement aux producteurs responsables, reduisez le gaspillage et suivez l impact carbone de
            chaque commande.
          </p>
          <div className="landing-hero__actions">
            <Link className="btn btn--landing-primary" href="/catalogue">
              Explorer le catalogue
            </Link>
            {/* ✅ Remplace la pop-in par un lien vers la page dédiée */}
            <Link className="btn btn--primary" href="/devenir-producteur">
              Devenir producteur partenaire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}