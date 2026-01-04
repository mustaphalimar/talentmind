import { NextResponse } from "next/server";

const conseilRHList = [
  {
    id: 1,
    text: "Définition de la stratégie RH et organisationnelle",
  },
  {
    id: 2,
    text: "Gestion et développement des talents",
  },
  {
    id: 3,
    text: "Mise en place de processus RH performants",
  },
  {
    id: 4,
    text: "Accompagnement du changement et conduite de transformation",
  },
  {
    id: 5,
    text: "Alignement RH – objectifs business",
  },
];

const talentMindHubList = [
  {
    id: 1,
    text: "CVthèque centralisée et intelligente",
    icon: "Database",
    description: "Centralisez et organisez tous vos CV en un seul endroit",
  },
  {
    id: 2,
    text: "Matching de profils par IA",
    icon: "Sparkles",
    description:
      "Trouvez les candidats parfaits grâce à l'intelligence artificielle",
  },
  {
    id: 3,
    text: "Tableaux de bord RH et indicateurs de performance",
    icon: "BarChart3",
    description: "Visualisez vos métriques RH en temps réel",
  },
  {
    id: 4,
    text: "Aide à la décision basée sur la data",
    icon: "Lightbulb",
    description: "Prenez des décisions éclairées avec l'analyse de données",
  },
];

const servicesMarocList = [
  {
    id: 1,
    text: "Structuration et gestion RH locale",
    description: "Centralisez et organisez tous vos CV en un seul endroit",
  },
  {
    id: 2,
    text: "Recrutement et intégration des équipes",
    description:
      "Trouvez les candidats parfaits grâce à l'intelligence artificielle",
  },
  {
    id: 3,
    text: "Formation et montée en compétences",
    description: "Visualisez vos métriques RH en temps réel",
  },
  {
    id: 4,
    text: "Gestion administrative et opérationnelle",
    description: "Prenez des décisions éclairées avec l'analyse de données",
  },
  {
    id: 5,
    text: "Accompagnement réglementaire et organisationnel",
    description: "Prenez des décisions éclairées avec l'analyse de données",
  },
];

export async function GET() {
  return NextResponse.json({
    conseilRH: conseilRHList,
    talentMindHub: talentMindHubList,
    servicesMaroc: servicesMarocList,
  });
}
