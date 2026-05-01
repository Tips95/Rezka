import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProjectsWorksGallery, { type WorksDirection } from "@/components/ProjectsWorksGallery";
import { ArrowRight } from "lucide-react";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

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

const directionConfig: Array<Omit<WorksDirection, "images"> & { folder: string }> = [
  {
    key: "bioclimatic-pergola",
    title: "Биоклиматические перголы",
    subtitle: "Ламели, автоматика, подсветка и климат-контроль.",
    href: "/uslugi/bioklimaticheskie-pergoly",
    folder: "bioclimatic-pergola",
  },
  {
    key: "zimnie-sady",
    title: "Зимние сады",
    subtitle: "Тёплые светопрозрачные конструкции для круглогодичного использования.",
    href: "/uslugi/zimnie-sady",
    folder: "zimnie-sady",
  },
  {
    key: "zip-ekrany",
    title: "ZIP-экраны",
    subtitle: "Внешняя солнцезащита и приватность для террас и фасадов.",
    href: "/uslugi/zip-ekrany",
    folder: "zip-ekrany",
  },
  {
    key: "bezramnoe-osteklenie",
    title: "Безрамное остекление",
    subtitle: "Максимум света и открытый обзор без тяжёлых профилей.",
    href: "/uslugi/bezramnoe-osteklenie",
    folder: "bezramnoe-osteklenie",
  },
  {
    key: "gilotinnoe-osteklenie",
    title: "Гильотинное остекление",
    subtitle: "Подъёмные системы для веранд, кафе и ресторанов.",
    href: "/uslugi/gilotinnoe-osteklenie",
    folder: "gilotinnoe-osteklenie",
  },
  {
    key: "setki-plisse",
    title: "Сетки плиссе",
    subtitle: "Эстетичные решения для дверей, окон и проёмов.",
    href: "/uslugi/moskitnye-setki",
    folder: "setki-plisse",
  },
];

async function loadWorksDirections(): Promise<WorksDirection[]> {
  const base = join(process.cwd(), "public", "images", "works");

  return Promise.all(
    directionConfig.map(async (direction) => {
      const folderPath = join(base, direction.folder);
      let files: string[] = [];

      try {
        const entries = await readdir(folderPath, { withFileTypes: true });
        files = entries
          .filter((e) => e.isFile())
          .map((e) => e.name)
          .filter((name) => /\.(jpg|jpeg|png|webp)$/i.test(name))
          .sort((a, b) => a.localeCompare(b))
          .slice(0, 18)
          // Keep original filename to avoid double-encoding in next/image src.
          .map((name) => `/images/works/${direction.folder}/${name}`);
      } catch {
        files = [];
      }

      return {
        key: direction.key,
        title: direction.title,
        subtitle: direction.subtitle,
        href: direction.href,
        images: files,
      };
    }),
  );
}

export default async function ProektyPage() {
  const worksDirections = await loadWorksDirections();

  return (
    <>
      <PageHeader
        title="Наши проекты"
        subtitle="Более 500 реализованных проектов в Москве, Крыму, Краснодарском крае и Европе."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Наши проекты" }]}
      />

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="surface noise relative overflow-hidden rounded-2xl p-7 hover:shadow-lg hover:shadow-[rgba(15,23,42,0.10)] transition-all">
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
                    <span key={tag} className="text-xs bg-white/70 border border-white/70 text-zinc-600 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-700 mb-3 tracking-wide uppercase">Наши работы</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 headline">
              Выберите направление и смотрите{" "}
              <span className="headline-accent">реальные фото объектов</span>
            </h2>
          </div>
          <ProjectsWorksGallery directions={worksDirections} />
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600" />
            <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
            <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-1">Хотите реализовать похожий проект?</h3>
                <p className="text-white/75 text-sm">Разработаем бесплатный 3D-проект и смету.</p>
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
