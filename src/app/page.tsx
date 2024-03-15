import MoreFeatures from "@/components/MoreFeatures";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <MoreFeatures />
      <CallToAction />
    </main>
  );
}
