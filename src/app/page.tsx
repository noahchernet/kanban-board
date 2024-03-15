import MoreFeatures from "@/components/MoreFeatures";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <MoreFeatures />
    </main>
  );
}
