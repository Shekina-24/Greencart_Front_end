'use client';

import Modal from "./Modal";

interface ProducerBenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
} 

export default function ProducerBenefitsModal({ isOpen, onClose }: ProducerBenefitsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Devenir producteur partenaire"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <p style={{ margin: 0 }}>
          Rejoignez notre communauté de producteurs responsables et développez votre business de manière durable.
        </p>

        <div>
          <h4 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>✓ Avantages pour vous :</h4>
          <ul style={{ margin: 0, paddingLeft: "var(--space-3)", lineHeight: 1.8 }}>
            <li><strong>Accès direct aux consommateurs</strong> - Sans intermédiaires, pour maximiser vos marges</li>
            <li><strong>Visibilité régionale</strong> - Atteignez des clients dans votre région qui recherchent des produits locaux</li>
            <li><strong>Réduction du gaspillage</strong> - Vendre directement signifie moins de pertes et de surproduction</li>
            <li><strong>Suivi d'impact</strong> - Suivez l'impact carbone de vos livraisons et communiquez vos efforts durables</li>
            <li><strong>Outils de gestion</strong> - Tableau de bord complet pour gérer vos produits, commandes et recommandations</li>
            <li><strong>Communauté d'entrepreneurs</strong> - Connectez-vous avec d'autres producteurs partenaires</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>📋 Comment ça marche :</h4>
          <ol style={{ margin: 0, paddingLeft: "var(--space-3)", lineHeight: 1.8 }}>
            <li><strong>Inscription</strong> - Créez votre compte producteur en quelques minutes</li>
            <li><strong>Vérification</strong> - Notre équipe valide votre profil et vos documents</li>
            <li><strong>Configuration</strong> - Ajoutez vos produits, horaires de livraison et zones de couverture</li>
            <li><strong>Lancement</strong> - Commencez à vendre et à servir les consommateurs locaux</li>
            <li><strong>Croissance</strong> - Analysez vos données et optimisez votre offre</li>
          </ol>
        </div>

        <div style={{ backgroundColor: "var(--green-50, #f0fdf4)", padding: "var(--space-3)", borderRadius: "var(--radius-md, 8px)" }}>
          <p style={{ margin: 0, fontSize: "var(--fs-small)" }}>
            💚 <strong>Mission partagée :</strong> Ensemble, créons une alimentation plus responsable et réduisons l'impact environnemental du système alimentaire.
          </p>
        </div>
      </div>
    </Modal>
  );
}
