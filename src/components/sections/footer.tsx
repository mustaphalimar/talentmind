"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../layouts/container";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import Logo from "../main/logo";

const footerData = [
  {
    title: "Services",
    items: [
      {
        content: "Conseil RH",
        link: "/solutions#conseil-rh",
      },
      {
        content: "TalentMind Hub",
        link: "/solutions#talentmind-hub",
      },
      {
        content: "Implantation au Maroc",
        link: "/solutions#maroc",
      },
    ],
  },
  {
    title: "Entreprise",
    items: [
      {
        content: "À propos",
        link: "/#about",
      },
      {
        content: "Nos solutions",
        link: "/solutions",
      },
      {
        content: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    title: "Légal",
    items: [
      {
        content: "Conditions d'utilisation",
        link: "/terms-of-use",
      },
      {
        content: "Politique de confidentialité",
        link: "/privacy-policy",
      },
    ],
  },
];

const socialLinks = [
  {
    href: "http://facebook.com/",
    icon: Facebook,
  },
  {
    href: "http://twitter.com/",
    icon: Twitter,
  },
  {
    href: "http://instagram.com/",
    icon: Instagram,
  },
  // {
  //   href: "http://whatsapp.com/",
  //   icon: Github,
  // },
];

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        "overflow-x-hidden bg-primary-darker pt-6 text-white",
        className
      )}
    >
      <Container>
        <div className="mt-10 flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col gap-1">
            <Logo bg="white" />
          </div>
          <div className="mt-20 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-24">
            <div className="hidden justify-around gap-16 lg:flex">
              <div className="flex lg:gap-40">
                {footerData.map((fitem) => {
                  return (
                    <div key={fitem.title} className="text-sm">
                      <h1 className="uppercase">{fitem.title}</h1>
                      <ul className="mt-10 flex flex-col gap-3">
                        {fitem.items.map((item) => {
                          return (
                            <li
                              key={item.content}
                              className="cursor-pointer text-sm hover:underline"
                            >
                              {item.link ? (
                                <Link href={item.link}>{item.content}</Link>
                              ) : (
                                item.content
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <Accordion className="w-full lg:hidden" type="single" collapsible>
              {footerData.map((item) => {
                return (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      {item.items.map((iitem) => {
                        return (
                          <li
                            key={iitem.content}
                            className="cursor-pointer text-sm hover:underline"
                          >
                            {iitem.content}
                          </li>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="mt-20 flex flex-col items-center lg:mt-0">
            <p className="text-sm uppercase">Suivez-nous</p>
            <ul className="list-none flex gap-2 mt-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.href}
                    className="cursor-pointer rounded-full border p-2 transition hover:bg-gray-600"
                  >
                    <Icon size={18} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
      <div className="mt-8">
        <Separator />
        <div className="flex h-16 flex-col items-center justify-center p-4">
          <p className="text-sm">
            TalentMind &copy; {new Date().getFullYear()} • Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
