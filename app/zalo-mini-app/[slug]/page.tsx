import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Database, Smartphone, Workflow } from "lucide-react";
import { MiniAppPhonePreview } from "../../components/MiniAppPhonePreview";
import { ServiceFooter, ServiceNav } from "../../components/MarketingChrome";
import { StableLink as Link } from "../../components/StableLink";
import { getMiniAppTemplate, miniAppTemplates } from "../templates";

export function generateStaticParams() {
  return miniAppTemplates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/zalo-mini-app/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const template = getMiniAppTemplate(slug);
  if (!template) return {};
  return { title: template.name, description: template.summary };
}

export default async function MiniAppTemplateDetail({ params }: PageProps<"/zalo-mini-app/[slug]">) {
  const { slug } = await params;
  const template = getMiniAppTemplate(slug);
  if (!template) notFound();
  const currentIndex = miniAppTemplates.findIndex((item) => item.slug === slug);
  const nextTemplate = miniAppTemplates[(currentIndex + 1) % miniAppTemplates.length];

  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <ServiceNav />
      <section className="relative overflow-hidden px-4 py-20 md:py-28" style={{ background: `radial-gradient(circle at 78% 25%, ${template.accentSoft}, transparent 32%), #f8fbff` }}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-[1.1fr_.9fr]">
          <div><Link href="/zalo-mini-app#templates" className="inline-flex items-center gap-2 text-xs font-bold" style={{ color: template.accent }}><ArrowLeft size={15}/>Tất cả template Mini App</Link><span className="mt-12 block text-[10px] font-black tracking-[.16em]" style={{ color: template.accent }}>{template.eyebrow}</span><h1 className="dx-heading-gradient mt-5 max-w-3xl font-[family-name:var(--display)] text-[clamp(48px,7vw,82px)] font-semibold leading-[.98] tracking-[-.06em]">{template.headline}</h1><p className="mt-7 max-w-xl text-sm leading-7 text-slate-600">{template.summary} Đây là concept DolphinX để minh hoạ hướng triển khai, không phải sản phẩm khách hàng công khai.</p><div className="mt-9 flex flex-wrap gap-2">{template.modules.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-bold text-slate-600">{item}</span>)}</div><Link href="/#contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl px-6 text-xs font-bold text-white" style={{ background: template.accent }}>Liên hệ ngay <ArrowRight size={17}/></Link></div>
          <div className="relative"><div className="absolute inset-8 rounded-full blur-3xl" style={{ background: template.accentSoft }}/><div className="relative"><MiniAppPhonePreview template={template}/></div></div>
        </div>
      </section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-2"><article className="rounded-[26px] border border-slate-200 bg-white p-9 md:p-12"><small className="text-[9px] font-black tracking-[.16em]" style={{ color: template.accent }}>BÀI TOÁN</small><h2 className="dx-heading-gradient mt-5 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.04em] md:text-5xl">Giảm thao tác, gom đúng thông tin.</h2><p className="mt-6 text-sm leading-7 text-slate-600">{template.challenge}</p></article><article className="rounded-[26px] bg-[#071c4b] p-9 text-white md:p-12"><small className="text-[9px] font-black tracking-[.16em] text-cyan-300">HƯỚNG TIẾP CẬN</small><h2 className="dx-heading-gradient-light mt-5 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.04em] md:text-5xl">Thiết kế theo hành trình thật.</h2><p className="mt-6 text-sm leading-7 text-slate-300">{template.approach}</p></article></div></section>

      <section className="bg-[#f3f8ff] px-4 py-24"><div className="mx-auto max-w-[1200px]"><div className="grid gap-8 md:grid-cols-[.85fr_1.15fr]"><div><span className="text-[10px] font-black tracking-[.16em]" style={{ color: template.accent }}>CÁC MÀN HÌNH CHÍNH</span><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-6xl">Đủ rõ để hình dung sản phẩm trước khi code.</h2></div><p className="self-end text-sm leading-7 text-slate-600">Cấu trúc cuối cùng sẽ được điều chỉnh theo nghiệp vụ, nhận diện, API và chính sách dữ liệu của từng doanh nghiệp.</p></div><div className="mt-14 grid gap-3 md:grid-cols-4">{template.screens.map((screen,index) => <div key={screen} className="min-h-52 rounded-2xl border border-blue-100 bg-white p-7"><span className="grid h-10 w-10 place-items-center rounded-xl text-xs font-black" style={{ background: template.accentSoft, color: template.accent }}>0{index + 1}</span><h3 className="mt-12 text-base font-bold">{screen}</h3><Check className="mt-5" size={17} style={{ color: template.accent }}/></div>)}</div></div></section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#082b78] via-[#075fc2] to-[#13c7e9] text-white md:grid-cols-[1.1fr_.9fr]"><div className="p-9 md:p-16"><span className="text-[10px] font-black tracking-[.16em] text-cyan-200">TỪ TEMPLATE ĐẾN SẢN PHẨM THẬT</span><h2 className="dx-heading-gradient-light mt-5 font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-6xl">UI chỉ là điểm bắt đầu.</h2><p className="mt-6 text-sm leading-7 text-blue-100">DolphinX tiếp tục xử lý luồng nghiệp vụ, dữ liệu, tích hợp và vận hành để Mini App sử dụng được trong thực tế.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{[[Smartphone,"UI/UX"],[Database,"Dữ liệu"],[Workflow,"Tự động hoá"]].map(([Icon,label]) => { const FeatureIcon = Icon as typeof Smartphone; return <span key={String(label)} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 p-4 text-[10px] font-bold"><FeatureIcon size={16}/>{String(label)}</span>; })}</div></div><div className="relative min-h-[360px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.2),transparent_55%)]"/></div></section>

      <section className="border-t border-slate-200 px-4 py-16"><Link href={`/zalo-mini-app/${nextTemplate.slug}`} className="mx-auto flex max-w-[1200px] items-center justify-between gap-8"><span><small className="text-[9px] font-black tracking-[.16em] text-[#075fc2]">TEMPLATE TIẾP THEO</small><b className="mt-3 block font-[family-name:var(--display)] text-3xl tracking-[-.04em] md:text-5xl">{nextTemplate.name}</b></span><ArrowRight size={28}/></Link></section>
      <ServiceFooter />
    </main>
  );
}
