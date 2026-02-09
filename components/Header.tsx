'use client';

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { apiFetch } from "@/lib/api";

import { useAuth } from "@/hooks/useAuth";



interface CurrentUser {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  region?: string;
  role?: "consumer" | "producer" | "admin" | string;
  consentNewsletter?: boolean;
  consentAnalytics?: boolean;
}

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  isScrolled: boolean;
}

const ROLE_LABEL: Record<string, string> = {
  consumer: "Consommateur",
  producer: "Producteur",
  admin: "Admin",
};

type NavLink = { label: string; href: string };

const BASE_NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Valeurs", href: "/valeurs" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Producteurs", href: "/producteurs" },
  { label: "Aide", href: "/aide" },
];

const ROLE_NAV_LINKS: Record<string, NavLink[]> = {
  consumer: [
    { label: "Compte", href: "/compte" },
    { label: "Commandes", href: "/compte/commandes" },
    { label: "Impact", href: "/compte/impact" },
  ],
  producer: [
    { label: "Dashboard", href: "/producteurs/dashboard" },
    { label: "Produits", href: "/producteurs/produits" },
    { label: "Commandes", href: "/producteurs/commandes" },
  ],
  admin: [
    { label: "Analytics", href: "/admin/analytics" },
    { label: "Utilisateurs", href: "/admin/utilisateurs" },
  ],
};

export default function Header({
  cartCount,
  onOpenCart,
  onOpenLogin,
  onOpenRegister,
  isScrolled,
}: HeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const { user, logout, isAuthenticating } = useAuth();


  const roleLinks = useMemo(
    () => (currentUser?.role ? ROLE_NAV_LINKS[currentUser.role] ?? [] : []),
    [currentUser]
  );

  const navLinks = useMemo<NavLink[]>(() => {
    // si connecté, on montre la nav du rôle
    if (currentUser?.role) return roleLinks;
    return BASE_NAV_LINKS;
  }, [currentUser, roleLinks]);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // optionnel : reset state pour éviter un flash
    setCurrentUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    let cancelled = false;

    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchUser = async () => {
      try {
        // ✅ appelle FastAPI: /api/v1/auth/me (via apiFetch)
        const data = await apiFetch<{ user: CurrentUser }>("/auth/me", {
          authToken: token,
          method: "GET",
        });

        if (cancelled) return;
        setCurrentUser(data.user);
      } catch (err: any) {
        // Si token invalide/expiré -> on nettoie
        const status = typeof err?.status === "number" ? err.status : null;
        if (status === 401 || status === 403) {
          localStorage.removeItem("token");
        }
        // On ne spam pas la console si c'est juste un token expiré
        if (status !== 401 && status !== 403) {
          console.error("Erreur récupération utilisateur :", err);
        }
      }
    };

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container nav">
        <div className="brand">
          <Image
            src="/images/logo.png"
            alt="Logo GreenCart"
            className="logo"
            width={44}
            height={44}
          />
          <Link href="/" className="brand-name" onClick={closeMenu}>
            GreenCart
          </Link>
        </div>

        <button
          className="header-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`header-menus${isMenuOpen ? " is-open" : ""}`}>
          <nav className="navlinks">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            {currentUser ? (
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button
                  className="btn btn--ghost"
                  onClick={() => {
                    onOpenCart();
                    closeMenu();
                  }}
                >
                  Panier ({cartCount})
                </button>

                <span style={{ color: "green", fontWeight: "bold" }}>
                  {currentUser.firstName} {currentUser.lastName}
                </span>

                <span className="badge badge--ghost">
                  {ROLE_LABEL[currentUser.role ?? ""] ?? "Utilisateur"}
                </span>

                <button className="btn btn--primary" onClick={handleLogout}>
                  Se déconnecter
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  className="btn btn--ghost"
                  onClick={() => {
                    onOpenCart();
                    closeMenu();
                  }}
                >
                  Panier ({cartCount})
                </button>
                <button
                  className="btn btn--ghost"
                  onClick={() => {
                    onOpenLogin();
                    closeMenu();
                  }}
                >
                  Se connecter
                </button>
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    onOpenRegister();
                    closeMenu();
                  }}
                >
                  Créer un compte
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
