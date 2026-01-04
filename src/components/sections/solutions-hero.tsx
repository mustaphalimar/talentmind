import React from "react";
import Container from "../layouts/container";

const SolutionsHero = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url('/section-hero-bg-mobile.webp')",
          }}
        />
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/section-hero-bg-desktop.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b backdrop-blur-[0.2px] from-transparent via-white/50 to-white" />
      </div>
      <Container className="px-6 relative z-10 flex justify-center text-center">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold text-white mb-6 leading-tight">
            Nos solutions pour piloter votre capital humain
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsHero;
