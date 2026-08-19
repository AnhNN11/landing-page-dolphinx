"use client";

import { ArrowRight, ExternalLink, MapPin, MessageCircleMore } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { useLocale } from "./LocaleProvider";
import { MainNavigation } from "./MainNavigation";
import { StableLink as Link } from "./StableLink";

export function ServiceNav() {
  return <MainNavigation />;
}

export function ServiceFooter() {
  const { t } = useLocale();
  return (
    <footer className="relative overflow-hidden bg-[#061634] px-4 pb-8 pt-5 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(72,207,242,.24)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"/>
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="grid gap-10 py-10 md:grid-cols-[1.4fr_.7fr_.7fr_1.2fr] md:py-14">
          <div className="relative">
            <BrandLogo inverse />
            <p className="mt-5 max-w-sm text-[13px] leading-7 text-slate-400">{t("Product studio phát triển website, Mobile App, Web App, Zalo Mini App và đào tạo công nghệ thực hành cho người Việt.", "A product studio building websites, mobile apps, web apps and Zalo Mini Apps, with practical technology education for Vietnamese learners.")}</p><span className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[10px] font-bold text-emerald-200"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]"/>{t("Đang nhận dự án mới", "Available for new projects")}</span>
          </div>
          <div className="grid content-start gap-3 text-[13px] text-slate-400"><b className="mb-2 text-white">DX System</b><Link className="hover:text-cyan-200" href="/website">DXWeb</Link><Link className="hover:text-cyan-200" href="/mobile-app">DXMobile</Link><Link className="hover:text-cyan-200" href="/web-app">DXFlow</Link><Link className="hover:text-cyan-200" href="/zalo-mini-app">DXZalo</Link><Link className="hover:text-cyan-200" href="/education">DXAcademy</Link></div>
          <div className="grid content-start gap-3 text-[13px] text-slate-400"><b className="mb-2 text-white">{t("Khám phá", "Explore")}</b><Link className="hover:text-cyan-200" href="/about">{t("Về chúng tôi", "About")}</Link><Link className="hover:text-cyan-200" href="/studio">{t("Tự thiết kế", "Website builder")}</Link><Link className="hover:text-cyan-200" href="/blog">{t("Blog & Kiến thức", "Blog & Insights")}</Link><Link className="hover:text-cyan-200" href="/#process">{t("Quy trình", "Process")}</Link><Link className="hover:text-cyan-200" href="/#packages">{t("Bảng giá", "Pricing")}</Link></div>
          <div className="grid content-start gap-4 text-[13px] leading-6 text-slate-400"><b className="text-white">{t("Liên hệ", "Contact")}</b><Link className="flex items-center gap-2 font-bold text-cyan-300" href="/#contact"><MessageCircleMore size={16}/>{t("Liên hệ ngay", "Contact us")} <ArrowRight size={14}/></Link><Link className="flex items-center gap-2 hover:text-white" href="https://www.facebook.com/profile.php?id=61565408955535&locale=vi_VN" target="_blank" rel="noreferrer"><ExternalLink size={16}/>Facebook DolphinX Studio</Link><p className="flex gap-2"><MapPin className="mt-1 shrink-0" size={16}/>{t("60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam", "60 Nguyen Truong To, Dak Cam Ward, Quang Ngai Province, Vietnam")}</p></div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 CÔNG TY TNHH MTV DOLPHINX STUDIO</span><span>{t("Thiết kế và phát triển tại Quảng Ngãi · Việt Nam", "Designed and developed in Quang Ngai · Vietnam")}</span></div>
      </div>
    </footer>
  );
}
