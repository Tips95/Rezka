import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Панорамные двери — АлюПро",
  description: "Складные и раздвижные панорамные алюминиевые двери. Открывают пространство на всю ширину проёма без ограничений.",
};

const types = [
  { num: "01", title: "Панорамные складные двери", desc: "Секции складываются гармошкой и убираются в сторону. Проём открывается полностью. Для гостиных, ресторанов, залов." },
  { num: "02", title: "Панорамные раздвижные двери", desc: "Секции скользят вдоль стены в одну или обе стороны. Экономия места, плавный бесшумный ход." },
  { num: "03", title: "Подъёмно-сдвижные двери", desc: "Поднимаются и сдвигаются одновременно. Минимальный порог, удобство использования, максимальный проём." },
  { num: "04", title: "Двери с терморазрывом", desc: "Тёплый профиль для круглогодичного использования. Отдельное климатическое зонирование помещений." },
  { num: "05", title: "Двери для ресторанов", desc: "Открывают летнюю веранду заведения на максимальную ширину. Интеграция с фасадом и дизайном интерьера." },
  { num: "06", title: "Двери для частных домов", desc: "Соединяют гостиную с террасой. Создают ощущение единого пространства дома и сада." },
];

const features = [
  "Алюминиевый профиль — холодный или с терморазрывом",
  "Закалённое или ламинированное стекло",
  "Ширина секции до 1200 мм, высота до 3000 мм",
  "Плавный бесшумный ход на роликах",
  "Мультиточечные замки, ручки из нержавейки",
  "Гарантия 5 лет",
];

export default function PanoramnyeDveriPage() {
  return (
    <>
      <PageHeader
        title="Панорамные двери"
        subtitle="Складные и раздвижные панорамные алюминиевые двери. Открывают пространство на всю ширину проёма."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Панорамные двери" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Типы", value: "Складные / Раздвижные" },
              { label: "Высота", value: "до 3000 мм" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Виды</p>
            <h2 className="text-3xl font-bold text-zinc-900">Типы панорамных дверей</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Нужны панорамные двери?</h3>
            <p className="text-zinc-400 text-sm">Опишите объект и размеры проёма — подберём систему.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
