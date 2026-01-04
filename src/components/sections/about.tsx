import React from "react";
import Container from "../layouts/container";
import { Badge } from "../ui/badge";
import { Quote } from "lucide-react";
import SectionTitle from "../main/section-title";

const About = () => {
  return (
    <section className="min-h-[80vh] py-20" id="about">
      <Container>
        <SectionTitle text="À propos de nous" />
        <div className="mt-10 md:text-xl flex flex-col gap-8 ">
          <p>
            TalentMind est un cabinet de conseil spécialisé dans le pilotage
            stratégique des ressources humaines et la valorisation du capital
            humain.
          </p>
          <p>
            Nous aidons les organisations à attirer, développer et retenir les
            talents grâce à une approche combinant expertise RH, technologies
            innovantes et intelligence artificielle.
          </p>
          <div className="flex justify-center gap-2 mt-16 ">
            <Quote className="text-muted-foreground" size={15} />
            <p className="mt-4 text-2xl text-center text-muted-foreground">
              Notre mission est de transformer la fonction RH <br /> en un
              véritable levier de performance durable.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
