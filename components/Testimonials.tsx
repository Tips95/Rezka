const reviews = [
  {
    company: "SportMax",
    text: "Оперативно выполнили резку стекла для торгового павильона. Качество на высшем уровне, все размеры соблюдены точно. Работаем только с ними.",
    rating: 5,
  },
  {
    company: "АМГ Групп",
    text: "Сотрудничаем уже 3 года. Всегда чёткие сроки, адекватные цены и отличное качество обработки кромки. Рекомендуем партнёрам.",
    rating: 5,
  },
  {
    company: "ArtSpace",
    text: "Заказывали фигурную резку для дизайнерского проекта. Справились с очень нестандартными формами, всё получилось идеально.",
    rating: 5,
  },
  {
    company: "РЭЙ Инжиниринг",
    text: "Профессиональный подход к большому заказу — 200 листов триплекса нестандартного размера. Поставили в срок, упаковали отлично.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
            Отзывы
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Нам доверяют
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div
              key={r.company}
              className="bg-white rounded-2xl border border-zinc-100 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed flex-1">{r.text}</p>
              <div className="font-semibold text-zinc-900 text-sm">{r.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
