import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tent, Wind, Leaf, GlassWater, Layers, PanelTop, DoorOpen, Bug, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Наши направления — GLASSEYES",
  description: "Тентовые и биоклиматические перголы, зимние сады, безрамное и гильотинное остекление, панорамные двери, ZIP-экраны и москитные сетки.",
};

const services = [
  {
    icon: Tent,
    title: "Тентовые перголы",
    desc: "Алюминиевые перголы с тентовым покрытием для террас, беседок и летних площадок. Ткань SIOEN (Бельгия). Защита от солнца и осадков.",
    tags: ["Алюминий", "Ткань SIOEN", "Автоматика Somfy", "Частные дома", "Рестораны"],
    href: "/uslugi/tentovye-pergoly",
    image: "/images/optimized/card-tent.webp",
  },
  {
    icon: Wind,
    title: "Биоклиматические перголы",
    desc: "Моторизованные ламельные перголы с управлением климатом. Поворотные алюминиевые ламели, датчики дождя и ветра, LED-подсветка.",
    tags: ["Ламельные", "Моторизованные", "Датчик дождя", "LED", "SkyCloud"],
    href: "/uslugi/bioklimaticheskie-pergoly",
    image: "/images/optimized/hero-bg.webp",
  },
  {
    icon: Leaf,
    title: "Зимние сады",
    desc: "Светопрозрачные алюминиевые конструкции для круглогодичного использования. Вертикальное и наклонное остекление, системы отопления.",
    tags: ["Круглогодичные", "Теплоизоляция", "Вертикальное", "Наклонное", "Отопление"],
    href: "/uslugi/zimnie-sady",
    image: "/images/optimized/banner-zimnie.webp",
  },
  {
    icon: GlassWater,
    title: "Безрамное остекление",
    desc: "Раздвижные стеклянные панели без рамы для балконов и террас. Максимум света, минимум конструкций. Скрытый дренаж.",
    tags: ["Балконы", "Террасы", "Раздвижные", "Закалённое стекло", "Скрытый дренаж"],
    href: "/uslugi/bezramnoe-osteklenie",
    image: "/images/optimized/scenario-home-main.webp",
  },
  {
    icon: Layers,
    title: "Безрамное со стеклопакетом",
    desc: "Безрамное остекление с тёплым стеклопакетом — повышенная теплоизоляция при сохранении открытой эстетики.",
    tags: ["Стеклопакет", "Теплоизоляция", "Балконы", "Терморазрыв"],
    href: "/uslugi/bezramnoe-so-steklopaketom",
    image: "/images/optimized/banner-steklopaket.webp",
  },
  {
    icon: PanelTop,
    title: "Гильотинное остекление",
    desc: "Подъёмное гильотинное остекление ALDU с терморазрывом. Для ресторанов, кафе и отелей. Автоматика Somfy.",
    tags: ["Подъёмное", "Гильотинное", "Терморазрыв", "Рестораны", "Отели"],
    href: "/uslugi/gilotinnoe-osteklenie",
    image: "/images/optimized/banner-gilotina.webp",
  },
  {
    icon: DoorOpen,
    title: "Панорамные двери",
    desc: "Складные и раздвижные панорамные алюминиевые двери. Открывают пространство на всю ширину проёма без ограничений.",
    tags: ["Складные", "Раздвижные", "Алюминий", "Панорамные", "Широкий проём"],
    href: "/uslugi/panoramnye-dveri",
    image: "/images/optimized/banner-doors.webp",
  },
  {
    icon: Bug,
    title: "Москитные сетки плиссе",
    desc: "Плиссированные москитные сетки на алюминиевой раме. Для окон, дверей и нестандартных проёмов. Лёгкий монтаж.",
    tags: ["Плиссе", "Алюминий", "Окна", "Двери", "Нестандартные проёмы"],
    href: "/uslugi/moskitnye-setki",
    image: "/images/optimized/card-setki.webp",
  },
  {
    icon: Shield,
    title: "ZIP-экраны",
    desc: "Внешние рулонные шторы ZIP с боковыми направляющими. Защита от солнца, ветра и насекомых. Автоматика и ручное управление.",
    tags: ["Рулонные", "Боковые направляющие", "Защита от ветра", "Автоматика"],
    href: "/uslugi/zip-ekrany",
    image: "/images/optimized/scenario-hotel-main.webp",
  },
];

export default function UslugiPage() {
  return (
    <>
      <section className="pt-10 pb-6 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mb-3">Наши направления</p>
              <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-[0.95]">
                Готовые решения
                <span className="block text-zinc-500">для дома и бизнеса</span>
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-zinc-700 leading-relaxed">
                Девять ключевых направлений — от тентовых и биоклиматических пергол до ZIP-экранов
                и гильотинного остекления. Подберём конфигурацию под ваш сценарий и бюджет.
              </p>
              <Link href="/kontakty" className="inline-flex mt-4 rounded-full px-5 py-2.5 accent-btn text-sm">
                Получить смету за 1 минуту
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-14 bg-[#f6f7f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)] transition-all"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3 w-10 h-10 rounded-lg bg-zinc-950/72 backdrop-blur flex items-center justify-center border border-white/30">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <h3 className="font-semibold text-zinc-900 text-lg group-hover:text-zinc-700 transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-800 transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="text-xs bg-zinc-100 border border-zinc-200 text-zinc-600 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
