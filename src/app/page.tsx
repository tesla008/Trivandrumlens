import { Hero } from "@/components/sections/hero";
import { Menu } from "@/components/sections/menu";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Visit } from "@/components/sections/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Visit />
    </>
  );
}
