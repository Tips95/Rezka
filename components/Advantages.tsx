import { FileText, UserCheck, Factory, CalendarCheck } from "lucide-react";

const advantages = [
  {
    icon: FileText,
    title: "Быстрое оформление заявки",
    desc: "Грамотная консультация специалиста и оформление заявки в день обращения.",
  },
  {
    icon: UserCheck,
    title: "Индивидуальные условия",
    desc: "Предоставляем персональные условия сотрудничества для юридических лиц.",
  },
  {
    icon: Factory,
    title: "Собственное производство",
    desc: "Заказ выполняется на нашем заводе — полный контроль качества и сроков.",
  },
  {
    icon: CalendarCheck,
    title: "Доставка на объект",
    desc: "Получите заказ в удобное время: доставляем на объект по всей Москве и области.",
  },
];

export default function Advantages() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
            Почему выбирают нас
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Вам удобно с нами работать
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
