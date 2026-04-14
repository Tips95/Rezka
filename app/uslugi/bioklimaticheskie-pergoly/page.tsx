import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Биоклиматические перголы — АлюПро",
  description: "Моторизованные ламельные перголы с управлением климатом. Поворотные алюминиевые ламели, датчики дождя и ветра, LED-подсветка.",
};

const types = [
  { num: "01", title: "SkyCloud — флагманская модель", desc: "Биоклиматическая пергола премиум-класса. Поворотные ламели 0–135°, встроенный дренаж, LED в ламелях." },
  { num: "02", title: "Управление по смартфону", desc: "Интеграция с умным домом. Управление через приложение, голосовые команды Alexa/Google Home." },
  { num: "03", title: "Датчики дождя и ветра", desc: "Автоматически закрываются при дожде и сильном ветре. Защищают пространство и продлевают срок службы." },
  { num: "04", title: "LED-подсветка в ламелях", desc: "Встроенная RGB-подсветка создаёт нужную атмосферу. Управляется отдельно от механики пергол." },
  { num: "05", title: "Встроенная система дренажа", desc: "Вода отводится по скрытым каналам в стойках. Не капает на гостей и не портит террасу." },
  { num: "06", title: "Боковые экраны ZIP", desc: "Дополнительные боковые рулонные шторы для защиты от ветра и создания приватности." },
];

const features = [
  "Поворотные алюминиевые ламели от 0° до 135°",
  "Автоматика Somfy — дистанционное и умное управление",
  "Встроенный скрытый дренаж Disaster Discharge",
  "LED-подсветка в ламелях — RGB или белый свет",
  "Датчик ветра и дождя в комплекте",
  "Порошковое окрашивание каркаса в любой цвет RAL",
  "Гарантия 5 лет на конструкцию и механику",
];

export default function BioklimaticPage() {
  return (
    <>
      <PageHeader
        title="Биоклиматические перголы"
        subtitle="Моторизованные ламельные перголы с автоматическим управлением климатом, датчиками и LED-подсветкой."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Биоклиматические перголы" }]}
      />

      <section className="py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Угол поворота ламелей", value: "0° — 135°" },
              { label: "Флагманская модель", value: "SkyCloud" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Возможности</p>
            <h2 className="text-3xl font-bold text-zinc-900">Что умеет биоклиматическая пергола</h2>
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
            <h3 className="text-xl font-bold text-white mb-1">Интересует биоклиматическая пергола?</h3>
            <p className="text-zinc-400 text-sm">Рассчитаем стоимость и разработаем бесплатный 3D-проект.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Получить расчёт <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
