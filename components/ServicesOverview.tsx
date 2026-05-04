import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tent, Wind, Leaf, GlassWater, Layers, PanelTop, DoorOpen, Bug, Shield } from "lucide-react";

const services = [
  {
    icon: Tent,
    title: "Тентовые перголы",
    desc: "Алюминиевые перголы с тентовым покрытием для террас и летних площадок.",
    href: "/uslugi/tentovye-pergoly",
    image: "/images/works/bioclimatic-pergola/3 (2).jpg",
    tags: ["Ткань SIOEN", "Somfy", "Под ключ"],
  },
  {
    icon: Wind,
    title: "Биоклиматические перголы",
    desc: "Моторизованные ламельные системы с управлением климатом.",
    href: "/uslugi/bioklimaticheskie-pergoly",
    image: "/images/optimized/hero-bg.webp",
    tags: ["Ламели", "Датчики", "LED"],
  },
  {
    icon: Leaf,
    title: "Зимние сады",
    desc: "Светопрозрачные алюминиевые конструкции для круглогодичного использования.",
    href: "/uslugi/zimnie-sady",
    image: "/images/works/zimnie-sady/image-30-04-26-02-41-1.jpeg",
    tags: ["Тёплые", "Круглый год", "Стеклопакет"],
  },
  {
    icon: GlassWater,
    title: "Безрамное остекление",
    desc: "Раздвижные стеклянные панели без рамы для террас и веранд.",
    href: "/uslugi/bezramnoe-osteklenie",
    image: "/images/optimized/scenario-home-main.webp",
    tags: ["Раздвижные", "Максимум света", "Скрытый дренаж"],
  },
  {
    icon: Layers,
    title: "Безрамное со стеклопакетом",
    desc: "Безрамное остекление с тёплым стеклопакетом и высокой теплоизоляцией.",
    href: "/uslugi/bezramnoe-so-steklopaketom",
    image: "/images/works/bezramnoe-osteklenie/Slade Lux3.jpeg",
    tags: ["Терморазрыв", "Тёплое", "Эстетика"],
  },
  {
    icon: PanelTop,
    title: "Гильотинное остекление",
    desc: "Подъёмное остекление с терморазрывом для ресторанов и отелей.",
    href: "/uslugi/gilotinnoe-osteklenie",
    image: "/images/works/gilotinnoe-osteklenie/hd_22faef42572bba7e56eab528f1bac793_65c0c20ef2882.jpg",
    tags: ["Подъёмное", "Бизнес", "Somfy"],
  },
  {
    icon: DoorOpen,
    title: "Панорамные двери",
    desc: "Складные и раздвижные двери, открывающие проём на всю ширину.",
    href: "/uslugi/panoramnye-dveri",
    image: "/images/works/gilotinnoe-osteklenie/Cedrus-Gallery9.jpg",
    tags: ["Раздвижные", "Складные", "Панорама"],
  },
  {
    icon: Bug,
    title: "Москитные сетки плиссе",
    desc: "Плиссированные сетки на алюминиевой раме для окон и дверей.",
    href: "/uslugi/moskitnye-setki",
    image: "/images/works/setki-plisse/image-30-04-26-03-01-2.jpeg",
    tags: ["Плиссе", "Нестандарт", "Лёгкий монтаж"],
  },
  {
    icon: Shield,
    title: "ZIP-экраны",
    desc: "Внешние рулонные экраны ZIP с боковыми направляющими и автоматикой.",
    href: "/uslugi/zip-ekrany",
    image: "/images/optimized/scenario-hotel-main.webp",
    tags: ["Солнцезащита", "Ветер", "Приватность"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-zinc-500 mb-3 tracking-[0.2em] uppercase">
              Наши направления
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900">Готовые решения под ваш проект</h2>
          </div>
          <Link
            href="/uslugi"
            className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            Все направления <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all bg-white"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 w-10 h-10 rounded-lg bg-zinc-950/72 backdrop-blur flex items-center justify-center border border-white/30">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2 group-hover:text-zinc-700 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-zinc-100 border border-zinc-200 text-zinc-600 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-900 transition-colors flex items-center gap-1 mt-4 font-semibold">
                    Подробнее <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
