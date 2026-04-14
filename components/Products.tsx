const categories = [
  {
    title: "Зеркала",
    items: ["С фацетом", "Без рамы", "В ванную", "Закалённые", "Смарт-зеркало"],
  },
  {
    title: "Перегородки",
    items: ["Офисные", "Межкомнатные", "Для душа", "Складные", "Раздвижные"],
  },
  {
    title: "Ограждения",
    items: ["Для балкона", "Для террасы", "Для кровли", "Душевые", "Лестничные"],
  },
  {
    title: "Стеклянные козырьки",
    items: ["На спайдерах", "На подвесах", "Из триплекса", "На зажимном профиле"],
  },
  {
    title: "Мебель из стекла",
    items: ["Столы", "Тумбы", "Офисная мебель"],
  },
  {
    title: "Витрины",
    items: ["Торговые", "Музейные", "Угловые", "Настенные", "Ювелирные"],
  },
  {
    title: "Кухонные фартуки",
    items: ["Скинали", "Из матового стекла", "Лакированные", "С фотопечатью"],
  },
  {
    title: "Стеклопакеты",
    items: ["Однокамерные", "Двухкамерные", "Бронированные", "Тонированные"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
            Каталог
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">
            Изделия из стекла на заказ
          </h2>
          <p className="text-zinc-500 max-w-xl leading-relaxed">
            Изготавливаем любые изделия из стекла по индивидуальным размерам 
            и чертежам заказчика.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl border border-zinc-100 p-6 hover:border-zinc-200 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-zinc-900 text-[15px] mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
