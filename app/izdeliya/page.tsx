import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Изделия из стекла — РезкаСтекла",
  description: "Зеркала, перегородки, ограждения, козырьки, мебель из стекла, витрины, кухонные фартуки, стеклопакеты на заказ в Москве.",
};

const categories = [
  {
    title: "Зеркала",
    desc: "Зеркала любых форм и размеров: с фацетом, в раме, без рамы, закалённые, смарт-зеркала.",
    items: ["С фацетом", "Без рамы", "В ванную", "Закалённые", "Смарт-зеркало", "Напольные", "Зеркальная плитка"],
    href: "#",
  },
  {
    title: "Перегородки",
    desc: "Стеклянные перегородки для офиса, квартиры, душа, сауны. Раздвижные, складные, цельностеклянные.",
    items: ["Офисные", "Межкомнатные", "Для душа", "Складные", "Раздвижные", "Матовые", "Для сауны"],
    href: "#",
  },
  {
    title: "Ограждения из стекла",
    desc: "Ограждения для балконов, лестниц, терасс, бассейнов, кровли. Из закалённого стекла и триплекса.",
    items: ["Для балкона", "Для террасы", "Для кровли", "Душевые", "Лестничные", "Из триплекса"],
    href: "#",
  },
  {
    title: "Стеклянные козырьки",
    desc: "Навесы и козырьки из стекла на спайдерах, подвесах, зажимном профиле. Из триплекса.",
    items: ["На спайдерах", "На подвесах", "Из триплекса", "На зажимном профиле"],
    href: "#",
  },
  {
    title: "Мебель из стекла",
    desc: "Стеклянные столы, тумбы, полки, офисная мебель на заказ по вашим размерам.",
    items: ["Столы", "Тумбы", "Полки", "Офисная мебель"],
    href: "#",
  },
  {
    title: "Витрины",
    desc: "Торговые, музейные, ювелирные витрины. Угловые, настенные, с подсветкой, из алюминия.",
    items: ["Торговые", "Музейные", "Ювелирные", "Угловые", "С подсветкой", "Алюминиевые"],
    href: "#",
  },
  {
    title: "Кухонные фартуки",
    desc: "Скинали из стекла с фотопечатью, однотонные, матовые, лакированные под любой интерьер.",
    items: ["Скинали", "С фотопечатью", "Матовые", "Однотонные", "Прозрачные", "Белые"],
    href: "#",
  },
  {
    title: "Стеклопакеты",
    desc: "Однокамерные и двухкамерные стеклопакеты на заказ: тонированные, бронированные, матовые.",
    items: ["Однокамерные", "Двухкамерные", "Бронированные", "Тонированные", "Матовые", "Энергосберегающие"],
    href: "#",
  },
  {
    title: "Стеклянные лестницы и ступени",
    desc: "Ступени, площадки и перила для лестниц из закалённого стекла и триплекса на заказ.",
    items: ["Ступени", "Площадки", "Перила", "Из триплекса", "Закалённые"],
    href: "#",
  },
  {
    title: "Стеклянные фасады",
    desc: "Витражное остекление зданий, фасадные конструкции, алюминиевые системы под ключ.",
    items: ["Витражи", "Алюминиевые системы", "Фасадное остекление", "Безрамное остекление"],
    href: "#",
  },
  {
    title: "Декоративное стекло",
    desc: "Узорчатое, рифлёное, матовое стекло moru. Для интерьерных решений и декора.",
    items: ["Узорчатое", "Рифлёное", "Матовое", "Стекло moru"],
    href: "#",
  },
  {
    title: "Стеклянные панели для стен",
    desc: "Стеновые панели с фотопечатью, гравировкой, покраской. Кухни, ванные, офисы.",
    items: ["С фотопечатью", "С гравировкой", "Крашеные", "Из Lacobel"],
    href: "#",
  },
];

export default function IzdeliyaPage() {
  return (
    <>
      <PageHeader
        title="Изделия из стекла"
        subtitle="Изготавливаем любые изделия из стекла на заказ по вашим размерам и чертежам. Собственное производство в Москве."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Изделия" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group flex flex-col border border-zinc-100 rounded-2xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-zinc-900 text-[15px] group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>
                  <ArrowRight
                    size={15}
                    className="text-zinc-300 group-hover:text-blue-600 transition-colors shrink-0"
                  />
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-zinc-100 text-zinc-500 px-2.5 py-0.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Не нашли нужное изделие?</h3>
            <p className="text-zinc-400 text-sm">Мы изготовим по вашему чертежу или эскизу — свяжитесь с нами.</p>
          </div>
          <Link
            href="/kontakty"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Оставить заявку
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
