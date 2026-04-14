import Link from "next/link";
import { ArrowRight, Phone, Zap, Star } from "lucide-react";

const perks = [
  { icon: Star, label: "Бесплатный 3D-проект", color: "text-amber-400" },
  { icon: Zap, label: "Расчёт за 1 день", color: "text-cyan-400" },
  { icon: Star, label: "Гарантия 5 лет", color: "text-emerald-400" },
];

export default function HomeCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-4 mb-8">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
                  <Icon size={13} className={p.color} />
                  <span className="text-sm text-white font-medium">{p.label}</span>
                </div>
              );
            })}
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Рассчитаем стоимость
            <br />вашего проекта
          </h2>

          <p className="text-white/75 mb-10 leading-relaxed text-lg">
            Оставьте заявку — менеджер свяжется в течение 15 минут, разработает бесплатный 3D-проект и ответит на все вопросы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base"
            >
              Оставить заявку
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+74951085560"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              <Phone size={15} />
              +7 495 108-55-60
            </a>
          </div>
        </div>

        {/* Bottom trust row */}
        <div className="mt-16 pt-10 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { value: "500+", label: "реализованных проектов" },
            { value: "14 дней", label: "среднее время реализации" },
            { value: "5 лет", label: "гарантия по договору" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-white/60 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
