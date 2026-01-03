import React from "react";
import { Button } from "../ui/button";
import Container from "../layouts/container";

const Hero = () => {
  return (
    <section className=" min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      <Container className="px-6 relative z-10 flex justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pilotez votre capital humain avec intelligence
          </h1>

          <p className="text-xl  text-muted text-center mb-8">
            TalentMind accompagne les entreprises dans la définition de leur
            stratégie RH grâce au conseil,
            <br />à la data et à des solutions IA adaptées à leurs enjeux de
            croissance.
          </p>
          <div className="space-x-2">
            <Button size={"lg"}>Demander une démo</Button>
            <Button variant="outline" size={"lg"}>
              Parler à un expert
            </Button>
          </div>
        </div>

        {/* Trust Badge */}
        {/* <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white" />
            </div>
          </div>
          <p className="text-white text-sm leading-relaxed">
            We&apos;re committed to delivering reliable, tailored insurance
            solutions in a trusted and professional environment.
          </p>
        </div> */}
      </Container>
    </section>
  );
};

export default Hero;
