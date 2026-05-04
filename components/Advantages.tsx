import { ShieldCheck, Factory, Clock, Truck } from "lucide-react";

const stats = [
  { value: "13 лет", label: "опыт производства", sub: "Работаем с 2012 года" },
  { value: "500+", label: "проектов", sub: "По всей России" },
  { value: "5 лет", label: "гарантия", sub: "Официально по договору" },
  { value: "14 дней", label: "средний срок", sub: "Проект под ключ" },
];

const advantages = [
  {
    icon: Factory,
    title: "Собственное производство",
    desc: "Полный цикл на нашем заводе. Без субподрядчиков — честные цены и полный контроль качества.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 5 лет по договору",
    desc: "Официальная гарантия без скрытых условий. Работаем по ГОСТ Р ISO 9001.",
  },
  {
    icon: Clock,
    title: "Бесплатный 3D-проект",
    desc: "Разрабатываем визуализацию до начала работ. Вы увидите результат ещё до производства.",
  },
  {
    icon: Truck,
    title: "Монтаж по всей России",
    desc: "Собственные бригады работают в любом регионе. Сдача объекта в оговорённые сроки.",
  },
];

export default function Advantages() {
  return (
    <section id="about" className="py-20 bg-[#f6f7f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl px-6 py-5 flex flex-col gap-1 bg-white border border-zinc-200">
              <span className="text-3xl lg:text-4xl font-extrabold text-zinc-900 leading-none">{s.value}</span>
              <span className="text-sm font-semibold text-zinc-900 mt-1">{s.label}</span>
              <span className="text-xs text-zinc-500">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <p className="text-sm font-semibold text-zinc-500 mb-3 uppercase tracking-[0.2em]">О компании</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 max-w-xl">
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
              <div
                key={adv.title}
                className="border border-zinc-200 rounded-2xl p-7 bg-white hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-5 shadow-sm">
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
