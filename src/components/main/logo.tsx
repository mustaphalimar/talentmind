import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ bg }: { bg?: string }) => {
  return (
    <Link
      href="/"
      className={cn({
        "bg-gray-100": bg && bg === "white",
      })}
    >
      <Image src="/logo.png" width={150} height={200} alt="talentmind-logo" />
    </Link>
  );
};

export default Logo;
