import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Резка, обточка и фацет по индивидуальным размерам",
  "Закалка — прочность в 5–7 раз выше обычного стекла",
  "Стекло для душевых кабин и безрамного остекления",
  "Фурнитура и комплектация под ключ",
];

export default function Hero() {
  return (
    <section className="relative bg-zinc-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Основное синее свечение справа */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[130px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      {/* Мягкое голубое снизу слева */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      {/* Тонкий фиолетовый акцент посередине */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[300px] bg-indigo-600/8 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-zinc-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Производство в Москве · Работаем с 2003 года
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Обработка стекла{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">на заказ</span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Мебельное стекло, стеклопакеты, резка и фацет, душевые кабины, 
            безрамное остекление, закалка — всё на одном производстве.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-7 py-3.5 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25"
            >
              Оставить заявку
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/uslugi"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              Все услуги
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-400">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/10">
          {[
            { value: "20+", label: "лет на рынке" },
            { value: "8", label: "направлений работ" },
            { value: "от 1 дня", label: "срок изготовления" },
            { value: "5.0", label: "рейтинг клиентов" },
          ].map((stat) => (
            <div key={stat.label} className="pl-6 first:pl-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
