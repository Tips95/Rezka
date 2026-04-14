import Hero from "@/components/Hero";
import Scenarios from "@/components/Scenarios";
import ServicesOverview from "@/components/ServicesOverview";
import Advantages from "@/components/Advantages";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Scenarios />
      <ServicesOverview />
      <Advantages />
      <HowWeWork />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
