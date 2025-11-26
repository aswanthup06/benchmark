import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Affiliations from "@/components/Affiliations";
import Testimonials from "@/components/Testimonials";
import TrendingTours from "@/components/TrendingTours";
import PopularPackages from "@/components/PopularPackages";
import WhyBenchmark from "@/components/WhyBenchmark";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Affiliations />
      <Testimonials />
      <TrendingTours />
      <PopularPackages />
      <WhyBenchmark />
    </div>
  );
}
