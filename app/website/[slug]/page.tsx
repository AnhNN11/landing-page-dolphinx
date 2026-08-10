import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Layers3, MousePointer2, Sparkles } from "lucide-react";
import { ServiceFooter, ServiceNav } from "../../components/MarketingChrome";
import { StableLink as Link } from "../../components/StableLink";
import { WebsiteConceptCover } from "../../components/WebsiteConceptCover";
import { getWebsiteProduct, websiteProducts } from "../products";

export function generateStaticParams() {
  return websiteProducts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/website/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getWebsiteProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    openGraph: { title: `${product.name} | DolphinX Studio`, description: product.summary },
  };
}

export default async function WebsiteProductDetail({ params }: PageProps<"/website/[slug]">) {
  const { slug } = await params;
  const product = getWebsiteProduct(slug);
  if (!product) notFound();
  const currentIndex = websiteProducts.findIndex((item) => item.slug === slug);
  const nextProduct = websiteProducts[(currentIndex + 1) % websiteProducts.length];

  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <ServiceNav />
      <section className="relative overflow-hidden px-4 pb-16 pt-16 md:pb-24 md:pt-24" style={{ background: `radial-gradient(circle at 80% 12%, ${product.tone}, transparent 36%), #f8fbff` }}>
        <div className="mx-auto max-w-[1200px]">
          <Link href="/website#products" className="inline-flex items-center gap-2 text-xs font-bold text-[#075fc2]"><ArrowLeft size={15}/>Tất cả sản phẩm website</Link>
          <div className="mt-12 grid items-end gap-10 md:grid-cols-[1.15fr_.85fr]">
            <div><span className="text-[10px] font-black tracking-[.16em] text-[#075fc2]">{product.category.toUpperCase()}</span><h1 className="dx-heading-gradient mt-5 max-w-4xl font-[family-name:var(--display)] text-[clamp(48px,7vw,88px)] font-semibold leading-[.98] tracking-[-.06em]">{product.headline}</h1></div>
            <div className="pb-2"><p className="text-sm leading-7 text-slate-600">{product.description}</p><div className="mt-7 flex flex-wrap gap-2">{product.services.map((item) => <span key={item} className="rounded-full border border-blue-100 bg-white px-3 py-2 text-[9px] font-bold text-[#075fc2]">{item}</span>)}</div></div>
          </div>
          <div className="relative mt-14 min-h-[440px] overflow-hidden rounded-[30px] border-[10px] border-white bg-slate-100 shadow-[0_40px_100px_rgba(7,45,102,.18)] md:min-h-[680px]"><WebsiteConceptCover product={product} detail/></div>
        </div>
      </section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-2"><article><span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-[#075fc2]"><MousePointer2 size={22}/></span><small className="mt-7 block text-[9px] font-black tracking-[.16em] text-[#075fc2]">BÀI TOÁN</small><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.04em] md:text-5xl">Điểm cần giải quyết trước khi bắt đầu thiết kế.</h2><p className="mt-6 text-sm leading-7 text-slate-600">{product.challenge}</p></article><article className="rounded-[28px] bg-[#071c4b] p-9 text-white md:p-12"><span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300 text-[#071c4b]"><Sparkles size={22}/></span><small className="mt-7 block text-[9px] font-black tracking-[.16em] text-cyan-300">HƯỚNG TIẾP CẬN</small><h2 className="dx-heading-gradient-light mt-4 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.04em] md:text-5xl">Thiết kế từ hành vi, không bắt đầu từ template.</h2><p className="mt-6 text-sm leading-7 text-slate-300">{product.approach}</p></article></div></section>

      <section className="bg-[#f3f8ff] px-4 py-24"><div className="mx-auto max-w-[1200px]"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><div><span className="text-[10px] font-black tracking-[.16em] text-[#075fc2]">PHẠM VI THIẾT KẾ</span><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-6xl">Những gì được xây dựng trong concept.</h2></div><p className="self-end text-sm leading-7 text-slate-600">Mỗi thành phần đều phục vụ một điểm trong hành trình khách hàng và được thiết kế nhất quán trên desktop lẫn mobile.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-3">{product.deliverables.map((item, index) => <div key={item} className="min-h-44 rounded-2xl border border-blue-100 bg-white p-7"><span className="text-[9px] font-black text-cyan-500">0{index + 1}</span><h3 className="mt-8 text-base font-bold text-[#071c4b]">{item}</h3><Check size={18} className="mt-4 text-[#075fc2]"/></div>)}</div></div></section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#082b78] via-[#075fc2] to-[#13c7e9] text-white md:grid-cols-[1.15fr_.85fr]"><div className="p-9 md:p-16"><span className="text-[10px] font-black tracking-[.16em] text-cyan-200">TRẢI NGHIỆM CHÍNH</span><h2 className="dx-heading-gradient-light mt-5 font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-6xl">Một hệ thống giao diện có thể tiếp tục mở rộng.</h2><div className="mt-9 grid gap-3 sm:grid-cols-2">{product.experience.map((item) => <span key={item} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-xs font-semibold"><Check size={16} className="text-cyan-200"/>{item}</span>)}</div><Link href="/#contact" className="dx-light-action mt-9 inline-flex items-center gap-2 rounded-xl px-6 py-4 text-xs font-bold">Liên hệ ngay <ArrowRight size={17}/></Link></div><div className="relative min-h-[380px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.22),transparent_55%)]"><Layers3 size={110} strokeWidth={.8} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80"/></div></div></section>

      <section className="border-t border-slate-200 px-4 py-16"><Link href={`/website/${nextProduct.slug}`} className="mx-auto flex max-w-[1200px] items-center justify-between gap-8"><span><small className="text-[9px] font-black tracking-[.16em] text-[#075fc2]">SẢN PHẨM TIẾP THEO</small><b className="mt-3 block font-[family-name:var(--display)] text-3xl tracking-[-.04em] md:text-5xl">{nextProduct.name}</b></span><ArrowRight size={28}/></Link></section>
      <ServiceFooter />
    </main>
  );
}
