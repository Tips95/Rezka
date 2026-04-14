import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Закалка стекла — РезкаСтекла",
  description: "Термическая закалка стекла. Прочность в 5–7 раз выше обычного. Толщина 4–19 мм, любые размеры и формы.",
};

const advantages = [
  { num: "01", title: "Повышенная прочность", desc: "Закалённое стекло в 5–7 раз прочнее обычного флоат-стекла той же толщины. Выдерживает ударные и изгибающие нагрузки." },
  { num: "02", title: "Безопасное разрушение", desc: "При разрушении рассыпается на мелкие тупые осколки без острых краёв — не представляет угрозы для людей." },
  { num: "03", title: "Термостойкость", desc: "Выдерживает перепады температур до 200°C. Не трескается от горячей воды или локального нагрева." },
  { num: "04", title: "Соответствие стандартам", desc: "Закалённое стекло класса ESG по ГОСТ 30698 — требуется нормами безопасности для перегородок, полов, лестниц." },
  { num: "05", title: "Нельзя резать после закалки", desc: "Закалка — финальная операция. Все размеры, вырезы и отверстия делаются до термической обработки." },
  { num: "06", title: "Любые форматы", desc: "Закаливаем стекло от небольших деталей до листов 3200×6000 мм. Прямоугольные и фигурные формы." },
];

const thicknesses = ["4 мм", "5 мм", "6 мм", "8 мм", "10 мм", "12 мм", "15 мм", "19 мм"];

export default function ZakalkaPage() {
  return (
    <>
      <PageHeader
        title="Закалка стекла"
        subtitle="Термическая закалка повышает прочность стекла в 5–7 раз. Безопасное разрушение. Толщина 4–19 мм."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Закалка стекла" },
        ]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { label: "Прочнее обычного стекла", value: "5–7×" },
              { label: "Толщина", value: "4–19 мм" },
              { label: "Макс. размер", value: "3200×6000 мм" },
              { label: "Срок изготовления", value: "от 2 дней" },
            ].map((s) => (
              <div key={s.label} className="border border-zinc-100 rounded-2xl p-5 text-center">
                <p className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-1">{s.value}</p>
                <p className="text-xs text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">О технологии</p>
            <h2 className="text-3xl font-bold text-zinc-900">Почему выбирают закалённое стекло</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a) => (
              <div key={a.num} className="bg-white rounded-2xl border border-zinc-100 p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{a.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{a.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Доступные толщины</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Закаляем стекло</h2>
          <div className="flex flex-wrap gap-3">
            {thicknesses.map((t) => (
              <span key={t} className="bg-zinc-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 space-y-4">
            {[
              "Закалка — финальная операция: все отверстия и вырезы делаются заранее",
              "Принимаем в работу стёкла, вырезанные у нас или привезённые заказчиком",
              "Возможна закалка тонированного, матового и крашеного стекла",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Нужна закалка стекла?</h3>
            <p className="text-zinc-400 text-sm">Укажите размеры и толщину — рассчитаем стоимость.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
