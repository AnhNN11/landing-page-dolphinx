"use client";

import Image from "next/image";
import { Command, ExternalLink, Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type WebsiteReference = {
  title: string;
  category: string;
  image: string;
  href: string;
  keywords: string;
};

const references: WebsiteReference[] = [
  { title: "Agency Marketing", category: "Công ty", image: "/images/theme-references/agency.jpg", href: "https://agency4.maugiaodien.com", keywords: "agency quảng cáo truyền thông dịch vụ doanh nghiệp" },
  { title: "Kiến trúc & Xây dựng", category: "Xây dựng", image: "/images/theme-references/architecture.jpg", href: "https://kientruc7.maugiaodien.com", keywords: "kiến trúc xây dựng dự án nhà ở" },
  { title: "Nội thất hiện đại", category: "Nội thất", image: "/images/theme-references/interior.jpg", href: "https://noithat44.maugiaodien.com", keywords: "nội thất showroom bán hàng ecommerce" },
  { title: "Bệnh viện & Phòng khám", category: "Sức khoẻ", image: "/images/theme-references/healthcare.jpg", href: "https://benhvien.maugiaodien.com", keywords: "y tế bệnh viện phòng khám đặt lịch" },
  { title: "Trung tâm Anh ngữ", category: "Giáo dục", image: "/images/theme-references/education.jpg", href: "https://hoctienganh4.maugiaodien.com", keywords: "trường học tiếng anh đào tạo khoá học" },
  { title: "Máy tính & Công nghệ", category: "Bán hàng", image: "/images/theme-references/technology.jpg", href: "https://maytinh10.maugiaodien.com", keywords: "máy tính laptop công nghệ cửa hàng ecommerce" },
  { title: "Sàn bất động sản", category: "Bất động sản", image: "/images/theme-references/real-estate.jpg", href: "https://bds49.maugiaodien.com", keywords: "bất động sản căn hộ đất nền dự án" },
  { title: "Mỹ phẩm & Làm đẹp", category: "Làm đẹp", image: "/images/theme-references/beauty.jpg", href: "https://mypham24.maugiaodien.com", keywords: "spa mỹ phẩm làm đẹp bán hàng" },
  { title: "Thực phẩm sạch", category: "Thực phẩm", image: "/images/theme-references/food.jpg", href: "https://thucpham30.maugiaodien.com", keywords: "thực phẩm organic cửa hàng nông sản" },
  { title: "Du lịch & Vận tải", category: "Du lịch", image: "/images/theme-references/travel.jpg", href: "https://taxi6.maugiaodien.com", keywords: "du lịch taxi vận tải đặt xe" },
  { title: "Ô tô VinFast", category: "Xe hơi", image: "/images/theme-references/automotive.jpg", href: "https://vinfast.maugiaodien.com", keywords: "ô tô xe hơi showroom đại lý" },
  { title: "Nhà thuốc trực tuyến", category: "Sức khoẻ", image: "/images/theme-references/pharmacy.jpg", href: "https://nhathuoc7.maugiaodien.com", keywords: "nhà thuốc dược phẩm sức khoẻ bán hàng" },
  { title: "Sân vườn & Hồ cá Koi", category: "Cảnh quan", image: "/images/theme-references/koi-garden-v2.webp", href: "https://hocacoi2.maugiaodien.com", keywords: "sân vườn hồ cá koi cảnh quan thi công" },
  { title: "Trung tâm kiểm định", category: "Công ty", image: "/images/theme-references/inspection-center-v2.jpg", href: "https://kiemdinh.maugiaodien.com", keywords: "kiểm định chứng nhận b2b doanh nghiệp" },
  { title: "Cửa hàng gạo", category: "Thực phẩm", image: "/images/theme-references/rice-store-v2.jpg", href: "https://bangao.maugiaodien.com", keywords: "gạo nông sản thực phẩm cửa hàng" },
  { title: "Quán bún đậu", category: "F&B", image: "/images/theme-references/food-bistro-v2.jpg", href: "https://bundau2.maugiaodien.com", keywords: "nhà hàng quán ăn menu đặt món f&b" },
  { title: "Trường dạy nghề", category: "Giáo dục", image: "/images/theme-references/vocational-school-v2.jpg", href: "https://truongnghe2.maugiaodien.com", keywords: "trường nghề tuyển sinh đào tạo giáo dục" },
  { title: "Cổng tin tức chuyên ngành", category: "Tin tức", image: "/images/theme-references/news-portal-v2.jpg", href: "https://tintuc26.maugiaodien.com", keywords: "tin tức tạp chí báo chí nội dung" },
  { title: "Máy công trình", category: "Công nghiệp", image: "/images/theme-references/construction-machinery-v2.jpg", href: "https://maycongtrinh.maugiaodien.com", keywords: "máy móc công nghiệp thiết bị xây dựng b2b" },
];

const quickSearches = ["website công ty", "bán hàng", "nhà hàng", "giáo dục", "sức khoẻ", "bất động sản"];

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("vi");
}

