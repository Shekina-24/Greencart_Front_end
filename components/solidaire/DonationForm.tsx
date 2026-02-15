"use client";
import { useState } from "react";
import { createDonation } from "@/lib/services/donations";
import { getStoredTokens } from "@/lib/auth/tokens";

export default function DonationForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "", description: "", quantity: 1, unit: "", pickup_location: ""
  });

  const handleSubmit = async () => {
    const tokens = getStoredTokens();
    if (!tokens) { alert("Connectez-vous pour faire un don"); return; }
    setLoading(true);
    try {
      await createDonation(form, tokens.accessToken);
      alert("Don créé avec succès !");
      setOpen(false);
      setForm({ title: "", description: "", quantity: 1, unit: "", pickup_location: "" });
    } catch {
      alert("Erreur lors de la création du don");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <button className="btn" onClick={() => setOpen(!open)}>
        🎁 Proposer un don
      </button>
      {open && (
        <div className="kpi-card" style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 480 }}>
          <h3 style={{ margin: 0 }}>Créer un don</h3>
          <input className="input" placeholder="Titre (ex: Tomates cerises)" value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })} />
          <input className="input" placeholder="Description" value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })} />
          <input className="input" type="number" placeholder="Quantité" value={form.quantity}
            onChange={e => setForm({ ...form, quantity: Number(e.target.value) })} />
          <input className="input" placeholder="Unité (kg, pièces...)" value={form.unit}
            onChange={e => setForm({ ...form, unit: e.target.value })} />
          <input className="input" placeholder="Lieu de retrait" value={form.pickup_location}
            onChange={e => setForm({ ...form, pickup_location: e.target.value })} />
          <button className="btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Envoi..." : "Publier le don"}
          </button>
        </div>
      )}
    </div>
  );
}