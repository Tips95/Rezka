import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navDirections = [
  { label: "Тентовые перголы", href: "/uslugi/tentovye-pergoly" },
  { label: "Биоклиматические перголы", href: "/uslugi/bioklimaticheskie-pergoly" },
  { label: "Зимние сады", href: "/uslugi/zimnie-sady" },
  { label: "Безрамное остекление", href: "/uslugi/bezramnoe-osteklenie" },
  { label: "Гильотинное остекление", href: "/uslugi/gilotinnoe-osteklenie" },
  { label: "Панорамные двери", href: "/uslugi/panoramnye-dveri" },
  { label: "Москитные сетки плиссе", href: "/uslugi/moskitnye-setki" },
  { label: "ZIP-экраны", href: "/uslugi/zip-ekrany" },
];

const navInfo = [
  { label: "О компании", href: "/o-kompanii" },
  { label: "Наши проекты", href: "/proekty" },
  { label: "Все направления", href: "/uslugi" },
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
                <span className="text-zinc-900 font-bold text-xs tracking-tight">АП</span>
              </div>
              <div className="leading-none">
                <span className="font-bold text-white text-[15px] block">АлюПро</span>
                <span className="text-[10px] text-zinc-500 tracking-wide">Перголы и остекление</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Алюминиевые перголы, зимние сады и панорамное остекление под ключ. Собственное производство с 2012 года.
            </p>
            <div className="space-y-3">
              <a href="tel:+74951085560" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone size={14} />
                +7 495 108-55-60
              </a>
              <a href="mailto:info@alyu-pro.ru" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail size={14} />
                info@alyu-pro.ru
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>г. Москва, ул. Колонцова, д. 5, стр. 2, офис 816</span>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">Наши направления</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {navDirections.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav + CTA */}
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

            <h4 className="text-white text-sm font-semibold mb-3">Смета за 1 минуту</h4>
            <Link
              href="/kontakty"
              className="inline-block bg-white text-zinc-900 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Рассчитать стоимость
            </Link>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <p className="text-xs text-zinc-600 mb-1">Приём заявок</p>
              <p className="text-sm text-white">24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© 2012–2026 АлюПро. Все права защищены.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-zinc-400 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