export function ThemeReferenceLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => ["Tất cả", ...Array.from(new Set(references.map((item) => item.category)))], []);
  const categoryCounts = useMemo(() => Object.fromEntries(categories.map((item) => [item, item === "Tất cả" ? references.length : references.filter((reference) => reference.category === item).length])), [categories]);
  const filtered = useMemo(() => references.filter((item) => {
    const matchesCategory = category === "Tất cả" || item.category === category;
    const haystack = normalizeText(`${item.title} ${item.category} ${item.keywords}`);
    return matchesCategory && haystack.includes(normalizeText(query.trim()));
  }), [category, query]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <section className="bg-[#071c4b] px-4 py-24 text-white" id="products">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_.75fr]">
          <div>
            <span className="text-[10px] font-black tracking-[.16em] text-cyan-300">{references.length} WEBSITE THẬT · NHIỀU NGÀNH</span>
            <h2 className="dx-heading-gradient-light mt-4 max-w-3xl font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Tìm một website gần với ngành của bạn.</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-slate-300">Ảnh được chụp trực tiếp từ các website mẫu công khai và lưu local để tải nhanh. Đây là thư viện tham khảo từ ThemeWP, không phải dự án do DolphinX thực hiện.</p>
            <a href="https://themewp.vn/kho-theme/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-300">Mở kho nguồn ThemeWP <ExternalLink size={15}/></a>
          </div>
        </div>

        <div className="mt-12 rounded-[24px] border border-white/15 bg-white p-3 text-[#071c4b] shadow-[0_24px_70px_rgba(1,12,39,.28)] md:p-4">
          <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_220px_auto]">
            <label className="flex min-h-14 items-center gap-3 rounded-2xl bg-slate-50 px-4 ring-1 ring-inset ring-slate-200 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500">
              <Search size={19} className="shrink-0 text-[#075fc2]"/>
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:font-normal placeholder:text-slate-400" placeholder="Tìm ngành, loại website hoặc tính năng..." aria-label="Tìm website có sẵn"/>
              {query && <button type="button" onClick={() => setQuery("")} className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-slate-500 shadow-sm" aria-label="Xoá từ khoá"><X size={15}/></button>}
              <span className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[8px] font-bold text-slate-400 sm:flex"><Command size={11}/> K</span>
            </label>

            <label className="relative flex min-h-14 items-center gap-3 rounded-2xl bg-slate-50 px-4 ring-1 ring-inset ring-slate-200">
              <SlidersHorizontal size={17} className="shrink-0 text-[#075fc2]"/>
              <span className="grid min-w-0 flex-1"><small className="text-[7px] font-black tracking-[.12em] text-slate-400">NGÀNH</small><select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full appearance-none bg-transparent py-1 text-[11px] font-bold text-[#071c4b] outline-none" aria-label="Lọc website theo ngành">{categories.map((item) => <option key={item} value={item}>{item} · {categoryCounts[item]}</option>)}</select></span>
            </label>

            {(query || category !== "Tất cả") && <button type="button" onClick={() => { setQuery(""); setCategory("Tất cả"); }} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-5 text-[10px] font-bold text-[#075fc2]"><X size={14}/> Đặt lại</button>}
          </div>

          <div className="mt-3 flex flex-col gap-3 px-1 pb-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="shrink-0 text-[10px] text-slate-500"><b className="text-[#075fc2]">{filtered.length}</b> website phù hợp</p>
            <div className="flex gap-2 overflow-x-auto pb-1">{quickSearches.map((item) => <button type="button" key={item} onClick={() => { setCategory("Tất cả"); setQuery(item); }} className={`shrink-0 rounded-full border px-3 py-2 text-[8px] font-bold transition ${normalizeText(query) === normalizeText(item) ? "border-[#075fc2] bg-[#075fc2] text-white" : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-[#075fc2]"}`}>{item}</button>)}</div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => <a key={item.image} href={item.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10"><article><div className="relative aspect-[16/10] overflow-hidden bg-white"><Image src={item.image} alt={`Mẫu website ${item.title} — nguồn ThemeWP`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"/><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071c4b]/88 px-3 py-2 text-[8px] font-black tracking-[.1em] text-cyan-200 backdrop-blur">WEBSITE THẬT · THEMEWP</span><span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#075fc2] shadow-xl"><ExternalLink size={16}/></span></div><div className="flex items-start justify-between gap-5 p-5"><div><small className="text-[8px] font-black tracking-[.12em] text-cyan-300">{item.category.toUpperCase()}</small><h3 className="mt-2 font-[family-name:var(--display)] text-xl font-semibold tracking-[-.03em]">{item.title}</h3></div><span className="mt-1 whitespace-nowrap text-[8px] font-bold text-slate-400">XEM LIVE</span></div></article></a>)}
        </div>
        {filtered.length === 0 && <div className="mt-10 rounded-[24px] border border-white/10 bg-white/5 p-10 text-center"><Search size={28} className="mx-auto text-cyan-300"/><h3 className="mt-4 text-lg font-bold">Chưa có website khớp từ khoá này</h3><p className="mt-2 text-xs text-slate-300">Thử tìm “công ty”, “bán hàng”, “giáo dục” hoặc xoá bộ lọc ngành.</p><button type="button" onClick={() => { setQuery(""); setCategory("Tất cả"); }} className="mt-5 rounded-xl bg-cyan-300 px-5 py-3 text-[10px] font-bold text-[#071c4b]">Xem toàn bộ website</button></div>}
      </div>
    </section>
  );
}
