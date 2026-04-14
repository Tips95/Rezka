import Link from "next/link";
import { ArrowRight, Tent, Wind, Leaf, GlassWater, Layers, PanelTop, DoorOpen, Bug, Shield } from "lucide-react";

const services = [
  {
    icon: Tent,
    title: "Тентовые перголы",
    desc: "Алюминиевые перголы с тентовым покрытием для террас, беседок и летних площадок. Защита от солнца и осадков.",
    href: "/uslugi/tentovye-pergoly",
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100 group-hover:border-blue-200",
  },
  {
    icon: Wind,
    title: "Биоклиматические перголы",
    desc: "Моторизованные ламельные перголы с управлением климатом. Автоматическое открытие/закрытие, датчики дождя и ветра.",
    href: "/uslugi/bioklimaticheskie-pergoly",
    color: "bg-violet-500",
    light: "bg-violet-50 border-violet-100 group-hover:border-violet-200",
  },
  {
    icon: Leaf,
    title: "Зимние сады",
    desc: "Светопрозрачные алюминиевые конструкции для круглогодичного использования. Вертикальное и наклонное остекление.",
    href: "/uslugi/zimnie-sady",
    color: "bg-emerald-500",
    light: "bg-emerald-50 border-emerald-100 group-hover:border-emerald-200",
  },
  {
    icon: GlassWater,
    title: "Безрамное остекление",
    desc: "Раздвижные стеклянные панели без рамы для балконов и террас. Максимум света, минимум конструкций.",
    href: "/uslugi/bezramnoe-osteklenie",
    color: "bg-cyan-500",
    light: "bg-cyan-50 border-cyan-100 group-hover:border-cyan-200",
  },
  {
    icon: Layers,
    title: "Безрамное со стеклопакетом",
    desc: "Безрамное остекление с тёплым стеклопакетом — повышенная теплоизоляция при сохранении эстетики.",
    href: "/uslugi/bezramnoe-so-steklopaketom",
    color: "bg-sky-500",
    light: "bg-sky-50 border-sky-100 group-hover:border-sky-200",
  },
  {
    icon: PanelTop,
    title: "Гильотинное остекление",
    desc: "Подъёмное гильотинное остекление с терморазрывом. Идеально для ресторанов, кафе и отелей.",
    href: "/uslugi/gilotinnoe-osteklenie",
    color: "bg-indigo-500",
    light: "bg-indigo-50 border-indigo-100 group-hover:border-indigo-200",
  },
  {
    icon: DoorOpen,
    title: "Панорамные двери",
    desc: "Складные и раздвижные панорамные двери из алюминия. Открывают пространство на всю ширину проёма.",
    href: "/uslugi/panoramnye-dveri",
    color: "bg-amber-500",
    light: "bg-amber-50 border-amber-100 group-hover:border-amber-200",
  },
  {
    icon: Bug,
    title: "Москитные сетки плиссе",
    desc: "Плиссированные москитные сетки на алюминиевой раме. Для окон, дверей и нестандартных проёмов.",
    href: "/uslugi/moskitnye-setki",
    color: "bg-teal-500",
    light: "bg-teal-50 border-teal-100 group-hover:border-teal-200",
  },
  {
    icon: Shield,
    title: "ZIP-экраны",
    desc: "Внешние рулонные шторы ZIP с направляющими. Защита от солнца, ветра и сохранение приватности.",
    href: "/uslugi/zip-ekrany",
    color: "bg-rose-500",
    light: "bg-rose-50 border-rose-100 group-hover:border-rose-200",
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
                className={`group rounded-2xl border p-6 hover:shadow-md transition-all flex flex-col gap-4 ${service.light}`}
              >
                <div className={`w-11 h-11 rounded-xl ${service.color} flex items-center justify-center shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{service.desc}</p>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-blue-600 transition-colors flex items-center gap-1 mt-auto font-medium">
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
