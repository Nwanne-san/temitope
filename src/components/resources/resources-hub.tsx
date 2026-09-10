"use client";

import { useMemo, useState } from "react";
import { resources, resourceTypeLabels, type ResourceType } from "@/data/resources";
import ResourceCard from "./resource-card";

type FilterKey = "all" | ResourceType;

const FILTER_ORDER: FilterKey[] = [
  "all",
  "course",
  "video",
  "article",
  "talk",
  "podcast",
  "download",
];

const filterLabels: Record<FilterKey, string> = {
  all: "All",
  ...resourceTypeLabels,
};

export default function ResourcesHub() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const counts = useMemo(() => {
    const map = new Map<FilterKey, number>();
    map.set("all", resources.length);
    for (const r of resources) {
      map.set(r.type, (map.get(r.type) ?? 0) + 1);
    }
    return map;
  }, []);

  const featured = useMemo(
    () => resources.filter((r) => r.featured),
    []
  );

  const visible = useMemo(() => {
    if (filter === "all") return resources;
    return resources.filter((r) => r.type === filter);
  }, [filter]);

  return (
    <>
      {/* Start-here row ────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="border-b border-secondary/10">
          <div className="container mx-auto px-4 sm:px-10 py-14 xl:py-20">
            <div className="flex items-baseline justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-3">
                  Start here
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl xl:text-4xl text-secondary leading-tight">
                  New to Temitope&rsquo;s work?
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {featured.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter + grid ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 sm:px-10 py-14 xl:py-20">
          <div className="mb-10 space-y-6">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-3">
                The full library
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl xl:text-4xl text-secondary leading-tight">
                Filter by what you need.
              </h2>
            </div>
            <div
              className="flex items-center overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Filter resources"
            >
              {FILTER_ORDER.map((key) => {
                const count = counts.get(key) ?? 0;
                if (count === 0) return null;
                const active = filter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(key)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-sans font-medium tracking-wide transition-colors ${
                      active
                        ? "bg-secondary text-white"
                        : "bg-lightGray text-secondary hover:bg-primary hover:text-white"
                    }`}
                  >
                    <span>{filterLabels[key]}</span>
                    <span
                      className={`text-[0.65rem] tabular-nums ${
                        active ? "text-white/70" : "text-secondary/50"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-sm text-secondary/50 font-sans">
              Nothing here yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
