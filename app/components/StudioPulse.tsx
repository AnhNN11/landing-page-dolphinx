import { ArrowRight, Braces, ChartNoAxesCombined, MousePointer2, ScanSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stages: Array<[LucideIcon, string, string]> = [
  [ScanSearch, "01 · Strategy", "Làm rõ bài toán"],
  [MousePointer2, "02 · Experience", "Prototype luồng chính"],
  [Braces, "03 · Engineering", "Xây theo sprint"],
  [ChartNoAxesCombined, "04 · Growth", "Đo lường & mở rộng"],
];

export function StudioPulse() {
  return (
    <section className="studio-pulse" aria-label="Năng lực phát triển sản phẩm DolphinX">
      <div className="mx-auto grid w-[min(1200px,calc(100%-32px))] gap-3 py-5 xl:grid-cols-[.85fr_3.15fr]">
        <div className="flex min-h-20 items-center justify-between gap-4 rounded-2xl bg-[#071c4b] px-5 py-4 text-white"><span className="min-w-0"><small className="block text-[8px] font-black tracking-[.16em] text-cyan-300">PRODUCT STUDIO</small><b className="mt-1 block text-xs leading-[1.45]">Một đội ngũ · Một hành trình</b></span><i className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_14px_#6ee7b7]"/></div>
        <div className="grid overflow-hidden rounded-2xl border border-blue-100 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stages.map(([Icon, label, text], index) => <div key={label} className="group flex min-h-20 items-center gap-3 border-b border-blue-50 px-4 py-4 last:border-0 sm:even:border-l lg:border-b-0 lg:border-l"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#075fc2] transition group-hover:bg-[#075fc2] group-hover:text-white"><Icon size={17}/></span><span className="min-w-0"><small className="block text-[8px] font-black tracking-[.1em] text-[#075fc2]">{label.toUpperCase()}</small><b className="mt-1 block text-[11px] leading-[1.35] text-slate-600">{text}</b></span>{index < stages.length - 1 && <ArrowRight size={12} className="ml-auto hidden shrink-0 text-slate-300 lg:block"/>}</div>)}
        </div>
      </div>
    </section>
  );
}
