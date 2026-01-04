import React from "react";
import Container from "../layouts/container";

const SolutionsHero = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661270491807-534a565e6ff8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
