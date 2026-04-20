import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

const highlights = [
  "Тентовые и биоклиматические перголы",
  "Безрамное остекление балконов и террас",
  "Зимние сады и панорамные двери",
  "ZIP-экраны и москитные сетки плиссе",
];

const badges = ["✅ 500+ проектов", "✅ Гарантия 5 лет", "✅ Бесплатный 3D-проект"];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
        <div
          className="relative overflow-hidden rounded-3xl text-white border border-zinc-200 shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
          style={{
            backgroundImage: "url(/images/backgrounds/hero-bg.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Glows */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[130px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative px-6 py-14 lg:px-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left — content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-zinc-200 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Производство в Москве · Работаем с 2012 года
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-4">
                  Безрамное остекление{" "}
                  <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    под ключ
                  </span>
                </h1>

                <p className="text-sm text-zinc-200/80 mb-6 tracking-wide uppercase font-medium">
                  Премиальные конструкции · Собственное производство
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {badges.map((b) => (
                    <span
                      key={b}
                      className="text-sm text-zinc-200 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/kontakty"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30 text-base"
                  >
                    Рассчитать стоимость
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/uslugi"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-base backdrop-blur"
                  >
                    Наши направления
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-200/80">
                      <CheckCircle2 size={14} className="text-emerald-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-zinc-200/70">
                  <Clock size={13} className="text-blue-300" />
                  Расчёт стоимости за{" "}
                  <span className="text-white font-semibold">1 рабочий день</span> — бесплатно
                </div>
              </div>

              {/* Right — glass panels illustration */}
              <div className="hidden lg:flex items-center justify-center">
                <GlassIllustration />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative border-t border-white/15 bg-black/10 backdrop-blur">
            <div className="px-6 lg:px-12 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/15">
              {[
                { value: "500+", label: "проектов по всей России" },
                { value: "100%", label: "контроль — каждый этап" },
                { value: "13 лет", label: "опыт производства" },
                { value: "5 лет", label: "гарантия по договору" },
              ].map((stat) => (
                <div key={stat.label} className="pl-6 first:pl-0">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-200/70 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlassIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
        {/* === Фоновое свечение === */}
        <defs>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="glassGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="trackGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="glowCircle" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Фоновый круг-свечение */}
        <circle cx="240" cy="200" r="200" fill="url(#glowCircle)" filter="url(#blur)" />

        {/* === Пол / основание балкона === */}
        <rect x="40" y="360" width="400" height="14" rx="4" fill="#1e293b" />
        <rect x="50" y="358" width="380" height="6" rx="3" fill="#334155" />

        {/* === Верхняя направляющая === */}
        <rect x="40" y="60" width="400" height="12" rx="4" fill="#1e293b" />
        <rect x="50" y="62" width="380" height="4" rx="2" fill="url(#trackGrad)" opacity="0.7" />

        {/* Крепёжные кронштейны сверху */}
        {[80, 200, 320, 420].map((x) => (
          <g key={x}>
            <rect x={x - 6} y={48} width="12" height="14" rx="2" fill="#334155" />
            <rect x={x - 3} y={45} width="6" height="6" rx="1" fill="#475569" />
          </g>
        ))}

        {/* === СТЕКЛЯННЫЕ ПАНЕЛИ === */}

        {/* Панель 1 — полностью открыта (сдвинута влево) */}
        <g opacity="0.9">
          <rect x="48" y="72" width="88" height="282" rx="2" fill="url(#glassGrad)" stroke="#60a5fa" strokeWidth="1.5" />
          {/* Блик слева */}
          <rect x="52" y="80" width="10" height="260" rx="5" fill="white" opacity="0.08" />
          {/* Блик диагональный */}
          <line x1="60" y1="80" x2="115" y2="200" stroke="white" strokeWidth="1" opacity="0.06" />
          {/* Ролик сверху */}
          <rect x="72" y="60" width="20" height="10" rx="3" fill="#475569" />
          <circle cx="82" cy="65" r="3" fill="#94a3b8" />
          {/* Ролик снизу */}
          <rect x="72" y="352" width="20" height="8" rx="2" fill="#334155" />
        </g>

        {/* Панель 2 */}
        <g opacity="0.85">
          <rect x="142" y="72" width="88" height="282" rx="2" fill="url(#glassGrad)" stroke="#60a5fa" strokeWidth="1.5" />
          <rect x="146" y="80" width="10" height="260" rx="5" fill="white" opacity="0.06" />
          <line x1="155" y1="80" x2="210" y2="200" stroke="white" strokeWidth="1" opacity="0.05" />
          <rect x="166" y="60" width="20" height="10" rx="3" fill="#475569" />
          <circle cx="176" cy="65" r="3" fill="#94a3b8" />
          <rect x="166" y="352" width="20" height="8" rx="2" fill="#334155" />
        </g>

        {/* Панель 3 — немного сдвинута (открывается) */}
        <g opacity="0.8">
          <rect x="238" y="72" width="88" height="282" rx="2" fill="url(#glassGrad2)" stroke="#818cf8" strokeWidth="1.5" />
          <rect x="242" y="80" width="10" height="260" rx="5" fill="white" opacity="0.05" />
          <line x1="250" y1="80" x2="305" y2="200" stroke="white" strokeWidth="1" opacity="0.04" />
          <rect x="262" y="60" width="20" height="10" rx="3" fill="#475569" />
          <circle cx="272" cy="65" r="3" fill="#94a3b8" />
          <rect x="262" y="352" width="20" height="8" rx="2" fill="#334155" />
        </g>

        {/* Панель 4 */}
        <g opacity="0.7">
          <rect x="334" y="72" width="88" height="282" rx="2" fill="url(#glassGrad2)" stroke="#818cf8" strokeWidth="1.2" />
          <rect x="338" y="80" width="10" height="260" rx="5" fill="white" opacity="0.04" />
          <rect x="358" y="60" width="20" height="10" rx="3" fill="#475569" />
          <circle cx="368" cy="65" r="3" fill="#94a3b8" />
          <rect x="358" y="352" width="20" height="8" rx="2" fill="#334155" />
        </g>

        {/* === Ручки на панелях === */}
        {[110, 204, 300].map((x) => (
          <g key={x}>
            <rect x={x} y="196" width="5" height="36" rx="2.5" fill="#60a5fa" opacity="0.8" />
            <circle cx={x + 2.5} cy="195" r="3" fill="#60a5fa" opacity="0.6" />
            <circle cx={x + 2.5} cy="233" r="3" fill="#60a5fa" opacity="0.6" />
          </g>
        ))}

        {/* === Отражения / блики на стекле === */}
        <ellipse cx="100" cy="130" rx="25" ry="8" fill="white" opacity="0.04" transform="rotate(-20 100 130)" />
        <ellipse cx="194" cy="150" rx="20" ry="6" fill="white" opacity="0.03" transform="rotate(-20 194 150)" />
        <ellipse cx="288" cy="140" rx="22" ry="7" fill="white" opacity="0.03" transform="rotate(-20 288 140)" />

        {/* === Декоративные линии (горизонт / вид через стекло) === */}
        <line x1="48" y1="220" x2="422" y2="220" stroke="#60a5fa" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 6" />
        <line x1="48" y1="280" x2="422" y2="280" stroke="#60a5fa" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 6" />

        {/* === Нижняя направляющая === */}
        <rect x="48" y="352" width="374" height="8" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <rect x="55" y="354" width="360" height="3" rx="1.5" fill="url(#trackGrad)" opacity="0.5" />

        {/* === Лейбл "Безрамное остекление" === */}
        <rect x="130" y="390" width="220" height="28" rx="14" fill="#1e3a5f" opacity="0.8" />
        <text x="240" y="408" textAnchor="middle" fill="#60a5fa" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="1">
          БЕЗРАМНОЕ ОСТЕКЛЕНИЕ
        </text>

        {/* === Точки-индикаторы (ролики) === */}
        {[82, 176, 272, 368].map((x) => (
          <circle key={x} cx={x} cy="66" r="4" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
        ))}
      </svg>

      {/* Floating badges */}
      <div className="absolute -top-2 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30">
        Закалённое стекло ESG
      </div>
      <div className="absolute bottom-16 -left-6 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
        Скрытый дренаж
      </div>
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-violet-500/30 rotate-90 origin-right">
        Автоматика Somfy
      </div>
    </div>
  );
}
