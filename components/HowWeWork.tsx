const steps = [
  {
    num: "01",
    title: "Заявка",
    desc: "Отправьте размеры, чертёж или просто опишите задачу — по телефону, почте или через форму на сайте.",
  },
  {
    num: "02",
    title: "Расчёт стоимости",
    desc: "Готовим смету в течение 1 рабочего дня. Бесплатно, без обязательств.",
  },
  {
    num: "03",
    title: "Производство",
    desc: "Изготавливаем на собственном оборудовании с погрешностью ±0,1 мм. Стандартный срок — 1–3 дня.",
  },
  {
    num: "04",
    title: "Доставка или самовывоз",
    desc: "Доставляем на объект по Москве и области. Самовывоз с производства в Домодедово.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-medium text-blue-400 mb-3 tracking-wide uppercase">
            Как мы работаем
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Проект под ключ за 3 шага
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div key={step.num} className="bg-zinc-900 p-8 flex flex-col gap-4 relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              )}
              <span className="text-4xl font-bold text-white/10 leading-none">{step.num}</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Принимаем заявки пн–пт с 9:00 до 18:00. Срочные заказы — по договорённости.
        </div>
      </div>
    </section>
  );
}
