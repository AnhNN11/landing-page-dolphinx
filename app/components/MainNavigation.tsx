"use client";

import Image from "next/image";
import {
  AppWindow,
  ArrowRight,
  ChevronDown,
  GraduationCap,
  Globe2,
  Menu,
  Smartphone,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState, useSyncExternalStore } from "react";
import { BrandLogo } from "./BrandLogo";
import { LanguageSwitch, useLocale } from "./LocaleProvider";
import { StableLink as Link } from "./StableLink";

export function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLocale();
  const pathname = useSyncExternalStore(() => () => undefined, () => window.location.pathname, () => "/");
  const close = () => setMobileOpen(false);
  const baseLinkClass = "rounded-lg px-3 py-2 text-[12px] font-semibold transition hover:bg-white hover:text-[#075fc2] hover:shadow-sm";
  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);
  const navClass = (href: string) => `${baseLinkClass} ${isActive(href) ? "bg-white text-[#075fc2] shadow-sm" : "text-slate-600"}`;
  const serviceActive = ["/website", "/mobile-app", "/web-app", "/zalo-mini-app", "/education"].some((route) => pathname.startsWith(route));
  const serviceItems = [
    { title: "DXWeb", description: t("Website & landing page", "Websites & landing pages"), href: "/website", icon: <Globe2 size={19}/> },
    { title: "DXMobile", description: t("Ứng dụng iOS & Android", "iOS & Android applications"), href: "/mobile-app", icon: <Smartphone size={19}/> },
    { title: "DXFlow", description: t("Web App & phần mềm vận hành", "Web apps & operations software"), href: "/web-app", icon: <AppWindow size={19}/> },
    { title: "DXZalo", description: t("Mini App bán hàng & chăm sóc khách", "Mini Apps for sales & customer care"), href: "/zalo-mini-app", icon: <Image src="/images/zalo-wordmark.png" alt="Zalo" width={320} height={115} className="h-auto w-9"/> , hot: true },
    { title: "DXAcademy", description: t("Fullstack Web · Mobile · Lập trình cho trẻ em", "Fullstack Web · Mobile · Coding for kids"), href: "/education", icon: <GraduationCap size={20}/>, featured: true },
  ];

  return (
    <header className="main-navigation sticky top-0 z-[200] border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-[74px] w-[min(1240px,calc(100%-32px))] items-center justify-between gap-5">
        <Link href="/" aria-label="DolphinX Studio - Trang chủ" onClick={close}>
          <BrandLogo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 lg:flex" aria-label={t("Điều hướng chính", "Main navigation")}>
          <Link className={navClass("/")} href="/" aria-current={pathname === "/" ? "page" : undefined}>{t("Trang chủ", "Home")}</Link>
          <details className="group relative">
            <summary className={`${baseLinkClass} flex cursor-pointer list-none items-center gap-1.5 [&::-webkit-details-marker]:hidden ${serviceActive ? "bg-white text-[#075fc2] shadow-sm" : "text-slate-600"}`}>{t("Dịch vụ", "Services")} <span className="rounded-full bg-orange-500 px-1.5 py-0.5 text-[7px] font-black !text-white">HOT</span><ChevronDown size={13} className="transition group-open:rotate-180"/></summary>
            <div className="absolute left-1/2 top-[calc(100%+16px)] w-[min(760px,calc(100vw-40px))] -translate-x-1/2 overflow-hidden rounded-[22px] border border-blue-100 bg-white p-3 shadow-[0_30px_90px_rgba(7,45,102,.2)]">
              <div className="mb-2 flex items-center justify-between px-3 py-2"><div><span className="text-[8px] font-black tracking-[.15em] text-[#13a6c8]">DX PRODUCT SYSTEM</span><p className="mt-1 text-[10px] font-semibold text-slate-500">{t("Chọn năng lực để xem chi tiết", "Choose a capability to explore")}</p></div><span className="rounded-full bg-blue-50 px-3 py-2 text-[7px] font-black tracking-[.1em] text-[#075fc2]">05 {t("NĂNG LỰC", "CAPABILITIES")}</span></div>
              <div className="grid grid-cols-2 gap-2">
                {serviceItems.map((item) => <ServiceCard key={item.href} {...item}/>) }
              </div>
            </div>
          </details>
          <Link className={navClass("/blog")} href="/blog" aria-current={pathname.startsWith("/blog") ? "page" : undefined}>Blog</Link>
          <Link className={navClass("/about")} href="/about" aria-current={pathname === "/about" ? "page" : undefined}>{t("Về chúng tôi", "About")}</Link>
          <Link className={`${baseLinkClass} text-slate-600`} href="/#packages">{t("Bảng giá", "Pricing")}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch compact />
          <Link className="nav-contact-cta hidden min-h-11 items-center gap-2 rounded-xl bg-[#075fc2] px-5 text-[11px] font-bold !text-white shadow-lg shadow-[#075fc2]/15 lg:inline-flex" href="/#contact" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><span className="!text-white">{t("Liên hệ ngay", "Contact us")}</span> <ArrowRight size={15} className="text-white"/></Link>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-[#071c4b] lg:hidden" onClick={() => setMobileOpen(value=>!value)} aria-label={mobileOpen ? t("Đóng menu", "Close menu") : t("Mở menu", "Open menu")} aria-expanded={mobileOpen}>{mobileOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>

        {mobileOpen && <nav className="absolute left-0 right-0 top-[calc(100%+1px)] max-h-[calc(100vh-80px)] overflow-y-auto rounded-b-2xl border border-t-0 border-slate-200 bg-white p-4 shadow-2xl lg:hidden" aria-label={t("Điều hướng di động", "Mobile navigation")}><div className="grid gap-1"><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/" onClick={close}>{t("Trang chủ", "Home")}</Link><details className="rounded-xl bg-[#f5f8fc] p-2"><summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 text-sm font-bold [&::-webkit-details-marker]:hidden">{t("Dịch vụ", "Services")} <ChevronDown size={15}/></summary><div className="mt-2 grid gap-2">{serviceItems.map((item)=><Link key={item.href} href={item.href} onClick={close} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-xs font-semibold text-slate-600"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 text-[#075fc2]">{item.icon}</span><b>{item.title}</b><ArrowRight size={14} className="ml-auto text-[#075fc2]"/></Link>)}</div></details><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/blog" onClick={close}>Blog</Link><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/about" onClick={close}>{t("Về chúng tôi", "About")}</Link><Link className="rounded-xl px-4 py-3 text-sm font-bold" href="/#packages" onClick={close}>{t("Bảng giá", "Pricing")}</Link><Link className="nav-contact-cta mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#075fc2] px-4 py-4 text-sm font-bold !text-white" href="/#contact" onClick={close} style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><span className="!text-white">{t("Liên hệ ngay", "Contact us")}</span> <ArrowRight size={16} className="text-white"/></Link></div></nav>}
      </div>
    </header>
  );
}

function ServiceCard({ title, description, href, icon, hot = false, featured = false }: { title: string; description: string; href: string; icon: ReactNode; hot?: boolean; featured?: boolean }) {
  return <Link href={href} className={`group flex min-h-[112px] items-center gap-4 rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_34px_rgba(7,45,102,.09)] ${featured ? "col-span-2 border-cyan-200 bg-gradient-to-r from-[#071c4b] via-[#075fc2] to-[#13a6c8]" : "border-slate-100 bg-[#f8fbff] hover:bg-white"}`}><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border shadow-sm ${featured ? "border-white/20 bg-white/15 text-cyan-100" : "border-blue-100 bg-white text-[#075fc2]"}`}>{icon}</span><div><span className={`flex items-center gap-2 font-[family-name:var(--display)] text-sm font-bold ${featured ? "text-white" : "text-[#071c4b]"}`}>{title}{hot&&<i className="rounded-full bg-orange-500 px-2 py-1 text-[6px] font-black not-italic tracking-[.08em] !text-white">HOT</i>}{featured&&<i className="rounded-full bg-cyan-200 px-2 py-1 text-[6px] font-black not-italic tracking-[.08em] text-[#071c4b]">NEW</i>}</span><p className={`mt-2 text-[8px] leading-4 ${featured ? "text-blue-100" : "text-slate-500"}`}>{description}</p></div><ArrowRight size={15} className={`ml-auto shrink-0 transition group-hover:translate-x-1 ${featured ? "text-cyan-100" : "text-[#075fc2]"}`}/></Link>;
}
