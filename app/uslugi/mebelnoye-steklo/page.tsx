import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Мебельное стекло на заказ — РезкаСтекла",
  description: "Стёкла для столешниц, полок, мебельных фасадов, витрин на заказ. Любые формы и размеры, полировка кромки, фацет.",
};

const types = [
  { num: "01", title: "Стёкла для столешниц", desc: "Закалённое или обычное стекло 6–19 мм с полированной кромкой. Защищает поверхность стола и придаёт современный вид." },
  { num: "02", title: "Полки из стекла", desc: "Прозрачные и тонированные полки для шкафов, стеллажей, ниш. Толщина 4–10 мм, отверстия под крепёж." },
  { num: "03", title: "Стёкла для фасадов мебели", desc: "Прозрачные, матовые, тонированные или крашеные стёкла для дверец шкафов и тумб." },
  { num: "04", title: "Витринные стёкла", desc: "Стёкла для торговых витрин, музейных экспозиций и ювелирных прилавков. Прямые и изогнутые формы." },
  { num: "05", title: "Стёкла для тумб и ТВ-тумб", desc: "Защитные и декоративные стёкла для тумб под телевизор. С фацетом, матовые или прозрачные." },
  { num: "06", title: "Стёкла для офисной мебели", desc: "Рабочие столы, переговорные столы, ресепшн. Безопасное закалённое стекло с обработкой кромки." },
];

const features = [
  "Любая форма: прямоугольник, овал, круг, нестандартный контур",
  "Матовое, тонированное или прозрачное стекло",
  "Полировка и шлифовка кромки в комплекте",
  "Отверстия под крепёж и фурнитуру",
  "Фацет для декоративного эффекта",
  "Закалка для повышения безопасности",
];

export default function MebelStekloPage() {
  return (
    <>
      <PageHeader
        title="Мебельное стекло"
        subtitle="Стёкла для столешниц, полок, фасадов, витрин и тумб. Любые размеры, формы и виды обработки."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Мебельное стекло" },
        ]}
      />

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды изделий</p>
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
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Возможности</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Что можно заказать</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Нужно мебельное стекло?</h3>
            <p className="text-zinc-400 text-sm">Укажите размеры и вид обработки — рассчитаем за день.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
