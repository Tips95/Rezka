const steps = [
  {
    num: "01",
    title: "Заявка",
    desc: "Оставьте заявку на сайте или позвоните. Опишите задачу — размеры, тип объекта, пожелания.",
    color: "from-blue-500 to-blue-600",
    numColor: "text-blue-500/20",
  },
  {
    num: "02",
    title: "Смета и 3D-проект",
    desc: "Разрабатываем бесплатный 3D-проект и готовим детальную смету. Всё согласовываем с вами.",
    color: "from-violet-500 to-violet-600",
    numColor: "text-violet-500/20",
  },
  {
    num: "03",
    title: "Производство",
    desc: "Изготавливаем конструкцию на собственном заводе. Контроль качества на каждом этапе.",
    color: "from-cyan-500 to-cyan-600",
    numColor: "text-cyan-500/20",
  },
  {
    num: "04",
    title: "Монтаж под ключ",
    desc: "Доставляем и монтируем силами собственных бригад. Сдача объекта в оговорённые сроки.",
    color: "from-emerald-500 to-emerald-600",
    numColor: "text-emerald-500/20",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-20 bg-[#f6f7f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold text-zinc-500 mb-3 tracking-[0.2em] uppercase">
            Этапы работы
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold headline text-zinc-900">
            Проект под ключ за 14 дней
          </h2>
          <p className="text-zinc-600 mt-3 max-w-lg">
            Собственное производство под контролем БезрамноеПро — от эскиза до монтажа.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-7 flex flex-col gap-4 overflow-hidden border border-zinc-200 transition-colors"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-t-2xl`} />
              <span className="text-6xl font-bold leading-none text-zinc-200 select-none">{step.num}</span>
              <div>
                <h3 className="font-bold text-zinc-900 text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-zinc-600">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          Принимаем заявки 24/7. Менеджер свяжется с вами в течение 15 минут в рабочее время.
        </div>
      </div>
    </section>
  );
}
