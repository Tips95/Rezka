"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type WorksDirection = {
  key: string;
  title: string;
  subtitle: string;
  href: string;
  images: string[];
};

type Props = {
  directions: WorksDirection[];
};

export default function ProjectsWorksGallery({ directions }: Props) {
  const firstWithImages = useMemo(
    () => directions.find((d) => d.images.length > 0)?.key ?? directions[0]?.key ?? "",
    [directions],
  );

  const [activeKey, setActiveKey] = useState(firstWithImages);
  const activeDirection = directions.find((d) => d.key === activeKey) ?? directions[0];

  if (!activeDirection) {
    return null;
  }

  return (
    <div className="surface-tint noise relative overflow-hidden rounded-3xl p-5 sm:p-7">
      <div className="relative z-20 flex flex-wrap gap-2.5 mb-5">
        {directions.map((direction) => {
          const active = direction.key === activeDirection.key;
          return (
            <button
              key={direction.key}
              type="button"
              onClick={() => setActiveKey(direction.key)}
              className={`ring-focus relative z-20 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "bg-zinc-950 text-white"
                  : "bg-white/70 border border-white/70 text-zinc-800 hover:bg-white/85"
              }`}
            >
              {direction.title}
              <span className={`ml-2 text-xs ${active ? "text-zinc-300" : "text-zinc-500"}`}>
                {direction.images.length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 headline">
          {activeDirection.title}
        </h3>
        <p className="text-sm text-zinc-600 mt-1">{activeDirection.subtitle}</p>
      </div>

      {activeDirection.images.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/70 bg-white/45 p-8 text-sm text-zinc-600">
          Для этого направления пока нет фотографий.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {activeDirection.images.map((src, idx) => (
            <div key={`${activeDirection.key}-${idx}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`${activeDirection.title} — фото ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 ring-1 ring-white/30 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

