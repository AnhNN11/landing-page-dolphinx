import Image from "next/image";
import { ArrowRight, BarChart3, Check, Globe2, MessageCircleMore, Search, Sparkles, Workflow } from "lucide-react";
import type { BlogArticle } from "../blog/articles";

function Phone({ accent, variant = 0 }: { accent: string; variant?: number }) {
  return <div className="relative h-[260px] w-[142px] overflow-hidden rounded-[24px] border-[6px] border-[#071c4b] bg-[#f8fbff] p-3 pt-7 shadow-[0_22px_45px_rgba(7,28,75,.2)]"><i className="absolute left-1/2 top-2 h-2 w-12 -translate-x-1/2 rounded-full bg-[#071c4b]"/><div className="rounded-xl p-3 text-white" style={{ background:`linear-gradient(145deg,${accent},#13c7e9)` }}><small className="text-[5px] font-bold tracking-[.12em]">DOLPHINX MINI APP</small><b className="mt-2 block text-[10px]">{variant === 0 ? "Xin chào, An" : variant === 1 ? "Ưu đãi của bạn" : "Đơn gần đây"}</b><span className="mt-4 block text-[6px] opacity-70">Thành viên · 2.450 điểm</span></div><div className="mt-2 grid grid-cols-2 gap-1">{[0,1,2,3].map(item=><i key={item} className="h-10 rounded-lg bg-white shadow-sm"/>)}</div><div className="mt-2 h-8 rounded-lg bg-white p-2"><i className="block h-1 w-2/3 rounded-full" style={{background:accent}}/></div></div>;
}

