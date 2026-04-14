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
    <section className="bg-zinc-900 text-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-zinc-500 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={13} />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-zinc-300 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-zinc-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        {subtitle && (
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
