"use client";

import { ArrowRight, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { websiteProducts } from "../website/products";
import { StableLink as Link } from "./StableLink";
import { WebsiteConceptCover } from "./WebsiteConceptCover";

const categoryMap: Record<string, string> = {
  "F&B · Landing Page Concept": "F&B",
  "Retail · Commerce Concept": "Bán hàng",
  "SaaS · Product Website Concept": "Công nghệ",
  "Giáo dục · Landing Page Concept": "Giáo dục",
  "Wellness · Service Website Concept": "Sức khoẻ",
  "Bất động sản · Project Website Concept": "Bất động sản",
  "Chuyên gia · Corporate Website Concept": "Công ty",
  "Du lịch · Destination Concept": "Du lịch",
  "Sự kiện · Registration Concept": "Sự kiện",
  "Công nghiệp · B2B Website Concept": "Công ty",
  "Mỹ phẩm · Commerce Concept": "Làm đẹp",
  "Nhà hàng · Booking Concept": "F&B",
};

export function SearchableWebsiteCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const categories = ["Tất cả", "Công ty", "Bán hàng", "F&B", "Bất động sản", "Giáo dục", "Công nghệ", "Sức khoẻ", "Làm đẹp", "Du lịch"];
  const filtered = useMemo(() => websiteProducts.filter((product) => {
    const productCategory = categoryMap[product.category] ?? product.category;
    const haystack = `${product.name} ${product.category} ${product.summary}`.toLocaleLowerCase("vi");
    return (category === "Tất cả" || productCategory === category) && haystack.includes(query.trim().toLocaleLowerCase("vi"));
  }), [category, query]);

  return <>
    <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-[#f6f8fb] p-3 lg:flex-row lg:items-center"><label className="flex min-h-12 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4"><Search size={17} className="text-slate-400"/><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-xs outline-none" placeholder="Tìm theo ngành hoặc phong cách..." aria-label="Tìm concept website"/></label><div className="flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`shrink-0 rounded-xl px-4 py-3 text-[9px] font-bold ${category === item ? "bg-[#075fc2] text-white" : "border border-slate-200 bg-white text-slate-600"}`}>{item}</button>)}</div></div>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <Link key={product.slug} href={`/website/${product.slug}`} className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,45,102,.12)]"><article><div className="h-[420px] overflow-hidden"><WebsiteConceptCover product={product}/></div><div className="p-6"><span className="text-[8px] font-bold text-[#075fc2]">{product.category.toUpperCase()}</span><h3 className="mt-4 font-[family-name:var(--display)] text-2xl font-semibold tracking-[-.04em]">{product.name}</h3><p className="mt-3 min-h-12 text-xs leading-6 text-slate-500">{product.summary}</p><span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-[#075fc2]">Xem chi tiết concept <ArrowRight size={15} className="transition group-hover:translate-x-1"/></span></div></article></Link>)}<Link href="/#contact" className="group grid min-h-[540px] place-content-center rounded-[24px] border border-dashed border-blue-300 bg-blue-50/50 p-8 text-center"><Sparkles size={34} className="mx-auto text-[#075fc2]"/><h3 className="mt-5 font-[family-name:var(--display)] text-2xl font-semibold tracking-[-.04em]">Thiết kế riêng cho công ty bạn</h3><p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-slate-500">Tạo mới hoàn toàn từ chiến lược nội dung, nhận diện và mục tiêu chuyển đổi.</p><span className="mt-6 inline-flex items-center justify-center gap-2 text-[10px] font-bold text-[#075fc2]">Yêu cầu concept riêng <ArrowRight size={15}/></span></Link></div>
    {filtered.length === 0 && <div className="mt-8 rounded-2xl bg-slate-50 p-10 text-center text-sm text-slate-500">Chưa có concept trùng từ khoá. DolphinX có thể thiết kế một hướng riêng cho ngành của bạn.</div>}
  </>;
}
