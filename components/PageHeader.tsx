import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumbs, backgroundImage }: PageHeaderProps) {
  return (
    <section className="py-8 lg:py-10 bg-[#f6f7f8]">
      <div className="max-w-7xl mx-auto px-6">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm mb-5 text-zinc-600">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={13} />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-zinc-900 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-zinc-900">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 min-h-[320px] lg:min-h-[420px]">
          {backgroundImage ? (
            <>
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1280px"
                className="object-cover blur-[3px] scale-110 opacity-45"
              />
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1280px"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/78 via-zinc-950/58 to-zinc-950/28" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 aurora opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white/30" />
            </>
          )}

          <div className="relative z-10 p-8 lg:p-10">
            <h1 className={`text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 headline ${backgroundImage ? "text-white" : "text-zinc-900"}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg max-w-2xl leading-relaxed ${backgroundImage ? "text-white/88" : "text-zinc-700"}`}>{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
