"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { motion } from "motion/react";
import { navItems } from "./header";
import Link from "next/link";
import { Button } from "../ui/button";

const Sidebar = () => {
  const sidebar = useSidebar();

  const sidebarVariants = {
    open: {
      clipPath: `circle(150% at 100% 50%)`, // Expands from the right edge
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      clipPath: `circle(0% at 100% 50%)`, // Shrinks to a point on the right edge
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.aside
      initial="closed"
      // @ts-expect-error asd
      variants={sidebarVariants}
      animate={sidebar.visible ? "open" : "closed"}
      className="sidebar fixed left-0 top-0 z-20 h-screen w-full px-4 py-10 md:hidden"
    >
      <div className="flex h-full flex-col items-center justify-center border-white">
        <ul className="flex flex-col gap-6 text-white">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className="text-4xl font-bold transition hover:text-primary"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
          <Button>Contactez-nous</Button>
        </ul>
      </div>
      <div className="-mt-10 flex items-center justify-center gap-5"></div>
    </motion.aside>
  );
};

export default Sidebar;
