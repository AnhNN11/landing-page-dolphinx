"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  Database,
  Globe2,
  GraduationCap,
  Headphones,
  Layers3,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  UtensilsCrossed,
  Workflow,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { StableLink as Link } from "./components/StableLink";
import { HomeWorkflowLoader } from "./components/HomeWorkflowLoader";
import { ServiceFooter, ServiceNav } from "./components/MarketingChrome";
import { useLocale } from "./components/LocaleProvider";
import { StudioPulse } from "./components/StudioPulse";
import { ConsultationForm } from "./components/ConsultationForm";

const services = [
  {
    id: "website",
    mascot: "/images/dolphinx-mascot-website-v2.webp",
    number: "01",
    eyebrow: "DXWeb · Website & Landing Page",
    title: "Một website không chỉ đẹp, mà phải tạo ra khách hàng.",
    titleEn: "A website should do more than look good—it should create customers.",
    description:
      "DolphinX thiết kế website giới thiệu, website bán hàng và landing page có cấu trúc chuyển đổi rõ ràng, tải nhanh và sẵn sàng cho SEO.",
    descriptionEn: "DolphinX designs company websites, e-commerce experiences and landing pages with clear conversion paths, fast loading and solid SEO foundations.",
    points: ["Thiết kế theo nhận diện riêng", "Tối ưu SEO và tốc độ", "Form, tracking và tích hợp CRM"],
    pointsEn: ["Custom brand-led design", "SEO and performance optimization", "Forms, tracking and CRM integration"],
    accent: "blue",
  },
  {
    id: "mobile",
    mascot: "/images/dolphinx-mascot-mobile-v2.webp",
    number: "02",
    eyebrow: "DXMobile · Ứng dụng iOS & Android",
    eyebrowEn: "DXMobile · iOS & Android Apps",
    title: "Một ứng dụng đủ hữu ích để khách hàng muốn mở mỗi ngày.",
    titleEn: "A mobile app useful enough for customers to open every day.",
    description:
      "Thiết kế và phát triển ứng dụng mobile cho bán lẻ, dịch vụ, giáo dục và đội ngũ vận hành với trải nghiệm rõ ràng trên iOS lẫn Android.",
    descriptionEn: "Design and develop mobile apps for retail, services, education and operations with a clear experience across iOS and Android.",
    points: ["UX mobile theo hành trình thật", "Thông báo và dữ liệu đồng bộ", "Phát hành iOS & Android"],
    pointsEn: ["Mobile UX for real journeys", "Notifications and synchronized data", "iOS & Android release support"],
    accent: "violet",
  },
  {
    id: "miniapp",
    mascot: "/images/dolphinx-mascot-zalo-v2.webp",
    number: "03",
    eyebrow: "DXZalo · Zalo Mini App",
    title: "Bán hàng và chăm sóc khách ngay trong Zalo.",
    titleEn: "Sell and care for customers directly inside Zalo.",
    description:
      "Tạo trải nghiệm thành viên liền mạch: tích điểm, voucher, đặt hàng, tra cứu và chăm sóc khách hàng mà không cần cài thêm ứng dụng.",
    descriptionEn: "Create a seamless member journey with loyalty points, vouchers, ordering, lookup and customer care—without another app install.",
    points: ["Kết nối Zalo OA", "Tích điểm và voucher", "Đồng bộ dữ liệu khách hàng"],
    pointsEn: ["Zalo OA integration", "Loyalty points and vouchers", "Customer data synchronization"],
    accent: "green",
  },
];

