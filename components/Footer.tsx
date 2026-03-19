import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <section aria-label="A propos">
          <div className="brand" style={{ marginBottom: "10px" }}>
            <Image src="/images/logo.png" alt="Logo GreenCart" className="logo" width={44} height={44} />
            <strong>GreenCart</strong>
          </div>
          <p className="muted">
            Plateforme sobre qui relie producteurs engages et foyers responsables, avec un suivi d&apos;impact en temps reel.
          </p>
          <ul
            aria-label="Reseaux sociaux"
            style={{
              display: "flex",
              gap: "10px",
              listStyle: "none",
              padding: 0,
              margin: "10px 0 0"
            }}
          >
            <li>
              <a href="https://twitter.com" aria-label="X (Twitter)">
                X
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <section aria-label="Navigation">
          <strong>Navigation</strong>
          <ul className="footer-links">
            <li>
              <Link href={{ pathname: "/", hash: "marque" }}>Plateforme de marque</Link>
            </li>
            <li>
              <Link href="/catalogue">Catalogue</Link>
            </li>
            <li>
              <Link href={{ pathname: "/", hash: "dashboard" }}>Mon impact</Link>
            </li>
            <li>
              <Link href="/producteurs">Espace producteur</Link>
            </li>
            <li>
              <Link href="/aide">Aide &amp; FAQ</Link>
            </li>
          </ul>
        </section>

        {/* ✅ Section légale corrigée */}
        <section aria-label="Légal">
          <strong>Légal</strong>
          <ul className="footer-links">
            <li>
              {/* ✅ Mentions légales → /mentions-legales (nouvelle page) */}
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              {/* ✅ CGV → /cgv (page légalement obligatoire) */}
              <Link href="/cgv">CGV</Link>
            </li>
            <li>
              {/* ℹ️ À brancher sur ta future page /privacy */}
              <Link href="/privacy">Politique de confidentialité</Link>
            </li>
            <li>
              {/* ℹ️ À brancher sur ta future page /cookies */}
              <a href="#">Cookies</a>
            </li>
          </ul>
        </section>

        <section aria-label="Contact">
          <strong>Contact</strong>
          <address style={{ fontStyle: "normal" }}>
            <a href="mailto:hello@greencart.local">hello@greencart.local</a>
            <br />
            Ile-de-France, France
          </address>
          <p className="muted">Support du lundi au vendredi - 9h-18h.</p>
        </section>
      </div>

      <div className="container footer-bottom">
        <span>(c) {year} GreenCart. Tous droits reserves.</span>
        <span>SIREN 000 000 000 - Demonstration.</span>
      </div>
    </footer>
  );
}