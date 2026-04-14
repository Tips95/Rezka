import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import ServicesOverview from "@/components/ServicesOverview";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Advantages />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
