"use client";

import Image from "next/image";
import { ArrowRight, BarChart3, Gauge, Layers3, MousePointer2, Search, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ServiceFooter, ServiceNav } from "../components/MarketingChrome";
import { ServicePricing } from "../components/ServicePricing";
import { StableLink as Link } from "../components/StableLink";
import { ThemeReferenceLibrary } from "../components/ThemeReferenceLibrary";
import { WebsiteUpgradeBuilder } from "../components/WebsiteUpgradeBuilder";

const websiteCapabilities: Array<[LucideIcon, string, string]> = [
  [MousePointer2,"UX chuyển đổi","Điều hướng rõ, CTA đúng thời điểm và nội dung dễ đọc."],
  [Gauge,"Tốc độ & Core Web Vitals","Tối ưu hình ảnh, mã nguồn và trải nghiệm trên thiết bị di động."],
  [Search,"SEO kỹ thuật","Metadata, schema, cấu trúc heading và liên kết nội bộ chuẩn."],
  [Layers3,"Design system","Màu sắc, typography và component nhất quán khi mở rộng."],
  [BarChart3,"Đo lường hiệu quả","Tích hợp analytics, pixel và theo dõi chuyển đổi cần thiết."],
  [ShieldCheck,"Bàn giao làm chủ","Tên miền, mã nguồn, dữ liệu và hướng dẫn quản trị rõ ràng."],
];

