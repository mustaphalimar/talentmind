"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../layouts/container";
import SectionTitle from "../main/section-title";
import PillarCard from "../pillar-card";
import { Skeleton } from "../ui/skeleton";
import { Brain, Briefcase, Building2, type LucideIcon } from "lucide-react";
import { getPillars } from "@/lib/api/pillars";
import { motion } from "motion/react";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Brain,
  Building2,
};

const Pillars = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pillars"],
    queryFn: getPillars,
  });

  if (isLoading) {
    return (
      <section className="py-20" id="pillars">
        <Container>
          <SectionTitle text="Nos piliers" />
          <main className="mt-10 max-w-md lg:max-w-full grid lg:grid-cols-3 gap-10 mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-4 items-center text-center"
              >
                <Skeleton className="h-[45px] w-[45px] rounded-full" />
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-20 w-full max-w-xs" />
              </div>
            ))}
          </main>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20" id="pillars">
        <Container>
          <SectionTitle text="Nos piliers" />
          <div className="mt-20 text-center text-destructive">
            Erreur lors du chargement des données
          </div>
        </Container>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const pillars = data.map((pillar) => ({
    ...pillar,
    icon: iconMap[pillar.icon] || Briefcase,
  }));

  return (
    <section className=" py-20" id="pillars">
      <Container>
        <SectionTitle text="Nos piliers" />
        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.6,
              },
            },
          }}
          className="mt-20 max-w-md lg:max-w-full grid grid-flow-dense lg:grid-cols-3 gap-10 mx-auto"
        >
          {pillars.map((p) => {
            return <PillarCard key={p.id} pillar={p} />;
          })}
        </motion.main>
      </Container>
    </section>
  );
};

export default Pillars;
