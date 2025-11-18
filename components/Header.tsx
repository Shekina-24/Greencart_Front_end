'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { User } from "@/lib/types";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onLogout: () => void;
  isScrolled: boolean;
  user: User | null;
  isAuthenticating: boolean;
}

export default function Header({
  cartCount,
  onOpenCart,
  onOpenLogin,
  onOpenRegister,
  onLogout,
  isScrolled,
  user,
  isAuthenticating
}: HeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const role = user?.role ?? null;
  const showCart = role !== "producer" && role !== "admin";
  const roleLabel = role === "admin" ? "Admin" : role === "producer" ? "Producteur" : role === "consumer" ? "Consommateur" : null;

  const navLinks = (() => {
    if (role === "consumer") {
      return [
        { label: "Catalogue", href: "/catalogue" },
        { label: "Profil", href: "/compte" },
        { label: "Mes commandes", href: "/compte/commandes" },
        { label: "Mon impact", href: "/compte/impact" },
        { label: "Mes avis", href: "/compte/avis" },
        { label: "Aide", href: "/aide" }
      ];
    }
    if (role === "producer") {
      return [
        { label: "Dashboard", href: "/producteurs/dashboard" },
        { label: "Mes produits", href: "/producteurs/produits" },
        { label: "Commandes", href: "/producteurs/commandes" },
        { label: "Reco IA", href: "/producteurs/recommandations" },
        { label: "Profil", href: "/compte" },
        { label: "Aide", href: "/aide" }
      ];
    }
    if (role === "admin") {
      return [
        { label: "Analytics internes", href: "/admin/analytics" },
        { label: "Tableau BI", href: "/admin/bi" },
        { label: "Données publiques", href: "/admin/public-data" },
        { label: "Rapports", href: "/admin/reports" },
        { label: "Utilisateurs", href: "/admin/utilisateurs" },
        { label: "Catalogue", href: "/catalogue" },
        { label: "Profil", href: "/compte" },
        { label: "Aide", href: "/aide" }
      ];
    }
    // Invité (non connecté)
    return [
      { label: "Valeurs", href: { pathname: "/", hash: "mission" } },
      { label: "Catalogue", href: { pathname: "/", hash: "catalogue" } },
      { label: "Impact", href: { pathname: "/", hash: "impact" } },
      { label: "Producteurs", href: { pathname: "/", hash: "producteurs" } },
      { label: "Aide", href: "/aide" }
    ];
  })();

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container nav">
        <div className="brand">
          <Image src="/images/logo.png" alt="Logo GreenCart" className="logo" width={44} height={44} />
          <Link href="/" className="brand-name" onClick={closeMenu}>
            GreenCart
          </Link>
          {roleLabel ? <span className="badge" style={{ marginLeft: 8 }}>{roleLabel}</span> : null}
        </div>

        <button
          className="header-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="navigation-principale"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={22} strokeWidth={1.5} aria-hidden /> : <Menu size={22} strokeWidth={1.5} aria-hidden />}
          <span className="sr-only">{isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
        </button>

        <div className={`header-menus${isMenuOpen ? " is-open" : ""}`}>
          <nav
            id="navigation-principale"
            className="navlinks"
            role="navigation"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            {showCart ? (
              <button
                className="btn btn--ghost"
                type="button"
                onClick={() => {
                  onOpenCart();
                  closeMenu();
                }}
              >
                Mon panier ({cartCount})
              </button>
            ) : null}
            {user ? (
              <>
                <span className="muted" style={{ fontSize: "var(--fs-small)" }}>
                  Bonjour {user.firstName || user.lastName || user.email} {roleLabel ? `(${roleLabel})` : ""}
                </span>
                <button
                  className="btn btn--ghost"
                  type="button"
                  onClick={() => {
                    onLogout();
                    closeMenu();
                  }}
                >
                  Se deconnecter
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn--ghost"
                  type="button"
                  onClick={() => {
                    onOpenLogin();
                    closeMenu();
                  }}
                  disabled={isAuthenticating}
                >
                  Se connecter
                </button>
                <button
                  className="btn btn--primary"
                  type="button"
                  onClick={() => {
                    onOpenRegister();
                    closeMenu();
                  }}
                  disabled={isAuthenticating}
                >
                  Creer un compte
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
