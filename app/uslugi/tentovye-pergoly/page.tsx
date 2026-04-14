import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Тентовые перголы — АлюПро",
  description: "Алюминиевые перголы с тентовым покрытием. Ткань SIOEN (Бельгия), автоматика Somfy (Франция). Для террас, беседок и летних площадок.",
};

const types = [
  { num: "01", title: "Перголы для частных домов", desc: "Создаём уютные зоны отдыха на террасах и верандах. Защита от солнца и осадков, эстетичный дизайн под любой архитектурный стиль." },
  { num: "02", title: "Перголы для ресторанов и кафе", desc: "Расширяем летнюю площадку вашего заведения. Гости комфортно сидят даже в дождь или при ярком солнце." },
  { num: "03", title: "Перголы для отелей", desc: "Создаём атмосферные зоны у бассейна, на террасах и у ресторана. Повышают статус и привлекательность объекта." },
  { num: "04", title: "Садовые перголы", desc: "Отдельностоящие конструкции для сада и дачи. Монтируются на любом типе покрытия — газон, плитка, дерево." },
  { num: "05", title: "Перголы с подсветкой", desc: "Встроенные LED-светильники в стойки и балки. Создают вечернее освещение без видимых кабелей." },
  { num: "06", title: "Перголы с нагревателями", desc: "Инфракрасные обогреватели для комфортного использования в прохладную погоду. Монтируются в конструкцию." },
];

const features = [
  "Алюминиевый каркас с порошковым окрашиванием (RAL любой цвет)",
  "Ткань SIOEN (Бельгия) — водонепроницаемая, UV-защита",
  "Автоматика Somfy (Франция) — дистанционное управление",
  "Датчик ветра и дождя для автоматического закрытия",
  "Скрытый дренаж Disaster Discharge",
  "Гарантия 5 лет на конструкцию",
];

export default function TentovyePergolyPage() {
  return (
    <>
      <PageHeader
        title="Тентовые перголы"
        subtitle="Алюминиевые перголы с тентовым покрытием для террас, беседок и летних площадок. Ткань SIOEN, автоматика Somfy."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Тентовые перголы" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Автоматика", value: "Somfy (Франция)" },
              { label: "Ткань", value: "SIOEN (Бельгия)" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Применение</p>
            <h2 className="text-3xl font-bold text-zinc-900">Для кого подходит</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Нужна тентовая пергола?</h3>
            <p className="text-zinc-400 text-sm">Опишите объект — разработаем бесплатный 3D-проект и смету.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Получить расчёт <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
