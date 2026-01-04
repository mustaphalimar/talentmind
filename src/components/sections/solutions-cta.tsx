import React from "react";
import Container from "../layouts/container";
import SectionTitle from "../main/section-title";
import { Button } from "../ui/button";

const SolutionsCTA = () => {
  return (
    <section className=" py-20" id="about">
      <Container>
        <SectionTitle text="Besoin d'une solution adaptée à votre organisation ?" />

        <div className="mt-16 space-y-10 flex flex-col items-center">
          <p className="text-lg">
            Nos experts vous accompagnent dans la mise en place de solutions RH
            sur mesure, adaptées à vos enjeux et à votre contexte.
          </p>

          <div className="space-x-2">
            <Button>Demander une démo</Button>
            <Button variant="outline" className="border-black text-black">
              Parler à un expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsCTA;
