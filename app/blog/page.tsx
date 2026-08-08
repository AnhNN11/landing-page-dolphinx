import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { BlogCover } from "../components/BlogCover";
import { ServiceFooter, ServiceNav } from "../components/MarketingChrome";
import { StableLink as Link } from "../components/StableLink";
import { blogArticles } from "./articles";

export const metadata: Metadata = {
  title: "Blog Website, Zalo Mini App & Chuyển đổi số",
  description: "Kiến thức thực tế về landing page, Zalo Mini App, UX/UI, SEO và tự động hoá dành cho doanh nghiệp Việt từ DolphinX Studio.",
  openGraph: {
    title: "DolphinX Insights — Sản phẩm số cho doanh nghiệp",
    description: "Góc nhìn thực tế về website, Zalo Mini App và tối ưu doanh nghiệp trên nền tảng số.",
  },
};

export default function BlogPage() {
  const [featured, ...articles] = blogArticles;
  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <ServiceNav />
      <section className="relative overflow-hidden px-4 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(19,199,233,.18),transparent_34%),radial-gradient(circle_at_18%_62%,rgba(7,95,194,.08),transparent_38%)]"/>
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid items-end gap-10 md:grid-cols-[1.15fr_.85fr]"><div><span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[9px] font-black tracking-[.14em] text-[#075fc2]"><Sparkles size={13}/> DOLPHINX INSIGHTS</span><h1 className="mt-7 max-w-4xl font-[family-name:var(--display)] text-[clamp(52px,8vw,100px)] font-semibold leading-[.96] tracking-[-.07em]">Kiến thức để sản phẩm số <span className="text-[#075fc2]">tạo ra kết quả.</span></h1></div><div className="pb-2"><p className="text-sm leading-7 text-slate-600">Góc nhìn thực tế về website, Zalo Mini App, UX/UI và tự động hoá — viết cho những đội ngũ muốn đầu tư đúng thứ trước khi đầu tư nhiều.</p><div className="mt-6 flex flex-wrap gap-2">{["Zalo Mini App","Landing Page","SEO","Automation"].map(item=><span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-bold text-slate-600">{item}</span>)}</div></div></div>

          <Link href={`/blog/${featured.slug}`} className="group mt-16 grid overflow-hidden rounded-[30px] border border-blue-100 bg-[#f7fbff] shadow-[0_30px_80px_rgba(7,45,102,.08)] md:grid-cols-[1.08fr_.92fr]"><div className="overflow-hidden"><BlogCover article={featured}/></div><article className="flex flex-col justify-center p-8 md:p-12"><span className="text-[9px] font-black tracking-[.14em]" style={{color:featured.accent}}>BÀI NỔI BẬT · {featured.category.toUpperCase()}</span><h2 className="mt-5 font-[family-name:var(--display)] text-3xl font-semibold leading-tight tracking-[-.05em] md:text-5xl">{featured.title}</h2><p className="mt-6 text-sm leading-7 text-slate-600">{featured.excerpt}</p><div className="mt-9 flex items-center justify-between"><span className="text-[9px] font-semibold text-slate-400">{featured.dateLabel} · {featured.readingTime}</span><span className="grid h-11 w-11 place-items-center rounded-full bg-[#075fc2] text-white transition group-hover:translate-x-1"><ArrowRight size={18}/></span></div></article></Link>
        </div>
      </section>

      <section className="bg-[#f5f8fc] px-4 py-24">
        <div className="mx-auto max-w-[1200px]"><div className="flex flex-wrap items-end justify-between gap-7"><div><span className="text-[10px] font-black tracking-[.16em] text-[#075fc2]">BÀI VIẾT MỚI</span><h2 className="mt-4 font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-6xl">Từ chiến lược đến cách làm.</h2></div><p className="max-w-md text-xs leading-6 text-slate-500">Nội dung được viết theo góc nhìn triển khai, không biến mọi bài toán thành một danh sách công cụ.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{articles.map(article=><Link key={article.slug} href={`/blog/${article.slug}`} className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,45,102,.1)]"><article><div className="h-[310px] overflow-hidden"><BlogCover article={article} compact/></div><div className="p-6"><span className="text-[8px] font-black tracking-[.13em]" style={{color:article.accent}}>{article.category.toUpperCase()}</span><h3 className="mt-4 min-h-[58px] font-[family-name:var(--display)] text-xl font-semibold leading-tight tracking-[-.04em]">{article.title}</h3><p className="mt-4 min-h-[68px] text-[11px] leading-6 text-slate-500">{article.excerpt}</p><div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-[8px] text-slate-400">{article.readingTime}</span><ArrowRight size={16} className="text-[#075fc2] transition group-hover:translate-x-1"/></div></div></article></Link>)}</div></div>
      </section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#071c4b] via-[#075fc2] to-[#13c7e9] text-white md:grid-cols-[1.15fr_.85fr]"><div className="p-9 md:p-16"><span className="text-[10px] font-black tracking-[.16em] text-cyan-200">TỪ KIẾN THỨC ĐẾN HỆ THỐNG</span><h2 className="mt-5 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Đừng số hoá một quy trình chưa được làm rõ.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-blue-100">DolphinX giúp doanh nghiệp xác định điểm cần ưu tiên, thiết kế trải nghiệm và phát triển hệ thống có thể vận hành thật.</p><Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-xs font-bold text-[#075fc2]">Trao đổi bài toán <ArrowRight size={17}/></Link></div><div className="grid min-h-[360px] place-items-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,.2),transparent_55%)]"><div className="grid gap-3">{["Website tạo chuyển đổi","Mini App giữ chân khách hàng","Dữ liệu giúp vận hành rõ hơn"].map(item=><span key={item} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-xs font-bold backdrop-blur-xl"><CheckCircle2 size={17} className="text-cyan-200"/>{item}</span>)}</div></div></div></section>
      <ServiceFooter />
    </main>
  );
}
