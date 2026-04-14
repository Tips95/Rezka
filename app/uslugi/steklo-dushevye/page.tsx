import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Стекло для душевых кабин — РезкаСтекла",
  description: "Закалённое стекло для душевых ограждений 6–12 мм. Прямые, угловые и радиусные конфигурации. Вырезы под фурнитуру.",
};

const configs = [
  { num: "01", title: "Прямое ограждение", desc: "Одна или две стеклянные панели на одной линии. Наиболее простой и распространённый вариант." },
  { num: "02", title: "Угловая кабина", desc: "Две панели под углом 90°. Квадратные и прямоугольные конфигурации с распашной или раздвижной дверью." },
  { num: "03", title: "Радиусная кабина", desc: "Изогнутые стеклянные панели для кабин полукруглой или четвертькруглой формы." },
  { num: "04", title: "Walk-in / ограждение без двери", desc: "Открытое стеклянное ограждение без дверного полотна. Современное и удобное решение." },
  { num: "05", title: "Нестандартные формы", desc: "Вырезы под нишу, скошенные края, трапециевидные формы. Изготавливаем по чертежу заказчика." },
  { num: "06", title: "Матовое и тонированное стекло", desc: "Матирование методом пескоструя или плёнки. Тонированное стекло серого, бронзового, чёрного цвета." },
];

const features = [
  "Закалённое стекло — безопасное дробление при ударе",
  "Толщина 6, 8, 10 мм на выбор",
  "Вырезы и отверстия под петли, ручки, сливы",
  "Полировка кромки по всему периметру",
  "Матовое, прозрачное или тонированное на выбор",
  "Подбор фурнитуры из нашего каталога",
];

export default function StekloDushevyePage() {
  return (
    <>
      <PageHeader
        title="Стекло для душевых кабин"
        subtitle="Закалённое стекло 6–12 мм для душевых ограждений любой конфигурации. Вырезы, полировка, фурнитура."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Стекло для душевых кабин" },
        ]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Толщина стекла", value: "6 / 8 / 10 мм" },
              { label: "Обязательная закалка", value: "Класс ESG" },
              { label: "Исполнение", value: "Прозрачное / матовое / тонированное" },
            ].map((s) => (
              <div key={s.label} className="border border-zinc-100 rounded-2xl p-6 text-center">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">{s.label}</p>
                <p className="text-xl font-bold text-zinc-900">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Конфигурации</p>
            <h2 className="text-3xl font-bold text-zinc-900">Типы душевых ограждений</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {configs.map((c) => (
              <div key={c.num} className="bg-white rounded-2xl border border-zinc-100 p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{c.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{c.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Особенности</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Что входит в изготовление</h2>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Нужно стекло для душевой?</h3>
            <p className="text-zinc-400 text-sm">Укажите размеры и конфигурацию — подберём оптимальное решение.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
