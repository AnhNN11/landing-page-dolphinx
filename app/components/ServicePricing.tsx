"use client";

import { ArrowRight, Check, Minus } from "lucide-react";
import { useLocale } from "./LocaleProvider";
import { StableLink as Link } from "./StableLink";

type ServiceKey = "website" | "mobile" | "web" | "zalo";
type CellValue = boolean | { vi: string; en: string };

type PricingPlan = {
  name: string;
  audienceVi: string;
  audienceEn: string;
  priceVi: string;
  priceEn: string;
  featured?: boolean;
};

type PricingRow = {
  labelVi: string;
  labelEn: string;
  values: CellValue[];
};

type PricingConfig = {
  product: string;
  titleVi: string;
  titleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  costDriversVi: string[];
  costDriversEn: string[];
  plans: PricingPlan[];
  rows: PricingRow[];
};

const configs: Record<ServiceKey, PricingConfig> = {
  website: {
    product: "DXWEB · COST SCOPE",
    titleVi: "Chọn quy mô website phù hợp với giai đoạn hiện tại.",
    titleEn: "Choose the right website scope for your current stage.",
    descriptionVi: "Không áp một mức giá cố định cho mọi doanh nghiệp. DolphinX cùng bạn chọn đúng phạm vi, sau đó minh bạch từng nhóm chi phí cần thiết.",
    descriptionEn: "There is no one-size-fits-all price. DolphinX defines the right scope with you and explains each required cost group clearly.",
    costDriversVi: ["Số trang & section", "Nội dung & hình ảnh", "Bán hàng & tích hợp", "Mức độ thiết kế riêng"],
    costDriversEn: ["Pages & sections", "Content & imagery", "Commerce & integrations", "Custom art direction"],
    plans: [
      { name: "Cơ bản", audienceVi: "Khởi nghiệp", audienceEn: "Startup", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
      { name: "Tăng trưởng", audienceVi: "Chạy quảng cáo", audienceEn: "Campaigns", priceVi: "Cùng thảo luận", priceEn: "Discuss scope", featured: true },
      { name: "Cao cấp", audienceVi: "Doanh nghiệp", audienceEn: "Business", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
    ],
    rows: [
      { labelVi: "Số section", labelEn: "Sections", values: [{ vi: "Tối đa 7", en: "Up to 7" }, { vi: "Tối đa 10", en: "Up to 10" }, { vi: "Từ 15", en: "15+" }] },
      { labelVi: "Thiết kế responsive", labelEn: "Responsive design", values: [true, true, true] },
      { labelVi: "SEO nền tảng", labelEn: "SEO foundations", values: [true, true, true] },
      { labelVi: "Form & đo lường", labelEn: "Forms & analytics", values: [true, true, true] },
      { labelVi: "Tích hợp bán hàng", labelEn: "Commerce integration", values: [false, true, true] },
      { labelVi: "Thiết kế riêng", labelEn: "Custom art direction", values: [false, false, true] },
      { labelVi: "Thời gian dự kiến", labelEn: "Estimated timeline", values: [{ vi: "5–7 ngày", en: "5–7 days" }, { vi: "7–12 ngày", en: "7–12 days" }, { vi: "Theo phạm vi", en: "By scope" }] },
    ],
  },
  mobile: {
    product: "DXMOBILE · COST SCOPE",
    titleVi: "Từ prototype đến ứng dụng sẵn sàng đưa lên store.",
    titleEn: "From prototype to a store-ready mobile application.",
    descriptionVi: "Chi phí được xác định sau khi làm rõ nền tảng, nghiệp vụ, dữ liệu và tiêu chuẩn phát hành. Tài khoản Apple và Google được liệt kê riêng.",
    descriptionEn: "Cost is scoped after clarifying platforms, workflows, data and release requirements. Apple and Google account fees are listed separately.",
    costDriversVi: ["UI/UX & số màn hình", "iOS, Android hoặc cả hai", "Backend, API & dữ liệu", "Kiểm thử & đưa lên store"],
    costDriversEn: ["UI/UX & screen count", "iOS, Android or both", "Backend, APIs & data", "Testing & store submission"],
    plans: [
      { name: "Prototype", audienceVi: "Kiểm chứng ý tưởng", audienceEn: "Validate an idea", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
      { name: "MVP", audienceVi: "Ra mắt thị trường", audienceEn: "Market launch", priceVi: "Cùng thảo luận", priceEn: "Discuss scope", featured: true },
      { name: "Scale", audienceVi: "Sản phẩm dài hạn", audienceEn: "Long-term product", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
    ],
    rows: [
      { labelVi: "UI/UX sản phẩm", labelEn: "Product UI/UX", values: [true, true, true] },
      { labelVi: "Nền tảng", labelEn: "Platforms", values: [{ vi: "Prototype", en: "Prototype" }, { vi: "iOS & Android", en: "iOS & Android" }, { vi: "Đa nền tảng", en: "Multi-platform" }] },
      { labelVi: "Backend & API", labelEn: "Backend & APIs", values: [false, true, true] },
      { labelVi: "Đăng nhập & phân quyền", labelEn: "Auth & permissions", values: [false, true, true] },
      { labelVi: "Đưa lên store", labelEn: "Store submission", values: [false, true, true] },
      { labelVi: "Analytics & crash report", labelEn: "Analytics & crash reports", values: [false, true, true] },
      { labelVi: "Phát triển theo sprint", labelEn: "Sprint delivery", values: [false, false, true] },
    ],
  },
  web: {
    product: "DXFLOW · COST SCOPE",
    titleVi: "Đầu tư theo độ sâu của quy trình cần số hoá.",
    titleEn: "Invest according to the depth of the workflow being digitized.",
    descriptionVi: "CRM, dashboard và phần mềm quản lý được cùng thảo luận sau khi làm rõ người dùng, dữ liệu, quy trình và hệ thống cần kết nối.",
    descriptionEn: "CRM, dashboards and management software are discussed after clarifying users, data, workflows and connected systems.",
    costDriversVi: ["Số vai trò người dùng", "Độ sâu quy trình", "Báo cáo & tự động hoá", "API, bảo mật & hạ tầng"],
    costDriversEn: ["User roles", "Workflow depth", "Reports & automation", "APIs, security & infrastructure"],
    plans: [
      { name: "Starter", audienceVi: "Một quy trình", audienceEn: "One workflow", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
      { name: "Business", audienceVi: "Nhiều phòng ban", audienceEn: "Multiple teams", priceVi: "Cùng thảo luận", priceEn: "Discuss scope", featured: true },
      { name: "Platform", audienceVi: "Nền tảng riêng", audienceEn: "Custom platform", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
    ],
    rows: [
      { labelVi: "Khảo sát nghiệp vụ", labelEn: "Business discovery", values: [true, true, true] },
      { labelVi: "Vai trò người dùng", labelEn: "User roles", values: [{ vi: "Tối đa 3", en: "Up to 3" }, { vi: "Tối đa 8", en: "Up to 8" }, { vi: "Theo tổ chức", en: "Organization-wide" }] },
      { labelVi: "Dashboard & báo cáo", labelEn: "Dashboards & reports", values: [true, true, true] },
      { labelVi: "API & tích hợp", labelEn: "APIs & integrations", values: [false, true, true] },
      { labelVi: "Nhật ký & phân quyền", labelEn: "Audit log & permissions", values: [false, true, true] },
      { labelVi: "Tự động hoá", labelEn: "Automation", values: [false, true, true] },
      { labelVi: "SLA & mở rộng", labelEn: "SLA & scaling", values: [false, false, true] },
    ],
  },
  zalo: {
    product: "DXZALO · COST SCOPE",
    titleVi: "Bắt đầu Mini App vừa đủ, mở rộng theo hành trình khách hàng.",
    titleEn: "Start with a focused Mini App and expand with the customer journey.",
    descriptionVi: "Phạm vi Mini App được thảo luận theo hành trình khách hàng và hệ thống cần kết nối. Phí Zalo, hạ tầng và bên thứ ba được tách riêng.",
    descriptionEn: "Mini App scope is discussed around the customer journey and connected systems. Zalo, infrastructure and third-party fees are separated.",
    costDriversVi: ["Số module & màn hình", "OA, thành viên & loyalty", "Đặt hàng hoặc đặt lịch", "API, hạ tầng & phí Zalo"],
    costDriversEn: ["Modules & screens", "OA, membership & loyalty", "Ordering or booking", "APIs, infrastructure & Zalo fees"],
    plans: [
      { name: "Khởi động", audienceVi: "OA mới", audienceEn: "New OA", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
      { name: "Tăng trưởng", audienceVi: "Bán hàng & loyalty", audienceEn: "Sales & loyalty", priceVi: "Cùng thảo luận", priceEn: "Discuss scope", featured: true },
      { name: "Hệ thống", audienceVi: "Đa chi nhánh", audienceEn: "Multi-branch", priceVi: "Cùng thảo luận", priceEn: "Discuss scope" },
    ],
    rows: [
      { labelVi: "Thiết kế theo thương hiệu", labelEn: "Branded design", values: [true, true, true] },
      { labelVi: "Tài khoản thành viên", labelEn: "Member profiles", values: [true, true, true] },
      { labelVi: "Tích điểm & voucher", labelEn: "Points & vouchers", values: [false, true, true] },
      { labelVi: "Đặt hàng / đặt lịch", labelEn: "Order / booking", values: [false, true, true] },
      { labelVi: "Kết nối Zalo OA", labelEn: "Zalo OA connection", values: [true, true, true] },
      { labelVi: "API hệ thống ngoài", labelEn: "External system APIs", values: [false, false, true] },
      { labelVi: "Nhiều chi nhánh", labelEn: "Multiple branches", values: [false, false, true] },
    ],
  },
};

function Cell({ value, locale }: { value: CellValue; locale: "vi" | "en" }) {
  if (value === true) return <Check size={19} className="mx-auto text-emerald-600" strokeWidth={3} aria-label={locale === "vi" ? "Có" : "Included"} />;
  if (value === false) return <Minus size={18} className="mx-auto text-slate-300" aria-label={locale === "vi" ? "Không bao gồm" : "Not included"} />;
  return <span>{locale === "vi" ? value.vi : value.en}</span>;
}

export function ServicePricing({ service }: { service: ServiceKey }) {
  const { locale, t } = useLocale();
  const config = configs[service];

  return (
    <section className="scroll-mt-20 bg-[#f4f7fb] px-4 py-16 md:py-20" id="pricing">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-[10px] font-black tracking-[.18em] text-[#075fc2]">{config.product}</span>
            <h2 className="dx-heading-gradient dx-vietnamese-title mt-5 max-w-3xl font-[family-name:var(--display)] text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl md:leading-tight md:tracking-[-.05em]">{locale === "vi" ? config.titleVi : config.titleEn}</h2>
          </div>
          <p className="max-w-xl justify-self-end text-sm leading-7 text-slate-600">{locale === "vi" ? config.descriptionVi : config.descriptionEn}</p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-[0_20px_60px_rgba(7,45,102,.06)] sm:grid-cols-2 lg:grid-cols-[.85fr_repeat(4,1fr)]">
          <div className="flex min-h-28 flex-col justify-center bg-[#071c4b] p-6 text-white">
            <small className="text-[8px] font-black tracking-[.16em] text-cyan-300">{t("CÁCH TÍNH CHI PHÍ", "COST DRIVERS")}</small>
            <b className="mt-3 text-sm leading-5">{t("Chỉ tính những phần dự án thực sự cần.", "Only include what the project actually needs.")}</b>
          </div>
          {(locale === "vi" ? config.costDriversVi : config.costDriversEn).map((item, index) => (
            <div key={item} className="flex min-h-28 min-w-0 items-center gap-4 border-b border-blue-100 p-6 last:border-b-0 sm:border-r lg:border-b-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[10px] font-black text-[#075fc2]">0{index + 1}</span>
              <b className="min-w-0 whitespace-normal break-words text-xs leading-5 text-slate-700">{item}</b>
            </div>
          ))}
        </div>

        <div className="mt-12 hidden overflow-hidden rounded-[26px] border border-blue-100 bg-white shadow-[0_28px_80px_rgba(7,45,102,.08)] md:block">
          <div className="grid" style={{ gridTemplateColumns: `minmax(220px,1.1fr) repeat(${config.plans.length},minmax(0,1fr))` }}>
            <div className="border-b border-r border-blue-100 p-6 text-[10px] font-black tracking-[.14em] text-slate-400">{t("TÍNH NĂNG", "FEATURES")}</div>
            {config.plans.map((plan) => (
              <div key={plan.name} className={`border-b border-r border-blue-100 p-6 last:border-r-0 ${plan.featured ? "bg-blue-50/70" : ""}`}>
                <span className="text-[9px] font-black uppercase tracking-[.12em] text-[#075fc2]">{plan.name}</span>
                <p className="mt-3 text-xs font-semibold text-slate-500">{locale === "vi" ? plan.audienceVi : plan.audienceEn}</p>
                <b className="mt-4 block font-[family-name:var(--display)] text-xl tracking-[-.04em] text-[#071c4b]">{locale === "vi" ? plan.priceVi : plan.priceEn}</b>
              </div>
            ))}
            {config.rows.map((row, rowIndex) => (
              <div className="contents" key={row.labelVi}>
                <div className={`border-b border-r border-blue-100 p-5 text-xs font-semibold text-slate-700 ${rowIndex % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"}`}>{locale === "vi" ? row.labelVi : row.labelEn}</div>
                {row.values.map((value, index) => (
                  <div key={`${row.labelVi}-${index}`} className={`grid min-h-16 place-items-center border-b border-r border-blue-100 p-4 text-center text-xs font-semibold text-slate-600 last:border-r-0 ${config.plans[index].featured ? "bg-blue-50/55" : rowIndex % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"}`}>
                    <Cell value={value} locale={locale} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {config.plans.map((plan, planIndex) => (
            <article key={plan.name} className={`rounded-[24px] border p-6 ${plan.featured ? "border-blue-300 bg-blue-50" : "border-slate-200 bg-white"}`}>
              <div className="flex items-start justify-between gap-4"><div><span className="text-[9px] font-black uppercase tracking-[.13em] text-[#075fc2]">{plan.name}</span><p className="mt-2 text-xs text-slate-500">{locale === "vi" ? plan.audienceVi : plan.audienceEn}</p></div>{plan.featured && <span className="rounded-full bg-[#075fc2] px-3 py-2 text-[8px] font-black !text-white">{t("PHỔ BIẾN", "POPULAR")}</span>}</div>
              <b className="mt-6 block font-[family-name:var(--display)] text-3xl tracking-[-.05em] text-[#071c4b]">{locale === "vi" ? plan.priceVi : plan.priceEn}</b>
              <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5">{config.rows.map((row) => <div className="flex items-center justify-between gap-4 text-[11px]" key={row.labelVi}><span className="text-slate-500">{locale === "vi" ? row.labelVi : row.labelEn}</span><b className="text-right text-slate-700"><Cell value={row.values[planIndex]} locale={locale} /></b></div>)}</div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-100 bg-white p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-[11px] leading-6 text-slate-500">{t("Sau buổi trao đổi, DolphinX gửi bảng phạm vi gồm từng hạng mục, tiến độ, chi phí dự kiến và điều kiện bàn giao. Bạn có thể chọn triển khai theo giai đoạn phù hợp với ngân sách.", "After discovery, DolphinX provides an itemized scope, timeline, expected cost and handover terms. Delivery can be phased to match your budget.")}</p>
          <Link href="/#contact" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-[#075fc2] px-5 text-[11px] font-bold !text-white" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><span className="!text-white">{t("Thảo luận chi phí", "Discuss cost")}</span><ArrowRight size={15} className="text-white" /></Link>
        </div>
      </div>
    </section>
  );
}