const industries = [
  { icon: Rocket, title: "Startup & MVP", titleEn: "Startup & MVP", text: "Ra mắt sản phẩm sớm, kiểm chứng nhanh và mở rộng theo dữ liệu.", textEn: "Launch early, validate quickly and scale with real data." },
  { icon: Layers3, title: "SaaS & Software", titleEn: "SaaS & Software", text: "Thiết kế sản phẩm, portal và hệ thống vận hành dài hạn.", textEn: "Product design, portals and scalable operating systems." },
  { icon: ShoppingBag, title: "Bán lẻ", titleEn: "Retail", text: "Website, Mini App thành viên và quản lý khách hàng đa kênh.", textEn: "Websites, membership Mini Apps and omnichannel customer management." },
  { icon: UtensilsCrossed, title: "F&B", titleEn: "Food & Beverage", text: "Đặt món, tích điểm, voucher và quản lý khách hàng quay lại.", textEn: "Ordering, loyalty points, vouchers and returning-customer management." },
  { icon: GraduationCap, title: "Đào tạo", titleEn: "Education", text: "Trang tuyển sinh, quản lý học viên và tự động hoá tư vấn.", textEn: "Admissions, learner management and automated consultation." },
  { icon: Building2, title: "Doanh nghiệp SME", titleEn: "SME", text: "Số hoá quy trình và dữ liệu theo đúng nguồn lực hiện tại.", textEn: "Digitize workflows and data around your current resources." },
];

const packages = [
  {
    name: "Khảo sát số",
    nameEn: "Digital Discovery",
    label: "DX AUDIT",
    description: "Dành cho doanh nghiệp cần nhìn rõ hiện trạng và ưu tiên đúng bước đầu tiên.",
    descriptionEn: "For businesses that need a clear view of the current state and the right first priority.",
    features: ["Workshop cùng đội ngũ", "Bản đồ quy trình hiện tại", "Xác định điểm nghẽn", "Lộ trình & ngân sách ưu tiên"],
    featuresEn: ["Team workshops", "Current workflow mapping", "Bottleneck identification", "Prioritized roadmap & budget"],
  },
  {
    name: "Đồng hành chuyển đổi số",
    nameEn: "Digital Transformation Partner",
    label: "DX PARTNER",
    description: "Một đội sản phẩm đồng hành theo quý để kết nối trải nghiệm, dữ liệu và vận hành.",
    descriptionEn: "A quarterly product partnership connecting experience, data and operations.",
    features: ["Product team linh hoạt", "Ưu tiên theo từng quý", "Thiết kế & phát triển theo sprint", "Đo lường và cải tiến liên tục"],
    featuresEn: ["Flexible product team", "Quarterly priorities", "Sprint-based design & delivery", "Continuous measurement & improvement"],
    featured: true,
  },
  {
    name: "Kiến tạo nền tảng",
    nameEn: "Platform Transformation",
    label: "DX PLATFORM",
    description: "Dành cho doanh nghiệp cần một nền tảng lõi và lộ trình triển khai dài hạn.",
    descriptionEn: "For businesses that need a core platform and a long-term transformation roadmap.",
    features: ["Kiến trúc nền tảng", "Tích hợp hệ thống hiện có", "Quản trị dữ liệu & phân quyền", "SLA, bảo trì và mở rộng"],
    featuresEn: ["Platform architecture", "Legacy system integration", "Data governance & permissions", "SLA, maintenance & scaling"],
  },
];

const faqs = [
  ["DolphinX Studio phù hợp với doanh nghiệp nào?", "Startup, software company, SaaS, SME và hộ kinh doanh cần một đội kỹ thuật linh hoạt. Chúng tôi có thể bắt đầu từ một phiên bản nhỏ và mở rộng theo nhu cầu thực tế."],
  ["Tôi chưa biết nên làm website, Mini App hay phần mềm?", "Bạn chỉ cần chia sẻ mục tiêu và cách đang vận hành. DolphinX sẽ phân tích điểm nghẽn, xác định thứ tự ưu tiên và đề xuất lộ trình phù hợp trước khi viết code."],
  ["Có thể kết nối với hệ thống đang dùng không?", "Có. Khả năng tích hợp được đánh giá dựa trên API, cấu trúc dữ liệu và quyền truy cập của hệ thống hiện tại. Rủi ro và chi phí sẽ được làm rõ ngay trong đề xuất kỹ thuật."],
  ["Sau bàn giao có được hướng dẫn và hỗ trợ không?", "Có. Dự án bao gồm hướng dẫn vận hành, tài liệu cần thiết và giai đoạn hỗ trợ sau bàn giao theo phạm vi đã thống nhất."],
  ["Thời gian triển khai là bao lâu?", "Tuỳ quy mô và mức độ tích hợp. Sau buổi trao đổi đầu tiên, chúng tôi sẽ gửi lộ trình với các mốc thiết kế, phát triển, kiểm thử và bàn giao rõ ràng."],
];

