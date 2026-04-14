import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Москитные сетки плиссе — АлюПро",
  description: "Плиссированные москитные сетки на алюминиевой раме. Для окон, дверей и нестандартных проёмов. Лёгкий монтаж.",
};

const types = [
  { num: "01", title: "Плиссе на окна", desc: "Складывается гармошкой и убирается в сторону, не перекрывая обзор. Идеально для окон с открыванием наружу." },
  { num: "02", title: "Плиссе на двери", desc: "Для входных и балконных дверей. Открывается и закрывается одновременно с дверью или независимо." },
  { num: "03", title: "Плиссе на нестандартные проёмы", desc: "Арочные, трапециевидные, треугольные проёмы. Сетка подстраивается под любую форму." },
  { num: "04", title: "Двойное плиссе", desc: "Две сетки в одной раме — открывается с обеих сторон. Для широких проёмов и балконных дверей." },
  { num: "05", title: "Плиссе на рольставни", desc: "Интегрируется в систему рольставен и жалюзи. Не требует отдельной рамы." },
  { num: "06", title: "Антипыльцевая сетка", desc: "Специальное полотно с более мелкой ячейкой для защиты от пыльцы и мелких насекомых." },
];

const features = [
  "Алюминиевая рама — анодированная или порошковое покрытие",
  "Полотно Phifer (США) — долговечная стекловолоконная сетка",
  "Без видимых направляющих — минималистичный вид",
  "Монтаж без сверления рамы окна",
  "Защита от насекомых, пыли и пыльцы",
  "Гарантия 2 года",
];

export default function MoskitnyeSetkaPage() {
  return (
    <>
      <PageHeader
        title="Москитные сетки плиссе"
        subtitle="Плиссированные москитные сетки на алюминиевой раме для окон, дверей и нестандартных проёмов."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Москитные сетки плиссе" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Полотно", value: "Phifer (США)" },
              { label: "Рама", value: "Алюминий" },
              { label: "Форма проёма", value: "Любая" },
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
            <h2 className="text-3xl font-bold text-zinc-900">Типы москитных сеток</h2>
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
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Что входит в поставку</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Нужны москитные сетки?</h3>
            <p className="text-zinc-400 text-sm">Укажите количество и размеры — рассчитаем стоимость.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
