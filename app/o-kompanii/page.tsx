import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Award, Users, Factory, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "О компании — АлюПро",
  description: "Производство алюминиевых пергол, зимних садов и остекления с 2012 года. Более 500 проектов. Гарантия 5 лет.",
};

const stats = [
  { value: "13 лет", label: "на рынке" },
  { value: "500+", label: "реализованных проектов" },
  { value: "5 лет", label: "гарантия по договору" },
  { value: "14 дней", label: "проект под ключ" },
];

const history = [
  { year: "2012", title: "Основание компании", desc: "АлюПро основана в Москве. Первые проекты тентовых пергол для частных клиентов." },
  { year: "2015", title: "Собственное производство", desc: "Открыт собственный цех по обработке алюминиевого профиля. Запущены ЧПУ-станки." },
  { year: "2017", title: "Биоклиматические перголы", desc: "Освоено производство ламельных биоклиматических пергол. Запущена флагманская модель SkyCloud." },
  { year: "2019", title: "Расширение географии", desc: "Выход на рынки Крыма и Краснодарского края. Собственные монтажные бригады в регионах." },
  { year: "2022", title: "500 объектов", desc: "Реализован 500-й проект. Расширение линейки — гильотинное остекление и ZIP-экраны." },
  { year: "2024", title: "Сегодня", desc: "Более 500 проектов в России и Европе. Девять направлений, собственное производство, монтаж под ключ." },
];

const values = [
  { icon: Factory, title: "Собственное производство", desc: "Полный цикл на нашем заводе. Без субподрядчиков — контроль качества на каждом этапе." },
  { icon: Zap, title: "Бесплатный 3D-проект", desc: "Разрабатываем визуализацию до начала работ. Согласовываем каждую деталь с клиентом." },
  { icon: Users, title: "Монтаж под ключ", desc: "Собственные бригады работают по всей России. Сдача объекта в оговорённые сроки." },
  { icon: Award, title: "ГОСТ Р ISO 9001", desc: "Работаем в соответствии со стандартом качества. Официальная гарантия по договору — 5 лет." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="О компании"
        subtitle="Производство алюминиевых пергол, зимних садов и остекления с 2012 года. Более 500 реализованных проектов."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">{s.value}</div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Наши принципы</p>
            <h2 className="text-3xl font-bold text-zinc-900">Почему выбирают нас</h2>
            <p className="text-zinc-500 mt-3 max-w-xl">За 13 лет мы реализовали более 500 проектов. Знаем все тонкости монтажа и особенности российского климата.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-zinc-100 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2 text-[15px]">{v.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="etapy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">История</p>
            <h2 className="text-3xl font-bold text-zinc-900">Как мы развивались</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-zinc-100 hidden sm:block" />
            <div className="space-y-6">
              {history.map((h) => (
                <div key={h.year} className="flex gap-6 sm:gap-10 items-start">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-sm font-bold text-zinc-400">{h.year}</span>
                  </div>
                  <div className="relative hidden sm:flex items-center justify-center w-5 shrink-0 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-900 border-2 border-white ring-1 ring-zinc-200 z-10" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-zinc-50 last:border-0">
                    <h3 className="font-semibold text-zinc-900 mb-1">{h.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Хотите реализовать проект?</h3>
            <p className="text-zinc-400 text-sm">Свяжитесь с нами — разработаем бесплатный 3D-проект и смету.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Связаться с нами <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
