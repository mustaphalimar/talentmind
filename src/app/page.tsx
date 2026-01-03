import Container from "@/components/layouts/container";
import About from "@/components/sections/about";
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
    </main>
  );
}
