const types = [
  {
    title: "Фигурная резка",
    desc: "Вырезаем любые криволинейные формы: овалы, арки, многоугольники, сложные контуры.",
  },
  {
    title: "Резка круглого стекла",
    desc: "Идеально ровные круги и эллипсы диаметром от 100 мм.",
  },
  {
    title: "Резка для ванной",
    desc: "Стёкла с вырезами, скосами и отверстиями под душевые кабины.",
  },
  {
    title: "Резка триплекса",
    desc: "Аккуратная резка многослойного ламинированного стекла без расслоений.",
  },
  {
    title: "Резка зеркал",
    desc: "Зеркала любых форм и размеров — с обработкой кромки и без.",
  },
  {
    title: "Резка с фацетом",
    desc: "Одновременная резка и нанесение декоративного фацета по периметру.",
  },
];

export default function GlassTypes() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-blue-400 mb-3 tracking-wide uppercase">
              Виды резки
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Резка стекла — <br />
              <span className="text-zinc-400">любая форма и размер</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Резка стекла — это работа оператора завода на станках ЧПУ, которые нарезают 
              стекло по эскизам и чертежам заказчика. Принимаем файлы в форматах DXF, PDF, AI.
            </p>

            {/* Size table */}
            <div className="border border-zinc-800 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-zinc-800">
                <div className="p-6 text-center">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Минимальный размер</div>
                  <div className="text-3xl font-bold text-white">150×400</div>
                  <div className="text-sm text-zinc-500 mt-1">мм</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Максимальный размер</div>
                  <div className="text-3xl font-bold text-white">3200×6000</div>
                  <div className="text-sm text-zinc-500 mt-1">мм</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: type cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {types.map((type, i) => (
              <div
                key={type.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
              >
                <div className="text-xs text-zinc-500 mb-3 font-mono">0{i + 1}</div>
                <h3 className="font-semibold text-white mb-2 text-[15px]">{type.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
