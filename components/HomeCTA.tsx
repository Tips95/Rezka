import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-blue-400 mb-4 tracking-wide uppercase">
          Готовы к работе
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
          Начните ваш проект сегодня
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Оставьте заявку — наш специалист рассчитает стоимость и ответит на все вопросы в течение рабочего дня.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/kontakty"
            className="inline-flex items-center gap-2 bg-white text-zinc-900 font-semibold px-7 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Оставить заявку
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+74951085560"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Phone size={15} />
            +7 495 108-55-60
          </a>
        </div>
      </div>
    </section>
  );
}
