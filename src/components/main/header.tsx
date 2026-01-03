"use client";
import React, { useEffect, useState } from "react";
import Container from "../layouts/container";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroScrolled, setIsHeroScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 785) {
        setIsHeroScrolled(true);
      } else {
        setIsHeroScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 p-2 left-0 right-0 z-50 transition-all duration-300",
        {
          "bg-white/95 bg-opacity-70 backdrop-blur-sm shadow-md": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <Container>
        <nav className="">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            {/* Navigation */}
            <div
              className={cn("flex items-center gap-8", {
                "text-black": isHeroScrolled,
                "text-white": !isHeroScrolled,
              })}
            >
              <a
                href="#about"
                className={cn(" transition", {
                  "hover:text-gray-300": isScrolled && !isHeroScrolled,
                  "hover:text-gray-500": isHeroScrolled,
                })}
              >
                À propos
              </a>
              <a
                href="#pillars"
                className={cn(" transition", {
                  "hover:text-gray-300": isScrolled && !isHeroScrolled,
                  "hover:text-gray-500": isHeroScrolled,
                })}
              >
                Nos piliers
              </a>
              <a
                href="#solutions"
                className={cn(" transition", {
                  "hover:text-gray-300": isScrolled && !isHeroScrolled,
                  "hover:text-gray-500": isHeroScrolled,
                })}
              >
                Solutions
              </a>
              <Button>Contactez-nous</Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
