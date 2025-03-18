import React, { forwardRef } from "react";
import Link from "next/link";

interface ResourcesProps {
  id?: string;
}

const Resources = forwardRef<HTMLElement, ResourcesProps>(
  ({ id = "resources" }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className="container mx-auto px-4 lg:px-10 py-12 md:py-24 scroll-mt-20"
      >
        <div className="space-y-2 mb-12">
          <p className="text-primary uppercase tracking-wider flex items-center gap-2">
            <span className="text-2xl">✱</span> ARTICLES, GUIDES, TEMPLATES
          </p>
          <h2 className="font-bai-jamjuree text-3xl md:text-4xl">
            Resource Hub
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <button className="group">
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-200 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-bai-jamjuree text-xl mb-2 group-hover:text-primary transition-colors">
              Navigating The Legal Landscape In Fintech: Key Considerations For
              Startups
            </h3>
            <p className="text-primary uppercase flex items-center gap-2 text-sm">
              READ MORE <span className="text-lg">→</span>
            </p>
          </button>
        </div>
      </section>
    );
  }
);

Resources.displayName = "Resources";

export default Resources;
