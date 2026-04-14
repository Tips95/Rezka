import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Tent, Wind, Leaf, GlassWater, Layers, PanelTop, DoorOpen, Bug, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Наши направления — АлюПро",
  description: "Тентовые и биоклиматические перголы, зимние сады, безрамное и гильотинное остекление, панорамные двери, ZIP-экраны и москитные сетки.",
};

const services = [
  {
    icon: Tent,
    title: "Тентовые перголы",
    desc: "Алюминиевые перголы с тентовым покрытием для террас, беседок и летних площадок. Ткань SIOEN (Бельгия). Защита от солнца и осадков.",
    tags: ["Алюминий", "Ткань SIOEN", "Автоматика Somfy", "Частные дома", "Рестораны"],
    href: "/uslugi/tentovye-pergoly",
  },
  {
    icon: Wind,
    title: "Биоклиматические перголы",
    desc: "Моторизованные ламельные перголы с управлением климатом. Поворотные алюминиевые ламели, датчики дождя и ветра, LED-подсветка.",
    tags: ["Ламельные", "Моторизованные", "Датчик дождя", "LED", "SkyCloud"],
    href: "/uslugi/bioklimaticheskie-pergoly",
  },
  {
    icon: Leaf,
    title: "Зимние сады",
    desc: "Светопрозрачные алюминиевые конструкции для круглогодичного использования. Вертикальное и наклонное остекление, системы отопления.",
    tags: ["Круглогодичные", "Теплоизоляция", "Вертикальное", "Наклонное", "Отопление"],
    href: "/uslugi/zimnie-sady",
  },
  {
    icon: GlassWater,
    title: "Безрамное остекление",
    desc: "Раздвижные стеклянные панели без рамы для балконов и террас. Максимум света, минимум конструкций. Скрытый дренаж.",
    tags: ["Балконы", "Террасы", "Раздвижные", "Закалённое стекло", "Скрытый дренаж"],
    href: "/uslugi/bezramnoe-osteklenie",
  },
  {
    icon: Layers,
    title: "Безрамное со стеклопакетом",
    desc: "Безрамное остекление с тёплым стеклопакетом — повышенная теплоизоляция при сохранении открытой эстетики.",
    tags: ["Стеклопакет", "Теплоизоляция", "Балконы", "Терморазрыв"],
    href: "/uslugi/bezramnoe-so-steklopaketom",
  },
  {
    icon: PanelTop,
    title: "Гильотинное остекление",
    desc: "Подъёмное гильотинное остекление ALDU с терморазрывом. Для ресторанов, кафе и отелей. Автоматика Somfy.",
    tags: ["Подъёмное", "Гильотинное", "Терморазрыв", "Рестораны", "Отели"],
    href: "/uslugi/gilotinnoe-osteklenie",
  },
  {
    icon: DoorOpen,
    title: "Панорамные двери",
    desc: "Складные и раздвижные панорамные алюминиевые двери. Открывают пространство на всю ширину проёма без ограничений.",
    tags: ["Складные", "Раздвижные", "Алюминий", "Панорамные", "Широкий проём"],
    href: "/uslugi/panoramnye-dveri",
  },
  {
    icon: Bug,
    title: "Москитные сетки плиссе",
    desc: "Плиссированные москитные сетки на алюминиевой раме. Для окон, дверей и нестандартных проёмов. Лёгкий монтаж.",
    tags: ["Плиссе", "Алюминий", "Окна", "Двери", "Нестандартные проёмы"],
    href: "/uslugi/moskitnye-setki",
  },
  {
    icon: Shield,
    title: "ZIP-экраны",
    desc: "Внешние рулонные шторы ZIP с боковыми направляющими. Защита от солнца, ветра и насекомых. Автоматика и ручное управление.",
    tags: ["Рулонные", "Боковые направляющие", "Защита от ветра", "Автоматика"],
    href: "/uslugi/zip-ekrany",
  },
];

export default function UslugiPage() {
  return (
    <>
      <PageHeader
        title="Наши направления"
        subtitle="Девять ключевых направлений — от тентовых пергол и зимних садов до ZIP-экранов и гильотинного остекления."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Наши направления" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex gap-5 border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-900 transition-colors">
                    <Icon size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-zinc-900 text-[15px] group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight size={15} className="text-zinc-300 group-hover:text-blue-600 transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-3">{service.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-zinc-100 text-zinc-500 px-2.5 py-0.5 rounded-full">
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
