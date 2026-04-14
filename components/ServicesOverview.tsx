import Link from "next/link";
import { ArrowRight, Tent, Wind, Leaf, GlassWater, Layers, PanelTop, DoorOpen, Bug, Shield } from "lucide-react";

const services = [
  {
    icon: Tent,
    title: "Тентовые перголы",
    desc: "Алюминиевые перголы с тентовым покрытием для террас, беседок и летних площадок. Защита от солнца и осадков.",
    href: "/uslugi/tentovye-pergoly",
  },
  {
    icon: Wind,
    title: "Биоклиматические перголы",
    desc: "Моторизованные ламельные перголы с управлением климатом. Автоматическое открытие/закрытие, датчики дождя и ветра.",
    href: "/uslugi/bioklimaticheskie-pergoly",
  },
  {
    icon: Leaf,
    title: "Зимние сады",
    desc: "Светопрозрачные алюминиевые конструкции для круглогодичного использования. Вертикальное и наклонное остекление.",
    href: "/uslugi/zimnie-sady",
  },
  {
    icon: GlassWater,
    title: "Безрамное остекление",
    desc: "Раздвижные стеклянные панели без рамы для балконов и террас. Максимум света, минимум конструкций.",
    href: "/uslugi/bezramnoe-osteklenie",
  },
  {
    icon: Layers,
    title: "Безрамное со стеклопакетом",
    desc: "Безрамное остекление с тёплым стеклопакетом — повышенная теплоизоляция при сохранении эстетики.",
    href: "/uslugi/bezramnoe-so-steklopaketom",
  },
  {
    icon: PanelTop,
    title: "Гильотинное остекление",
    desc: "Подъёмное гильотинное остекление с терморазрывом. Идеально для ресторанов, кафе и отелей.",
    href: "/uslugi/gilotinnoe-osteklenie",
  },
  {
    icon: DoorOpen,
    title: "Панорамные двери",
    desc: "Складные и раздвижные панорамные двери из алюминия. Открывают пространство на всю ширину проёма.",
    href: "/uslugi/panoramnye-dveri",
  },
  {
    icon: Bug,
    title: "Москитные сетки плиссе",
    desc: "Плиссированные москитные сетки на алюминиевой раме. Для окон, дверей и нестандартных проёмов.",
    href: "/uslugi/moskitnye-setki",
  },
  {
    icon: Shield,
    title: "ZIP-экраны",
    desc: "Внешние рулонные шторы ZIP с направляющими. Защита от солнца, ветра и сохранение приватности.",
    href: "/uslugi/zip-ekrany",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
              Наши направления
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
              Что мы делаем
            </h2>
          </div>
          <Link
            href="/uslugi"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Все направления <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl border border-zinc-100 p-6 hover:border-zinc-200 hover:shadow-sm transition-all flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                  <Icon size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-blue-600 transition-colors flex items-center gap-1 mt-auto">
                  Подробнее <ArrowRight size={11} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
