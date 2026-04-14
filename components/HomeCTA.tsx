import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-400 mb-8">
            <Clock size={13} />
            Расчёт стоимости за 1 рабочий день
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Получите смету
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              бесплатно и без обязательств
            </span>
          </h2>

          <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
            Пришлите размеры, чертёж или просто опишите задачу — наш специалист рассчитает стоимость и ответит на все вопросы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25 text-base"
            >
              Оставить заявку
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+74951085560"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/5 transition-colors text-base"
            >
              <Phone size={15} />
              +7 495 108-55-60
            </a>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { value: "Бесплатно", label: "расчёт стоимости" },
            { value: "1 день", label: "подготовка сметы" },
            { value: "Без предоплаты", label: "для постоянных клиентов" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-zinc-500 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
