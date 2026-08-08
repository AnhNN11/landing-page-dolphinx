/* eslint-disable @next/next/no-img-element */

import { ExternalLink, Images, ShieldCheck } from "lucide-react";

type ReferenceItem = {
  title: string;
  image: string;
  href: string;
  meta: string;
};

const monaReferences: ReferenceItem[] = [
  {
    title: "Showcase website · 01",
    image: "https://mona.media/template/assets/images/tkw-never-stop/project-content-01-1920.jpg",
    href: "https://mona.media/mau-website/",
    meta: "Website đa ngành",
  },
  {
    title: "Showcase website · 02",
    image: "https://mona.media/template/assets/images/tkw-never-stop/project-content-02-1920.jpg",
    href: "https://mona.media/mau-website/",
    meta: "Thiết kế responsive",
  },
  {
    title: "Showcase website · 03",
    image: "https://mona.media/template/assets/images/tkw-never-stop/project-content-03-1920.jpg",
    href: "https://mona.media/mau-website/",
    meta: "UI thương hiệu",
  },
  {
    title: "Showcase website · 04",
    image: "https://mona.media/template/assets/images/tkw-never-stop/project-content-04-1920.jpg",
    href: "https://mona.media/mau-website/",
    meta: "Trải nghiệm sản phẩm",
  },
];

const zaloReferences: ReferenceItem[] = [
  {
    title: "Ra mắt mẫu giao diện Zalo Mini App ZaUI Uni",
    image: "https://stc-blogminiapp.zadn.vn/images/2026/04/Untitled-design--3--1.png",
    href: "https://miniapp.zaloplatforms.com/blog/ra-mat-mau-giao-dien-zalo-mini-app-zaui-uni-2",
    meta: "Giáo dục · ZaUI Uni",
  },
  {
    title: "Zalo Mini App — Bản tin tháng 03/2026",
    image: "https://stc-blogminiapp.zadn.vn/images/2026/03/blog_3_26.png",
    href: "https://miniapp.zaloplatforms.com/blog/zalo-mini-app-ban-tin-thang-03-2026",
    meta: "Bản tin sản phẩm",
  },
  {
    title: "Zalo Mini App trong trải nghiệm mua sắm Rhys Man",
    image: "https://stc-blogminiapp.zadn.vn/images/2025/12/COVER--1-.png",
    href: "https://miniapp.zaloplatforms.com/blog/zalo-mini-app-manh-ghep-giup-rhys-man-tai-dinh-nghia-trai-nghiem-mua-sam-cua-phai-manh-viet",
    meta: "Bán lẻ · Case study",
  },
  {
    title: "Quản lý danh mục sản phẩm trên Zalo Mini Shop",
    image: "https://stc-blogminiapp.zadn.vn/images/2025/11/Web_Minishop_Qua--n-ly---danh-mu--c.png",
    href: "https://miniapp.zaloplatforms.com/blog/huong-dan-quan-ly-danh-muc-san-pham-tren-zalo-mini-shop",
    meta: "Mini Shop · Vận hành",
  },
];

export function ReferenceGallery({ source }: { source: "mona" | "zalo" }) {
  const isMona = source === "mona";
  const items = isMona ? monaReferences : zaloReferences;
  const sourceName = isMona ? "MONA Media" : "Zalo Mini App";
  const sourceUrl = isMona
    ? "https://mona.media/mau-website/"
    : "https://miniapp.zaloplatforms.com/blog/";

  return (
    <section className={isMona ? "bg-[#071c4b] px-4 py-24 text-white" : "bg-white px-4 py-24"}>
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_.72fr]">
          <div>
            <span className={`inline-flex items-center gap-2 text-[10px] font-black tracking-[.16em] ${isMona ? "text-cyan-300" : "text-[#075fc2]"}`}>
              <Images size={15} /> THƯ VIỆN THAM KHẢO · {sourceName.toUpperCase()}
            </span>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">
              Hình ảnh thật để bạn nhìn rõ chất lượng trải nghiệm.
            </h2>
          </div>
          <div>
            <p className={`text-sm leading-7 ${isMona ? "text-slate-300" : "text-slate-600"}`}>
              Đây là tư liệu tham khảo từ {sourceName}, không phải dự án do DolphinX thực hiện. Mỗi hình đều dẫn về nội dung gốc để bạn xem đầy đủ.
            </p>
            <a href={sourceUrl} target="_blank" rel="noreferrer" className={`mt-5 inline-flex items-center gap-2 text-xs font-extrabold ${isMona ? "text-cyan-300" : "text-[#075fc2]"}`}>
              Mở thư viện nguồn <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <a key={item.image} href={item.href} target="_blank" rel="noreferrer" className={`group overflow-hidden rounded-[24px] border transition hover:-translate-y-1 ${isMona ? "border-white/10 bg-white/5 hover:border-cyan-300/30" : "border-blue-100 bg-white hover:shadow-[0_28px_70px_rgba(7,45,102,.12)]"}`}>
              <article>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={item.image} alt={`${item.title} — nguồn ${sourceName}`} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/75 px-3 py-2 text-[8px] font-black tracking-[.12em] text-white backdrop-blur-xl">
                    NGUỒN · {sourceName.toUpperCase()}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950 shadow-xl transition group-hover:rotate-6">
                    <ExternalLink size={16} />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-5 p-6">
                  <div>
                    <small className={`text-[9px] font-black tracking-[.12em] ${isMona ? "text-cyan-300" : "text-[#075fc2]"}`}>{item.meta.toUpperCase()}</small>
                    <h3 className="mt-3 font-[family-name:var(--display)] text-xl font-semibold leading-snug tracking-[-.03em]">{item.title}</h3>
                  </div>
                  <ShieldCheck className={isMona ? "mt-1 shrink-0 text-cyan-300" : "mt-1 shrink-0 text-blue-600"} size={20} />
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
