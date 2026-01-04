"use client";

import Container from "@/components/layouts/container";
import SectionTitle from "@/components/main/section-title";
import SolutionsCTA from "@/components/sections/solutions-cta";
import SolutionsHero from "@/components/sections/solutions-hero";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, CheckCircle } from "lucide-react";
import {
  Database,
  Sparkles,
  BarChart3,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSolutions } from "@/lib/api/solutions";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Sparkles,
  BarChart3,
  Lightbulb,
};

function SolutionsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["solutions"],
    queryFn: getSolutions,
  });

  if (isLoading) {
    return (
      <main>
        <SolutionsHero />
        <section id="conseil-rh" className="py-20">
          <Container>
            <div className="w-fit">
              <div className="flex items-center gap-2 p-1">
                <Skeleton className="h-[10px] w-[10px] rounded-sm" />
                <Skeleton className="h-8 md:h-10 w-64 md:w-96" />
              </div>
            </div>
            <div className="mt-10 space-y-2">
              <Skeleton className="h-6 w-full max-w-3xl" />
              <Skeleton className="h-6 w-full max-w-2xl" />
            </div>
            <div className="mt-10">
              <ul className="space-y-3 text-lg">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Skeleton className="h-5 w-5 rounded-full mt-0.5 shrink-0" />
                    <Skeleton className="h-6 flex-1" />
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <SolutionsHero />
        <div className="py-20 text-center text-destructive">
          Erreur lors du chargement des données
        </div>
      </main>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <main>
      <SolutionsHero />

      <section id="conseil-rh" className="py-20">
        <Container>
          <SectionTitle text="Stratégies de gestion du capital humain" />
          <p className="md:text-lg mt-10">
            Nous aidons les entreprises à structurer et optimiser leur fonction
            RH afin de répondre aux enjeux de performance, d&apos;engagement et
            de transformation.
          </p>
          <div className="mt-10">
            <ul className="space-y-3 md:text-lg ">
              {data.conseilRH.map((i) => (
                <li key={i.id} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-primary mt-0.5 shrink-0"
                    size={22}
                  />
                  <span className="">{i.text}</span>
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
              {data.talentMindHub.map((item) => {
                const Icon = iconMap[item.icon] || Database;
                return (
                  <div key={item.id} className="flex gap-3">
                    <Icon className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-medium md:text-lg">{item.text}</p>
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
              {data.servicesMaroc.map((item) => {
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
