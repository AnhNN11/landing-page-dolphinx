import Image from "next/image";
import { Apple, ArrowRight, BadgeCheck, Layers3, Play, Sparkles } from "lucide-react";
import { DigitalProjectCatalog } from "./DigitalProjectCatalog";
import { ServiceFooter, ServiceNav } from "./MarketingChrome";
import { ServicePricing } from "./ServicePricing";
import { StableLink as Link } from "./StableLink";
import { DXFlowHeroLoader } from "./DXFlowHeroLoader";

export type DigitalProject = {
  id: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  image: string;
  accent: string;
  features: string[];
  imageFit?: "cover" | "contain";
  imageBackground?: string;
  imagePosition?: string;
};

type GalleryProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  projects: DigitalProject[];
  mode: "mobile" | "web";
};

function StoreBadge({ store }: { store: "apple" | "google" }) {
  const Icon = store === "apple" ? Apple : Play;
  return (
    <span className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#071c4b] px-4 text-white shadow-[0_12px_30px_rgba(7,28,75,.16)]">
      <Icon size={21} fill={store === "google" ? "currentColor" : "none"} />
      <span className="text-left">
        <small className="block text-[7px] font-semibold uppercase tracking-[.08em] text-white/60">{store === "apple" ? "Sẵn sàng cho" : "Phát hành trên"}</small>
        <b className="mt-0.5 block text-[11px] leading-none">{store === "apple" ? "App Store" : "Google Play"}</b>
      </span>
    </span>
  );
}

function MobileProductVisual() {
  return (
    <div className="relative mx-auto min-h-[390px] w-full max-w-[560px] overflow-hidden rounded-[30px] border border-blue-100 bg-[#eaf7ff] shadow-[0_36px_90px_rgba(7,45,102,.16)] sm:min-h-[500px]">
      <Image
        src="/images/mini-app-showcase.png"
        alt="Giao diện ứng dụng mobile bán hàng và thành viên trên điện thoại"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-gradient-to-b from-[#071c4b]/75 to-transparent p-5 pb-16 text-white">
        <span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[8px] font-black tracking-[.12em] backdrop-blur">MOBILE PRODUCT · iOS & ANDROID</span>
        <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[8px] font-black text-[#075fc2]"><BadgeCheck size={13}/> STORE READY</span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid gap-2 rounded-2xl border border-white/60 bg-white/88 p-4 shadow-xl backdrop-blur-xl sm:left-7 sm:right-auto sm:max-w-[280px]">
        <small className="text-[8px] font-black tracking-[.12em] text-[#0796bd]">TRẢI NGHIỆM SẢN PHẨM THẬT</small>
        <b className="text-sm text-[#071c4b]">Giao diện, dữ liệu và hành trình người dùng trong một hệ thống.</b>
      </div>
    </div>
  );
}

export function DigitalProductGallery({ eyebrow, title, highlight, description, projects, mode }: GalleryProps) {
  const isMobile = mode === "mobile";

  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <ServiceNav />
      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(19,199,233,.2),transparent_34%),radial-gradient(circle_at_15%_65%,rgba(7,95,194,.08),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[.92fr_1.08fr] md:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[9px] font-black tracking-[.14em] text-[#075fc2]"><Sparkles size={13}/>{eyebrow}</span>
            <h1 className="dx-vietnamese-title mt-7 max-w-[720px] font-[family-name:var(--display)] text-[clamp(48px,7vw,86px)] font-semibold leading-[1.07] tracking-[-.05em] md:leading-[.99] md:tracking-[-.065em]">{title} <span className="dx-gradient-text">{highlight}</span></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600 md:text-base">{description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#075fc2] px-6 text-xs font-bold !text-white shadow-xl shadow-[#075fc2]/20" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><span className="!text-white">Trao đổi dự án</span><ArrowRight size={17} className="text-white"/></Link>
              <Link href="#pricing" className="inline-flex min-h-12 items-center gap-2 px-2 text-xs font-bold text-[#075fc2]">Cách tính chi phí <ArrowRight size={16}/></Link>
            </div>
            {isMobile && <div className="mt-7 flex flex-wrap gap-2" aria-label="Nền tảng phát hành ứng dụng"><StoreBadge store="apple"/><StoreBadge store="google"/></div>}
          </div>
          <div className="relative min-h-[390px] sm:min-h-[500px]">
            <div className="absolute inset-12 rounded-full bg-cyan-200/35 blur-3xl max-md:hidden"/>
            {isMobile ? <MobileProductVisual/> : <DXFlowHeroLoader/>}
          </div>
        </div>
      </section>

      <section className="deferred-section scroll-mt-20 bg-[#f5f8fc] px-4 py-20 md:py-28" id="projects">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr]">
            <div><span className="text-[10px] font-black tracking-[.16em] text-[#075fc2]">PROJECT & CONCEPT GALLERY</span><h2 className="dx-heading-gradient dx-vietnamese-title mt-4 font-[family-name:var(--display)] text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl md:leading-tight md:tracking-[-.05em]">Nhìn thấy sản phẩm trước khi bắt đầu phát triển.</h2></div>
            <p className="self-end text-sm leading-7 text-slate-600">Tìm nhanh theo loại hình công ty, ngành và tính năng. Các concept minh hoạ đều được ghi rõ là demo, không phải hồ sơ khách hàng đã công khai.</p>
          </div>
          <DigitalProjectCatalog projects={projects}/>
        </div>
      </section>

      <section className="deferred-section px-4 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#071c4b] via-[#075fc2] to-[#13c7e9] text-white md:grid-cols-[1.05fr_.95fr]">
          <div className="p-9 md:p-16">
            <span className="text-[10px] font-black tracking-[.16em] text-cyan-200">TỪ CONCEPT ĐẾN SẢN PHẨM</span>
            <h2 className="dx-heading-gradient-light dx-vietnamese-title mt-5 font-[family-name:var(--display)] text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl md:leading-tight md:tracking-[-.05em]">UI đẹp cần một hệ thống vận hành phía sau.</h2>
            <p className="mt-6 text-sm leading-7 text-blue-100">DolphinX tiếp tục xử lý dữ liệu, API, phân quyền và quy trình để sản phẩm sử dụng được trong thực tế.</p>
          </div>
          {isMobile ? (
            <div className="relative min-h-[320px] overflow-hidden bg-[#eaf7ff] md:min-h-[430px]">
              <Image src="/images/business-platform.png" alt="Ứng dụng mobile kết nối với nền tảng quản trị doanh nghiệp" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-center"/>
            </div>
          ) : (
            <div className="grid min-h-[350px] place-items-center"><span className="grid h-32 w-32 place-items-center rounded-[34px] border border-white/20 bg-white/10"><Layers3 size={58} strokeWidth={1}/></span></div>
          )}
        </div>
      </section>

      <ServicePricing service={isMobile ? "mobile" : "web"}/>
      <ServiceFooter/>
    </main>
  );
}