export function BlogCover({ article, compact = false }: { article: BlogArticle; compact?: boolean }) {
  const height = compact ? "min-h-[300px]" : "min-h-[340px] md:min-h-[560px]";
  if (article.coverImage) return <div className={`relative ${height} overflow-hidden ${article.coverFit === "contain" ? "bg-[radial-gradient(circle_at_70%_20%,#eef8ff,#f8fbff_58%,#edf4fb)] p-3 md:p-5" : "bg-[#eaf4ff]"}`}>
    <div className={`relative h-full min-h-[276px] overflow-hidden ${article.coverFit === "contain" ? "rounded-[18px] border border-blue-100 bg-white shadow-[0_22px_55px_rgba(7,45,102,.12)] md:min-h-[520px]" : "absolute inset-0"}`}>
      <Image
        src={article.coverImage}
        alt={article.coverAlt ?? article.title}
        fill
        sizes={compact ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "(max-width: 768px) 100vw, 62vw"}
        quality={90}
        className={article.coverFit === "contain" ? "bg-white" : "object-cover"}
        style={{
          objectFit: article.coverFit === "contain" ? "contain" : "cover",
          objectPosition: article.coverPosition === "top" ? "top center" : "center",
        }}
      />
    </div>
    {!article.coverCredit && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071c4b]/35 via-transparent to-transparent"/>}
    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[7px] font-black tracking-[.12em] text-[#075fc2] shadow-sm backdrop-blur-md md:left-5 md:top-5">
      {article.coverBadge ?? "DOLPHINX EDITORIAL"}
    </span>
    {!article.coverCredit && !compact && <div className="absolute bottom-6 left-6 max-w-[320px] rounded-2xl border border-white/70 bg-white/88 p-4 shadow-xl backdrop-blur-xl">
      <small className="text-[8px] font-black tracking-[.12em] text-[#075fc2]">TRẢI NGHIỆM THẬT · UI RÕ RÀNG</small>
      <p className="mt-2 text-[11px] font-semibold leading-5 text-[#071c4b]">Thiết kế cho hành vi quen thuộc của khách hàng Việt.</p>
    </div>}
  </div>;
  if (article.graphic === "miniapp" || article.graphic === "loyalty") return <div className={`relative flex ${height} items-end justify-center gap-3 overflow-hidden p-7`} style={{background:`radial-gradient(circle at 50% 35%,#fff,${article.accent}20),#eaf4ff`}}><div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-2 text-[7px] font-black tracking-[.12em]" style={{color:article.accent}}>ZALO MINI APP · UX CONCEPT</div><div className="translate-y-8 -rotate-6"><Phone accent={article.accent} variant={0}/></div><div className="z-10 -translate-y-2"><Phone accent={article.accent} variant={1}/></div><div className="translate-y-8 rotate-6"><Phone accent={article.accent} variant={2}/></div></div>;
  if (article.graphic === "landing") return <div className={`relative grid ${height} place-items-center overflow-hidden ${compact ? "p-4" : "p-8"}`} style={{background:`linear-gradient(135deg,#fff7ef,${article.accent}25)`}}>
    <div className="w-full max-w-[650px] overflow-hidden rounded-2xl border-[7px] border-[#202938] bg-white shadow-[0_30px_70px_rgba(44,29,20,.22)]">
      <div className="flex h-8 items-center gap-1.5 bg-[#202938] px-3"><i className="h-1.5 w-1.5 rounded-full bg-red-400"/><i className="h-1.5 w-1.5 rounded-full bg-amber-300"/><i className="h-1.5 w-1.5 rounded-full bg-emerald-400"/></div>
      <div className={`grid grid-cols-[1.1fr_.9fr] ${compact ? "min-h-[230px] p-5" : "min-h-[330px] p-8"}`}>
        <div className="flex flex-col justify-center"><small className="text-[6px] font-black tracking-[.15em]" style={{color:article.accent}}>ONE PAGE · ONE ACTION</small><b className={`${compact ? "mt-3 text-2xl" : "mt-4 text-4xl"} font-[family-name:var(--display)] leading-[.95] tracking-[-.06em]`}>Một thông điệp.<br/>Một hành động.</b><p className={`${compact ? "mt-3 line-clamp-2" : "mt-4"} text-[8px] leading-4 text-slate-500`}>Landing page được thiết kế để biến sự chú ý thành một bước tiếp theo rõ ràng.</p><span className={`${compact ? "mt-3" : "mt-5"} flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[7px] font-bold text-white`} style={{background:article.accent}}>Bắt đầu ngay <ArrowRight size={10}/></span></div>
        <div className="relative overflow-hidden rounded-xl" style={{background:`radial-gradient(circle at 50% 30%,${article.accent},#271d2b)`}}><i className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white/20 ${compact ? "h-20 w-20 border-[15px]" : "h-32 w-32 border-[24px]"}`}/></div>
      </div>
    </div>
  </div>;
  if (article.graphic === "seo") return <div className={`grid ${height} place-items-center overflow-hidden p-8`} style={{background:`radial-gradient(circle at 70% 20%,${article.accent}25,transparent 35%),#eef8f4`}}><div className="grid w-full max-w-[690px] grid-cols-[.8fr_1.2fr] overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-[0_30px_70px_rgba(16,80,58,.15)]"><div className="p-7 text-white" style={{background:"#0d3d32"}}><Search size={22} style={{color:article.accent}}/><b className="mt-9 block font-[family-name:var(--display)] text-3xl leading-tight tracking-[-.05em]">Landing page audit</b><p className="mt-4 text-[8px] leading-4 text-white/55">Thông điệp · Mobile · Speed · Tracking</p></div><div className="p-7"><div className="flex items-center justify-between"><span className="text-[8px] font-bold text-slate-600">Điểm sẵn sàng</span><strong className="text-3xl" style={{color:article.accent}}>92</strong></div><div className="mt-5 grid gap-2">{["Thông điệp rõ ràng","CTA nhất quán","Tối ưu mobile","Tracking hoạt động"].map((item,index)=><span key={item} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 text-[7px] font-bold text-slate-600">{item}<i className="grid h-5 w-5 place-items-center rounded-full" style={{background:`${article.accent}18`,color:article.accent}}>{index===3?"!":<Check size={10}/>}</i></span>)}</div></div></div></div>;
  if (article.graphic === "automation") return <div className={`relative grid ${height} place-items-center overflow-hidden bg-[#071c4b] ${compact ? "p-4" : "p-8"}`}>
    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:34px_34px]"/>
    <div className={`relative ${compact ? "grid justify-items-center gap-1" : "flex items-center gap-4"}`}>{[[MessageCircleMore,"Khách gửi yêu cầu"],[Workflow,"Phân loại"],[BarChart3,"Cập nhật CRM"]].map(([Icon,label],index)=>{const FlowIcon=Icon as typeof Workflow;return <div key={String(label)} className={`flex items-center ${compact ? "flex-col gap-1" : "gap-4"}`}><div className={`${compact ? "w-52 px-4 py-3" : "w-36 p-5"} rounded-xl border border-cyan-300/20 bg-white/10 text-white backdrop-blur-xl`}><FlowIcon size={compact ? 15 : 19} className="text-cyan-300"/><b className={`${compact ? "mt-2" : "mt-8"} block text-[9px]`}>{String(label)}</b><small className={`${compact ? "mt-1" : "mt-2"} block text-[6px] text-white/45`}>Bước 0{index+1}</small></div>{index<2&&<ArrowRight className={`text-cyan-300 ${compact ? "rotate-90" : ""}`} size={compact ? 14 : 18}/>}</div>})}</div>
  </div>;
  const orbitLabels = compact ? [["Website","left-1 top-7"],["Dữ liệu","right-1 top-20"],["Automation","left-12 bottom-1"]] : [["Website","-left-10 top-14"],["Dữ liệu","-right-8 top-24"],["Automation","left-16 -bottom-4"]];
  return <div className={`relative grid ${height} place-items-center overflow-hidden ${compact ? "p-4" : "p-8"}`} style={{background:`radial-gradient(circle at 50% 50%,${article.accent}25,transparent 45%),#f0f8fb`}}><div className={`relative grid place-items-center rounded-full border border-dashed ${compact ? "h-64 w-64" : "h-80 w-80"}`} style={{borderColor:`${article.accent}80`}}><div className={`grid place-items-center rounded-full border bg-white shadow-2xl ${compact ? "h-40 w-40" : "h-52 w-52"}`} style={{borderColor:`${article.accent}40`}}><div className={`grid place-items-center rounded-3xl text-white ${compact ? "h-20 w-20" : "h-28 w-28"}`} style={{background:article.accent}}><Globe2 size={compact ? 32 : 42}/></div></div>{orbitLabels.map(([label,position])=><span key={label} className={`absolute ${position} flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[8px] font-bold shadow-lg`}><Sparkles size={11} style={{color:article.accent}}/>{label}</span>)}</div></div>;
}
