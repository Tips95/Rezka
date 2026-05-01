import Link from "next/link";
import { ArrowRight, Home, Coffee, Building2 } from "lucide-react";

const scenarios = [
  {
    icon: Home,
    tag: "Частные дома и дачи",
    title: "Беседки и веранды из алюминия под ключ",
    desc: "Собственное производство — это качество и выгодная цена. Увеличьте полезное пространство вашего дома с комфортом и стилем.",
    links: [
      { label: "Тентовые перголы", href: "/uslugi/tentovye-pergoly" },
      { label: "Зимние сады", href: "/uslugi/zimnie-sady" },
      { label: "Безрамное остекление", href: "/uslugi/bezramnoe-osteklenie" },
    ],
    grad: "from-slate-900 via-blue-900 to-cyan-900",
    glow: "shadow-blue-900/25",
  },
  {
    icon: Coffee,
    tag: "Кафе и рестораны",
    title: "Стильные летние площадки для вашего заведения",
    desc: "Любой сезон — это ваш сезон. Привлекайте больше гостей и повышайте доходность заведения с нашими системами остекления.",
    links: [
      { label: "Биоклиматические перголы", href: "/uslugi/bioklimaticheskie-pergoly" },
      { label: "Панорамные двери", href: "/uslugi/panoramnye-dveri" },
      { label: "ZIP-экраны", href: "/uslugi/zip-ekrany" },
    ],
    grad: "from-zinc-900 via-slate-800 to-cyan-900",
    glow: "shadow-zinc-900/25",
  },
  {
    icon: Building2,
    tag: "Отели и гостиницы",
    title: "Террасы и веранды — визитная карточка отеля",
    desc: "Уникальные проекты из алюминия под ключ для повышения статуса и привлекательности вашего комплекса.",
    links: [
      { label: "Гильотинное остекление", href: "/uslugi/gilotinnoe-osteklenie" },
      { label: "Москитные сетки", href: "/uslugi/moskitnye-setki" },
      { label: "Безрамное со стеклопакетом", href: "/uslugi/bezramnoe-so-steklopaketom" },
    ],
    grad: "from-zinc-900 via-slate-900 to-blue-900",
    glow: "shadow-slate-900/30",
  },
];

export default function Scenarios() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
            Готовые решения
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Выберите свой сценарий —{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
              получите расчёт за 1 минуту
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.tag}
                className={`relative rounded-2xl bg-gradient-to-br ${s.grad} p-8 flex flex-col gap-5 shadow-xl ${s.glow} overflow-hidden border border-white/10`}
              >
                {/* Декоративный круг */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-300/10 rounded-full" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(255,255,255,0.08))]" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/20">
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">{s.tag}</p>
                  <h3 className="font-bold text-white text-xl mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{s.desc}</p>
                </div>

                <div className="relative mt-auto flex flex-col gap-2 pt-5 border-t border-white/20">
                  {s.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
                    >
                      <ArrowRight size={13} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
