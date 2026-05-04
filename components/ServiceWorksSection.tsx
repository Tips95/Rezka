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
    <section className="py-16 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-500 mb-3 tracking-[0.2em] uppercase">Реальные объекты</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 headline">
              Фото работ: {title}
            </h2>
          </div>
          <Link
            href="/proekty"
            className="ring-focus inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold accent-btn self-start"
          >
            Смотреть все работы
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={images[0]}
              alt={`${title} — главное фото`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 ring-1 ring-white/35 rounded-2xl pointer-events-none" />
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {images.slice(1, 5).map((src, idx) => (
              <div key={`${folder}-top-${idx}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`${title} — фото ${idx + 2}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-[1.03] transition-transform duration-300"
                />
                <div className="absolute inset-0 ring-1 ring-white/35 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {images.slice(5).map((src, idx) => (
            <div key={`${folder}-bottom-${idx}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`${title} — доп. фото ${idx + 6}`}
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 ring-1 ring-white/35 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
