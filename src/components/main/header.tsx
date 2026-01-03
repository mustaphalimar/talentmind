import React from "react";
import Container from "../layouts/container";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="fixed top-2 left-0 right-0 z-50 bg-transparent">
      <Container>
        <nav className="">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <a
                href="#home"
                className="text-white hover:text-gray-300 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition"
              >
                À propos
              </a>
              <a
                href="#facilities"
                className="text-white hover:text-gray-300 transition"
              >
                Nos piliers
              </a>
              <a
                href="#schedule"
                className="text-white hover:text-gray-300 transition"
              >
                Solutions
              </a>
              <Button>Contact Us</Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
