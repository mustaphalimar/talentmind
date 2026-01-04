import Container from "@/components/layouts/container";
import SectionTitle from "@/components/main/section-title";
import SolutionsCTA from "@/components/sections/solutions-cta";
import SolutionsHero from "@/components/sections/solutions-hero";
import { Brain, Check, CheckCircle } from "lucide-react";
import { Database, Sparkles, BarChart3, Lightbulb } from "lucide-react";

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
    icon: Database,
    description: "Centralisez et organisez tous vos CV en un seul endroit",
  },
  {
    id: 2,
    text: "Matching de profils par IA",
    icon: Sparkles,
    description:
      "Trouvez les candidats parfaits grâce à l'intelligence artificielle",
  },
  {
    id: 3,
    text: "Tableaux de bord RH et indicateurs de performance",
    icon: BarChart3,
    description: "Visualisez vos métriques RH en temps réel",
  },
  {
    id: 4,
    text: "Aide à la décision basée sur la data",
    icon: Lightbulb,
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

function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />

      <section id="conseil-rh" className="py-20">
        <Container>
          <SectionTitle text="Stratégies de gestion du capital humain" />
          <p className="text-lg mt-10">
            Nous aidons les entreprises à structurer et optimiser leur fonction
            RH afin de répondre aux enjeux de performance, d&apos;engagement et
            de transformation.
          </p>
          <div className="mt-10">
            <ul className="space-y-3 text-lg">
              {conseilRHList.map((i) => (
                <li key={i.id} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section id="talentmind-hub" className="py-20">
        <Container>
          <SectionTitle text="TalentMind Hub — Plateforme RH intelligente" />
          <p className="text-lg mt-10">
            TalentMind Hub est une plateforme digitale intégrant
            l&apos;intelligence artificielle pour optimiser le recrutement et le
            pilotage des ressources humaines.
          </p>
          <div className="mt-10">
            <div className="grid gap-4 md:grid-cols-2">
              {talentMindHubList.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex gap-3">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-lg">{item.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="maroc" className="py-20">
        <Container>
          <SectionTitle text="Accompagnement des filiales au Maroc" />
          <p className="text-lg mt-10">
            TalentMind accompagne les entreprises nationales et internationales
            dans l&apos;implantation, la structuration et la gestion de leurs
            filiales au Maroc.
          </p>
          <div className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {servicesMarocList.map((item) => {
                return (
                  <li key={item.id} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <SolutionsCTA />
    </main>
  );
}

export default SolutionsPage;
