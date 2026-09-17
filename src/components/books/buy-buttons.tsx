import { ArrowUpRight } from "lucide-react";

interface BuyButtonProps {
  url: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export function BuyButton({ url, variant, children }: BuyButtonProps) {
  const base =
    "w-full sm:w-auto inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm font-sans font-medium px-6 py-3 transition-colors text-center";
  const style =
    variant === "primary"
      ? "bg-primary text-white rounded-tl-3xl hover:bg-primary/90"
      : "bg-lightGray text-secondary rounded-br-3xl hover:bg-primary hover:text-white";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
