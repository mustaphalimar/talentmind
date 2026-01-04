import Container from "@/components/layouts/container";
import About from "@/components/sections/about";
import Cta from "@/components/sections/cta";

import Hero from "@/components/sections/hero";
import Pillars from "@/components/sections/pillars";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Container>
        <Separator />
      </Container>
      <Pillars />
      <Container>
        <Separator />
      </Container>
      <Cta />
    </main>
  );
}
