import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Зимние сады" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Профиль", value: "Тёплый алюминий" },
              { label: "Остекление", value: "Двухкамерный стеклопакет" },
              { label: "Использование", value: "Круглогодичное" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды</p>
            <h2 className="text-3xl font-bold text-zinc-900">Типы зимних садов</h2>
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
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Характеристики</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Технические особенности</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Хотите зимний сад?</h3>
            <p className="text-zinc-400 text-sm">Разработаем бесплатный проект и рассчитаем стоимость.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Получить расчёт <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
