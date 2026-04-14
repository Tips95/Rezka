import Link from "next/link";
import { ArrowRight, Home, Coffee, Building2 } from "lucide-react";

const scenarios = [
  {
    icon: Home,
    tag: "Частные дома и дачи",
    title: "Строим беседки и веранды из алюминия «под ключ»",
    desc: "Собственное производство — это качество и выгодная цена. Увеличьте полезное пространство вашего дома с комфортом и стилем.",
    links: [
      { label: "Тентовые перголы", href: "/uslugi/tentovye-pergoly" },
      { label: "Зимние сады", href: "/uslugi/zimnie-sady" },
      { label: "Безрамное остекление", href: "/uslugi/bezramnoe-osteklenie" },
    ],
    accent: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    icon: Coffee,
    tag: "Кафе и рестораны",
    title: "Стильные летние площадки для вашего заведения",
    desc: "Любой сезон — это ваш сезон с нашими системами остекления. Привлекайте больше гостей и повышайте доходность заведения.",
    links: [
      { label: "Биоклиматические перголы", href: "/uslugi/bioklimaticheskie-pergoly" },
      { label: "Панорамные двери", href: "/uslugi/panoramnye-dveri" },
      { label: "ZIP-экраны", href: "/uslugi/zip-ekrany" },
    ],
    accent: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-600",
  },
  {
    icon: Building2,
    tag: "Отели и гостиницы",
    title: "Террасы и веранды — визитная карточка отеля",
    desc: "Уникальные проекты из алюминия «под ключ» для повышения статуса и привлекательности вашего комплекса.",
    links: [
      { label: "Гильотинное остекление", href: "/uslugi/gilotinnoe-osteklenie" },
      { label: "Москитные сетки", href: "/uslugi/moskitnye-setki" },
      { label: "Безрамное со стеклопакетом", href: "/uslugi/bezramnoe-so-steklopaketom" },
    ],
    accent: "bg-violet-50 border-violet-100",
    iconBg: "bg-violet-600",
  },
];

export default function Scenarios() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
            Готовые решения
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Выберите свой сценарий —<br className="hidden sm:block" /> получите расчёт за 1 минуту
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.tag} className={`rounded-2xl border p-8 flex flex-col gap-5 ${s.accent}`}>
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">{s.tag}</p>
                  <h3 className="font-bold text-zinc-900 text-lg mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-black/5">
                  {s.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
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
