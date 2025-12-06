export interface LandingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface LandingProducer {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface LandingMetric {
  id: number;
  value: string;
  label: string;
  description: string;
}

export const LANDING_STEPS: LandingStep[] = [
  {
    id: 1,
    title: "Decouvrir les producteurs",
    description: "Parcourez une selection de fermes et artisans engages proches de chez vous.",
    icon: "Store"
  },
  {
    id: 2,
    title: "Composer un panier responsable",
    description: "Ajoutez des produits de saison, optimisez votre impact et validez en quelques clics.",
    icon: "ShoppingCart"
  },
  {
    id: 3,
    title: "Recevoir et savourer",
    description: "Profitez d une logistique sobre et d aliments locaux, frais et anti-gaspi.",
    icon: "Truck"
  }
];

export const LANDING_PRODUCERS: LandingProducer[] = [
  {
    id: 1,
    name: "Ferme des Amandiers",
    location: "Drome, France",
    description:
      "Exploitation familiale convertie au bio depuis 15 ans, specialiste des fruits a coque et huiles locales.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Producteur tenant une cagette d amandes fraiches."
  },
  {
    id: 2,
    name: "Atelier du Levain",
    location: "Lille, France",
    description:
      "Boulangerie artisanale qui valorise les invendus de meuniers locaux pour creer des pains au levain d exception.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Boulanger faconnant une pate sur un plan de travail farine."
  },
  
];

export const LANDING_METRICS: LandingMetric[] = [
  {
    id: 1,
    value: "12 tonnes",
    label: "Invendus sauves",
    description: "Revalorisation annuelle estimee grace aux paniers anti-gaspi."
  },
  {
    id: 2,
    value: "85 %",
    label: "Km alimentaires reduits",
    description: "Comparaison moyenne avec la grande distribution nationale."
  },
  {
    id: 3,
    value: "150+",
    label: "Producteurs accompagnes",
    description: "Reseau pilote equipe d outils d intelligence artificielle sobre."
  }
];
