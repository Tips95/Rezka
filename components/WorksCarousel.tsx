"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  key: string;
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  focal?: string;
};

const AUTOPLAY_MS = 3500;

export default function WorksCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        key: "bioclimatic",
        title: "Биоклиматические перголы",
        subtitle: "Ламели, автоматика, подсветка",
        href: "/uslugi/bioklimaticheskie-pergoly",
        imageSrc: "/images/works/bioclimatic-pergola/3 (4).jpg",
        focal: "50% 55%",
      },
      {
        key: "zimnie",
        title: "Зимние сады",
        subtitle: "Тёплые конструкции круглый год",
        href: "/uslugi/zimnie-sady",
        imageSrc: "/images/works/zimnie-sady/image-30-04-26-02-41-1.jpeg",
        focal: "50% 50%",
      },
      {
        key: "zip",
        title: "ZIP‑экраны",
        subtitle: "Солнце, ветер, приватность",
        href: "/uslugi/zip-ekrany",
        imageSrc: "/images/works/zip-ekrany/zip10.jpg",
        focal: "50% 50%",
      },
      {
        key: "bezramnoe",
        title: "Безрамное остекление",
        subtitle: "Максимум света, минимум конструкции",
        href: "/uslugi/bezramnoe-osteklenie",
        imageSrc: "/images/works/bezramnoe-osteklenie/hd_8d6a3ee68ac991e39f0d58c47e631ce1_65ba707b1545e.jpg",
        focal: "50% 55%",
      },
      {
        key: "gilotina",
        title: "Гильотинное остекление",
        subtitle: "Подъёмные системы для веранд",
        href: "/uslugi/gilotinnoe-osteklenie",
        imageSrc: "/images/works/gilotinnoe-osteklenie/hd_22faef42572bba7e56eab528f1bac793_65c0c20ef2882.jpg",
        focal: "50% 55%",
      },
      {
        key: "plisse",
        title: "Сетки плиссе",
        subtitle: "Аккуратно, функционально, эстетично",
        href: "/uslugi/moskitnye-setki",
        imageSrc: "/images/works/setki-plisse/image-30-04-26-03-01.jpeg",
        focal: "50% 45%",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const active = slides[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-[0_26px_90px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 -z-10">
        <div className="aurora opacity-70" />
        <div className="absolute inset-0 bg-white/35" />
      </div>

      <div className="relative z-10">
        <div className="relative aspect-[16/9] sm:aspect-[21/9]">
          {/* Blurred backdrop (fills frame, hides letterboxing) */}
          <Image
            src={active.imageSrc}
            alt=""
            fill
            aria-hidden="true"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover scale-110 blur-2xl opacity-55"
            style={{ objectPosition: active.focal ?? "50% 50%" }}
          />

          <div className="absolute inset-0 bg-white/10 pointer-events-none" />

          {/* Main image (uniform crop, no empty space) */}
          <Image
            src={active.imageSrc}
            alt={active.title}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
            style={{ objectPosition: active.focal ?? "50% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-950/20 to-transparent pointer-events-none" />

          <div className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7 flex flex-col sm:flex-row sm:items-end gap-4 justify-between z-20">
            <div className="surface-tint noise relative overflow-hidden rounded-2xl px-5 py-4 sm:px-6 sm:py-5 max-w-xl">
              <div className="text-xs font-semibold text-zinc-700 uppercase tracking-widest">Наши работы</div>
              <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-zinc-950 headline">
                <span className="headline-accent">{active.title}</span>
              </div>
              <div className="mt-1 text-sm text-zinc-700">{active.subtitle}</div>
            </div>

            <Link
              href={active.href}
              className="ring-focus inline-flex items-center justify-center bg-zinc-950 text-white font-semibold px-6 py-3 rounded-xl hover:bg-zinc-900 transition-colors"
            >
              Смотреть направление
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Предыдущая работа"
          className="ring-focus absolute z-30 left-3 sm:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur border border-white/70 text-zinc-900 hover:bg-white/85 transition-colors"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          aria-label="Следующая работа"
          className="ring-focus absolute z-30 right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur border border-white/70 text-zinc-900 hover:bg-white/85 transition-colors"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
        >
          <ChevronRight size={18} />
        </button>

        <div className="relative z-20 flex items-center justify-center gap-2 py-4">
          {slides.map((s, i) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Слайд: ${s.title}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-10 bg-zinc-950/80" : "w-2 bg-zinc-950/25 hover:bg-zinc-950/40"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

