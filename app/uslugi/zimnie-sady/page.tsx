import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceWorksSection from "@/components/ServiceWorksSection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Зимние сады — АлюПро",
  description: "Светопрозрачные алюминиевые конструкции для круглогодичного использования. Вертикальное и наклонное остекление, системы отопления.",
};

const types = [
  { num: "01", title: "Пристроенный зимний сад", desc: "Примыкает к стене дома. Самый популярный вариант — органично вписывается в архитектуру и расширяет жилое пространство." },
  { num: "02", title: "Отдельностоящий зимний сад", desc: "Самостоятельная конструкция в саду или на участке. Используется как гостевой домик, студия или место для растений." },
  { num: "03", title: "Зимний сад-веранда", desc: "Застеклённая веранда с утеплёнными алюминиевыми профилями. Для круглогодичного комфортного использования." },
  { num: "04", title: "Зимний сад для ресторана", desc: "Всесезонная зона для гостей ресторана. Обогрев, вентиляция, интеграция с интерьером заведения." },
  { num: "05", title: "Мансардное остекление", desc: "Наклонное остекление кровли для максимального естественного освещения. Ламинированные безопасные стёкла." },
  { num: "06", title: "Зимний сад с отоплением", desc: "Полноценная интеграция отопительных систем — радиаторы, тёплый пол, сплит-системы." },
];

const features = [
  "Тёплый алюминиевый профиль с терморазрывом",
  "Двухкамерный стеклопакет 4-16-4 и более",
  "Вертикальное и наклонное остекление в одной конструкции",
  "Системы вентиляции — открывающиеся фрамуги и моторизованные люки",
  "Интеграция с системами отопления и кондиционирования",
  "Гарантия 5 лет на конструкцию",
];

export default function ZimnieSadyPage() {
  return (
    <>
      <PageHeader
        title="Зимние сады"
        subtitle="Светопрозрачные алюминиевые конструкции для круглогодичного использования с тёплым профилем и стеклопакетами."
        backgroundImage="/images/optimized/banner-zimnie.webp"
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Зимние сады" }]}
      />

      <ServiceWorksSection folder="zimnie-sady" title="Зимние сады" />

      <section className="py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Профиль", value: "Тёплый алюминий" },
              { label: "Остекление", value: "Двухкамерный стеклопакет" },
              { label: "Использование", value: "Круглогодичное" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">Типы зимних садов</h2>
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
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Характеристики</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 headline">Технические особенности</h2>
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
                <h3 className="text-2xl font-bold mb-1">Хотите зимний сад?</h3>
                <p className="text-white/75 text-sm">Разработаем бесплатный проект и рассчитаем стоимость.</p>
              </div>
              <Link href="/kontakty" className="ring-focus shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                Получить расчёт <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
