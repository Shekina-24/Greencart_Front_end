import { fetchDonations } from "@/lib/services/donations";
import DonationCard from "@/components/solidaire/DonationCard";
import DonationForm from "@/components/solidaire/DonationForm";

export const metadata = { title: "Espace Solidaire | GreenCart" };

export default async function SolidairePage() {
  const donations = await fetchDonations().catch(() => []);
  const available = donations.filter(d => d.status === "available");

  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <section className="hero" style={{ marginBottom: "2rem" }}>
        <div className="hero-content">
          <h1>🤝 Espace Solidaire</h1>
          <p>
            Les producteurs donnent leurs invendus à ceux qui en ont besoin.
            Étudiants, familles — réservez gratuitement des produits frais et locaux.
          </p>
        </div>
      </section>

      <div className="hero-kpis" style={{ marginBottom: "2rem" }}>
        <div className="kpi-card">
          <span>Dons disponibles</span>
          <strong>{available.length}</strong>
        </div>
        <div className="kpi-card">
          <span>Total des dons</span>
          <strong>{donations.length}</strong>
        </div>
      </div>

      <DonationForm />

      <h2 style={{ marginBottom: "1rem" }}>Dons disponibles</h2>
      {available.length === 0 ? (
        <p style={{ color: "var(--gc-muted)" }}>
          {"Aucun don disponible pour l'instant. Revenez bientôt !"}
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {available.map(d => <DonationCard key={d.id} donation={d} />)}
        </div>
      )}
    </main>
  );
}