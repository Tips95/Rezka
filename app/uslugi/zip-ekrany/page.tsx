import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceWorksSection from "@/components/ServiceWorksSection";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ZIP-экраны — АлюПро",
  description: "Внешние рулонные шторы ZIP с боковыми направляющими. Защита от солнца, ветра и насекомых. Автоматика и ручное управление.",
};

const types = [
  { num: "01", title: "ZIP-экраны для террас", desc: "Закрывают открытые стороны террасы от солнца и ветра. Создают приватность и уютную атмосферу." },
  { num: "02", title: "ZIP-экраны для перголы", desc: "Боковые шторы для пергол и беседок. Превращают открытую конструкцию в закрытое пространство." },
  { num: "03", title: "ZIP-экраны для фасадов", desc: "Внешние шторы для окон и стеклянных фасадов. Снижают солнечную нагрузку и затраты на кондиционирование." },
  { num: "04", title: "Автоматические ZIP-экраны", desc: "Управление с пульта, смартфона или по таймеру. Интеграция с датчиком ветра." },
  { num: "05", title: "ZIP с боковой кассетой", desc: "Ткань скатывается в боковую кассету — компактное решение для узких мест." },
  { num: "06", title: "Прозрачные ZIP-экраны", desc: "ПВХ-прозрачное полотно — защита от ветра и осадков при сохранении видимости." },
];

const features = [
  "Ткань в боковых направляющих (ZIP-система) — не парусит при ветре",
  "Алюминиевый профиль направляющих и кассеты",
  "Ткань SIOEN (Бельгия) — УФ-защита, водонепроницаемость",
  "Прозрачное или непрозрачное полотно на выбор",
  "Автоматика Somfy — пульт, приложение, датчик ветра",
  "Гарантия 3 года на механику, 5 лет на каркас",
];

export default function ZipEkranyPage() {
  return (
    <>
      <PageHeader
        title="ZIP-экраны"
        subtitle="Внешние рулонные шторы ZIP с боковыми направляющими. Защита от солнца, ветра и насекомых. Автоматика Somfy."
        backgroundImage="/images/optimized/banner-zip.webp"
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Направления", href: "/uslugi" }, { label: "ZIP-экраны" }]}
      />

      <ServiceWorksSection folder="zip-ekrany" title="ZIP-экраны" />

      <section className="py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Ткань", value: "SIOEN (Бельгия)" },
              { label: "Управление", value: "Somfy / ручное" },
              { label: "Защита от ветра", value: "ZIP-система" },
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
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Применение</p>
            <h2 className="text-3xl font-bold text-zinc-900 headline">Где используются ZIP-экраны</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t) => (
              <div key={t.num} className="surface noise relative overflow-hidden rounded-2xl p-6">
                <div className="text-xs text-zinc-400 font-mono mb-3">{t.num}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{t.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Комплектация</p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 headline">Что входит в поставку</h2>
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
                <h3 className="text-2xl font-bold mb-1">Нужны ZIP-экраны?</h3>
                <p className="text-white/75 text-sm">Укажите размеры и объект — рассчитаем стоимость.</p>
              </div>
              <Link href="/kontakty" className="ring-focus shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                Оставить заявку <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
