import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Flowbite } from "flowbite-react";

export default function Home() {
  return (
    <Flowbite>
      <main>
        <Navbar />
        <Hero />
        <Features />
      </main>
    </Flowbite>
  );
}
