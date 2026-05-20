"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Clock, Menu, X, ChevronDown } from "lucide-react";

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
    const t = setTimeout(() => {
      setMobileOpen(false);
      setOpenDropdown(null);
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <div className="bg-white border-b border-zinc-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap text-zinc-600">
          <div className="flex items-center gap-6">
            <a href="tel:+74951085560" className="flex items-center gap-1.5 text-zinc-700 hover:text-zinc-900 transition-colors">
              <Phone size={13} />
              <span className="font-medium">+7 (495) 108-55-60</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock size={13} />
              Приём заявок 24/7
            </span>
          </div>
          <Link
            href="/kontakty"
            className="ring-focus text-xs font-semibold rounded-full px-4 py-1.5 accent-btn"
          >
            Смета за 1 минуту
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(15,23,42,0.08)]" : ""
        } border-b border-zinc-200 bg-white/95 backdrop-blur`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/brand/glasseyes-logo.png"
              alt="GLASSEYES"
              width={36}
              height={36}
              className="w-9 h-9 rounded-md object-cover"
            />
            <div className="leading-none">
              <span className="font-bold text-zinc-900 text-[15px] tracking-tight block">GLASSEYES</span>
              <span className="text-[10px] text-zinc-500 tracking-wide">Стекла и зеркала</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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
                      className={`flex items-center gap-1 text-sm py-4 transition-colors ${
                        isActive ? "text-zinc-900 font-semibold" : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-72 bg-white border border-zinc-200 rounded-xl shadow-lg py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              pathname === child.href ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
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
                  className={`text-sm py-4 transition-colors ${
                    isActive ? "text-zinc-900 font-semibold" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/kontakty"
            className="hidden lg:flex items-center text-sm rounded-full px-5 py-2.5 accent-btn"
          >
            Рассчитать проект
          </Link>

          <button className="lg:hidden p-2 rounded text-zinc-700" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-zinc-200 bg-white max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-200 ${
                pathname === "/" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-700"
              }`}
            >
              Главная
            </Link>
            <div className="border-b border-zinc-200">
              <div className="px-6 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Наши направления</div>
              {directions.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`block px-6 py-3 text-sm border-b border-zinc-200 last:border-0 ${
                    pathname === s.href ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href="/o-kompanii"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-200 ${
                pathname === "/o-kompanii" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-700"
              }`}
            >
              О компании
            </Link>
            <Link
              href="/proekty"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-200 ${
                pathname === "/proekty" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-700"
              }`}
            >
              Наши проекты
            </Link>
            <Link
              href="/kontakty"
              className={`block px-6 py-3.5 text-sm border-b border-zinc-200 ${
                pathname === "/kontakty" ? "text-zinc-900 font-medium bg-zinc-50" : "text-zinc-700"
              }`}
            >
              Контакты
            </Link>
            <div className="p-4">
              <Link href="/kontakty" className="block text-center text-sm px-5 py-3 rounded-full accent-btn">
                Рассчитать проект
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
