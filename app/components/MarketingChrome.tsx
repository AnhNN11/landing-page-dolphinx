"use client";

import { ArrowRight, BadgeCheck, ExternalLink, MapPin, MessageCircleMore, Sparkles } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { MainNavigation } from "./MainNavigation";
import { StableLink as Link } from "./StableLink";

export function ServiceNav() {
  return <MainNavigation />;
}

export function ServiceFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#061634] px-4 pb-8 pt-5 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(72,207,242,.24)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"/>
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="grid overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#0a2e71] via-[#075fc2] to-[#13b9dc] md:grid-cols-[1.25fr_.75fr]">
          <div className="p-8 md:p-12"><span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[.16em] text-cyan-200"><Sparkles size={15}/> BẮT ĐẦU TỪ BÀI TOÁN THẬT</span><h2 className="mt-5 max-w-3xl font-[family-name:var(--display)] text-3xl font-semibold leading-tight tracking-[-.05em] md:text-5xl">Một buổi trao đổi rõ ràng có thể tiết kiệm nhiều tháng làm sai sản phẩm.</h2><div className="mt-7 flex flex-wrap gap-4 text-[11px] font-semibold text-blue-100"><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-cyan-200"/>Không ép gói có sẵn</span><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-cyan-200"/>Phạm vi minh bạch</span></div></div>
          <div className="flex items-center justify-center border-t border-white/10 bg-[#062f73]/20 p-8 md:border-l md:border-t-0">
            <Link
              className="group inline-flex min-h-14 items-center gap-3 rounded-2xl bg-white px-7 text-sm font-extrabold text-[#075fc2] shadow-2xl shadow-[#032b66]/20 transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              href="/#contact"
              style={{ backgroundColor: "#ffffff", color: "#075fc2" }}
            >
              <span className="text-[#075fc2]">Liên hệ ngay</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e7f5ff] text-[#075fc2] transition group-hover:translate-x-1">
                <ArrowRight size={16}/>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_.7fr_.7fr_1.2fr]">
          <div>
            <BrandLogo inverse />
            <p className="mt-5 max-w-sm text-[13px] leading-7 text-slate-400">Product studio phát triển website, Mobile App, Web App và Zalo Mini App cho doanh nghiệp Việt.</p><span className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[10px] font-bold text-emerald-200"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]"/>Đang nhận dự án mới</span>
          </div>
          <div className="grid content-start gap-3 text-[13px] text-slate-400"><b className="mb-2 text-white">Dịch vụ</b><Link className="hover:text-cyan-200" href="/website">Website</Link><Link className="hover:text-cyan-200" href="/mobile-app">Mobile App</Link><Link className="hover:text-cyan-200" href="/web-app">Web App</Link><Link className="hover:text-cyan-200" href="/zalo-mini-app">Zalo Mini App</Link></div>
          <div className="grid content-start gap-3 text-[13px] text-slate-400"><b className="mb-2 text-white">Khám phá</b><Link className="hover:text-cyan-200" href="/studio">Tự thiết kế</Link><Link className="hover:text-cyan-200" href="/blog">Blog & Kiến thức</Link><Link className="hover:text-cyan-200" href="/#process">Quy trình</Link><Link className="hover:text-cyan-200" href="/#packages">Bảng giá</Link></div>
          <div className="grid content-start gap-4 text-[13px] leading-6 text-slate-400"><b className="text-white">Liên hệ</b><Link className="flex items-center gap-2 font-bold text-cyan-300" href="/#contact"><MessageCircleMore size={16}/>Liên hệ ngay <ArrowRight size={14}/></Link><Link className="flex items-center gap-2 hover:text-white" href="https://www.facebook.com/profile.php?id=61565408955535&locale=vi_VN" target="_blank" rel="noreferrer"><ExternalLink size={16}/>Facebook DolphinX Studio</Link><p className="flex gap-2"><MapPin className="mt-1 shrink-0" size={16}/>60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam</p></div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 DolphinX Studio. All rights reserved.</span><span>Thiết kế và phát triển tại Quảng Ngãi · Việt Nam</span></div>
      </div>
    </footer>
  );
}
