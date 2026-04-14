import { FileText, UserCheck, Factory, CalendarCheck } from "lucide-react";

const stats = [
  { value: "20+", label: "лет на рынке", sub: "Работаем с 2003 года" },
  { value: "50 000+", label: "заказов выполнено", sub: "Физлица и компании" },
  { value: "300+", label: "постоянных клиентов", sub: "Мебельщики, строители, дизайнеры" },
  { value: "от 1 дня", label: "срок изготовления", sub: "По стандартным размерам" },
];

const advantages = [
  {
    icon: Factory,
    title: "Собственное производство",
    desc: "Завод в Домодедово. Полный контроль качества и сроков — без субподрядчиков.",
  },
  {
    icon: FileText,
    title: "Расчёт за 1 день",
    desc: "Грамотная консультация специалиста и готовая смета в течение одного рабочего дня.",
  },
  {
    icon: UserCheck,
    title: "Условия для юрлиц",
    desc: "Работаем по договору. Персональные условия для мебельных, строительных и дизайнерских компаний.",
  },
  {
    icon: CalendarCheck,
    title: "Доставка на объект",
    desc: "Привозим стекло на объект по Москве и области. Упаковка обеспечивает сохранность при транспортировке.",
  },
];

export default function Advantages() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-8 py-7 flex flex-col gap-1">
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-none">
                {s.value}
              </span>
              <span className="text-sm font-semibold text-zinc-900 mt-1">{s.label}</span>
              <span className="text-xs text-zinc-400">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
              Почему выбирают нас
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
              Вам удобно с нами работать
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="border border-zinc-100 rounded-2xl p-7 hover:border-zinc-200 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-5">
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
