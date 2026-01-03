import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={150} height={200} alt="talentmind-logo" />
    </Link>
  );
};

export default Logo;
