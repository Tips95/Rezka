const reviews = [
  {
    name: "Александр К.",
    role: "Москва, частный заказчик",
    initials: "АК",
    grad: "from-blue-500 to-cyan-500",
    top: "bg-blue-500",
    text: "Заказывали беседку для загородного участка. Всё сделали точно по размерам и в срок, монтаж прошёл быстро и аккуратно. Видно, что команда профессиональная — качество отличное. Рекомендуем!",
    rating: 5,
  },
  {
    name: "ООО «Кофе и Вкус»",
    role: "г. Краснодар, кафе",
    initials: "КВ",
    grad: "from-amber-500 to-orange-400",
    top: "bg-amber-500",
    text: "Благодарим за летнее кафе под ключ. Получилось красиво, удобно и соответствует бренд-стилю заведения. Работу выполнили за 2 недели. Отличное соотношение цены и качества!",
    rating: 5,
  },
  {
    name: "ИП «Гриль & Чилл»",
    role: "г. Сочи, ресторан",
    initials: "ГЧ",
    grad: "from-emerald-500 to-teal-500",
    top: "bg-emerald-500",
    text: "Делали летнюю террасу для кафе. Ребята взяли всё на себя — от проекта до установки. Качественно, быстро и с вниманием к деталям. Терраса получилась атмосферная, гости в восторге!",
    rating: 5,
  },
  {
    name: "Марина Л.",
    role: "Санкт-Петербург, частный дом",
    initials: "МЛ",
    grad: "from-violet-500 to-purple-500",
    top: "bg-violet-500",
    text: "Заказывала зимний сад и навес. Менеджер помог подобрать материалы под климат. Всё выглядит стильно и надёжно. Привезли вовремя, собрали за день. Спасибо!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-medium text-blue-400 mb-3 tracking-wide uppercase">
            Отзывы о нас
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Нам доверяют
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:bg-zinc-750 transition-colors border border-white/5">
              {/* Цветная шапка */}
              <div className={`h-1.5 bg-gradient-to-r ${r.grad}`} />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed flex-1">{r.text}</p>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.grad} flex items-center justify-center shrink-0 shadow-sm`}>
                    <span className="text-white text-xs font-bold">{r.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-xs text-zinc-500">{r.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
