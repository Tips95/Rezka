import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Гильотинное остекление — АлюПро",
  description: "Подъёмное гильотинное остекление с терморазрывом. Для ресторанов, кафе и отелей. Автоматика Somfy.",
};

const types = [
  { num: "01", title: "Гильотинное без терморазрыва", desc: "Базовая система для сезонного использования. Оптимально для летних веранд ресторанов и кафе." },
  { num: "02", title: "Гильотинное с терморазрывом", desc: "Тёплый профиль с терморазрывом для круглогодичного использования. Сохраняет тепло даже в мороз." },
  { num: "03", title: "Автоматическое управление", desc: "Интеграция с автоматикой Somfy. Открывание одним нажатием или по расписанию." },
  { num: "04", title: "Широкие проёмы", desc: "Идеально для ресторанов с большими фасадными проёмами. Панели убираются полностью вверх." },
  { num: "05", title: "Боковое складывание", desc: "Альтернативное решение — панели складываются в сторону, освобождая весь проём." },
  { num: "06", title: "Интеграция с кровлей", desc: "Гильотинная система может быть совмещена с навесом или перголой для полного перекрытия пространства." },
];

const features = [
  "Алюминиевый профиль — с терморазрывом или без",
  "Закалённое стекло 6–10 мм",
  "Подъём секций без ограничения количества",
  "Автоматика Somfy — пульт или смартфон",
  "Уплотнители по всему периметру",
  "Гарантия 5 лет",
];

export default function GilotinnoeOstekleniePage() {
  return (
    <>
      <PageHeader
        title="Гильотинное остекление"
        subtitle="Подъёмное гильотинное остекление ALDU с терморазрывом. Для ресторанов, кафе и отелей. Автоматика Somfy."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Гильотинное остекление" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Профиль", value: "С терморазрывом" },
              { label: "Управление", value: "Somfy / ручное" },
              { label: "Гарантия", value: "5 лет" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды систем</p>
            <h2 className="text-3xl font-bold text-zinc-900">Типы гильотинного остекления</h2>
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
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Комплектация</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Что входит</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Нужно гильотинное остекление?</h3>
            <p className="text-zinc-400 text-sm">Рассчитаем стоимость для вашего объекта.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
