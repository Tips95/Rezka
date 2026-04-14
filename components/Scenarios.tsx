import Link from "next/link";
import { ArrowRight, Sofa, ShowerHead, Building2, User } from "lucide-react";

const scenarios = [
  {
    icon: Sofa,
    tag: "Мебельные производства",
    title: "Делаете мебель?",
    desc: "Столешницы, полки, фасады, витрины — изготовим стекло по вашим чертежам с полировкой кромки. Работаем с оптом.",
    links: [
      { label: "Мебельное стекло", href: "/uslugi/mebelnoye-steklo" },
      { label: "Резка и фацет", href: "/uslugi/rezka-stekla" },
    ],
    accent: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    icon: ShowerHead,
    tag: "Душевые и ванные",
    title: "Монтируете душевые?",
    desc: "Закалённое стекло 6–10 мм под любые конфигурации кабин + полный комплект фурнитуры: петли, ручки, ролики.",
    links: [
      { label: "Стекло для душевых", href: "/uslugi/steklo-dushevye" },
      { label: "Фурнитура", href: "/uslugi/furnitura-dushevye" },
    ],
    accent: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-cyan-600",
  },
  {
    icon: Building2,
    tag: "Строители и монтажники",
    title: "Остекляете балконы?",
    desc: "Закалённое стекло для безрамных систем + вся фурнитура: ролики, направляющие, зажимы. Работаем по объектам.",
    links: [
      { label: "Безрамное остекление", href: "/uslugi/bezramnoe-osteklenie" },
      { label: "Стеклопакеты", href: "/uslugi/steklopakety" },
    ],
    accent: "bg-violet-50 border-violet-100",
    iconBg: "bg-violet-600",
  },
  {
    icon: User,
    tag: "Частные заказчики",
    title: "Один заказ?",
    desc: "Принимаем заказы от одного изделия. Привезите размеры — нарежем, обточим и упакуем в день обращения.",
    links: [
      { label: "Все услуги", href: "/uslugi" },
      { label: "Связаться", href: "/kontakty" },
    ],
    accent: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-600",
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
            Выберите ваш сценарий
          </h2>
          <p className="text-zinc-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Мы работаем с разными категориями заказчиков — найдём подходящее решение для вашей задачи.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.tag}
                className={`rounded-2xl border p-6 flex flex-col gap-4 ${s.accent}`}
              >
                <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">{s.tag}</p>
                  <h3 className="font-bold text-zinc-900 text-[17px] mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto flex flex-col gap-1.5">
                  {s.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
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
