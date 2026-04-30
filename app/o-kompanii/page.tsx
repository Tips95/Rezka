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
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="surface noise relative overflow-hidden rounded-2xl p-8 text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2 headline">
                  <span className="headline-accent">{s.value}</span>
                </div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Наши принципы</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">
              Почему выбирают нас
            </h2>
            <p className="text-zinc-500 mt-3 max-w-xl">За 13 лет мы реализовали более 500 проектов. Знаем все тонкости монтажа и особенности российского климата.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="surface noise relative overflow-hidden rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 shadow-sm shadow-blue-500/20">
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
      <section id="etapy" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">История</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">
              Как мы развивались
            </h2>
          </div>
          <div className="surface noise relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute left-[88px] top-8 bottom-8 w-px bg-white/70 hidden sm:block" />
            <div className="space-y-6">
              {history.map((h) => (
                <div key={h.year} className="flex gap-6 sm:gap-10 items-start">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-sm font-bold text-zinc-400">{h.year}</span>
                  </div>
                  <div className="relative hidden sm:flex items-center justify-center w-5 shrink-0 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 border-2 border-white ring-1 ring-white/70 z-10" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-white/50 last:border-0">
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
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600" />
            <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
            <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-1">Хотите реализовать проект?</h3>
                <p className="text-white/75 text-sm">Свяжитесь с нами — разработаем бесплатный 3D-проект и смету.</p>
              </div>
              <Link href="/kontakty" className="ring-focus shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                Связаться с нами <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