export default function WebsiteServicePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <ServiceNav />
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(18,188,235,.16),transparent_35%),radial-gradient(circle_at_25%_50%,rgba(9,107,199,.08),transparent_38%)]"/>
        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-extrabold tracking-[.14em] text-blue-700"><Sparkles size={14}/> WEBSITE PRODUCT STUDIO</span>
          <h1 className="mx-auto mt-7 max-w-5xl font-[family-name:var(--display)] text-[clamp(52px,8vw,104px)] font-semibold leading-[.98] tracking-[-.065em]">Website đẹp để <span className="dx-gradient-text">tạo ra hành động.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">Thiết kế website và landing page như một sản phẩm tăng trưởng: rõ thông điệp, giàu trải nghiệm, tải nhanh và đo lường được.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4"><Link className="dx-primary-action inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#075fc2] px-6 text-xs font-bold !text-white shadow-xl shadow-[#075fc2]/20" href="/studio" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><span className="!text-white">Tự thiết kế website</span> <ArrowRight size={17} className="text-white"/></Link><Link className="flex min-h-12 items-center gap-2 px-2 text-xs font-bold text-[#075fc2]" href="#products">Xem website có sẵn <ArrowRight size={16}/></Link><Link className="flex min-h-12 items-center gap-2 px-2 text-xs font-bold text-[#075fc2]" href="#pricing">Cách tính chi phí <ArrowRight size={16}/></Link></div>
        </div>
        <div className="relative mx-auto mt-16 max-w-[1200px] overflow-hidden rounded-[26px] border border-slate-800 bg-[#0c1420] p-3 shadow-[0_50px_100px_rgba(15,31,52,.22)] md:p-6">
          <Image src="/images/dolphinx-mascot-website-v2.webp" alt="Cá heo DolphinX giới thiệu dịch vụ thiết kế website" width={1256} height={1256} className="pointer-events-none absolute right-3 top-3 z-20 hidden h-auto w-36 drop-shadow-[0_20px_25px_rgba(5,42,96,.24)] md:block lg:right-5 lg:top-4 lg:w-44"/>
          <div className="flex h-9 items-center gap-2 px-2"><i className="h-2 w-2 rounded-full bg-red-400"/><i className="h-2 w-2 rounded-full bg-amber-300"/><i className="h-2 w-2 rounded-full bg-emerald-400"/><span className="ml-3 text-[9px] text-slate-500">preview.dolphinx.studio</span></div>
          <div className="grid min-h-[520px] overflow-hidden rounded-2xl bg-white md:grid-cols-[1.05fr_.95fr]">
            <div className="flex flex-col justify-center p-9 md:p-16"><span className="text-[9px] font-black tracking-[.2em] text-blue-700">VIETNAMESE CRAFT · 2026</span><h2 className="mt-5 font-[family-name:var(--display)] text-5xl font-semibold leading-[.95] tracking-[-.04em] md:text-7xl">Chạm vào<br/>một câu chuyện.</h2><p className="mt-7 max-w-sm text-xs leading-6 text-slate-500">Một concept landing page dành cho thương hiệu F&B cao cấp, kết hợp storytelling và hành trình đặt bàn đơn giản.</p><span className="mt-8 inline-flex w-fit rounded-full bg-slate-950 px-6 py-3 text-[10px] font-bold text-white">Khám phá trải nghiệm</span></div>
            <div className="relative min-h-[420px]"><Image src="/images/project-cafe-unsplash.jpg" alt="Concept website quán cà phê" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/><div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-white/90 p-4 backdrop-blur-xl"><span><b className="block text-xs">Đặt bàn cuối tuần</b><small className="text-[9px] text-slate-500">Còn 4 khung giờ</small></span><ArrowRight size={18}/></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc] px-4 py-24">
        <div className="mx-auto max-w-[1200px]"><div className="grid gap-8 md:grid-cols-[.75fr_1.25fr]"><div><span className="text-[10px] font-black tracking-[.16em] text-blue-700">MỘT WEBSITE HOÀN CHỈNH</span><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Thiết kế, nội dung và công nghệ cùng một hệ thống.</h2></div><p className="self-end text-sm leading-7 text-slate-600">Thay vì lắp ghép một giao diện có sẵn, DolphinX phát triển cấu trúc dựa trên khách hàng, thông điệp và mục tiêu chuyển đổi thực tế của doanh nghiệp.</p></div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">{websiteCapabilities.map(([Icon,title,text])=><article key={title} className="min-h-56 rounded-2xl border border-slate-200 bg-white p-7"><Icon className="text-blue-700" size={23}/><h3 className="mt-8 text-base font-bold">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{text}</p></article>)}</div>
        </div>
      </section>

      <ThemeReferenceLibrary />

      <WebsiteUpgradeBuilder />
      <section className="px-4 pb-10 pt-20 md:pb-14 md:pt-28"><div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#082b78] via-[#075fc2] to-[#13c7e9] text-white md:grid-cols-[1.05fr_.95fr]"><div className="p-9 md:p-16"><span className="text-[10px] font-black tracking-[.16em] text-cyan-200">TỪ Ý TƯỞNG ĐẾN WEBSITE</span><h2 className="dx-heading-gradient-light dx-vietnamese-title mt-5 font-[family-name:var(--display)] text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl md:leading-tight md:tracking-[-.05em]">Ra mắt một website xứng đáng với thương hiệu của bạn.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-blue-100">Bắt đầu bằng một buổi trao đổi để xác định thông điệp, cấu trúc và mục tiêu chuyển đổi.</p><Link className="dx-light-action mt-8 inline-flex items-center gap-2 rounded-xl px-6 text-xs font-bold" href="/#contact">Trao đổi về website <ArrowRight size={17}/></Link></div><div className="relative min-h-[330px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.24),transparent_60%)] p-6 md:min-h-[440px] md:p-10"><div className="relative h-full min-h-[280px] overflow-hidden rounded-[22px] border border-white/25 bg-white shadow-[0_30px_70px_rgba(3,31,91,.28)] md:min-h-[360px]"><Image src="/images/theme-references/agency.jpg" alt="Mẫu website doanh nghiệp để trao đổi định hướng thiết kế" fill sizes="(max-width:768px) 100vw,45vw" className="object-cover object-top"/><span className="absolute bottom-4 left-4 rounded-full bg-[#071c4b]/88 px-4 py-2 text-[8px] font-black tracking-[.12em] text-cyan-200 backdrop-blur">WEBSITE REFERENCE · DOLPHINX</span></div></div></div></section>
      <ServicePricing service="website" />
      <ServiceFooter />
    </main>
  );
}
