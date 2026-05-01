import Link from "next/link";
import { ArrowRight, Tent, Wind, Leaf, GlassWater, Layers, PanelTop, DoorOpen, Bug, Shield } from "lucide-react";

const services = [
  {
    icon: Tent,
    title: "Тентовые перголы",
    desc: "Алюминиевые перголы с тентовым покрытием для террас, беседок и летних площадок. Защита от солнца и осадков.",
    href: "/uslugi/tentovye-pergoly",
    color: "bg-gradient-to-br from-blue-700 to-cyan-700",
    light: "border-blue-200/40 group-hover:border-blue-300/70",
  },
  {
    icon: Wind,
    title: "Биоклиматические перголы",
    desc: "Моторизованные ламельные перголы с управлением климатом. Автоматическое открытие/закрытие, датчики дождя и ветра.",
    href: "/uslugi/bioklimaticheskie-pergoly",
    color: "bg-gradient-to-br from-slate-800 to-blue-700",
    light: "border-blue-200/30 group-hover:border-blue-300/60",
  },
  {
    icon: Leaf,
    title: "Зимние сады",
    desc: "Светопрозрачные алюминиевые конструкции для круглогодичного использования. Вертикальное и наклонное остекление.",
    href: "/uslugi/zimnie-sady",
    color: "bg-gradient-to-br from-cyan-700 to-teal-700",
    light: "border-cyan-200/30 group-hover:border-cyan-300/60",
  },
  {
    icon: GlassWater,
    title: "Безрамное остекление",
    desc: "Раздвижные стеклянные панели без рамы для балконов и террас. Максимум света, минимум конструкций.",
    href: "/uslugi/bezramnoe-osteklenie",
    color: "bg-gradient-to-br from-blue-700 to-cyan-700",
    light: "border-cyan-200/30 group-hover:border-cyan-300/60",
  },
  {
    icon: Layers,
    title: "Безрамное со стеклопакетом",
    desc: "Безрамное остекление с тёплым стеклопакетом — повышенная теплоизоляция при сохранении эстетики.",
    href: "/uslugi/bezramnoe-so-steklopaketom",
    color: "bg-gradient-to-br from-blue-700 to-sky-700",
    light: "border-sky-200/30 group-hover:border-sky-300/60",
  },
  {
    icon: PanelTop,
    title: "Гильотинное остекление",
    desc: "Подъёмное гильотинное остекление с терморазрывом. Идеально для ресторанов, кафе и отелей.",
    href: "/uslugi/gilotinnoe-osteklenie",
    color: "bg-gradient-to-br from-slate-700 to-indigo-700",
    light: "border-indigo-200/30 group-hover:border-indigo-300/60",
  },
  {
    icon: DoorOpen,
    title: "Панорамные двери",
    desc: "Складные и раздвижные панорамные двери из алюминия. Открывают пространство на всю ширину проёма.",
    href: "/uslugi/panoramnye-dveri",
    color: "bg-gradient-to-br from-amber-700 to-orange-700",
    light: "border-amber-200/40 group-hover:border-amber-300/70",
  },
  {
    icon: Bug,
    title: "Москитные сетки плиссе",
    desc: "Плиссированные москитные сетки на алюминиевой раме. Для окон, дверей и нестандартных проёмов.",
    href: "/uslugi/moskitnye-setki",
    color: "bg-gradient-to-br from-teal-700 to-cyan-700",
    light: "border-teal-200/30 group-hover:border-teal-300/60",
  },
  {
    icon: Shield,
    title: "ZIP-экраны",
    desc: "Внешние рулонные шторы ZIP с направляющими. Защита от солнца, ветра и сохранение приватности.",
    href: "/uslugi/zip-ekrany",
    color: "bg-gradient-to-br from-slate-800 to-cyan-700",
    light: "border-cyan-200/30 group-hover:border-cyan-300/60",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
              Наши направления
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                Что мы делаем
              </span>
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
                className={`group rounded-2xl border p-6 hover:shadow-[0_18px_50px_rgba(15,23,42,0.16)] transition-all flex flex-col gap-4 surface-tint ${service.light}`}
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
