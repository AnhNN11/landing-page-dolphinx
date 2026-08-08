"use client";

import {
  AppWindow,
  ArrowRight,
  ChevronDown,
  Code2,
  Globe2,
  Menu,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { miniAppTemplates } from "../zalo-mini-app/templates";
import { websiteProducts } from "../website/products";
import { BrandLogo } from "./BrandLogo";
import { StableLink as Link } from "./StableLink";

const mobileProjects = [
  ["Retail Companion", "/mobile-app#retail-companion"],
  ["FieldOps Mobile", "/mobile-app#fieldops-mobile"],
  ["Campus Connect", "/mobile-app#campus-connect"],
];

const webAppProjects = [
  ["FlowOps CRM", "/web-app#flowops-crm"],
  ["Inventory Cloud", "/web-app#inventory-cloud"],
  ["Booking Console", "/web-app#booking-console"],
];

export function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useSyncExternalStore(() => () => undefined, () => window.location.pathname, () => "/");
  const close = () => setMobileOpen(false);
  const baseLinkClass = "rounded-lg px-3 py-2 text-[12px] font-semibold transition hover:bg-white hover:text-[#075fc2] hover:shadow-sm";
  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);
  const navClass = (href: string) => `${baseLinkClass} ${isActive(href) ? "bg-white text-[#075fc2] shadow-sm" : "text-slate-600"}`;
  const serviceActive = ["/website", "/mobile-app", "/web-app", "/zalo-mini-app"].some((route) => pathname.startsWith(route));

  return (
    <header className="main-navigation sticky top-0 z-[200] border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-[74px] w-[min(1240px,calc(100%-32px))] items-center justify-between gap-5">
        <Link href="/" aria-label="DolphinX Studio - Trang chủ" onClick={close}>
          <BrandLogo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 md:flex" aria-label="Điều hướng chính">
          <Link className={navClass("/")} href="/" aria-current={pathname === "/" ? "page" : undefined}>Trang chủ</Link>
          <details className="group relative">
            <summary className={`${baseLinkClass} flex cursor-pointer list-none items-center gap-1.5 [&::-webkit-details-marker]:hidden ${serviceActive ? "bg-white text-[#075fc2] shadow-sm" : "text-slate-600"}`}>Dịch vụ <span className="rounded-full bg-orange-500 px-1.5 py-0.5 text-[7px] font-black text-white">HOT</span><ChevronDown size={13} className="transition group-open:rotate-180"/></summary>
            <div className="absolute left-1/2 top-[calc(100%+16px)] w-[min(960px,calc(100vw-40px))] -translate-x-[42%] overflow-hidden rounded-[22px] border border-blue-100 bg-white shadow-[0_30px_90px_rgba(7,45,102,.2)]">
              <div className="flex items-center justify-between border-b border-slate-100 bg-[#f7fbff] px-7 py-5"><div><span className="text-[8px] font-black tracking-[.15em] text-[#13a6c8]">DOLPHINX PRODUCT ECOSYSTEM</span><p className="mt-1 text-xs font-semibold text-[#071c4b]">Chọn dịch vụ và xem các concept tương ứng</p></div><Link href="/studio" className="flex items-center gap-2 rounded-xl bg-[#071c4b] px-4 py-3 text-[9px] font-bold text-white">Tự thiết kế website <Sparkles size={14}/></Link></div>
              <div className="grid grid-cols-4 gap-px bg-slate-100">
                <ServiceColumn icon={Globe2} title="Website" href="/website" description="Website và landing page" projects={websiteProducts.slice(0,3).map(item=>[item.name,`/website/${item.slug}`])}/>
                <ServiceColumn icon={Smartphone} title="Mobile App" href="/mobile-app" description="Ứng dụng iOS & Android" projects={mobileProjects}/>
                <ServiceColumn icon={AppWindow} title="Web App" href="/web-app" description="Phần mềm chạy trên web" projects={webAppProjects}/>
                <ServiceColumn icon={Code2} title="Zalo Mini App" href="/zalo-mini-app" description="Mini App cho bán hàng & CSKH" hot projects={miniAppTemplates.slice(0,3).map(item=>[item.name,`/zalo-mini-app/${item.slug}`])}/>
              </div>
            </div>
          </details>
          <Link className={navClass("/blog")} href="/blog" aria-current={pathname.startsWith("/blog") ? "page" : undefined}>Blog</Link>
          <Link className={`${baseLinkClass} text-slate-600`} href="/#about">Về chúng tôi</Link>
          <Link className={`${baseLinkClass} text-slate-600`} href="/#packages">Bảng giá</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link className="hidden min-h-11 items-center gap-2 rounded-xl bg-[#075fc2] px-5 text-[11px] font-bold text-white shadow-lg shadow-[#075fc2]/15 sm:inline-flex" href="/#contact">Liên hệ ngay <ArrowRight size={15}/></Link>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-[#071c4b] md:hidden" onClick={() => setMobileOpen(value=>!value)} aria-label={mobileOpen ? "Đóng menu" : "Mở menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>

        {mobileOpen && <nav className="absolute left-0 right-0 top-[calc(100%+1px)] max-h-[calc(100vh-80px)] overflow-y-auto rounded-b-2xl border border-t-0 border-slate-200 bg-white p-4 shadow-2xl md:hidden" aria-label="Điều hướng di động"><div className="grid gap-1"><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/" onClick={close}>Trang chủ</Link><details className="rounded-xl bg-[#f5f8fc] p-2"><summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 text-sm font-bold [&::-webkit-details-marker]:hidden">Dịch vụ <ChevronDown size={15}/></summary><div className="mt-2 grid gap-2">{[["Website","/website"],["Mobile App","/mobile-app"],["Web App","/web-app"],["Zalo Mini App · HOT","/zalo-mini-app"]].map(([label,href])=><Link key={href} href={href} onClick={close} className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-xs font-semibold text-slate-600">{label}<ArrowRight size={14} className="text-[#075fc2]"/></Link>)}</div></details><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/blog" onClick={close}>Blog</Link><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/#about" onClick={close}>Về chúng tôi</Link><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/#packages" onClick={close}>Bảng giá</Link><Link className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#075fc2] px-4 py-4 text-sm font-bold text-white" href="/#contact" onClick={close}>Liên hệ ngay <ArrowRight size={16}/></Link></div></nav>}
      </div>
    </header>
  );
}

function ServiceColumn({ icon: Icon, title, description, href, projects, hot = false }: { icon: typeof Globe2; title: string; description: string; href: string; projects: string[][]; hot?: boolean }) {
  return <div className="min-h-[310px] bg-white p-5"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#075fc2]"><Icon size={19}/></span>{hot&&<span className="rounded-full bg-orange-500 px-2 py-1 text-[7px] font-black tracking-[.1em] text-white">HOT</span>}</div><Link href={href} className="mt-5 flex items-center gap-2 font-[family-name:var(--display)] text-base font-bold text-[#071c4b]">{title}<ArrowRight size={14} className="text-[#075fc2]"/></Link><p className="mt-2 min-h-8 text-[8px] leading-4 text-slate-400">{description}</p><span className="mt-5 block text-[7px] font-black tracking-[.12em] text-slate-400">DỰ ÁN / CONCEPT</span><div className="mt-2 grid gap-1">{projects.map(([name,projectHref])=><Link key={projectHref} href={projectHref} className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-[9px] font-semibold text-slate-600 hover:bg-[#f1f7ff] hover:text-[#075fc2]">{name}<ArrowRight size={12} className="opacity-0 transition group-hover/item:translate-x-1 group-hover/item:opacity-100"/></Link>)}</div><Link href={href} className="mt-3 inline-flex items-center gap-2 text-[8px] font-black text-[#075fc2]">Xem tất cả <ArrowRight size={12}/></Link></div>;
}
