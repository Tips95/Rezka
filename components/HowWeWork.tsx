const steps = [
  {
    num: "01",
    title: "Заявка",
    desc: "Оставьте заявку на сайте или позвоните. Опишите задачу — размеры, тип объекта, пожелания.",
  },
  {
    num: "02",
    title: "Смета и 3D-проект",
    desc: "Разрабатываем бесплатный 3D-проект и готовим детальную смету. Всё согласовываем с вами.",
  },
  {
    num: "03",
    title: "Производство",
    desc: "Изготавливаем конструкцию на собственном заводе. Контроль качества на каждом этапе.",
  },
  {
    num: "04",
    title: "Монтаж под ключ",
    desc: "Доставляем и монтируем силами собственных бригад. Сдача объекта в оговорённые сроки.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-medium text-blue-400 mb-3 tracking-wide uppercase">
            Этапы работы
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Проект под ключ за 14 дней
          </h2>
          <p className="text-zinc-400 mt-3 max-w-lg">
            Собственное производство под контролем АлюПро — от эскиза до монтажа.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {steps.map((step) => (
            <div key={step.num} className="bg-zinc-900 p-8 flex flex-col gap-4">
              <span className="text-5xl font-bold text-white/10 leading-none">{step.num}</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Принимаем заявки 24/7. Менеджер свяжется с вами в течение 15 минут в рабочее время.
        </div>
      </div>
    </section>
  );
}
