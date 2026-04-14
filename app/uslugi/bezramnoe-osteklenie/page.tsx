import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Безрамное остекление — АлюПро",
  description: "Раздвижные стеклянные панели без рамы для балконов и террас. Максимум света, скрытый дренаж, закалённое стекло.",
};

const applications = [
  { num: "01", title: "Балконы и лоджии", desc: "Раздвижное безрамное остекление балконов — лёгкая конструкция без рамы, максимум света и видового пространства." },
  { num: "02", title: "Террасы и патио", desc: "Складные и раздвижные стеклянные экраны для террас. Защита от ветра и осадков с сохранением открытости пространства." },
  { num: "03", title: "Беседки и павильоны", desc: "Остекление беседок и летних павильонов. Сезонное или круглогодичное использование." },
  { num: "04", title: "Рестораны и кафе", desc: "Остекление летних веранд. Быстрый монтаж, эстетика, практичность. Увеличивает посадочный сезон." },
  { num: "05", title: "Частные дома", desc: "Безрамное остекление веранд и зон отдыха в частных домах. Под любой архитектурный стиль." },
  { num: "06", title: "Зимние сады", desc: "Светопрозрачные конструкции для зимних садов — вертикальное остекление в безрамном исполнении." },
];

const features = [
  "Закалённое стекло класса ESG — безопасное при ударе",
  "Толщина 8 или 10 мм в зависимости от системы",
  "Обработка кромок по всему периметру",
  "Высота стёкол до 3000 мм",
  "Скрытый дренаж Disaster Discharge",
  "Прозрачное, матовое или тонированное исполнение",
];

export default function BezramnoePage() {
  return (
    <>
      <PageHeader
        title="Безрамное остекление"
        subtitle="Раздвижные стеклянные панели без рамы для балконов, террас и беседок. Скрытый дренаж, максимум света."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Безрамное остекление" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Толщина стекла", value: "8 / 10 мм" },
              { label: "Класс стекла", value: "Закалённое ESG" },
              { label: "Макс. высота панели", value: "3000 мм" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Применение</p>
            <h2 className="text-3xl font-bold text-zinc-900">Где используется</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((a) => (
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
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Характеристики</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Технические параметры</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Нужно безрамное остекление?</h3>
            <p className="text-zinc-400 text-sm">Уточните объект и размеры — подготовим предложение.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
