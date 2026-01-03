import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image src="/logo.png" width={150} height={200} alt="talentmind-logo" />
    </>
  );
};

export default Logo;
