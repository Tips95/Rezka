import {
  Scissors,
  Flame,
  Drill,
  Diamond,
  Layers,
  Printer,
  Paintbrush,
  Wind,
  Truck,
  Columns2,
  Square,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Резка стекла",
    desc: "Прямолинейная и фигурная резка любой сложности. Толщина от 3 до 25 мм.",
    href: "#",
  },
  {
    icon: Flame,
    title: "Закалка стекла",
    desc: "Термическая закалка для повышения прочности и безопасности стекла.",
    href: "#",
  },
  {
    icon: Drill,
    title: "Сверление и зенковка",
    desc: "Отверстия любого диаметра и формы под фурнитуру и крепёж.",
    href: "#",
  },
  {
    icon: Diamond,
    title: "Фацет на стекле",
    desc: "Полированный срез кромки под углом для декоративного эффекта.",
    href: "#",
  },
  {
    icon: Square,
    title: "Обработка кромки",
    desc: "Шлифовка и полировка торцов для безопасной эксплуатации изделия.",
    href: "#",
  },
  {
    icon: Printer,
    title: "Фотопечать",
    desc: "УФ-печать и керамические краски на стекле и зеркале.",
    href: "#",
  },
  {
    icon: Layers,
    title: "Триплекс",
    desc: "Ламинированное безопасное стекло из нескольких слоёв. PVB-плёнка.",
    href: "#",
  },
  {
    icon: Paintbrush,
    title: "Покраска стекла",
    desc: "Стемалит, Lacobel, шелкография. Широкая палитра RAL-цветов.",
    href: "#",
  },
  {
    icon: Wind,
    title: "Пескоструйная обработка",
    desc: "Матирование и нанесение узоров методом пескоструйной обработки.",
    href: "#",
  },
  {
    icon: Columns2,
    title: "Наклейка плёнок",
    desc: "Декоративные, матовые, зеркальные и солнцезащитные плёнки.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Стеклоконструкции",
    desc: "Перегородки, ограждения, козырьки, фасады под ключ.",
    href: "#",
  },
  {
    icon: Truck,
    title: "Доставка",
    desc: "Доставка стекла на объект в удобное время по Москве и области.",
    href: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">
            Услуги завода
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">
            Полный цикл обработки стекла
          </h2>
          <p className="text-zinc-500 max-w-xl leading-relaxed">
            Операторы завода выполняют комплексные услуги от резки и обработки до
            изготовления готовых конструкций любой сложности.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.href}
                className="group bg-white p-6 hover:bg-zinc-50 transition-colors flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Icon size={18} className="text-zinc-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-[15px] mb-1 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
