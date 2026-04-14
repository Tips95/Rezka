import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Стеклопакеты на заказ — РезкаСтекла",
  description: "Однокамерные и двухкамерные стеклопакеты по индивидуальным размерам. Тонированные, матовые, бронированные, энергосберегающие.",
};

const types = [
  { num: "01", title: "Однокамерный стеклопакет", desc: "Два стекла и одна воздушная камера. Основной выбор для большинства задач. Хорошая звукоизоляция." },
  { num: "02", title: "Двухкамерный стеклопакет", desc: "Три стекла, две камеры. Повышенная теплоизоляция и шумозащита — оптимален для наружного остекления." },
  { num: "03", title: "Тонированный стеклопакет", desc: "Снижает солнечную нагрузку. Бронзовый, серый, синий или зелёный оттенок под любой архитектурный стиль." },
  { num: "04", title: "Матовый стеклопакет", desc: "Обеспечивает приватность при сохранении светопропускания. Одностороннее или двустороннее матирование." },
  { num: "05", title: "Энергосберегающий стеклопакет", desc: "И-стекло или Low-E покрытие. Удерживает тепло зимой и отражает солнечный жар летом." },
  { num: "06", title: "Бронированный стеклопакет", desc: "Устойчив к механическому воздействию. Применяется в банках, офисах, торговых точках." },
];

const specs = [
  "Изготовление по индивидуальным размерам заказчика",
  "Дистанционная рамка: алюминиевая или тёплая (пластик/сталь)",
  "Газовое заполнение аргоном для улучшения теплоизоляции",
  "Поглотитель влаги предотвращает запотевание камеры",
  "Комплектация уплотнителями и нанесение бутилового герметика",
  "Срок изготовления — от 1 рабочего дня",
];

export default function SteklopacketyPage() {
  return (
    <>
      <PageHeader
        title="Стеклопакеты"
        subtitle="Однокамерные и двухкамерные стеклопакеты на заказ по индивидуальным размерам. Тонированные, матовые, энергосберегающие."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Стеклопакеты" },
        ]}
      />

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды стеклопакетов</p>
            <h2 className="text-3xl font-bold text-zinc-900">Что мы изготавливаем</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t) => (
              <div key={t.num} className="bg-white rounded-2xl border border-zinc-100 p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{t.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{t.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Спецификация</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Технические характеристики</h2>
          <ul className="space-y-4">
            {specs.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Нужен стеклопакет по размеру?</h3>
            <p className="text-zinc-400 text-sm">Укажите размеры и тип — рассчитаем стоимость за день.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
