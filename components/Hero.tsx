import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Sparkles, ShieldCheck, Ruler, Truck } from "lucide-react";

const highlights = [
  "Тентовые и биоклиматические перголы",
  "Безрамное остекление балконов и террас",
  "Зимние сады и панорамные двери",
  "ZIP-экраны и москитные сетки плиссе",
];

export default function Hero() {
  return (
    <section className="bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-[0_24px_90px_rgba(15,23,42,0.12)]">
          <div className="absolute inset-0 -z-10">
            <div className="aurora opacity-85" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(1200px 700px at 20% 10%, rgba(255,255,255,0.85), transparent 58%), radial-gradient(900px 600px at 80% 30%, rgba(255,255,255,0.65), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35))",
              }}
            />
          </div>

          <div className="relative p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left — headline bento */}
              <div className="lg:col-span-7 surface-tint noise relative overflow-hidden rounded-3xl p-7 lg:p-9">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/25 to-cyan-400/10 blur-2xl" />
                <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/22 to-blue-500/10 blur-2xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 backdrop-blur px-4 py-1.5 text-sm text-zinc-700 mb-7">
                    <Sparkles size={14} className="text-blue-600" />
                    Производство в Москве · с 2012 года
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight headline text-zinc-950">
                    Остекление, которое{" "}
                    <span className="headline-accent">выглядит</span>{" "}
                    как архитектура
                  </h1>

                  <p className="mt-5 text-base lg:text-lg text-zinc-700 max-w-2xl leading-relaxed">
                    Проектируем, производим и монтируем под ключ: безрамные системы, перголы и панорамные двери —
                    с гарантией по договору.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/kontakty"
                      className="ring-focus inline-flex items-center justify-center gap-2 bg-zinc-950 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-zinc-900 transition-colors"
                    >
                      Рассчитать стоимость
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/uslugi"
                      className="ring-focus inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur border border-white/70 text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/75 transition-colors"
                    >
                      Смотреть решения
                    </Link>
                  </div>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-zinc-600">
                    <Clock size={14} className="text-blue-700" />
                    Расчёт стоимости — <span className="text-zinc-900 font-semibold">1 рабочий день</span>
                  </div>
                </div>
              </div>

              {/* Right — bento tiles + photo */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="surface-tint noise relative overflow-hidden rounded-3xl p-5 col-span-2">
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      backgroundImage: "url(/images/backgrounds/hero-bg.jpeg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-zinc-950/10 to-white/10" />
                  <div className="relative flex items-end justify-between gap-4 min-h-44">
                    <div>
                      <div className="text-xs font-semibold text-white/70 uppercase tracking-widest">Безрамное остекление</div>
                      <div className="mt-1 text-2xl font-extrabold text-white">Премиум под ключ</div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-white/80 bg-white/10 border border-white/20 backdrop-blur rounded-full px-3 py-1.5">
                      <ShieldCheck size={14} className="text-emerald-300" />
                      Гарантия 5 лет
                    </div>
                  </div>
                </div>

                {[
                  { icon: Ruler, label: "Проект", value: "3D бесплатно" },
                  { icon: Truck, label: "Монтаж", value: "под ключ" },
                  { icon: ShieldCheck, label: "Контроль", value: "100% этапов" },
                  { icon: Sparkles, label: "Опыт", value: "13 лет" },
                ].map((k) => {
                  const Icon = k.icon;
                  return (
                    <div key={k.label} className="surface-tint noise relative overflow-hidden rounded-3xl p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                          <Icon size={18} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-zinc-500">{k.label}</div>
                          <div className="font-bold text-zinc-900">{k.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
