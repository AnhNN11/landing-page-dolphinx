import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock3, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { BlogCover } from "../../components/BlogCover";
import { ServiceFooter, ServiceNav } from "../../components/MarketingChrome";
import { StableLink as Link } from "../../components/StableLink";
import { absoluteUrl, createPageMetadata, serializeJsonLd, SITE_URL } from "../../seo";
import { blogArticles, getBlogArticle } from "../articles";

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    image: article.coverImage,
    imageAlt: article.coverAlt ?? article.title,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.date,
  });
}

export default async function BlogArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  const currentIndex = blogArticles.findIndex((item) => item.slug === slug);
  const nextArticle = blogArticles[(currentIndex + 1) % blogArticles.length];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "vi-VN",
    image: article.coverImage ? absoluteUrl(article.coverImage) : absoluteUrl("/og.png"),
    url: absoluteUrl(`/blog/${article.slug}`),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${article.slug}`),
    },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeJsonLd(jsonLd)}}/>
      <ServiceNav />
      <article>
        <header className="relative overflow-hidden px-4 pb-16 pt-16 md:pb-24 md:pt-24" style={{background:`radial-gradient(circle at 80% 12%,${article.accent}20,transparent 35%),#f8fbff`}}><div className="mx-auto max-w-[1100px]"><Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-[#075fc2]"><ArrowLeft size={15}/>Tất cả bài viết</Link><div className="mt-12 max-w-4xl"><span className="text-[10px] font-black tracking-[.16em]" style={{color:article.accent}}>{article.category.toUpperCase()}</span><h1 className="dx-heading-gradient mt-5 font-[family-name:var(--display)] text-[clamp(46px,7vw,84px)] font-semibold leading-[.98] tracking-[-.065em]">{article.title}</h1><p className="mt-7 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{article.excerpt}</p><div className="mt-7 flex flex-wrap items-center gap-5 text-[9px] font-semibold text-slate-400"><span>DolphinX Editorial</span><span className="flex items-center gap-2"><Clock3 size={13}/>{article.readingTime}</span><span>{article.dateLabel}</span></div></div><div className="mt-14 overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_35px_90px_rgba(7,45,102,.12)]"><BlogCover article={article}/></div>{article.coverCredit&&<div className="mt-4 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-[10px] leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>{article.coverCredit.note}</span><a href={article.coverCredit.href} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 font-bold text-[#075fc2]">{article.coverCredit.label}<ExternalLink size={12}/></a></div>}</div></header>

        <div className="mx-auto grid max-w-[1100px] gap-14 px-4 py-20 md:grid-cols-[240px_minmax(0,1fr)] md:py-28"><aside><div className="sticky top-28 rounded-2xl border border-slate-200 bg-[#f8fbff] p-6"><span className="flex items-center gap-2 text-[9px] font-black tracking-[.12em] text-[#075fc2]"><BookOpen size={15}/> TRONG BÀI NÀY</span><nav className="mt-5 grid gap-3">{article.sections.map((section,index)=><a key={section.heading} href={`#section-${index+1}`} className="flex gap-3 text-[10px] font-semibold leading-5 text-slate-500 hover:text-[#075fc2]"><b className="text-[#13a6c8]">0{index+1}</b>{section.heading}</a>)}</nav></div></aside><div className="min-w-0"><p className="font-[family-name:var(--display)] text-xl font-medium leading-9 tracking-[-.025em] text-slate-700 md:text-2xl">{article.intro}</p>{article.sections.map((section,index)=><section id={`section-${index+1}`} key={section.heading} className="scroll-mt-28 border-t border-slate-200 py-12 first:mt-12"><small className="text-[9px] font-black tracking-[.14em]" style={{color:article.accent}}>0{index+1}</small><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-3xl font-semibold leading-tight tracking-[-.045em] md:text-5xl">{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph} className="mt-6 text-[15px] leading-8 text-slate-600">{paragraph}</p>)}{section.bullets&&<ul className="mt-7 grid gap-3 rounded-2xl bg-[#f4f8fc] p-6">{section.bullets.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><Check size={17} className="mt-1 shrink-0 text-[#13a6c8]"/>{item}</li>)}</ul>}</section>)}<div className="rounded-[24px] bg-[#071c4b] p-8 text-white md:p-10"><span className="text-[9px] font-black tracking-[.14em] text-cyan-300">ĐIỀU CẦN NHỚ</span><p className="mt-5 font-[family-name:var(--display)] text-2xl font-semibold leading-relaxed tracking-[-.035em]">{article.takeaway}</p></div>{article.sources&&<div className="mt-10 border-t border-slate-200 pt-8"><span className="text-[9px] font-black tracking-[.14em] text-slate-400">TÀI LIỆU THAM KHẢO</span><div className="mt-4 flex flex-wrap gap-3">{article.sources.map(source=><a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[9px] font-bold text-[#075fc2]">{source.label}<ExternalLink size={12}/></a>)}</div></div>}</div></div>
      </article>
      <section className="border-y border-slate-200 bg-[#f8fbff] px-4 py-16"><Link href={`/blog/${nextArticle.slug}`} className="mx-auto flex max-w-[1100px] items-center justify-between gap-8"><span><small className="text-[9px] font-black tracking-[.16em] text-[#075fc2]">ĐỌC TIẾP</small><b className="mt-3 block max-w-3xl font-[family-name:var(--display)] text-2xl tracking-[-.04em] md:text-4xl">{nextArticle.title}</b></span><ArrowRight size={28}/></Link></section>
      <ServiceFooter />
    </main>
  );
}
