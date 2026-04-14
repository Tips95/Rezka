import Link from "next/link";
import { ArrowRight, Sofa, LayoutGrid, Scissors, ShowerHead, PanelTop, Flame, Droplets, Grid2x2 } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Мебельное стекло",
    desc: "Стёкла для столешниц, полок, фасадов, витрин. Любые формы, размеры, обработка кромки.",
    href: "/uslugi/mebelnoye-steklo",
  },
  {
    icon: LayoutGrid,
    title: "Стеклопакеты",
    desc: "Однокамерные и двухкамерные стеклопакеты на заказ. Тонированные, матовые, энергосберегающие.",
    href: "/uslugi/steklopakety",
  },
  {
    icon: Scissors,
    title: "Резка, обточка и фацет",
    desc: "Прямолинейная и фигурная резка, шлифовка кромки, декоративный фацет под любым углом.",
    href: "/uslugi/rezka-stekla",
  },
  {
    icon: ShowerHead,
    title: "Стекло для душевых кабин",
    desc: "Закалённое стекло для душевых: прямые и угловые конфигурации, любые вырезы и размеры.",
    href: "/uslugi/steklo-dushevye",
  },
  {
    icon: PanelTop,
    title: "Безрамное остекление",
    desc: "Стекло для раздвижных и складных безрамных систем балконов, террас, беседок.",
    href: "/uslugi/bezramnoe-osteklenie",
  },
  {
    icon: Flame,
    title: "Закалка стекла",
    desc: "Термическая закалка повышает прочность в 5–7 раз. Толщина 4–19 мм, любые размеры.",
    href: "/uslugi/zakalka",
  },
  {
    icon: Droplets,
    title: "Фурнитура для душевых",
    desc: "Петли, ручки, магниты, уплотнители и профили для стеклянных душевых ограждений.",
    href: "/uslugi/furnitura-dushevye",
  },
  {
    icon: Grid2x2,
    title: "Фурнитура безрамного остекления",
    desc: "Зажимы, ролики, направляющие и крепёж для безрамных систем остекления.",
    href: "/uslugi/furnitura-bezramnoe",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
              Направления работ
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
              Наши услуги
            </h2>
          </div>
          <Link
            href="/uslugi"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Подробнее об услугах <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl border border-zinc-100 p-5 hover:border-zinc-200 hover:shadow-sm transition-all flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                  <Icon size={17} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-900 mb-1.5 text-sm group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-blue-600 transition-colors flex items-center gap-1 mt-auto">
                  Подробнее <ArrowRight size={11} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
