import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Наши проекты — АлюПро",
  description: "Реализованные проекты пергол, зимних садов, остекления террас и панорамных дверей в Москве, Крыму и Краснодарском крае.",
};

const projects = [
  {
    title: "Биоклиматическая пергола SkyCloud",
    location: "г. Москва, Рублёво-Успенское шоссе",
    type: "Частный дом",
    desc: "Биоклиматическая пергола 8×6 м с LED-подсветкой, датчиком дождя и боковыми ZIP-экранами. Управление со смартфона.",
    tags: ["SkyCloud", "LED", "ZIP-экраны", "Somfy"],
  },
  {
    title: "Остекление летней веранды ресторана",
    location: "г. Краснодар, ул. Красная",
    type: "Ресторан",
    desc: "Гильотинное остекление 18 пм с автоматикой. Расширение посадочной зоны на 40 мест. Срок реализации — 12 дней.",
    tags: ["Гильотинное", "Автоматика", "Ресторан"],
  },
  {
    title: "Зимний сад пристроенный",
    location: "г. Сочи, Адлерский район",
    type: "Частный дом",
    desc: "Пристроенный зимний сад 5×4 м с тёплым алюминиевым профилем и двухкамерными стеклопакетами. Отопление — тёплый пол.",
    tags: ["Зимний сад", "Терморазрыв", "Тёплый пол"],
  },
  {
    title: "Тентовые перголы для отеля",
    location: "Крым, г. Ялта",
    type: "Отель 4★",
    desc: "Три тентовые перголы 5×5 м у бассейна. Ткань SIOEN белого цвета, автоматика Somfy, ИК-обогреватели в стойках.",
    tags: ["Тентовые", "Отель", "ИК-обогрев", "Somfy"],
  },
  {
    title: "Безрамное остекление балконов",
    location: "г. Москва, ЖК «Символ»",
    type: "Жилой комплекс",
    desc: "Остекление 24 балконов в жилом комплексе. Закалённое стекло 10 мм, скрытый дренаж. Монтаж — 18 рабочих дней.",
    tags: ["Безрамное", "ЖК", "Скрытый дренаж"],
  },
  {
    title: "Панорамные складные двери",
    location: "г. Москва, Одинцово",
    type: "Частный дом",
    desc: "Складные панорамные двери 5 м шириной из гостиной на террасу. Тёплый профиль, ламинированное стекло, мультиточечный замок.",
    tags: ["Складные двери", "Терморазрыв", "Частный дом"],
  },
];

export default function ProektyPage() {
  return (
    <>
      <PageHeader
        title="Наши проекты"
        subtitle="Более 500 реализованных проектов в Москве, Крыму, Краснодарском крае и Европе."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Наши проекты" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="border border-zinc-100 rounded-2xl p-7 hover:border-zinc-200 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{p.type}</span>
                    <h3 className="font-bold text-zinc-900 text-lg mt-1">{p.title}</h3>
                    <p className="text-sm text-zinc-400 mt-0.5">{p.location}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-zinc-100 text-zinc-500 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Хотите реализовать похожий проект?</h3>
            <p className="text-zinc-400 text-sm">Разработаем бесплатный 3D-проект и смету.</p>
          </div>
          <Link href="/kontakty" className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors">
            Оставить заявку <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
