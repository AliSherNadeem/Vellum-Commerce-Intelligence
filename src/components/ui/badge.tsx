import { cn } from "@/lib/utils";

export function Badge({ children, tone = "neutral", className }: { children: React.ReactNode; tone?: "neutral" | "green" | "amber" | "coral" | "blue"; className?: string }) {
  const tones = {
    neutral: "bg-ink-100 text-ink-600",
    green: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/15",
    amber: "bg-[#fff9dc] text-[#806817] ring-1 ring-[#d9bc4e]/20",
    coral: "bg-coral-50 text-coral-700 ring-1 ring-coral-500/15",
    blue: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/15",
  };
  return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold", tones[tone], className)}>{children}</span>;
}
