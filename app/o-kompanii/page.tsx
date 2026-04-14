import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Award, Users, Factory, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "О компании — РезкаСтекла",
  description: "История завода, производственные мощности, сертификаты и партнёры. Работаем с 2003 года.",
};

const stats = [
  { value: "20+", label: "лет на рынке" },
  { value: "50 000+", label: "заказов выполнено" },
  { value: "300+", label: "постоянных клиентов" },
  { value: "10 000 м²", label: "площадь производства" },
];

const history = [
  {
    year: "2003",
    title: "Основание компании",
    desc: "ООО «ДомГласс» основана в Домодедово. Запущена первая линия ручной резки стекла.",
  },
  {
    year: "2007",
    title: "Расширение производства",
    desc: "Приобретены первые автоматизированные станки для резки стекла с числовым программным управлением.",
  },
  {
    year: "2012",
    title: "Новое направление",
    desc: "Открыто направление по производству закалённого стекла и триплекса. Установлена закалочная печь.",
  },
  {
    year: "2017",
    title: "Модернизация оборудования",
    desc: "Полное переоснащение парка станков. Установлены ЧПУ-центры ведущих европейских производителей.",
  },
  {
    year: "2021",
    title: "Фотопечать и покраска",
    desc: "Запущен цех фотопечати керамическими красками и линия покраски стекла методом Stemalit/Lacobel.",
  },
  {
    year: "2024",
    title: "Сегодня",
    desc: "Современный завод полного цикла. Более 300 постоянных клиентов по всей России.",
  },
];

const values = [
  {
    icon: Factory,
    title: "Собственное производство",
    desc: "Всё изготавливается на нашем заводе — без посредников. Полный контроль качества и сроков.",
  },
  {
    icon: Zap,
    title: "Точность и скорость",
    desc: "ЧПУ-станки обеспечивают погрешность не более 0,1 мм. Стандартный срок — 1–3 рабочих дня.",
  },
  {
    icon: Users,
    title: "Работаем с юр. и физ. лицами",
    desc: "Гибкие условия для дизайнеров, строительных компаний, частных заказчиков и крупного опта.",
  },
  {
    icon: Award,
    title: "Соответствие ГОСТам",
    desc: "Вся продукция производится в соответствии с ГОСТ и имеет соответствующие сертификаты.",
  },
];

const partners = [
  "SportMax", "АМГ Групп", "ArtSpace", "БАСТ 3",
  "РЭЙ Инжиниринг", "Версаль ГК", "А. Воробьёв", "Строй-Комплект",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="О компании"
        subtitle="Завод по обработке стекла. Производство с 2003 года в Домодедово. Собственный парк ЧПУ-оборудования."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-2">{s.value}</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">История</p>
            <h2 className="text-3xl font-bold text-zinc-900">Как мы развивались</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
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

      {/* Partners */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Доверяют нам</p>
            <h2 className="text-3xl font-bold text-zinc-900">Наши партнёры и клиенты</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {partners.map((p) => (
              <div
                key={p}
                className="bg-white border border-zinc-100 rounded-xl px-5 py-4 text-sm font-medium text-zinc-600 text-center"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Хотите стать нашим партнёром?</h3>
            <p className="text-zinc-400 text-sm">Свяжитесь с нами для обсуждения условий сотрудничества.</p>
          </div>
          <Link
            href="/kontakty"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Связаться с нами
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
