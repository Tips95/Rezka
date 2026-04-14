import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Фурнитура для стекла — РезкаСтекла",
  description: "Фурнитура для стеклянных перегородок, дверей, ограждений, козырьков, душевых кабин. Серии Аура и Вектор.",
};

const hardwareCategories = [
  {
    title: "Фурнитура для перегородок и маятниковых дверей",
    desc: "Петли, доводчики, ручки, замки и крепёж для стеклянных маятниковых дверей и перегородок.",
    items: ["Петли напольные", "Петли потолочные", "Ручки", "Доводчики", "Замки", "Уплотнители"],
  },
  {
    title: "Фурнитура для межкомнатных дверей",
    desc: "Комплектующие для стеклянных межкомнатных дверей: ролики, направляющие, ручки, замки.",
    items: ["Ролики", "Направляющие", "Стопоры", "Ручки-скобы", "Замки"],
  },
  {
    title: "Фурнитура для козырьков",
    desc: "Спайдеры, кронштейны, подвесы, зажимные профили для стеклянных козырьков.",
    items: ["Спайдеры", "Кронштейны", "Подвесы", "Зажимные профили", "Анкерные крепления"],
  },
  {
    title: "Фурнитура для ограждений",
    desc: "Стойки, поручни, зажимы и точечные крепления для стеклянных ограждений балконов и лестниц.",
    items: ["Стойки", "Поручни", "Зажимы", "Точечные крепления", "Анкеры"],
  },
  {
    title: "Фурнитура для душевых кабин",
    desc: "Петли, ручки, магниты, уплотнители и профили для стеклянных душевых ограждений.",
    items: ["Петли 90°/180°", "Ручки", "Магниты", "Уплотнители", "Профили"],
  },
  {
    title: "Раздвижные системы · Серия Аура",
    desc: "Фурнитура для раздвижных стеклянных дверей серии Аура. Плавный ход, скрытые ролики.",
    items: ["Ролики", "Направляющие", "Стопоры", "Ручки", "Нижние направляющие"],
  },
  {
    title: "Перегородки и двери · Серия Вектор",
    desc: "Комплектующие для стеклянных дверей и перегородок серии Вектор. Строгий геометрический дизайн.",
    items: ["Профили", "Петли", "Ручки", "Замки", "Уплотнители"],
  },
];

export default function FurnituraPage() {
  return (
    <>
      <PageHeader
        title="Фурнитура для стекла"
        subtitle="Широкий ассортимент фурнитуры для стеклянных конструкций: перегородок, дверей, ограждений, козырьков и душевых кабин."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Фурнитура" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hardwareCategories.map((cat) => (
              <div
                key={cat.title}
                className="border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-zinc-900 mb-2 text-[15px]">{cat.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-zinc-100 text-zinc-500 px-2.5 py-0.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href="/kontakty"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors"
                >
                  Запросить прайс <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="font-semibold text-zinc-900 mb-2">Подбор фурнитуры</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Наши специалисты помогут подобрать оптимальную фурнитуру для вашей конструкции с учётом
              нагрузок, толщины стекла и условий эксплуатации.
            </p>
          </div>
          <Link
            href="/kontakty"
            className="shrink-0 inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
          >
            Получить консультацию
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
