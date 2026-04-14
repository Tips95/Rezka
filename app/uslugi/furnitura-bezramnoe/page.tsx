import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Фурнитура на безрамное остекление — РезкаСтекла",
  description: "Ролики, направляющие, зажимные профили, стопоры и крепёж для безрамных систем остекления балконов и фасадов.",
};

const items = [
  {
    title: "Верхние ролики для раздвижных систем",
    desc: "Несущие ролики, на которых подвешиваются стеклянные панели. Прокатка без шума, регулировка по высоте.",
    tags: ["Для стекла 8–10 мм", "Регулировка", "Нержавейка"],
  },
  {
    title: "Верхняя направляющая шина",
    desc: "Алюминиевый профиль, по которому скользят ролики. Анодированный или порошковая окраска.",
    tags: ["Алюминий", "Анодированная", "Порошковая окраска"],
  },
  {
    title: "Нижняя направляющая и стопоры",
    desc: "Нижний Г-образный профиль для фиксации панелей в вертикальном положении и ограничения хода.",
    tags: ["Г-профиль", "Стопоры хода", "Алюминий"],
  },
  {
    title: "Зажимные профили (клипсы)",
    desc: "Верхние зажимы для стеклянных панелей — передают нагрузку на ролики без сверления стекла.",
    tags: ["Без сверления", "Алюминий", "Для 8–10 мм стекла"],
  },
  {
    title: "Угловые соединители и переходники",
    desc: "Соединительные элементы для монтажа шин в углах балконов и поворотах фасадов.",
    tags: ["90°", "135°", "Наружный угол", "Внутренний угол"],
  },
  {
    title: "Ручки и замки для раздвижных панелей",
    desc: "Встроенные ручки-прорези и накладные ручки. Замки с ключом и без. Нержавейка и алюминий.",
    tags: ["Встроенные", "Накладные", "С замком", "Без замка"],
  },
  {
    title: "Уплотнители для торцов панелей",
    desc: "ПВХ-профили для уплотнения торцов и зазоров между панелями. Прозрачные и чёрные.",
    tags: ["ПВХ", "Прозрачные", "Чёрные", "Торцевые"],
  },
  {
    title: "Крепёжные кронштейны для шины",
    desc: "Настенные и потолочные кронштейны для монтажа верхней направляющей. Регулировка по глубине.",
    tags: ["Настенные", "Потолочные", "Регулируемые"],
  },
];

export default function FurnituraBezramnoePage() {
  return (
    <>
      <PageHeader
        title="Фурнитура на безрамное остекление"
        subtitle="Ролики, направляющие, зажимные профили, стопоры и крепёж для безрамных раздвижных систем остекления."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Фурнитура безрамного остекления" },
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
            <h3 className="font-semibold text-zinc-900 mb-2">Комплектация систем под ключ</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Подберём полный комплект фурнитуры под ваш балкон или фасад — с учётом количества панелей,
              их ширины и высоты, конфигурации углов.
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
