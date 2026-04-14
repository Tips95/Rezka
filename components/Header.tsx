"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Clock, Mail, Menu, X, ChevronDown } from "lucide-react";

const directions = [
  { label: "Тентовые перголы", href: "/uslugi/tentovye-pergoly" },
  { label: "Биоклиматические перголы", href: "/uslugi/bioklimaticheskie-pergoly" },
  { label: "Зимние сады", href: "/uslugi/zimnie-sady" },
  { label: "Безрамное остекление", href: "/uslugi/bezramnoe-osteklenie" },
  { label: "Безрамное со стеклопакетом", href: "/uslugi/bezramnoe-so-steklopaketom" },
  { label: "Гильотинное остекление", href: "/uslugi/gilotinnoe-osteklenie" },
  { label: "Панорамные двери", href: "/uslugi/panoramnye-dveri" },
  { label: "Москитные сетки плиссе", href: "/uslugi/moskitnye-setki" },
  { label: "ZIP-экраны", href: "/uslugi/zip-ekrany" },
];

const aboutItems = [
  { label: "О компании", href: "/o-kompanii" },
  { label: "Этапы работы", href: "/o-kompanii#etapy" },
  { label: "Отзывы клиентов", href: "/o-kompanii#otzyvy" },
];

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Наши направления", href: "/uslugi", children: directions },
  { label: "О компании", href: "/o-kompanii", children: aboutItems },
  { label: "Наши проекты", href: "/proekty" },
  { label: "Контакты", href: "/kontakty" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-zinc-900 text-zinc-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-6">
            <a href="tel:+74951085560" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} />
              <span className="font-medium text-white">+7 495 108-55-60</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock size={13} />
              24/7 — принимаем заявки
            </span>
            <a href="mailto:info@alyu-pro.ru" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} />
              info@alyu-pro.ru
            </a>
          </div>
          <Link
            href="/kontakty"
            className="text-xs font-medium text-white border border-white/20 rounded px-3 py-1 hover:bg-white hover:text-zinc-900 transition-all"
          >
            Смета за 1 минуту
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""} border-b border-zinc-100`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-tight">АП</span>
            </div>
            <div className="leading-none">
              <span className="font-bold text-zinc-900 text-[15px] tracking-tight block">АлюПро</span>
              <span className="text-[10px] text-zinc-400 tracking-wide">Перголы и остекление</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm py-4 transition-colors ${isActive ? "text-zinc-900 font-medium" : "text-zinc-500 hover:text-zinc-900"}`}
                    >
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""} opacity-50`} />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-72 bg-white border border-zinc-100 rounded-xl shadow-lg py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${pathname === child.href ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"}`}
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
                  className={`text-sm py-4 transition-colors ${isActive ? "text-zinc-900 font-medium" : "text-zinc-500 hover:text-zinc-900"}`}
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
          <button className="lg:hidden p-2 rounded text-zinc-600" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-zinc-100 bg-white max-h-[80vh] overflow-y-auto">
            <Link href="/" className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${pathname === "/" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"}`}>
              Главная
            </Link>
            <div className="border-b border-zinc-50">
              <div className="px-6 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Наши направления</div>
              {directions.map((s) => (
                <Link key={s.label} href={s.href} className={`block px-6 py-3 text-sm border-b border-zinc-50 last:border-0 ${pathname === s.href ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600 hover:bg-zinc-50"}`}>
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href="/o-kompanii" className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${pathname === "/o-kompanii" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"}`}>О компании</Link>
            <Link href="/proekty" className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${pathname === "/proekty" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"}`}>Наши проекты</Link>
            <Link href="/kontakty" className={`block px-6 py-3.5 text-sm border-b border-zinc-50 ${pathname === "/kontakty" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600"}`}>Контакты</Link>
            <div className="p-4">
              <Link href="/kontakty" className="block text-center bg-zinc-900 text-white text-sm font-medium px-5 py-3 rounded-lg">
                Оставить заявку
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
