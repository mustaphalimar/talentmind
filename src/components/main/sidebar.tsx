"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { motion } from "motion/react";
import { navItems } from "./header";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useAppContext } from "../providers/app-context-provider";

const Sidebar = () => {
  const { sidebar } = useAppContext();

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (sidebar.isOpen) {
      // Save the current overflow value
      const originalOverflow = document.body.style.overflow;
      // Prevent scrolling
      document.body.style.overflow = "hidden";

      // Cleanup function to restore scrolling when sidebar closes
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [sidebar.isOpen]);

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
      animate={sidebar.isOpen ? "open" : "closed"}
      className={cn(
        "sidebar fixed left-0 top-0 z-20 h-screen w-full px-4 py-10 md:hidden"
      )}
    >
      <div className="flex h-full flex-col items-center justify-center border-white">
        <ul className="flex flex-col gap-6 text-white">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className="text-4xl font-bold transition hover:text-primary"
                onClick={sidebar.onHide}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
          <Link
            href="/contact"
            className={buttonVariants()}
            onClick={sidebar.onHide}
          >
            Contactez-nous
          </Link>
        </ul>
      </div>
      <div className="-mt-10 flex items-center justify-center gap-5"></div>
    </motion.aside>
  );
};

export default Sidebar;
