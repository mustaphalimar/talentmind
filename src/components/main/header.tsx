"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../layouts/container";
import { useAppContext } from "../providers/app-context-provider";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";

export const navItems = [
  {
    id: 1,
    label: "À propos",
    href: "/#about",
  },
  {
    id: 2,
    label: "Nos piliers",
    href: "/#pillars",
  },
  {
    id: 3,
    label: "Solutions",
    href: "/solutions",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroScrolled, setIsHeroScrolled] = useState(false);
  const { sidebar } = useAppContext();

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
        "fixed top-0 p-2 left-0 right-0 z-20 transition-all duration-300",
        {
          "bg-black bg-opacity-70 backdrop-blur-sm shadow-md": isScrolled,
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
              className={cn("", {
                "text-black": isHeroScrolled,
                "text-white": !isHeroScrolled,
              })}
            >
              <ul className="hidden md:flex items-center gap-8">
                {navItems.map((ni) => {
                  return (
                    <a
                      key={ni.id}
                      href={ni.href}
                      className={cn(" transition", {
                        "hover:text-gray-300": isScrolled && !isHeroScrolled,
                        "hover:text-gray-500": isHeroScrolled,
                      })}
                    >
                      {ni.label}
                    </a>
                  );
                })}
                <Link href="/contact" className={buttonVariants()}>
                  Contactez-nous
                </Link>
              </ul>
              <button className="flex md:hidden cursor-pointer">
                {sidebar.isOpen ? (
                  <X
                    size={28}
                    onClick={sidebar.onHide}
                    className={cn("", {
                      "text-white": isHeroScrolled,
                    })}
                  />
                ) : (
                  <Menu size={28} onClick={() => sidebar.onShow()} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
