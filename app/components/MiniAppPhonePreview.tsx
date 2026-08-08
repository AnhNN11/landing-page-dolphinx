import {
  CalendarDays,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import type { MiniAppTemplate } from "../zalo-mini-app/templates";

const icons = {
  education: GraduationCap,
  food: UtensilsCrossed,
  reward: Sparkles,
  fashion: ShoppingBag,
  market: Store,
  health: HeartPulse,
};

export function MiniAppPhonePreview({ template, compact = false }: { template: MiniAppTemplate; compact?: boolean }) {
  const Icon = icons[template.icon];
  return (
    <div className={`relative mx-auto overflow-hidden border-[#071c4b] bg-[#f8fbff] shadow-[0_28px_60px_rgba(7,28,75,.24)] ${compact ? "h-[390px] w-[220px] rounded-[34px] border-[7px]" : "h-[610px] w-[330px] rounded-[48px] border-[10px]"}`}>
      <div className={`absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-full bg-[#071c4b] ${compact ? "h-3 w-16" : "h-4 w-24"}`} />
      <div className={compact ? "p-3 pt-8" : "p-5 pt-11"}>
        <div className="flex items-center justify-between"><span className="text-[8px] font-black tracking-[.08em] text-[#071c4b]">DOLPHINX</span><span className="rounded-full bg-white px-2 py-1 text-[7px] font-bold text-slate-500">Mini App</span></div>
        <div className={`mt-4 rounded-2xl p-5 text-white ${compact ? "min-h-28" : "min-h-40"}`} style={{ background: `linear-gradient(145deg, ${template.accent}, #13c7e9)` }}><Icon size={compact ? 22 : 30}/><small className="mt-5 block text-[7px] font-bold tracking-[.12em] opacity-75">{template.category.toUpperCase()}</small><b className={`mt-2 block font-[family-name:var(--display)] leading-tight ${compact ? "text-lg" : "text-2xl"}`}>{template.name}</b></div>
        <div className={`mt-4 grid grid-cols-2 ${compact ? "gap-2" : "gap-3"}`}>{template.modules.slice(0,4).map((module, index) => <div key={module} className={`rounded-xl border border-slate-100 bg-white ${compact ? "min-h-16 p-2" : "min-h-24 p-4"}`}><span className="grid h-5 w-5 place-items-center rounded-md text-[7px] font-black" style={{ background: template.accentSoft, color: template.accent }}>0{index + 1}</span><b className={`mt-2 block leading-tight text-[#071c4b] ${compact ? "text-[7px]" : "text-[10px]"}`}>{module}</b></div>)}</div>
        <div className={`mt-4 rounded-xl border border-slate-100 bg-white ${compact ? "p-3" : "p-4"}`}><span className="flex items-center gap-2 text-[8px] font-bold text-[#071c4b]"><CalendarDays size={13} style={{ color: template.accent }}/>Hoạt động gần đây</span><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><i className="block h-full w-2/3 rounded-full" style={{ background: template.accent }}/></div></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 grid grid-cols-4 border-t border-slate-100 bg-white p-3">{[0,1,2,3].map((item) => <span key={item} className="mx-auto h-1.5 w-5 rounded-full bg-slate-200" style={item === 0 ? { background: template.accent } : undefined}/>)}</div>
    </div>
  );
}
