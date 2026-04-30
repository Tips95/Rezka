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

      <section className="py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Толщина стекла", value: "8 / 10 мм" },
              { label: "Класс стекла", value: "Закалённое ESG" },
              { label: "Макс. высота панели", value: "3000 мм" },
            ].map((s) => (
              <div key={s.label} className="surface noise relative overflow-hidden rounded-2xl p-6 text-center">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">{s.label}</p>
                <p className="text-xl font-bold text-zinc-900">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Применение</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">
              Где используется
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((a) => (
              <div key={a.num} className="surface noise relative overflow-hidden rounded-2xl p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{a.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{a.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Характеристики</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 headline">Технические параметры</h2>
          <div className="surface noise relative overflow-hidden rounded-3xl p-7">
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-700 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600" />
            <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
            <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-1">Нужно безрамное остекление?</h3>
                <p className="text-white/75 text-sm">Уточните объект и размеры — подготовим предложение.</p>
              </div>
              <Link href="/kontakty" className="ring-focus shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                Оставить заявку <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
