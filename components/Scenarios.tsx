 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Home, Coffee, Building2 } from "lucide-react";

const scenarios = [
  {
    icon: Home,
    tag: "Частные дома и дачи",
    title: "Современные беседки, веранды и террасы под ключ",
    desc: "Собственное производство — это качество и выгодная цена. Увеличьте полезное пространство вашего дома с комфортом и стилем.",
    images: [
      "/images/optimized/scenario-home-main.webp",
      "/images/works/bezramnoe-osteklenie/IMG-20230915-WA0014.jpg",
      "/images/works/bezramnoe-osteklenie/WhatsApp Image 2020-12-01 at 09.11.04 (1).jpeg",
      "/images/works/bezramnoe-osteklenie/Slade Lux3.jpeg",
    ],
    href: "/uslugi/tentovye-pergoly",
  },
  {
    icon: Coffee,
    tag: "Кафе и рестораны",
    title: "Стильные и функциональные летние площадки",
    desc: "Любой сезон — это ваш сезон. Привлекайте больше гостей и повышайте доходность заведения с нашими системами остекления.",
    images: [
      "/images/optimized/hero-bg.webp",
      "/images/optimized/scenario-cafe-thumb.webp",
      "/images/optimized/banner-bioclim.webp",
      "/images/optimized/banner-gilotina.webp",
    ],
    href: "/uslugi/bioklimaticheskie-pergoly",
  },
  {
    icon: Building2,
    tag: "Отели и гостиницы",
    title: "Террасы и веранды — визитная карточка отеля",
    desc: "Уникальные проекты из алюминия под ключ для повышения статуса и привлекательности вашего комплекса.",
    images: [
      "/images/optimized/scenario-hotel-main.webp",
      "/images/optimized/banner-zip.webp",
      "/images/optimized/banner-zimnie.webp",
      "/images/optimized/banner-doors.webp",
    ],
    href: "/uslugi/zip-ekrany",
  },
];

export default function Scenarios() {
  const [activeByCard, setActiveByCard] = useState<number[]>(() => scenarios.map(() => 0));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveByCard((prev) =>
        prev.map((active, idx) => {
          const len = scenarios[idx].images.length;
          return (active + 1) % len;
        }),
      );
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="py-18 lg:py-20 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-zinc-800">
            Готовые
            <br />
            решения
          </h2>
          <div className="lg:max-w-2xl">
            <p className="text-base text-zinc-700 mb-4">
              Выберите свой сценарий — получите расчёт за 1 минуту
            </p>
            <Link
              href="/uslugi"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 accent-btn text-sm"
            >
              Смотреть все
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scenarios.map((s, cardIndex) => {
            const Icon = s.icon;
            const active = activeByCard[cardIndex] ?? 0;
            const thumbImages = s.images.slice(1);
            const movingThumbs = [...thumbImages, ...thumbImages];
            return (
              <article key={s.tag} className="group/scenario rounded-2xl border border-zinc-200 bg-white p-3">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src={s.images[active]}
                    alt={s.tag}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-2.5 overflow-hidden rounded-lg">
                  <div
                    className="thumb-marquee group-hover/scenario:[animation-play-state:paused] flex w-max gap-2"
                    style={{ animationDuration: `${14 + cardIndex * 2}s` }}
                  >
                    {movingThumbs.map((thumb, thumbIndex) => {
                      const normalized = thumbIndex % thumbImages.length;
                      const imageIndex = normalized + 1;
                      const isActive = active === imageIndex;

                      return (
                        <button
                          key={`${thumb}-${thumbIndex}`}
                          type="button"
                          aria-label={`Показать фото ${normalized + 2} в карточке ${s.tag}`}
                          className={`relative w-28 sm:w-30 shrink-0 aspect-[4/3] rounded-lg overflow-hidden border transition ${
                            isActive ? "border-zinc-900" : "border-zinc-200 hover:border-zinc-400"
                          }`}
                          onClick={() =>
                            setActiveByCard((prev) =>
                              prev.map((value, idx) => (idx === cardIndex ? imageIndex : value)),
                            )
                          }
                        >
                          <Image src={thumb} alt="" fill sizes="160px" className="object-cover" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3.5">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-zinc-900 text-xl mb-2 leading-snug">{s.tag}</h3>
                  <p className="text-sm text-zinc-700 mb-3">{s.title}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                  <Link href={s.href} className="inline-flex mt-4 text-sm font-semibold text-zinc-900 hover:text-zinc-600">
                    Перейти к направлению
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
