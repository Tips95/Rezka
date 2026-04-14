import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Фурнитура для душевых кабин — РезкаСтекла",
  description: "Петли, ручки, магниты, уплотнители, профили и направляющие для стеклянных душевых ограждений.",
};

const items = [
  {
    title: "Петли для душевых",
    desc: "Стеклянные петли «стекло–стена» и «стекло–стекло» с углом открывания 90° и 180°. Нержавеющая сталь AISI 304.",
    tags: ["90°", "180°", "Стекло–стена", "Стекло–стекло", "AISI 304"],
  },
  {
    title: "Ручки для стеклянных дверей",
    desc: "Ручки-кнопки, скобы и ручки с отверстием под шток замка. Хром, матовый хром, никель, чёрный матовый.",
    tags: ["Кнопки", "Скобы", "Хром", "Матовый хром", "Чёрный"],
  },
  {
    title: "Магнитные замки и задвижки",
    desc: "Магнитные фиксаторы для бесшумного захлопывания дверей. Накладные задвижки из нержавейки.",
    tags: ["Магнитный фиксатор", "Задвижки", "Нержавейка"],
  },
  {
    title: "Уплотнители для душевых",
    desc: "ПВХ и силиконовые уплотнители для зазора между стеклом и поддоном, стеклом и стеной, стеклом и стеклом.",
    tags: ["ПВХ", "Силиконовые", "Торцевые", "Угловые"],
  },
  {
    title: "Профили и алюминиевые направляющие",
    desc: "Нижние направляющие, пороги, угловые и торцевые профили для раздвижных душевых дверей.",
    tags: ["Нижняя направляющая", "Порог", "Алюминий", "Анодированные"],
  },
  {
    title: "Ролики для раздвижных дверей",
    desc: "Верхние ролики для раздвижных душевых дверей. Плавный ход, регулировка по высоте.",
    tags: ["Верхние ролики", "Регулируемые", "Для стекла 6–10 мм"],
  },
  {
    title: "Держатели и кронштейны",
    desc: "Точечные крепления, фиксаторы стекла к стене, горизонтальные перекладины для неподвижных панелей.",
    tags: ["Точечные крепления", "Настенные кронштейны", "Перекладины"],
  },
  {
    title: "Комплекты фурнитуры под ключ",
    desc: "Готовые наборы для распашных и раздвижных душевых ограждений под конкретные конфигурации.",
    tags: ["Распашные", "Раздвижные", "Угловые кабины", "Walk-in"],
  },
];

export default function FurnituraDushevyePage() {
  return (
    <>
      <PageHeader
        title="Фурнитура для душевых кабин"
        subtitle="Петли, ручки, магниты, уплотнители, профили и ролики для стеклянных душевых ограждений. Нержавеющая сталь."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Фурнитура для душевых" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {items.map((item) => (
              <div
                key={item.title}
                className="border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-zinc-900 mb-2 text-[15px]">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-zinc-100 text-zinc-500 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="font-semibold text-zinc-900 mb-2">Подбор фурнитуры к вашему стеклу</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Мы поможем подобрать совместимую фурнитуру к вашему стеклу с учётом толщины панели,
              конфигурации кабины и желаемого стиля.
            </p>
          </div>
          <Link
            href="/kontakty"
            className="shrink-0 inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
          >
            Получить консультацию <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
