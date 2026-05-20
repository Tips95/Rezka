import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceWorksSection from "@/components/ServiceWorksSection";
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
        backgroundImage="/images/optimized/banner-gilotina.webp"
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Гильотинное остекление" }]}
      />

      <ServiceWorksSection folder="gilotinnoe-osteklenie" title="Гильотинное остекление" />

      <section className="py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Профиль", value: "С терморазрывом" },
              { label: "Управление", value: "Somfy / ручное" },
              { label: "Гарантия", value: "5 лет" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды систем</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">Типы гильотинного остекления</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t) => (
              <div key={t.num} className="surface noise relative overflow-hidden rounded-2xl p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{t.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{t.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Комплектация</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 headline">Что входит</h2>
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
                <h3 className="text-2xl font-bold mb-1">Нужно гильотинное остекление?</h3>
                <p className="text-white/75 text-sm">Рассчитаем стоимость для вашего объекта.</p>
              </div>
              <Link
                href="/kontakty"
                className="ring-focus shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors"
              >
                Оставить заявку <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
