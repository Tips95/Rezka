import Image from "next/image";
import Link from "next/link";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

type Props = {
  folder: string;
  title: string;
};

async function loadImages(folder: string): Promise<string[]> {
  const folderPath = join(process.cwd(), "public", "images", "works", folder);

  try {
    const entries = await readdir(folderPath, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => /\.(jpg|jpeg|png|webp)$/i.test(name))
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 9)
      .map((name) => `/images/works/${folder}/${name}`);
  } catch {
    return [];
  }
}

export default async function ServiceWorksSection({ folder, title }: Props) {
  const images = await loadImages(folder);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-700 mb-3 tracking-wide uppercase">Реальные объекты</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 headline">
            Фото работ: <span className="headline-accent">{title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, idx) => (
            <div key={`${folder}-${idx}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`${title} — фото ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 ring-1 ring-white/35 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/proekty"
            className="ring-focus inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-white/75 border border-white/70 text-zinc-900 hover:bg-white transition-colors"
          >
            Смотреть все работы
          </Link>
        </div>
      </div>
    </section>
  );
}
