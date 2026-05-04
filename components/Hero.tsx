import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-0 pb-16 bg-[#f6f7f8]">
      <div className="w-full">
        <div className="relative overflow-hidden min-h-[520px] lg:min-h-[620px] border-y border-zinc-200">
          <Image
            src="/images/optimized/hero-bg.webp"
            alt="Премиальные перголы и остекление"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/88 via-zinc-950/58 to-zinc-950/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-zinc-950/8" />

          <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12 text-white">
            <div className="max-w-4xl">
              <p className="text-xs md:text-sm uppercase tracking-[0.26em] text-white/85 font-semibold mb-4">
                Премиальные перголы и остекление под ключ
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[0.94] font-black uppercase">
                Проект,
                <br />
                производство и
                <br />
                монтаж
              </h1>

              <p className="mt-6 text-sm md:text-xl leading-relaxed text-white/90 max-w-3xl">
                Автоматика Somfy, европейские материалы и собственное производство.
                Берём объект под ключ: от сметы и 3D-проекта до монтажа и сдачи.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/95">
                {["500+ проектов", "Гарантия 5 лет", "Бесплатный 3D-проект"].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/kontakty"
                  className="ring-focus inline-flex items-center justify-center gap-2 rounded-full bg-[#f7bf19] text-zinc-900 font-extrabold px-8 py-3.5 hover:bg-[#e4ad08] transition-colors"
                >
                  Рассчитать стоимость
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <p className="text-base md:text-xl font-semibold text-white/92">
                Проект под ключ за 14 дней. Собственное производство под контролем Rezka
              </p>

              <div className="self-start sm:self-auto rounded-2xl bg-[#f7bf19]/92 text-zinc-900 px-6 py-5 min-w-[210px] shadow-xl">
                <div className="text-6xl leading-none font-black">500+</div>
                <div className="text-sm font-semibold mt-2 uppercase tracking-wide">проектов по всей России</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
