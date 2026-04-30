import Hero from "@/components/Hero";
import Scenarios from "@/components/Scenarios";
import ServicesOverview from "@/components/ServicesOverview";
import Advantages from "@/components/Advantages";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import HomeCTA from "@/components/HomeCTA";
import WorksCarousel from "@/components/WorksCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Scenarios />
      <ServicesOverview />
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="text-sm font-medium text-blue-700 mb-3 tracking-wide uppercase">Наши работы</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 headline">
                Кадры, которые говорят{" "}
                <span className="headline-accent">за качество</span>
              </h2>
            </div>
            <div className="text-sm text-zinc-600 max-w-xl">
              Подборка реальных объектов. На карусели — по одной “лучшей” фотографии из каждого направления.
            </div>
          </div>

          <WorksCarousel />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Биоклиматические", href: "/uslugi/bioklimaticheskie-pergoly" },
              { label: "Зимние сады", href: "/uslugi/zimnie-sady" },
              { label: "ZIP‑экраны", href: "/uslugi/zip-ekrany" },
              { label: "Безрамное", href: "/uslugi/bezramnoe-osteklenie" },
              { label: "Гильотина", href: "/uslugi/gilotinnoe-osteklenie" },
              { label: "Плиссе", href: "/uslugi/moskitnye-setki" },
            ].map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="ring-focus surface-tint noise relative overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-900 hover:shadow-lg hover:shadow-[rgba(15,23,42,0.10)] transition-all text-center"
              >
                {x.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Advantages />
      <HowWeWork />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
