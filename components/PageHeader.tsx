import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20 bg-transparent">
      <div className="absolute inset-0 -z-10">
        <div className="aurora opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-zinc-600 mb-6">
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

        <div className="glass noise relative rounded-3xl p-8 lg:p-10">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 headline">
            <span className="headline-accent">{title}</span>
          </h1>
          {subtitle && (
            <p className="text-zinc-700 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
