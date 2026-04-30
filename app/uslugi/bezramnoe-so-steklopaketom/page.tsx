import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Безрамное остекление со стеклопакетом — АлюПро",
  description: "Безрамное остекление с тёплым стеклопакетом — повышенная теплоизоляция при сохранении открытой эстетики безрамных систем.",
};

const advantages = [
  { num: "01", title: "Тёплый стеклопакет", desc: "Двухкамерный стеклопакет обеспечивает теплоизоляцию как у обычных окон, сохраняя эстетику безрамного остекления." },
  { num: "02", title: "Звукоизоляция", desc: "Стеклопакет значительно снижает уличный шум — особенно актуально для балконов в городе." },
  { num: "03", title: "Конденсат отсутствует", desc: "Благодаря многокамерной конструкции внутренняя поверхность не запотевает даже при больших перепадах температур." },
  { num: "04", title: "Всесезонное использование", desc: "Можно использовать балкон или террасу в холодное время года без ощутимых теплопотерь." },
  { num: "05", title: "Сохраняет вид", desc: "Профиль минимальной ширины — открытый вид из помещения максимально сохраняется." },
  { num: "06", title: "Тонировка и матирование", desc: "Стеклопакет может быть тонированным, с матовым слоем или солнцезащитным напылением." },
];

const features = [
  "Однокамерный или двухкамерный стеклопакет на выбор",
  "Алюминиевый профиль с терморазрывом",
  "Раздвижная или складная система открывания",
  "Высота панели до 2800 мм",
  "Тонированное, матовое или прозрачное стекло",
  "Гарантия 5 лет",
];

export default function BezramnoeSteklopaketPage() {
  return (
    <>
      <PageHeader
        title="Безрамное остекление со стеклопакетом"
        subtitle="Сочетание эстетики безрамных систем и теплоизоляционных свойств стеклопакета. Для балконов и террас."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "Безрамное со стеклопакетом" }]}
      />

      <section className="py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Стеклопакет", value: "1- или 2-камерный" },
              { label: "Профиль", value: "С терморазрывом" },
              { label: "Гарантия", value: "5 лет" },
            ].map((s) => (
              <div key={s.label} className="surface noise relative overflow-hidden rounded-2xl p-6 text-center">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3">{s.label}</p>
                <p className="text-xl font-bold text-zinc-900">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Преимущества</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">Почему со стеклопакетом лучше</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a) => (
              <div key={a.num} className="surface noise relative overflow-hidden rounded-2xl p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{a.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{a.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Характеристики</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 headline">Технические параметры</h2>
          <div className="surface noise relative overflow-hidden rounded-3xl p-7">
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-700 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600" />
            <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
            <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-1">Интересует этот вид остекления?</h3>
                <p className="text-white/75 text-sm">Рассчитаем стоимость под ваш объект бесплатно.</p>
              </div>
              <Link href="/kontakty" className="ring-focus shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                Получить расчёт <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
