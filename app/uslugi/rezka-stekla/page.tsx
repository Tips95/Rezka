import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Резка, обточка и фацет стекла — РезкаСтекла",
  description: "Прямолинейная и фигурная резка стекла на ЧПУ, шлифовка и полировка кромки, декоративный фацет. Размеры от 150×400 до 3200×6000 мм.",
};

const cuttingTypes = [
  { num: "01", title: "Прямолинейная резка", desc: "Нарезка листового стекла по прямым линиям. Допуск ±0,1 мм. Применяется для мебели, стеклопакетов, перегородок." },
  { num: "02", title: "Фигурная резка", desc: "Вырезаем любые криволинейные формы: овалы, арки, многоугольники, сложные контуры по DXF/PDF-файлу." },
  { num: "03", title: "Круглые формы", desc: "Идеально ровные окружности и эллипсы диаметром от 100 мм для мебели, витрин и декора." },
  { num: "04", title: "Шлифовка кромки", desc: "Снятие остроты с торцов после резки — безопасная матовая кромка. Обязательна для мебели и открытых стёкол." },
  { num: "05", title: "Полировка кромки", desc: "Торец становится прозрачным и гладким. Выглядит как заводское изделие. Подходит для витрин и зеркал." },
  { num: "06", title: "Фацет", desc: "Декоративный полированный срез кромки под углом 5–45°. Ширина фацета от 5 до 50 мм. Придаёт изделию благородный вид." },
];

const included = [
  "Резка по чертежу или эскизу заказчика",
  "Вырезы и отверстия под фурнитуру",
  "Шлифовка кромки — матовая безопасная поверхность",
  "Полировка торца — прозрачный гладкий край",
  "Фацет — полированный срез под заданным углом",
  "Упаковка для безопасной транспортировки",
];

export default function RezkaSteklaPage() {
  return (
    <>
      <PageHeader
        title="Резка, обточка и фацет стекла"
        subtitle="Прямолинейная и фигурная резка на ЧПУ-станках. Шлифовка и полировка кромки. Фацет под любым углом."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/uslugi" },
          { label: "Резка, обточка и фацет" },
        ]}
      />

      {/* Sizes */}
      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="border border-zinc-100 rounded-2xl p-6 text-center">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">Минимальный размер</p>
              <p className="text-4xl font-bold text-zinc-900">150×400</p>
              <p className="text-sm text-zinc-400 mt-1">мм</p>
            </div>
            <div className="border border-zinc-900 bg-zinc-900 rounded-2xl p-6 text-center">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">Максимальный размер</p>
              <p className="text-4xl font-bold text-white">3200×6000</p>
              <p className="text-sm text-zinc-400 mt-1">мм</p>
            </div>
            <div className="border border-zinc-100 rounded-2xl p-6 text-center">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">Толщина стекла</p>
              <p className="text-4xl font-bold text-zinc-900">3–25</p>
              <p className="text-sm text-zinc-400 mt-1">мм</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды обработки</p>
            <h2 className="text-3xl font-bold text-zinc-900">Что мы выполняем</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cuttingTypes.map((t) => (
              <div key={t.num} className="bg-white rounded-2xl border border-zinc-100 p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{t.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{t.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Что входит</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Комплексная обработка</h2>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-700">
                <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Готовы сделать заказ?</h3>
            <p className="text-zinc-400 text-sm">Пришлите чертёж или размеры — рассчитаем стоимость бесплатно.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
