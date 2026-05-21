import Link from "next/link";
import { ArrowRight, Phone, Zap, Star, MessageCircle } from "lucide-react";

const perks = [
  { icon: Star, label: "Бесплатный 3D-проект", color: "text-amber-400" },
  { icon: Zap, label: "Расчёт за 1 день", color: "text-cyan-400" },
  { icon: Star, label: "Гарантия 5 лет", color: "text-emerald-400" },
];

export default function HomeCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#f6f7f8]">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="page-wrap p-8 lg:p-10">
          <div className="flex flex-wrap gap-4 mb-8">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                  <Icon size={13} className={p.color} />
                  <span className="text-sm text-zinc-800 font-medium">{p.label}</span>
                </div>
              );
            })}
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">Рассчитаем стоимость вашего проекта</h2>

          <p className="text-zinc-600 mb-10 leading-relaxed text-lg max-w-2xl">
            Оставьте заявку — менеджер свяжется в течение 15 минут, разработает бесплатный 3D-проект и ответит на все вопросы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full accent-btn text-base"
            >
              Оставить заявку
              <ArrowRight size={16} />
            </Link>
            <div className="flex flex-col sm:flex-row gap-2">
              {[
                { raw: "89282396666", label: "8 928 239-66-66" },
                { raw: "89287897113", label: "8 928 789-71-13" },
              ].map((n) => {
                const wa = `7${n.raw.slice(1)}`;
                return (
                  <div key={n.raw} className="inline-flex items-center gap-2">
                    <a
                      href={`tel:+${wa}`}
                      className="inline-flex items-center justify-center gap-2 border border-zinc-300 text-zinc-800 font-semibold px-5 py-4 rounded-full hover:bg-zinc-100 transition-colors text-base"
                    >
                      <Phone size={15} />
                      {n.label}
                    </a>
                    <a
                      href={`https://wa.me/${wa}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      aria-label={`WhatsApp ${n.label}`}
                    >
                      <MessageCircle size={17} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { value: "500+", label: "реализованных проектов" },
              { value: "14 дней", label: "средний срок реализации" },
              { value: "5 лет", label: "гарантия по договору" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-extrabold text-zinc-900">{item.value}</div>
                <div className="text-sm text-zinc-600 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
