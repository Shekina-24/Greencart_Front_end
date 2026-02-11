'use client';

import { useEffect, useState, type FormEvent } from "react";
import type { UserRole } from "@/lib/types";
import Modal from "./Modal";

interface AuthModalProps {
  mode: "login" | "register";
  isOpen: boolean;
  onClose: () => void;
}

interface AuthFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  region: string;
  role: UserRole;
  consentNewsletter: boolean;
  consentAnalytics: boolean;
}

const INITIAL_STATE: AuthFormState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  region: "",
  role: "consumer",
  consentNewsletter: false,
  consentAnalytics: false,
};

export default function AuthModal({ mode, isOpen, onClose }: AuthModalProps) {
  const [formState, setFormState] = useState<AuthFormState>(INITIAL_STATE);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormState((current) => ({
        ...INITIAL_STATE,
        role: current.role,
      }));
      setError(null);
      setIsSubmitting(false);
    }
  }, [isOpen, mode]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const {
      email,
      password,
      firstName,
      lastName,
      region,
      role,
      consentNewsletter,
      consentAnalytics,
    } = formState;

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

    if (!API_BASE) {
      setError("API non configurée (NEXT_PUBLIC_API_BASE manquante).");
      setIsSubmitting(false);
      return;
    }

    try {
      if (mode === "login") {
        const res = await fetch(`${API_BASE}/api/v1/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json().catch(() => null);

        if (!res.ok) {
          setError(data?.detail || data?.error || "Erreur de connexion");
          return;
        }

        const token = data?.access_token ?? data?.token;

        if (!token) {
          setError("Connexion réussie mais token manquant.");
          return;
        }

        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        const res = await fetch(`${API_BASE}/api/v1/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            region,
            role,
            consent_newsletter: consentNewsletter,
            consent_analytics: consentAnalytics,
          }),
        });

        const data = await res.json().catch(() => null);

        if (!res.ok) {
          setError(data?.detail || data?.error || "Erreur à l'inscription");
          return;
        }

        window.location.href = "/";
      }

      onClose();
    } catch (err) {
      setError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof AuthFormState, value: string | boolean) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "login" ? "Se connecter" : "Creer un compte"}
    >
      <form className="grid" onSubmit={handleSubmit} style={{ gap: "var(--space-3)" }}>
        {mode === "register" && (
          <>
            <div className="grid" style={{ gap: "var(--space-2)" }}>
              <label className="input-label">
                Prenom
                <input
                  className="input"
                  placeholder="Prenom"
                  value={formState.firstName}
                  onChange={(event) => updateField("firstName", event.target.value)}
                />
              </label>
              <label className="input-label">
                Nom
                <input
                  className="input"
                  placeholder="Nom"
                  value={formState.lastName}
                  onChange={(event) => updateField("lastName", event.target.value)}
                />
              </label>
            </div>

            <label className="input-label">
              Region
              <input
                className="input"
                placeholder="Region (ex: Ile-de-France)"
                value={formState.region}
                onChange={(event) => updateField("region", event.target.value)}
              />
            </label>

            <label className="input-label">
              Type de compte
              <select
                className="select"
                value={formState.role}
                onChange={(event) => updateField("role", event.target.value as UserRole)}
                required
              >
                <option value="consumer">Consommateur</option>
                <option value="producer">Producteur</option>
              </select>
            </label>
          </>
        )}

        <label className="input-label">
          Email
          <input
            className="input"
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </label>

        <label className="input-label">
          Mot de passe
          <input
            className="input"
            type="password"
            value={formState.password}
            onChange={(event) => updateField("password", event.target.value)}
            required
            minLength={8}
          />
        </label>

        {mode === "register" && (
          <div className="grid" style={{ gap: "var(--space-2)" }}>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={formState.consentNewsletter}
                onChange={(event) => updateField("consentNewsletter", event.target.checked)}
              />
              <span>Recevoir les actualites GreenCart</span>
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                checked={formState.consentAnalytics}
                onChange={(event) => updateField("consentAnalytics", event.target.checked)}
              />
              <span>Partager mes donnees d&apos;usage pour le suivi d&apos;impact</span>
            </label>
          </div>
        )}

        {error && (
          <p style={{ color: "#c43d3d", margin: 0, fontSize: "14px" }}>
            {error}
          </p>
        )}

        <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Veuillez patienter..."
            : mode === "login"
            ? "Se connecter"
            : "Creer mon compte"}
        </button>
      </form>
    </Modal>
  );
}
