import { ShieldCheck, Factory, Clock, Truck } from "lucide-react";

const stats = [
  { value: "13 лет", label: "опыт производства", sub: "Работаем с 2012 года", grad: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
  { value: "500+", label: "проектов", sub: "Москва, Крым, Краснодар", grad: "from-violet-500 to-violet-600", bg: "bg-violet-50" },
  { value: "5 лет", label: "гарантия", sub: "Официально по договору", grad: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50" },
  { value: "14 дней", label: "срок реализации", sub: "Под ключ с монтажом", grad: "from-amber-500 to-orange-500", bg: "bg-amber-50" },
];

const advantages = [
  {
    icon: Factory,
    title: "Собственное производство",
    desc: "Полный цикл на нашем заводе. Без субподрядчиков — честные цены и полный контроль качества.",
    iconBg: "bg-blue-500",
    border: "border-blue-100 hover:border-blue-200",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 5 лет по договору",
    desc: "Официальная гарантия без скрытых условий. Работаем по ГОСТ Р ISO 9001.",
    iconBg: "bg-emerald-500",
    border: "border-emerald-100 hover:border-emerald-200",
  },
  {
    icon: Clock,
    title: "Бесплатный 3D-проект",
    desc: "Разрабатываем визуализацию до начала работ. Вы увидите результат ещё до производства.",
    iconBg: "bg-violet-500",
    border: "border-violet-100 hover:border-violet-200",
  },
  {
    icon: Truck,
    title: "Монтаж по всей России",
    desc: "Собственные бригады работают в любом регионе. Сдача объекта в оговорённые сроки.",
    iconBg: "bg-amber-500",
    border: "border-amber-100 hover:border-amber-200",
  },
];

export default function Advantages() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className={`${s.bg} rounded-2xl px-7 py-6 flex flex-col gap-1`}>
              <span className={`text-3xl lg:text-4xl font-bold bg-gradient-to-br ${s.grad} bg-clip-text text-transparent leading-none`}>
                {s.value}
              </span>
              <span className="text-sm font-semibold text-zinc-900 mt-1">{s.label}</span>
              <span className="text-xs text-zinc-500">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">О компании</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 max-w-xl">
            Нужен надёжный подрядчик для остекления?
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl leading-relaxed">
            За 13 лет мы реализовали более 500 проектов в Москве, Крыму и Краснодарском крае. Создаём долговечные конструкции для частных домов, кафе и отелей.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div key={adv.title} className={`border rounded-2xl p-7 hover:shadow-md transition-all ${adv.border}`}>
                <div className={`w-12 h-12 rounded-xl ${adv.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2 text-[15px]">{adv.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
