import React from "react";
import { Button } from "../ui/button";

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
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pilotez votre capital humain
            <br />
            avec intelligence
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            TalentMind accompagne les entreprises dans la définition de leur
            stratégie RH grâce au conseil,
            <br />à la data et à des solutions IA adaptées à leurs enjeux de
            croissance.
          </p>
          <div className="space-x-2">
            <Button>Demander une démo</Button>
            <Button variant="outline">Parler à un expert</Button>
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
      </div>
    </section>
  );
};

export default Hero;
