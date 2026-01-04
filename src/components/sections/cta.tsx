import React from "react";
import Container from "../layouts/container";
import SectionTitle from "../main/section-title";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <section className=" py-20" id="about">
      <Container>
        <SectionTitle text="Prêt à transformer votre stratégie RH ?" />

        <div className="mt-10 space-y-10 flex flex-col">
          <p className="md:text-lg">
            Découvrez comment TalentMind peut accompagner votre organisation
            avec des solutions sur mesure, innovantes et orientées résultats.
          </p>

          <Button className="w-fit">Demander une démo</Button>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
