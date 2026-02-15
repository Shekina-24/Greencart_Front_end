"use client";
import type { Donation } from "@/lib/services/donations";
import { reserveDonation } from "@/lib/services/donations";
import { getStoredTokens } from "@/lib/auth/tokens";
import { useState } from "react";

export default function DonationCard({ donation }: { donation: Donation }) {
  const [status, setStatus] = useState(donation.status);
  const [loading, setLoading] = useState(false);

  const handleReserve = async () => {
    const tokens = getStoredTokens();
    if (!tokens) {
      alert("Connectez-vous pour réserver un don");
      return;
    }
    setLoading(true);
    try {
      await reserveDonation(donation.id, tokens.accessToken);
      setStatus("reserved");
    } catch {
      alert("Erreur lors de la réservation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="kpi-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div>
        <span style={{ fontSize: "0.75rem", background: "var(--gc-primary-weak)",
          color: "var(--gc-primary-strong)", borderRadius: 6, padding: "2px 8px" }}>
          {donation.unit ?? "Produit"}
        </span>
      </div>
      <h3 style={{ margin: 0, fontSize: "1rem" }}>{donation.title}</h3>
      {donation.description && (
        <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--gc-muted)" }}>
          {donation.description}
        </p>
      )}
      <div style={{ fontSize: "0.85rem" }}>
        <strong>{donation.quantity} {donation.unit ?? "unités"}</strong>
        {donation.pickup_location && <> · 📍 {donation.pickup_location}</>}
      </div>
      {status === "available" ? (
        <button className="btn" onClick={handleReserve} disabled={loading}
          style={{ marginTop: "auto", cursor: "pointer" }}>
          {loading ? "Réservation..." : "Réserver gratuitement →"}
        </button>
      ) : (
        <span style={{ color: "var(--gc-muted)", fontSize: "0.85rem", marginTop: "auto" }}>
          ✅ Déjà réservé
        </span>
      )}
    </article>
  );
}