import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Sofa, LayoutGrid, Scissors, ShowerHead, PanelTop, Flame, Droplets, Grid2x2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги — РезкаСтекла",
  description: "Мебельное стекло, стеклопакеты, резка и фацет, душевые кабины, безрамное остекление, закалка, фурнитура.",
};

const services = [
  {
    icon: Sofa,
    title: "Мебельное стекло",
    desc: "Стёкла для столешниц, полок, дверей мебельных фасадов, витрин и тумб. Прямые и фигурные формы, полировка кромки, любая толщина.",
    tags: ["Столешницы", "Полки", "Фасады", "Витрины", "Тумбы"],
    href: "/uslugi/mebelnoye-steklo",
  },
  {
    icon: LayoutGrid,
    title: "Стеклопакеты",
    desc: "Однокамерные и двухкамерные стеклопакеты на заказ по вашим размерам. Тонированные, матовые, бронированные, энергосберегающие.",
    tags: ["Однокамерные", "Двухкамерные", "Тонированные", "Матовые", "Энергосберегающие"],
    href: "/uslugi/steklopakety",
  },
  {
    icon: Scissors,
    title: "Резка, обточка и фацет стекла",
    desc: "Прямолинейная и фигурная резка на ЧПУ-станках. Шлифовка и полировка кромки. Декоративный фацет под любым углом от 5 до 45°.",
    tags: ["Прямолинейная резка", "Фигурная резка", "Шлифовка", "Полировка", "Фацет"],
    href: "/uslugi/rezka-stekla",
  },
  {
    icon: ShowerHead,
    title: "Стекло для душевых кабин",
    desc: "Закалённое стекло 6–12 мм для душевых ограждений. Прямые, угловые, радиусные конфигурации. Вырезы и отверстия под фурнитуру.",
    tags: ["Закалённое", "6 мм", "8 мм", "10 мм", "Радиусные формы"],
    href: "/uslugi/steklo-dushevye",
  },
  {
    icon: PanelTop,
    title: "Стекло для безрамного остекления",
    desc: "Закалённое стекло для раздвижных и складных безрамных систем. Балконы, террасы, беседки, зимние сады.",
    tags: ["Балконы", "Террасы", "Беседки", "Зимние сады", "Раздвижные системы"],
    href: "/uslugi/bezramnoe-osteklenie",
  },
  {
    icon: Flame,
    title: "Закалка стекла",
    desc: "Термическая закалка повышает прочность стекла в 5–7 раз. Толщина 4–19 мм, любые размеры и формы. Безопасное дробление на мелкие безвредные осколки.",
    tags: ["4 мм", "6 мм", "8 мм", "10 мм", "12 мм", "19 мм"],
    href: "/uslugi/zakalka",
  },
  {
    icon: Droplets,
    title: "Фурнитура для душевых кабин",
    desc: "Полный комплект фурнитуры для стеклянных душевых: петли, ручки, магниты, уплотнители, профили. Нержавеющая сталь и хромированные варианты.",
    tags: ["Петли 90°/180°", "Ручки", "Магниты", "Уплотнители", "Профили", "Нержавейка"],
    href: "/uslugi/furnitura-dushevye",
  },
  {
    icon: Grid2x2,
    title: "Фурнитура на безрамное остекление",
    desc: "Ролики, направляющие, зажимные профили, стопоры и крепёж для безрамных систем остекления балконов и фасадов.",
    tags: ["Ролики", "Направляющие", "Зажимы", "Стопоры", "Крепёж"],
    href: "/uslugi/furnitura-bezramnoe",
  },
];

export default function UslugiPage() {
  return (
    <>
      <PageHeader
        title="Услуги"
        subtitle="Восемь ключевых направлений — от резки и обточки до готовых комплектов с фурнитурой."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex gap-5 border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-900 transition-colors">
                    <Icon size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-zinc-900 text-[15px] group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight
                        size={15}
                        className="text-zinc-300 group-hover:text-blue-600 transition-colors shrink-0"
                      />
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-3">{service.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-zinc-100 text-zinc-500 px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
