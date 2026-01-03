import React from "react";
import Container from "../layouts/container";

const About = () => {
  return (
    <section className="min-h-[80vh] py-20">
      <Container>
        <h1 className="text-4xl border-b p-1 font-semibold">
          À propos de nous
        </h1>
        <div className="mt-14 text-lg flex flex-col gap-6">
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
          <p>
            Notre mission est de transformer la fonction RH en un véritable
            levier de performance durable.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