const faqsEn = [
  ["Who is DolphinX Studio for?", "Startups, software companies, SaaS teams, SMEs and business owners that need a flexible technical partner. We can start with a focused first release and expand with real demand."],
  ["What if I do not know whether I need a website, Mini App or custom software?", "Share your goals and current workflow. DolphinX will identify bottlenecks, prioritize the right starting point and propose a roadmap before any code is written."],
  ["Can you integrate with our current systems?", "Yes. We assess integrations based on APIs, data structure and available access. Risks and costs are clarified in the technical proposal."],
  ["Do you provide training and post-launch support?", "Yes. Projects include operational guidance, essential documentation and a support period based on the agreed scope."],
  ["How long does implementation take?", "It depends on scope and integration complexity. After the first conversation, we provide a roadmap with clear design, development, testing and handover milestones."],
];

function ContactButton({ light = false, label = "Tư vấn dự án", labelEn = "Discuss a project" }: { light?: boolean; label?: string; labelEn?: string }) {
  const { t } = useLocale();
  return (
    <Link className={light ? "contact-button light" : "contact-button"} href="/#contact">
      {t(label, labelEn)}<ArrowRight size={17} />
    </Link>
  );
}

function ProductSuite() {
  const { t } = useLocale();
  return (
    <div className="hero-graphic-stage" aria-label="Cá voi công nghệ và trợ lý AI đại diện hệ sinh thái sản phẩm số DolphinX">
      <div className="hero-graphic-grid" aria-hidden="true" />
      <div className="hero-graphic-ring ring-one" aria-hidden="true" />
      <div className="hero-graphic-ring ring-two" aria-hidden="true" />

      <div className="hero-mascot-scene hero-float-main">
        <Image
          src="/images/dolphinx-chibi-whale-ai-v5-transparent.webp"
          alt="Cá voi xanh chibi và trợ lý AI đội nón lá của DolphinX"
          fill
          preload
          sizes="(max-width: 850px) 92vw, 620px"
        />
      </div>

      <div className="hero-product-card hero-card-web hero-float-a">
        <span><Globe2 size={17}/></span><div><small>WEB EXPERIENCE</small><b>{t("SEO & chuyển đổi", "SEO & conversion")}</b></div><i className="hero-status-dot" />
      </div>
      <div className="hero-product-card hero-card-mini hero-float-b">
        <span><Image src="/images/zalo-wordmark.png" alt="Zalo" width={320} height={115} className="h-auto w-7"/></span><div><small>ZALO MINI APP</small><b>{t("Bán hàng & thành viên", "Sales & membership")}</b></div><i className="hero-status-dot" />
      </div>
      <div className="hero-product-card hero-card-flow hero-float-c">
        <span><Workflow size={17}/></span><div><small>AI WORKFLOW</small><b>{t("Tự động hoá vận hành", "Operations automation")}</b></div><Check size={14}/>
      </div>

      <div className="hero-system-strip hero-strip-enter">
        <div className="hero-system-status">
          <span className="hero-live"><i/><em>{t("ĐANG HOẠT ĐỘNG", "SYSTEM LIVE")}</em></span>
          <span className="hero-system-copy"><b>DolphinX Product System</b><small>{t("Các năng lực kết nối trong một hệ sinh thái", "Connected capabilities in one ecosystem")}</small></span>
        </div>
        <nav className="hero-system-links" aria-label={t("Khám phá hệ sinh thái DolphinX", "Explore the DolphinX ecosystem")}>
          <Link href="/website"><span><small>01</small><b>DXWeb</b></span><ArrowRight size={12}/></Link>
          <Link href="/zalo-mini-app"><span><small>02</small><b>DXZalo</b></span><ArrowRight size={12}/></Link>
          <Link href="/web-app"><span><small>03</small><b>DXFlow</b></span><ArrowRight size={12}/></Link>
        </nav>
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  if (type === "mobile") {
    return (
      <div className="service-demo service-photo-demo">
        <Image src="/images/dolphinx-vietnamese-product-team-uniform-1200.webp" alt="Đội ngũ sản phẩm người Việt của DolphinX trao đổi về trải nghiệm ứng dụng" fill sizes="(max-width: 850px) 100vw, 58vw" className="service-photo"/>
        <div className="service-photo-shade"/>
        <div className="service-photo-copy"><small>DXMOBILE · PRODUCT TEAM</small><b>Thiết kế ứng dụng bắt đầu từ người dùng thật.</b><span>UX research · Prototype · iOS & Android</span></div>
        <div className="service-photo-chip chip-top"><i/><span>Đội ngũ Việt Nam</span><b>Product-led</b></div>
        <div className="service-photo-chip chip-bottom"><Zap size={15}/><span>Trải nghiệm rõ ràng</span><b>Mobile first</b></div>
      </div>
    );
  }
  if (type === "miniapp") {
    return (
      <div className="service-demo service-photo-demo service-photo-zalo">
        <Image src="/images/zalo-vietnamese-students-original.webp" alt="Người Việt trải nghiệm các tiện ích Zalo Mini App" fill sizes="(max-width: 850px) 100vw, 58vw" quality={88} className="service-photo"/>
        <div className="service-photo-shade"/>
        <div className="service-photo-copy"><small>DXZALO · REAL EXPERIENCE</small><b>Dịch vụ nằm ngay trong chiếc điện thoại quen thuộc.</b><span>Membership · Tra cứu · Chăm sóc khách hàng</span></div>
        <div className="service-photo-chip chip-top"><i/><span>Không cần cài app</span><b>Mở trong Zalo</b></div>
        <div className="service-photo-chip chip-bottom"><Sparkles size={15}/><span>Hành trình liền mạch</span><b>OA → Mini App</b></div>
      </div>
    );
  }
  return (
    <div className="service-demo demo-website">
      <div className="browser-demo"><div className="demo-bar"><i/><i/><i/><span>thương-hiệu-của-bạn.vn</span></div><div className="demo-page"><div className="demo-nav"><b>MONO</b><span>Giới thiệu　 Dịch vụ　 Liên hệ</span></div><div className="demo-hero"><small>THƯƠNG HIỆU VIỆT</small><h4>Đẹp trong từng<br/>trải nghiệm.</h4><button type="button" tabIndex={-1} aria-hidden="true">Khám phá ngay</button></div></div></div>
      <div className="edit-toolbar"><span>12 cột</span><span>Ảnh</span><span>Chữ</span><span>Màu</span></div>
      <div className="speed-badge"><Zap size={16}/><div><b>98/100</b><small>PageSpeed</small></div></div>
    </div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const { locale, t } = useLocale();
  const localizedFaqs = locale === "vi" ? faqs : faqsEn;

  return (
    <main className="site-shell" id="top">
      <ServiceNav />

      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="hero-chip"><Sparkles size={14}/> {t("Product studio dành cho doanh nghiệp Việt", "Product studio for ambitious businesses")}</span>
            <h1>{t("Nền tảng số toàn diện cho", "Connected digital products for")} <span className="dx-gradient-text">{t("doanh nghiệp tăng trưởng.", "business growth.")}</span></h1>
            <p>{t("Website, Zalo Mini App và phần mềm được thiết kế thành một hệ thống liền mạch—giúp bạn có thêm khách hàng, vận hành gọn và phát triển bền vững.", "Websites, Zalo Mini Apps and custom software designed as one connected system—helping you win customers, simplify operations and grow sustainably.")}</p>
            <div className="hero-actions"><ContactButton label="Bắt đầu dự án" labelEn="Start a project"/><Link href="/studio">{t("Tự thiết kế website", "Build your website")} <ArrowRight size={16}/></Link></div>
            <div className="hero-trust"><div><BadgeCheck size={18}/><span><b>{t("Tư vấn rõ ràng", "Clear consultation")}</b><small>{t("Chọn đúng thứ cần làm", "Build the right thing first")}</small></span></div><div><ShieldCheck size={18}/><span><b>{t("Làm chủ dữ liệu", "Own your data")}</b><small>{t("Bàn giao minh bạch", "Transparent handover")}</small></span></div></div>
          </div>
          <ProductSuite />
        </div>
        <div className="container proof-row"><p><b>{t("Đặc biệt phù hợp với", "Built for")}</b> {t("những đội ngũ muốn tăng trưởng bằng sản phẩm số", "teams growing through digital products")}</p><div>{["STARTUP & MVP","SOFTWARE COMPANY","SAAS PRODUCT","SME & RETAIL"].map(x=><span key={x}>{x}</span>)}</div></div>
      </section>

      <StudioPulse />

      <section className="platform-section section" id="about">
        <div className="container" id="solutions">
          <div className="section-heading centered"><span>{t("HỆ SINH THÁI DOLPHINX", "THE DOLPHINX ECOSYSTEM")}</span><h2>{t("Một đối tác cho toàn bộ hành trình số hoá", "One partner for your complete digital journey")}</h2><p>{t("Từ điểm chạm đầu tiên của khách hàng đến hệ thống vận hành phía sau—mọi thứ được thiết kế để làm việc cùng nhau.", "From the first customer touchpoint to the operating system behind it—everything is designed to work together.")}</p></div>
          <div className="platform-tabs"><div><Globe2/><b>{t("Tiếp thị & Bán hàng", "Marketing & Sales")}</b><span>{t("Website tạo chuyển đổi", "Conversion-focused websites")}</span></div><div><Users/><b>{t("Quản lý khách hàng", "Customer Management")}</b><span>{t("Mini App và dữ liệu", "Mini Apps and data")}</span></div><div><Workflow/><b>{t("Vận hành tinh gọn", "Streamlined Operations")}</b><span>{t("Phần mềm và tự động hoá", "Software and automation")}</span></div></div>
          <div className="platform-flow"><span>{t("Thu hút", "Attract")}</span><i/><span>{t("Chuyển đổi", "Convert")}</span><i/><span>{t("Chăm sóc", "Retain")}</span><i/><span>{t("Vận hành", "Operate")}</span></div>
        </div>
      </section>

      <section className="solutions-section section">
        <div className="container">
          <div className="section-heading"><span>{t("GIẢI PHÁP TOÀN DIỆN", "CONNECTED SOLUTIONS")}</span><h2>{t("Xây đúng sản phẩm cho từng giai đoạn tăng trưởng", "Build the right product for every stage of growth")}</h2></div>
          <div className="solution-list">
            {services.map((service, index) => {
              return (
                <article className={`solution-row ${index % 2 ? "reverse" : ""}`} key={service.id}>
                  <div className="solution-copy"><div className="solution-number">{service.number}</div><div className={`solution-icon mascot-icon ${service.accent}`}><Image src={service.mascot} alt="" width={1256} height={1256}/></div><span>{locale === "vi" ? service.eyebrow : service.eyebrowEn ?? service.eyebrow}</span><h3>{locale === "vi" ? service.title : service.titleEn}</h3><p>{locale === "vi" ? service.description : service.descriptionEn}</p><ul>{(locale === "vi" ? service.points : service.pointsEn).map(point=><li key={point}><Check size={16}/>{point}</li>)}</ul><Link href={service.id === "website" ? "/website" : service.id === "mobile" ? "/mobile-app" : service.id === "miniapp" ? "/zalo-mini-app" : "/web-app"}>{t("Xem trang dịch vụ", "Explore service")} <ArrowRight size={16}/></Link></div>
                  <ServiceVisual type={service.id}/>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="container">
          <div className="section-heading work-heading"><div><span>SẢN PHẨM MẪU DOLPHINX</span><h2>Trải nghiệm sản phẩm trước khi bắt đầu dự án</h2></div><p>Các concept dưới đây được DolphinX dựng để minh hoạ chất lượng thiết kế và khả năng triển khai. Đây không phải tên khách hàng thật.</p></div>
          <div className="project-grid">
            <article className="project-card project-wide">
              <div className="project-scene">
                <Image src="/images/project-cafe-unsplash.jpg" alt="Không gian quán cà phê tại Việt Nam" fill sizes="(max-width: 900px) 100vw, 64vw"/>
                <div className="project-browser"><div><i/><i/><i/><span>thebluebean.vn</span></div><main><small>ROASTED IN VIETNAM</small><h3>Mỗi tách cà phê,<br/>một câu chuyện.</h3><button type="button" tabIndex={-1} aria-hidden="true">Khám phá menu</button></main></div>
              </div>
              <div className="project-meta"><div><span>LANDING PAGE CONCEPT</span><h3>Blue Bean Coffee</h3><p>Landing page thương hiệu F&B với menu trực quan, đặt bàn nhanh và storytelling sản phẩm.</p></div><a href="#solutions">Xem năng lực <ArrowRight size={17}/></a></div>
            </article>
            <article className="project-card">
              <div className="project-scene project-photo-scene retail-scene">
                <Image className="project-product-photo project-zalo-photo" src="/images/zalo-real-hands-phones.webp" alt="Người dùng trải nghiệm Zalo Mini App trên điện thoại thật" fill sizes="(max-width: 900px) 100vw, 36vw"/>
                <span className="project-photo-label">REAL MINI APP EXPERIENCE</span>
              </div>
              <div className="project-meta"><div><span>ZALO MINI APP</span><h3>Mini App trong điện thoại thật</h3><p>Tra cứu, tiện ích và hành trình dịch vụ được mở trực tiếp trong Zalo.</p></div><Link href="/zalo-mini-app" aria-label="Xem các sản phẩm Zalo Mini App"><ArrowRight size={19}/></Link></div>
            </article>
            <article className="project-card project-dark">
              <div className="project-scene project-photo-scene software-scene">
                <Image className="project-product-photo project-dashboard-photo" src="/images/business-platform.png" alt="Dashboard quản trị doanh nghiệp trên laptop và ứng dụng trên điện thoại" fill sizes="(max-width: 900px) 100vw, 36vw"/>
                <span className="project-photo-label project-photo-label-dark">RESPONSIVE BUSINESS PLATFORM</span>
              </div>
              <div className="project-meta"><div><span>BUSINESS SOFTWARE</span><h3>Dashboard vận hành đa thiết bị</h3><p>Dữ liệu, CRM và hoạt động kinh doanh được theo dõi liền mạch trên web và mobile.</p></div><Link href="/web-app" aria-label="Xem các sản phẩm Web App"><ArrowRight size={19}/></Link></div>
            </article>
          </div>
          <div className="work-note"><BadgeCheck size={17}/><span>Mỗi dự án thật sẽ được thiết kế lại theo thương hiệu, người dùng và quy trình riêng của doanh nghiệp.</span></div>
        </div>
      </section>

      <section className="industries-section section" id="industries">
        <div className="container">
          <div className="section-heading centered"><span>{t("ĐÁP ỨNG NHIỀU LĨNH VỰC", "BUILT FOR MANY INDUSTRIES")}</span><h2>{t("Một nền tảng linh hoạt cho bài toán riêng của bạn", "A flexible platform for your unique business challenge")}</h2></div>
          <div className="industry-layout">
            <div className="industry-photo"><Image src="/images/dolphinx-vietnamese-product-team-uniform-v2.webp" alt="Đội ngũ sản phẩm DolphinX mặc đồng phục trắng xanh cùng thiết kế trải nghiệm số" fill sizes="(max-width: 900px) 100vw, 45vw"/><div><span>DOLPHINX PRODUCT TEAM</span><h3>{t("Từ ý tưởng đến sản phẩm có thể sử dụng thật.", "From idea to a product people can actually use.")}</h3></div></div>
            <div className="industry-grid">{industries.map(({icon:Icon,title,titleEn,text,textEn})=><article className="industry-card" key={title}><Icon size={22}/><h3>{locale === "vi" ? title : titleEn}</h3><p>{locale === "vi" ? text : textEn}</p><ArrowRight size={17}/></article>)}</div>
          </div>
        </div>
      </section>

      <section className="why-section section">
        <div className="container">
          <div className="section-heading centered"><span>{t("VÌ SAO CHỌN DOLPHINX?", "WHY DOLPHINX?")}</span><h2>{t("Công nghệ phải tạo ra kết quả kinh doanh", "Technology should create business outcomes")}</h2><p>{t("Chúng tôi đo một dự án bằng khả năng giải quyết bài toán thật, không phải số lượng tính năng.", "We measure a project by the real problem it solves—not by the number of features shipped.")}</p></div>
          <div className="metric-row"><div><b>03</b><span>{t("Năng lực cốt lõi", "Core capabilities")}</span></div><div><b>01</b><span>{t("Đầu mối xuyên suốt", "Single point of contact")}</span></div><div><b>100%</b><span>{t("Thiết kế theo nhu cầu", "Tailored design")}</span></div><div><b>24/7</b><span>{t("Hệ thống sẵn sàng", "System availability")}</span></div></div>
          <div className="why-grid">{[
            [ShieldCheck,"Bảo mật và ổn định","Kiến trúc rõ ràng, phân quyền phù hợp và chủ động phương án sao lưu."],
            [Rocket,"Triển khai theo giai đoạn","Ưu tiên phần tạo giá trị trước để bạn sớm có sản phẩm đưa vào sử dụng."],
            [Database,"Dữ liệu liền mạch","Kết nối website, Mini App và phần mềm thành một nguồn dữ liệu thống nhất."],
            [Headphones,"Đồng hành dài hạn","Hướng dẫn vận hành, hỗ trợ sau bàn giao và sẵn sàng mở rộng hệ thống."],
          ].map(([Icon,title,text])=><article className="why-card" key={String(title)}>{typeof Icon !== "string" && <Icon size={23}/>}<h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div>
        </div>
      </section>

      <section className="case-section section" id="case-study">
        <div className="container">
          <div className="section-heading centered"><span>{t("TÌNH HUỐNG TRIỂN KHAI MẪU", "SAMPLE USE CASE")}</span><h2>{t("Từ điểm nghẽn vận hành đến trải nghiệm liền mạch", "From operational bottlenecks to one seamless experience")}</h2><p>{t("Mô phỏng cách DolphinX tiếp cận một bài toán bán lẻ phổ biến.", "A practical example of how DolphinX approaches a common retail challenge.")}</p></div>
          <div className="case-card">
            <div className="case-person"><Image src="/images/dolphinx-vietnamese-sme-consulting-uniform-v2.webp" alt="Chuyên viên DolphinX mặc đồng phục tư vấn cho chủ doanh nghiệp Việt tại cửa hàng" fill sizes="(max-width: 800px) 100vw, 45vw"/><div><b>Chuyên viên DolphinX × Chủ doanh nghiệp</b><span>Website · Mini App · CRM</span></div></div>
            <div className="case-content"><div><span className="case-icon">?</span><div><b>Bài toán</b><p>Dữ liệu khách hàng nằm rời rạc giữa cửa hàng, tin nhắn và file tính. Đội ngũ khó theo dõi lịch sử mua hàng và chăm sóc khách quay lại.</p></div></div><div><span className="case-icon"><Zap size={15}/></span><div><b>Giải pháp</b><p>Kết nối website, Zalo Mini App thành viên và CRM nội bộ để đồng bộ hồ sơ, điểm thưởng, voucher và hiệu quả chiến dịch.</p></div></div><div className="case-results"><span><b>68%</b>khách quay lại</span><span><b>-40%</b>thao tác thủ công</span><span><b>01</b>nguồn dữ liệu</span></div><Link href="/#contact">Khám phá cách triển khai <ArrowRight size={16}/></Link></div>
          </div>
        </div>
      </section>

      <section className="packages-section section" id="packages">
        <div className="container packages-stage">
          <Image className="pricing-section-graphic" src="/images/dolphinx-graphic-pricing-v2.webp" alt={t("Cá heo tư vấn lộ trình và bảng giá chuyển đổi số", "Dolphin consultant presenting a digital transformation roadmap")} width={420} height={420} sizes="(max-width: 850px) 150px, 230px" />
          <div className="section-heading centered"><span>{t("ĐỒNG HÀNH CHUYỂN ĐỔI SỐ", "DIGITAL TRANSFORMATION PARTNERSHIP")}</span><h2>{t("Không mua từng tính năng. Cùng xây năng lực số.", "Do not buy isolated features. Build digital capability together.")}</h2><p>{t("Bảng này dành cho doanh nghiệp cần DolphinX đồng hành theo lộ trình. Giá riêng từng sản phẩm nằm trong trang DXWeb, DXMobile, DXFlow và DXZalo.", "These options are for businesses that need an ongoing roadmap. Product-specific pricing lives on the DXWeb, DXMobile, DXFlow and DXZalo pages.")}</p></div>
          <div className="package-grid">{packages.map(pack=>{const features=locale === "vi" ? pack.features : pack.featuresEn;return <article className={`package-card ${pack.featured ? "featured" : ""}`} key={pack.name}>{pack.featured && <span className="popular-chip">{t("Khuyến nghị", "Recommended")}</span>}<span>{pack.label}</span><h3>{locale === "vi" ? pack.name : pack.nameEn}</h3><p>{locale === "vi" ? pack.description : pack.descriptionEn}</p><div className="package-price">{t("Lộ trình riêng", "Tailored roadmap")} <b>{t("theo giai đoạn", "by phase")}</b></div><ul>{features.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><Link href="/#contact">{t("Trao đổi lộ trình", "Discuss a roadmap")} <ArrowRight size={16}/></Link></article>})}</div>
        </div>
      </section>

      <section className="process-section section" id="process">
        <div className="container process-layout"><div className="process-copy"><span>{t("QUY TRÌNH MINH BẠCH", "A TRANSPARENT PROCESS")}</span><h2>{t("Từ bài toán đến sản phẩm trong 4 bước rõ ràng", "From business challenge to product in four clear steps")}</h2><p>{t("Mỗi giai đoạn đều có đầu ra cụ thể. Workflow trực quan giúp bạn thấy cách thiết kế và phát triển chạy song song trước khi vận hành.", "Every stage has a concrete output. Our visual workflow shows how design and development progress together before launch.")}</p><ContactButton label="Trao đổi với DolphinX" labelEn="Talk to DolphinX"/></div><div className="process-visual-stack"><Image className="process-section-graphic" src="/images/dolphinx-graphic-process-v2.webp" alt={t("Cá heo kỹ sư đang sắp xếp quy trình phát triển sản phẩm", "Dolphin product engineer arranging the product development workflow")} width={460} height={460} sizes="(max-width: 850px) 190px, 250px"/><HomeWorkflowLoader/></div></div>
      </section>

      <section className="faq-section section"><div className="container faq-layout"><div className="faq-intro"><span>{t("CÂU HỎI THƯỜNG GẶP", "FREQUENTLY ASKED QUESTIONS")}</span><h2>{t("Những điều bạn cần biết trước khi bắt đầu", "What to know before we get started")}</h2><p>{t("Chưa thấy câu trả lời phù hợp?", "Still have a question?")} <Link href="/#contact">{t("Liên hệ ngay với DolphinX", "Contact DolphinX")}</Link>.</p></div><div className="faq-list">{localizedFaqs.map(([q,a],i)=><button type="button" className={`faq-item ${activeFaq===i?"active":""}`} key={q} onClick={()=>setActiveFaq(activeFaq===i?-1:i)} aria-expanded={activeFaq===i}><span><b>{q}</b><ChevronDown size={19}/></span>{activeFaq===i&&<p>{a}</p>}</button>)}</div></div></section>

      <section className="final-cta" id="contact"><div className="container cta-panel cta-panel-form"><div className="cta-form-copy"><span>{t("SẴN SÀNG TẠO RA SẢN PHẨM TIẾP THEO?", "READY TO BUILD YOUR NEXT PRODUCT?")}</span><h2>{t("Biến ý tưởng và quy trình của bạn thành một sản phẩm số đáng tin cậy.", "Turn your ideas and workflows into a digital product people can trust.")}</h2><p>{t("Một cuộc trao đổi ngắn để xác định đúng bài toán, phạm vi và bước đi đầu tiên.", "A focused conversation to clarify the problem, scope and best first step.")}</p><div className="cta-form-trust"><span><BadgeCheck size={16}/>{t("Không ép gói có sẵn", "No fixed package pressure")}</span><span><ShieldCheck size={16}/>{t("Thông tin được bảo mật", "Your details stay private")}</span></div><div className="cta-form-mascot"><Image src="/images/dolphinx-graphic-contact-v2.webp" alt={t("Cá heo DolphinX mời bắt đầu buổi tư vấn", "DolphinX dolphin inviting you to a consultation")} fill sizes="(max-width: 850px) 210px, 280px"/></div></div><ConsultationForm/></div></section>

      <ServiceFooter />
    </main>
  );
}
