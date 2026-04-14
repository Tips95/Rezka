"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Clock, Mail, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Мебельное стекло", href: "/uslugi/mebelnoye-steklo" },
  { label: "Стеклопакеты", href: "/uslugi/steklopakety" },
  { label: "Резка, обточка и фацет стекла", href: "/uslugi/rezka-stekla" },
  { label: "Стекло для душевых кабин", href: "/uslugi/steklo-dushevye" },
  { label: "Стекло для безрамного остекления", href: "/uslugi/bezramnoe-osteklenie" },
  { label: "Закалка стекла", href: "/uslugi/zakalka" },
  { label: "Фурнитура для душевых кабин", href: "/uslugi/furnitura-dushevye" },
  { label: "Фурнитура на безрамное остекление", href: "/uslugi/furnitura-bezramnoe" },
];

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/uslugi", children: services },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-zinc-900 text-zinc-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-6">
            <a
              href="tel:+74951085560"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} />
              <span className="font-medium text-white">+7 495 108-55-60</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock size={13} />
              пн–пт: 9:00–18:00
            </span>
            <a
              href="mailto:info@rezka-stekla.ru"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} />
              info@rezka-stekla.ru
            </a>
          </div>
          <Link
            href="/kontakty"
            className="text-xs font-medium text-white border border-white/20 rounded px-3 py-1 hover:bg-white hover:text-zinc-900 transition-all"
          >
            Заказать с сайта
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        } border-b border-zinc-100`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-tight">РС</span>
            </div>
            <span className="font-semibold text-zinc-900 text-[15px] tracking-tight">
              РезкаСтекла
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm py-4 transition-colors ${
                        isActive
                          ? "text-zinc-900 font-medium"
                          : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform ${dropdownOpen ? "rotate-180" : ""} opacity-50`}
                      />
                    </Link>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white border border-zinc-100 rounded-xl shadow-lg py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "text-zinc-900 font-medium bg-zinc-50"
                                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm py-4 transition-colors nav-link ${
                    isActive
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/kontakty"
            className="hidden lg:flex items-center gap-2 bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            Оставить заявку
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded text-zinc-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-zinc-100 bg-white max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${
                pathname === "/" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"
              }`}
            >
              Главная
            </Link>
            {/* Services group */}
            <div className="border-b border-zinc-50">
              <div className="px-6 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Услуги
              </div>
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`block px-6 py-3 text-sm border-b border-zinc-50 last:border-0 ${
                    pathname === s.href
                      ? "text-zinc-900 font-medium bg-zinc-50"
                      : "text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href="/o-kompanii"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${
                pathname === "/o-kompanii" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"
              }`}
            >
              О компании
            </Link>
            <Link
              href="/kontakty"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${
                pathname === "/kontakty" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"
              }`}
            >
              Контакты
            </Link>
            <div className="p-4">
              <Link
                href="/kontakty"
                className="block text-center bg-zinc-900 text-white text-sm font-medium px-5 py-3 rounded-lg"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
