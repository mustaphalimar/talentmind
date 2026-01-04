import { NextResponse } from "next/server";

const pillars = [
  {
    id: 1,
    title: "Conseil RH & stratégie du capital humain",
    icon: "Briefcase",
    content:
      "Nous accompagnons les entreprises dans la définition et l'optimisation de leur stratégie RH : organisation, gestion des talents, performance, conduite du changement et alignement avec les objectifs business.",
  },
  {
    id: 2,
    title: "TalentMind Hub",
    icon: "Brain",
    content:
      "TalentMind Hub est une plateforme intelligente dédiée au recrutement et au pilotage RH. Elle intègre une CVthèque avancée, du matching par IA et des tableaux de bord pour une prise de décision rapide et éclairée.",
  },
  {
    id: 3,
    title: "Accompagnement des filiales au Maroc",
    icon: "Building2",
    content:
      "Nous assistons les entreprises dans l'implantation et la gestion de leurs filiales au Maroc : structuration RH, formation, gestion administrative et accompagnement opérationnel local.",
  },
];

export async function GET() {
  return NextResponse.json(pillars);
}
