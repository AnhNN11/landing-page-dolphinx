"use client";

import Image from "next/image";
import {
  AppWindow,
  ArrowRight,
  BadgeCheck,
  Braces,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageCircleMore,
  MoveUpRight,
  Smartphone,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import { ServiceFooter, ServiceNav } from "../components/MarketingChrome";
import { StableLink as Link } from "../components/StableLink";
import { useLocale } from "../components/LocaleProvider";

const capabilities = [
  {
    name: "DXWeb",
    href: "/website",
    icon: Globe2,
    index: "01",
    vi: "Website & landing page",
    en: "Websites & landing pages",
    detailVi: "Xây trải nghiệm thương hiệu rõ thông điệp, nhanh, chuẩn SEO và tạo chuyển đổi.",
    detailEn: "Brand experiences with clear messaging, fast performance, solid SEO and conversion paths.",
    tone: "from-[#e9f5ff] to-white",
  },
  {
    name: "DXMobile",
    href: "/mobile-app",
    icon: Smartphone,
    index: "02",
    vi: "Ứng dụng iOS & Android",
    en: "iOS & Android applications",
    detailVi: "Sản phẩm di động có luồng dùng tự nhiên, thiết kế nhất quán và sẵn sàng mở rộng.",
    detailEn: "Mobile products with intuitive flows, consistent design and room to scale.",
    tone: "from-[#eef0ff] to-white",
  },
  {
    name: "DXFlow",
    href: "/web-app",
    icon: Workflow,
    index: "03",
    vi: "Web App & vận hành số",
    en: "Web apps & digital operations",
    detailVi: "Biến quy trình rời rạc thành CRM, cổng quản trị và phần mềm vừa với cách bạn làm việc.",
    detailEn: "Turn fragmented workflows into CRM, management portals and software shaped around your team.",
    tone: "from-[#e9fbf7] to-white",
  },
  {
    name: "DXZalo",
    href: "/zalo-mini-app",
    icon: AppWindow,
    index: "04",
    vi: "Zalo Mini App",
    en: "Zalo Mini Apps",
    detailVi: "Đưa bán hàng, thành viên, voucher và chăm sóc khách hàng vào ngay trong Zalo.",
    detailEn: "Bring sales, membership, vouchers and customer care directly into Zalo.",
    tone: "from-[#e7f3ff] to-white",
  },
  {
    name: "DXAcademy",
    href: "/education",
    icon: GraduationCap,
    index: "05",
    vi: "Đào tạo công nghệ thực hành",
    en: "Practical technology education",
    detailVi: "Lộ trình Fullstack Web, Mobile và lập trình sáng tạo cho trẻ em, học qua dự án thật.",
    detailEn: "Project-based Fullstack Web, Mobile and creative coding pathways for young learners.",
    tone: "from-[#fff7e5] via-white to-[#e9fbf7]",
    wide: true,
  },
];

const values = [
  {
    icon: Compass,
    vi: "Bắt đầu từ bài toán",
    en: "Start with the real problem",
    detailVi: "Không bắt đầu bằng một danh sách tính năng. Chúng tôi làm rõ mục tiêu, người dùng và điểm nghẽn trước.",
    detailEn: "We do not start with a feature list. We clarify the goal, the user and the bottleneck first.",
  },
  {
    icon: Lightbulb,
    vi: "Đơn giản hoá điều phức tạp",
    en: "Make complexity feel simple",
    detailVi: "Mỗi màn hình và quy trình đều phải dễ hiểu với người sẽ sử dụng nó hằng ngày.",
    detailEn: "Every screen and workflow should feel clear to the people using it every day.",
  },
  {
    icon: Braces,
    vi: "Làm thật, đo được",
    en: "Build for real outcomes",
    detailVi: "Thiết kế, code và dữ liệu cùng phục vụ một kết quả kinh doanh có thể quan sát được.",
    detailEn: "Design, code and data work together toward a business outcome you can observe.",
  },
  {
    icon: HeartHandshake,
    vi: "Đồng hành có trách nhiệm",
    en: "Partner with ownership",
    detailVi: "Phạm vi rõ ràng, phản hồi thẳng thắn và chủ động nghĩ cho vòng đời dài hơn của sản phẩm.",
    detailEn: "Clear scope, candid feedback and proactive thinking beyond the first release.",
  },
];

const steps = [
  ["01", "Hiểu", "Understand", "Mục tiêu · Người dùng · Hiện trạng", "Goals · Users · Current state"],
  ["02", "Thiết kế", "Design", "Cấu trúc · Prototype · UI system", "Structure · Prototype · UI system"],
  ["03", "Phát triển", "Build", "Sprint · Kiểm thử · Tích hợp", "Sprints · QA · Integrations"],
  ["04", "Đồng hành", "Grow", "Bàn giao · Đo lường · Mở rộng", "Handover · Measurement · Scale"],
];

export default function AboutPage() {
  const { locale, t } = useLocale();

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071c4b]">
      <ServiceNav />

      <section className="relative bg-[#f8fbff] px-4 pb-14 pt-12 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(19,185,220,.14),transparent_32%),radial-gradient(circle_at_12%_80%,rgba(7,95,194,.08),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(7,95,194,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(7,95,194,.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <span aria-hidden className="pointer-events-none absolute -left-16 top-12 select-none font-[family-name:var(--display)] text-[240px] font-black leading-none tracking-[-.12em] text-[#075fc2]/[.025]">DX</span>
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[9px] font-black tracking-[.16em] text-[#075fc2] shadow-sm">
              <Sparkles size={14} className="text-[#13a6c8]" /> DOLPHINX STUDIO · QUẢNG NGÃI
            </span>
            <h1 className="mt-7 max-w-3xl font-[family-name:var(--display)] text-5xl font-semibold leading-[.95] tracking-[-.07em] md:text-6xl xl:text-[82px]">
              <span className="text-[#0b1220]">{t("Sản phẩm số", "Digital products")}</span><br />
              <span className="dx-gradient-text">{t("mang tư duy Việt.", "with a Vietnamese point of view.")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              {t(
                "DolphinX là product studio đồng hành cùng startup và doanh nghiệp Việt Nam từ lúc làm rõ bài toán đến khi sản phẩm được đưa vào vận hành thật.",
                "DolphinX is a product studio helping Vietnamese startups and businesses move from a clearly defined problem to a product operating in the real world.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#075fc2] px-6 text-xs font-bold !text-white shadow-xl shadow-blue-900/15 transition hover:-translate-y-0.5" href="/#contact" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}>
                <span className="!text-white">{t("Trao đổi cùng chúng tôi", "Talk to our studio")}</span> <ArrowRight size={16} className="text-white" />
              </Link>
              <Link className="inline-flex items-center gap-2 text-xs font-bold text-slate-700" href="#dx-system">
                {t("Khám phá hệ DX", "Explore the DX system")} <MoveUpRight size={15} />
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-blue-100 bg-white/80 shadow-[0_18px_50px_rgba(7,45,102,.07)] backdrop-blur">
              {[["05", t("năng lực DX", "DX capabilities")], ["VN", t("tư duy bản địa", "local insight")], ["01", t("đầu mối xuyên suốt", "accountable partner")]].map(([number, label], index) => <div key={number} className={`p-4 md:p-5 ${index ? "border-l border-blue-100" : ""}`}><b className="dx-gradient-text block font-[family-name:var(--display)] text-2xl tracking-[-.05em]">{number}</b><span className="mt-1 block text-[7px] font-black uppercase tracking-[.08em] text-slate-500 md:text-[8px]">{label}</span></div>)}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[34px] border border-white bg-gradient-to-br from-white to-[#e9f7ff] shadow-[0_42px_100px_rgba(7,45,102,.16)] md:min-h-[620px]">
            <Image
              src="/images/dolphinx-vietnamese-brand-ambassador-uniform-v2.webp"
              alt={t("Nữ chuyên viên sản phẩm DolphinX Studio mặc đồng phục trắng xanh chính thức", "A DolphinX Studio product consultant wearing the official white-and-blue uniform")}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-center"
            />
            <div className="absolute left-5 top-5 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"><span className="block text-[8px] font-black tracking-[.15em] text-[#075fc2]">VIETNAMESE PRODUCT STUDIO</span><b className="mt-1 block text-xs text-[#071c4b]">{t("Con người thật · Bài toán thật", "Real people · Real problems")}</b></div>
            <div className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/80 bg-white/92 p-2 shadow-xl backdrop-blur-xl">
              <Image src="/images/dolphinx-dolphin-mark-192.webp" alt="DolphinX" width={38} height={38} className="h-full w-full object-contain" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 rounded-2xl border border-white/80 bg-white/86 p-3 shadow-xl backdrop-blur-xl md:grid-cols-4">
              {["DXWeb", "DXMobile", "DXFlow", "DXZalo"].map((name, index) => (
                <span key={name} className="rounded-xl bg-[#f4f8fd] px-3 py-3 text-center text-[9px] font-black tracking-[.08em] text-[#075fc2]">
                  0{index + 1} · {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-slate-100">
              <Image src="/images/dolphinx-vietnamese-product-team-uniform-v2.webp" alt={t("Đội ngũ sản phẩm DolphinX mặc đồng phục chính thức cùng thiết kế trải nghiệm số", "The DolphinX product team in official uniforms designing a digital experience")} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#061634]/88 p-6 text-white backdrop-blur-xl md:max-w-md">
                <span className="text-[9px] font-black tracking-[.17em] text-cyan-300">BUILT WITH CONTEXT</span>
                <p className="mt-3 text-sm font-semibold leading-6">{t("Hiểu thị trường địa phương. Thiết kế theo chuẩn sản phẩm hiện đại.", "Local market understanding. Modern product standards.")}</p>
              </div>
            </div>
            <div className="about-grid-surface flex flex-col justify-between overflow-hidden rounded-[32px] border border-blue-100 p-8 shadow-[0_30px_80px_rgba(7,45,102,.08)] md:p-12">
              <div>
                <span className="text-[10px] font-black tracking-[.18em] text-[#075fc2]">{t("VỀ DOLPHINX", "ABOUT DOLPHINX")}</span>
                <h2 className="dx-vietnamese-title mt-6 font-[family-name:var(--display)] text-4xl font-semibold leading-[1.14] tracking-[-.04em] md:text-[58px]">
                  {locale === "vi" ? <>Không chỉ giao diện đẹp. <span className="dx-gradient-text">Chúng tôi xây năng lực số.</span></> : <>Beyond beautiful interfaces. <span className="dx-gradient-text">We build digital capability.</span></>}
                </h2>
                <p className="mt-7 text-sm leading-7 text-slate-600">
                  {t(
                    "DolphinX được hình thành với một niềm tin đơn giản: công nghệ chỉ có giá trị khi đội ngũ có thể sử dụng, khách hàng muốn quay lại và doanh nghiệp nhìn thấy kết quả. Vì vậy, thiết kế, phát triển và vận hành luôn nằm trong cùng một cuộc đối thoại.",
                    "DolphinX was formed around a simple belief: technology matters when teams can use it, customers want to return and the business can see results. That is why design, development and operations stay in the same conversation.",
                  )}
                </p>
                <div className="relative mt-8 grid min-h-[210px] overflow-hidden rounded-2xl border border-blue-100 bg-[radial-gradient(circle_at_78%_35%,rgba(19,191,227,.2),transparent_34%),linear-gradient(135deg,#f1f8ff,#fff)] p-6 sm:grid-cols-[1fr_190px] sm:items-center">
                  <div className="relative z-10 max-w-sm">
                    <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-2 text-[8px] font-black tracking-[.12em] text-[#075fc2] shadow-sm">DOLPHINX PRODUCT STUDIO</span>
                    <h3 className="mt-5 font-[family-name:var(--display)] text-2xl font-semibold leading-[1.18] tracking-[-.035em] text-[#071c4b]">{t("Một thương hiệu. Năm năng lực kết nối.", "One brand. Five connected capabilities.")}</h3>
                    <p className="mt-3 text-xs leading-6 text-slate-500">{t("Website, ứng dụng, vận hành số, Zalo Mini App và đào tạo cùng dùng chung một tiêu chuẩn sản phẩm.", "Web, mobile, operations, Zalo Mini App and education share one product standard.")}</p>
                  </div>
                  <div className="relative mx-auto mt-6 h-36 w-36 sm:mt-0 sm:h-40 sm:w-40">
                    <Image src="/images/dolphinx-dolphin-mark-192.webp" alt="DolphinX Product Studio" fill sizes="160px" className="object-contain drop-shadow-[0_18px_30px_rgba(7,45,102,.14)]" />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
                {[
                  ["05", t("năng lực cốt lõi", "core capabilities")],
                  ["01", t("đầu mối xuyên suốt", "single point of contact")],
                  ["100%", t("thiết kế theo nhu cầu", "tailored to the problem")],
                  ["VN", t("am hiểu doanh nghiệp Việt", "Vietnam-focused")],
                ].map(([number, label]) => (
                  <div key={number} className="bg-white p-5">
                    <b className="dx-gradient-text font-[family-name:var(--display)] text-3xl tracking-[-.05em]">{number}</b>
                    <span className="mt-2 block text-[9px] font-bold uppercase tracking-[.08em] text-slate-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f4f8fd_0%,#fff_100%)] px-4 py-20 md:py-28" id="dx-system">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-7 md:grid-cols-2 md:items-end">
            <div>
              <span className="text-[10px] font-black tracking-[.18em] text-[#075fc2]">DX PRODUCT SYSTEM</span>
              <h2 className="mt-5 font-[family-name:var(--display)] text-5xl font-semibold leading-none tracking-[-.06em] md:text-7xl">
                {locale === "vi" ? <>Một hệ năng lực. <span className="dx-gradient-text">Năm điểm bắt đầu.</span></> : <>One capability system. <span className="dx-gradient-text">Five ways to begin.</span></>}
              </h2>
            </div>
            <p className="max-w-xl justify-self-end text-sm leading-7 text-slate-600">
              {t("Mỗi dịch vụ có thể triển khai độc lập hoặc kết nối thành một hành trình xuyên suốt từ thu hút khách hàng đến vận hành dữ liệu.", "Each capability can work independently or connect into one journey—from customer acquisition to data-powered operations.")}
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} className={`group relative min-h-[400px] overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br ${item.tone} p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_70px_rgba(7,45,102,.12)] md:p-9 ${"wide" in item && item.wide ? "md:col-span-2" : ""}`}>
                  <i className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#071c4b] via-[#075fc2] to-[#13c7e9]" />
                  <span aria-hidden className="pointer-events-none absolute -bottom-6 right-2 font-[family-name:var(--display)] text-[140px] font-black leading-none tracking-[-.1em] text-[#075fc2]/[.035]">{item.index}</span>
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white bg-white text-[#075fc2] shadow-sm"><Icon size={24} /></span>
                    <span className="text-[10px] font-black tracking-[.14em] text-slate-400">{item.index} / 05</span>
                  </div>
                  <h3 className="dx-gradient-text mt-14 w-fit font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-5xl">{item.name}</h3>
                  <p className="mt-3 text-xs font-black uppercase tracking-[.12em] text-[#075fc2]">{locale === "vi" ? item.vi : item.en}</p>
                  <p className="mt-5 max-w-md text-xs leading-6 text-slate-600">{locale === "vi" ? item.detailVi : item.detailEn}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.1em] text-[#071c4b]">{t("Xem năng lực", "Explore capability")} <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061634] px-4 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(80,211,244,.28)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="text-[10px] font-black tracking-[.18em] text-cyan-300">{t("NHIỆM VỤ & VĂN HOÁ", "MISSION & CULTURE")}</span>
              <h2 className="dx-gradient-text-light mt-5 font-[family-name:var(--display)] text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">
                {t("Làm công nghệ có ích, với cách làm tử tế.", "Useful technology, built with care.")}
              </h2>
              <p className="mt-7 max-w-lg text-sm leading-7 text-slate-300">
                {t("Nhiệm vụ của DolphinX là giúp doanh nghiệp Việt tiếp cận sản phẩm số chất lượng mà không phải đánh đổi sự rõ ràng, khả năng làm chủ hay bản sắc riêng.", "Our mission is to help Vietnamese businesses access quality digital products without sacrificing clarity, ownership or their distinct identity.")}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.vi} className="rounded-[24px] border border-white/10 bg-white/[.055] p-7 backdrop-blur-sm">
                    <Icon size={22} className="text-cyan-300" />
                    <h3 className="mt-8 font-[family-name:var(--display)] text-xl font-semibold tracking-[-.035em]">{locale === "vi" ? value.vi : value.en}</h3>
                    <p className="mt-4 text-xs leading-6 text-slate-400">{locale === "vi" ? value.detailVi : value.detailEn}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <span className="text-[10px] font-black tracking-[.18em] text-[#075fc2]">DX DELIVERY</span>
            <h2 className="dx-gradient-text mx-auto mt-5 max-w-3xl font-[family-name:var(--display)] text-5xl font-semibold leading-[1.04] tracking-[-.055em] md:text-7xl">{t("Từ bài toán đến sản phẩm vận hành được.", "From a business challenge to a working product.")}</h2>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-[28px] border border-slate-200 md:grid-cols-4">
            {steps.map(([index, vi, en, detailVi, detailEn], stepIndex) => (
              <article key={index} className={`relative min-h-[260px] bg-white p-7 ${stepIndex > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""}`}>
                <span className="text-[10px] font-black tracking-[.14em] text-[#13a6c8]">STEP {index}</span>
                <h3 className="mt-16 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.045em]">{locale === "vi" ? vi : en}</h3>
                <p className="mt-4 text-[10px] font-bold leading-5 text-slate-500">{locale === "vi" ? detailVi : detailEn}</p>
                <ArrowRight className="absolute right-6 top-6 text-slate-300" size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[34px] border border-blue-100 bg-gradient-to-br from-[#eaf6ff] via-white to-[#edfbfb] md:grid-cols-2">
          <div className="p-8 md:p-14">
            <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[.16em] text-[#075fc2]"><MapPin size={15} /> QUẢNG NGÃI · VIỆT NAM</span>
            <h2 className="mt-6 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl"><span className="text-[#0b1220]">{t("Từ địa phương,", "Built locally,")}</span> <span className="dx-gradient-text">{t("xây sản phẩm cho hành trình lớn.", "ready for bigger journeys.")}</span></h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">{t("Chúng tôi làm việc trực tiếp và từ xa với các đội ngũ trên toàn Việt Nam. Địa chỉ DolphinX Studio: 60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam.", "We collaborate in person and remotely with teams across Vietnam. DolphinX Studio is located at 60 Nguyen Truong To, Dak Cam Ward, Quang Ngai Province, Vietnam.")}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-bold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3"><BadgeCheck size={15} className="text-emerald-500" />{t("Phạm vi minh bạch", "Transparent scope")}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3"><UsersRound size={15} className="text-[#075fc2]" />{t("Đầu mối xuyên suốt", "One accountable partner")}</span>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <Image src="/images/dolphinx-vietnamese-sme-consulting-uniform-v2.webp" alt={t("Tư vấn viên DolphinX mặc đồng phục làm việc cùng chủ doanh nghiệp Việt tại cửa hàng", "A uniformed DolphinX consultant working with a Vietnamese business owner at her shop")} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/65 via-transparent to-transparent" />
            <Link className="dx-light-action absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl p-5 text-xs font-bold" href="/#contact">
              <span className="flex items-center gap-3"><MessageCircleMore size={18} />{t("Bắt đầu một cuộc trao đổi", "Start a conversation")}</span><ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <ServiceFooter />
    </main>
  );
}
