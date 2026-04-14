import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navServices = [
  { label: "Мебельное стекло", href: "/uslugi/mebelnoye-steklo" },
  { label: "Стеклопакеты", href: "/uslugi/steklopakety" },
  { label: "Резка, обточка и фацет", href: "/uslugi/rezka-stekla" },
  { label: "Стекло для душевых кабин", href: "/uslugi/steklo-dushevye" },
  { label: "Стекло для безрамного остекления", href: "/uslugi/bezramnoe-osteklenie" },
  { label: "Закалка стекла", href: "/uslugi/zakalka" },
  { label: "Фурнитура для душевых", href: "/uslugi/furnitura-dushevye" },
  { label: "Фурнитура безрамного остекления", href: "/uslugi/furnitura-bezramnoe" },
];

const navInfo = [
  { label: "О компании", href: "/o-kompanii" },
  { label: "Все услуги", href: "/uslugi" },
  { label: "Контакты", href: "/kontakty" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-zinc-900 font-bold text-xs tracking-tight">РС</span>
              </div>
              <span className="font-semibold text-white text-[15px] tracking-tight">
                РезкаСтекла
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Производство стекла и фурнитуры с 2003 года. Мебельное стекло, стеклопакеты, душевые, безрамное остекление.
            </p>
            <div className="space-y-3">
              <a href="tel:+74951085560" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone size={14} />
                +7 495 108-55-60
              </a>
              <a href="mailto:info@rezka-stekla.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail size={14} />
                info@rezka-stekla.ru
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Московская обл., г. Домодедово, мкр. Западный, тер. Интегра, стр. 3</span>
              </div>
            </div>
          </div>

          {/* Services nav */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Услуги</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {navServices.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Навигация</h4>
            <ul className="space-y-2.5 mb-8">
              {navInfo.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-sm font-semibold mb-3">Консультация</h4>
            <Link
              href="/kontakty"
              className="inline-block bg-white text-zinc-900 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Оставить заявку
            </Link>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <p className="text-xs text-zinc-600 mb-1">Часы работы</p>
              <p className="text-sm text-white">пн–пт: 9:00–18:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© 2003–2026 РезкаСтекла. Все права защищены.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-zinc-400 transition-colors">Пользовательское соглашение</Link>
            <Link href="#" className="hover:text-zinc-400 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
