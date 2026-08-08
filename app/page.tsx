"use client";

import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import { Background, MarkerType, ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  Code2,
  Database,
  FileText,
  Globe2,
  GraduationCap,
  Headphones,
  Layers3,
  PackageCheck,
  QrCode,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
  UtensilsCrossed,
  Workflow,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { StableLink as Link } from "./components/StableLink";
import { ServiceFooter, ServiceNav } from "./components/MarketingChrome";
import { StudioPulse } from "./components/StudioPulse";

const services = [
  {
    id: "website",
    icon: Globe2,
    number: "01",
    eyebrow: "Website & Landing Page",
    title: "Một website không chỉ đẹp, mà phải tạo ra khách hàng.",
    description:
      "DolphinX thiết kế website giới thiệu, website bán hàng và landing page có cấu trúc chuyển đổi rõ ràng, tải nhanh và sẵn sàng cho SEO.",
    points: ["Thiết kế theo nhận diện riêng", "Tối ưu SEO và tốc độ", "Form, tracking và tích hợp CRM"],
    accent: "blue",
  },
  {
    id: "miniapp",
    icon: Smartphone,
    number: "02",
    eyebrow: "Zalo Mini App",
    title: "Bán hàng và chăm sóc khách ngay trong Zalo.",
    description:
      "Tạo trải nghiệm thành viên liền mạch: tích điểm, voucher, đặt hàng, tra cứu và chăm sóc khách hàng mà không cần cài thêm ứng dụng.",
    points: ["Kết nối Zalo OA", "Tích điểm và voucher", "Đồng bộ dữ liệu khách hàng"],
    accent: "green",
  },
  {
    id: "software",
    icon: Code2,
    number: "03",
    eyebrow: "Phần mềm theo yêu cầu",
    title: "Biến quy trình thủ công thành một hệ thống vận hành gọn.",
    description:
      "Xây dựng CRM, cổng khách hàng, hệ thống quản lý và công cụ nội bộ đúng với cách doanh nghiệp đang làm việc.",
    points: ["Phân tích nghiệp vụ", "Phân quyền và báo cáo", "API và tự động hoá"],
    accent: "violet",
  },
];

const industries = [
  { icon: Rocket, title: "Startup & MVP", text: "Ra mắt sản phẩm sớm, kiểm chứng nhanh và mở rộng theo dữ liệu." },
  { icon: Layers3, title: "SaaS & Software", text: "Thiết kế sản phẩm, portal và hệ thống vận hành dài hạn." },
  { icon: ShoppingBag, title: "Bán lẻ", text: "Website, Mini App thành viên và quản lý khách hàng đa kênh." },
  { icon: UtensilsCrossed, title: "F&B", text: "Đặt món, tích điểm, voucher và quản lý khách hàng quay lại." },
  { icon: GraduationCap, title: "Đào tạo", text: "Trang tuyển sinh, quản lý học viên và tự động hoá tư vấn." },
  { icon: Building2, title: "Doanh nghiệp SME", text: "Số hoá quy trình và dữ liệu theo đúng nguồn lực hiện tại." },
];

const packages = [
  {
    name: "Khởi động",
    label: "GO DIGITAL",
    description: "Dành cho đội ngũ cần hiện diện chuyên nghiệp và bắt đầu thu lead.",
    features: ["Website hoặc landing page", "Responsive mọi thiết bị", "SEO nền tảng", "Form và đo lường"],
  },
  {
    name: "Tăng trưởng",
    label: "GROWTH STACK",
    description: "Dành cho doanh nghiệp muốn kết nối bán hàng, dữ liệu và chăm sóc khách.",
    features: ["Website nhiều trang", "Zalo Mini App", "Quản lý khách hàng", "Tích hợp và tự động hoá"],
    featured: true,
  },
  {
    name: "Nền tảng riêng",
    label: "CUSTOM PRODUCT",
    description: "Dành cho startup, SaaS và quy trình đặc thù cần phát triển dài hạn.",
    features: ["Khảo sát nghiệp vụ", "UI/UX sản phẩm", "Phát triển theo sprint", "Bảo trì và mở rộng"],
  },
];

const faqs = [
  ["DolphinX Studio phù hợp với doanh nghiệp nào?", "Startup, software company, SaaS, SME và hộ kinh doanh cần một đội kỹ thuật linh hoạt. Chúng tôi có thể bắt đầu từ một phiên bản nhỏ và mở rộng theo nhu cầu thực tế."],
  ["Tôi chưa biết nên làm website, Mini App hay phần mềm?", "Bạn chỉ cần chia sẻ mục tiêu và cách đang vận hành. DolphinX sẽ phân tích điểm nghẽn, xác định thứ tự ưu tiên và đề xuất lộ trình phù hợp trước khi viết code."],
  ["Có thể kết nối với hệ thống đang dùng không?", "Có. Khả năng tích hợp được đánh giá dựa trên API, cấu trúc dữ liệu và quyền truy cập của hệ thống hiện tại. Rủi ro và chi phí sẽ được làm rõ ngay trong đề xuất kỹ thuật."],
  ["Sau bàn giao có được hướng dẫn và hỗ trợ không?", "Có. Dự án bao gồm hướng dẫn vận hành, tài liệu cần thiết và giai đoạn hỗ trợ sau bàn giao theo phạm vi đã thống nhất."],
  ["Thời gian triển khai là bao lâu?", "Tuỳ quy mô và mức độ tích hợp. Sau buổi trao đổi đầu tiên, chúng tôi sẽ gửi lộ trình với các mốc thiết kế, phát triển, kiểm thử và bàn giao rõ ràng."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DolphinX Studio",
  description: "Thiết kế website, phát triển Zalo Mini App và phần mềm theo yêu cầu.",
  areaServed: "Việt Nam",
  sameAs: ["https://www.facebook.com/profile.php?id=61565408955535&locale=vi_VN"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Nguyễn Trường Tộ",
    addressLocality: "Phường Đăk Cấm",
    addressRegion: "Tỉnh Quảng Ngãi",
    addressCountry: "VN",
  },
};

function ContactButton({ light = false, label = "Tư vấn dự án" }: { light?: boolean; label?: string }) {
  return (
    <Link className={light ? "contact-button light" : "contact-button"} href="/#contact">
      {label}<ArrowRight size={17} />
    </Link>
  );
}

function ProductSuite() {
  const chart = [38, 52, 44, 68, 61, 82, 70, 94, 86];
  return (
    <div className="suite-visual ecosystem-visual" aria-label="Hệ sinh thái sản phẩm số DolphinX gồm website, Mini App và phần mềm quản trị">
      <div className="ecosystem-grid" aria-hidden="true" />
      <motion.div className="ecosystem-window" initial={{ opacity: 0, y: 28, rotateX: 5 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: .85, ease: "easeOut" }}>
        <div className="ecosystem-browser"><span><i/><i/><i/></span><b>dolphinx.cloud / workspace</b><em>LIVE</em></div>
        <div className="ecosystem-app">
          <aside><strong>DX</strong>{[BarChart3, Users, Workflow, Database].map((Icon,index)=><span className={index === 0 ? "active" : ""} key={index}><Icon size={15}/></span>)}<i/></aside>
          <section>
            <header><div><small>THỨ SÁU · 08 THÁNG 08</small><h3>Business pulse</h3></div><span><i/>Dữ liệu trực tiếp</span></header>
            <div className="ecosystem-metrics">{[["Khách hàng mới","128","+18%"],["Chuyển đổi","12.6%","+3.2%"],["Tác vụ tự động","2.480","99.8%"]].map(([label,value,growth])=><article key={label}><span>{label}</span><b>{value}</b><small>{growth}</small></article>)}</div>
            <div className="ecosystem-insights">
              <article className="ecosystem-chart"><div><span><b>Tăng trưởng đa kênh</b><small>Website · Mini App · CRM</small></span><em>30 ngày</em></div><div className="ecosystem-bars">{chart.map((height,index)=><motion.i key={index} initial={{ scaleY: .1 }} animate={{ scaleY: 1 }} transition={{ duration: .7, delay: .25 + index * .055 }} style={{ height: `${height}%`, transformOrigin: "bottom" }}/>)}</div><footer><span>01</span><span>08</span><span>15</span><span>22</span><span>30</span></footer></article>
              <article className="ecosystem-activity"><div><b>Luồng đang chạy</b><small>04 automation</small></div>{[[Globe2,"Website","12 lead mới"],[Smartphone,"Mini App","48 lượt quay lại"],[Workflow,"CRM","Đã đồng bộ"]].map(([Icon,label,value])=>{const RowIcon=Icon as typeof Globe2;return <span key={String(label)}><i><RowIcon size={13}/></i><b>{String(label)}<small>{String(value)}</small></b><Check size={13}/></span>})}</article>
            </div>
          </section>
        </div>
      </motion.div>

      <motion.div className="ecosystem-phone" animate={{ y: [0,-9,0], rotate: [2,1,2] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}>
        <i className="ecosystem-notch"/><header><b>DX Member</b><QrCode size={14}/></header><div className="ecosystem-card"><small>HẠNG THÀNH VIÊN</small><strong>2.480</strong><span>Silver · còn 520 điểm</span></div><div className="ecosystem-actions">{[ShoppingBag, Zap, Headphones].map((Icon,index)=><span key={index}><Icon size={13}/><small>{["Mua hàng","Ưu đãi","Hỗ trợ"][index]}</small></span>)}</div><div className="ecosystem-offer"><small>ƯU ĐÃI HÔM NAY</small><b>Giảm 20% cho đơn tiếp theo</b><i/></div>
      </motion.div>

      <motion.div className="ecosystem-agent" animate={{ x: [0,7,0] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}><span><Sparkles size={15}/></span><div><small>AI WORKFLOW</small><b>Lead mới đã được phân loại</b></div><Check size={15}/></motion.div>
      <motion.div className="ecosystem-dolphin" animate={{ y: [0,-7,0], rotate: [-2,1,-2] }} transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}><Image src="/images/dolphinx-ai-whale.png" alt="Biểu tượng cá voi công nghệ DolphinX" fill priority sizes="190px"/></motion.div>
      <div className="ecosystem-wire wire-one"><i/></div><div className="ecosystem-wire wire-two"><i/></div>
    </div>
  );
}

const workflowNodes: Node[] = [
  { id: "discover", position: { x: 20, y: 105 }, data: { label: <div className="flow-node"><span>01</span><b>Khám phá</b><small>Bài toán & mục tiêu</small></div> }, type: "default" },
  { id: "design", position: { x: 245, y: 15 }, data: { label: <div className="flow-node"><span>02</span><b>Thiết kế</b><small>UX/UI & prototype</small></div> }, type: "default" },
  { id: "build", position: { x: 245, y: 195 }, data: { label: <div className="flow-node"><span>03</span><b>Phát triển</b><small>Code theo sprint</small></div> }, type: "default" },
  { id: "launch", position: { x: 480, y: 105 }, data: { label: <div className="flow-node"><span>04</span><b>Vận hành</b><small>Bàn giao & mở rộng</small></div> }, type: "default" },
];

const workflowEdges: Edge[] = [
  { id: "d-design", source: "discover", target: "design", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#13c7e9" }, style: { stroke: "#13c7e9" } },
  { id: "d-build", source: "discover", target: "build", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#075fc2" }, style: { stroke: "#075fc2" } },
  { id: "design-launch", source: "design", target: "launch", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#13c7e9" }, style: { stroke: "#13c7e9" } },
  { id: "build-launch", source: "build", target: "launch", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#075fc2" }, style: { stroke: "#075fc2" } },
];

function WorkflowCanvas() {
  return (
    <div className="workflow-canvas" aria-label="Quy trình phát triển sản phẩm DolphinX">
      <ReactFlow nodes={workflowNodes} edges={workflowEdges} fitView nodesDraggable={false} nodesConnectable={false} elementsSelectable={false} panOnDrag={false} zoomOnScroll={false} zoomOnPinch={false} zoomOnDoubleClick={false} preventScrolling={false} proOptions={{ hideAttribution: true }}>
        <Background color="rgba(117,164,220,.25)" gap={26} size={1} />
      </ReactFlow>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  if (type === "miniapp") {
    return (
      <div className="service-demo demo-miniapp">
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="app-head"><b>DX Member</b><QrCode size={15} /></div>
          <div className="member-card"><small>ĐIỂM THÀNH VIÊN</small><strong>2.480</strong><span>Hạng Bạc · 520 điểm lên hạng</span></div>
          <div className="app-tools"><span><PackageCheck size={16} />Đơn hàng</span><span><Zap size={16} />Ưu đãi</span><span><Headphones size={16} />Hỗ trợ</span></div>
          <b className="app-label">Ưu đãi dành cho bạn</b>
          <div className="app-products"><i /><i /></div>
        </div>
        <div className="floating-note note-one"><BadgeCheck size={16} /><span>Thành viên mới</span><b>+124 tuần này</b></div>
        <div className="floating-note note-two"><Sparkles size={16} /><span>Tỉ lệ quay lại</span><b>68%</b></div>
      </div>
    );
  }
  if (type === "software") {
    return (
      <div className="service-demo demo-software">
        <div className="software-window">
          <aside><b>DX</b>{[BarChart3, Users, FileText, Database].map((Icon,i)=><Icon key={i} size={17}/>)}</aside>
          <main><div className="soft-title"><span>CRM Workspace</span><b>Pipeline khách hàng</b></div><div className="pipeline">{["Mới tiếp nhận","Đang tư vấn","Đã chốt"].map((x,i)=><div key={x}><span>{x}</span>{[1,2,3].slice(0,3-i).map(y=><i key={y}><b>{["Website thương hiệu","Mini App bán lẻ","CRM nội bộ"][i]}</b><small>{["12 triệu","28 triệu","Đang triển khai"][i]}</small></i>)}</div>)}</div></main>
        </div>
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

  return (
    <main className="site-shell" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceNav />

      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <Chip className="hero-chip"><Sparkles size={14}/> Product studio dành cho doanh nghiệp Việt</Chip>
            <h1>Nền tảng số toàn diện cho <span>doanh nghiệp tăng trưởng.</span></h1>
            <p>Website, Zalo Mini App và phần mềm được thiết kế thành một hệ thống liền mạch—giúp bạn có thêm khách hàng, vận hành gọn và phát triển bền vững.</p>
            <div className="hero-actions"><ContactButton label="Bắt đầu dự án"/><Link href="/studio">Tự thiết kế website <ArrowRight size={16}/></Link></div>
            <div className="hero-trust"><div><BadgeCheck size={18}/><span><b>Tư vấn rõ ràng</b><small>Chọn đúng thứ cần làm</small></span></div><div><ShieldCheck size={18}/><span><b>Làm chủ dữ liệu</b><small>Bàn giao minh bạch</small></span></div></div>
          </div>
          <ProductSuite />
        </div>
        <div className="container proof-row"><p><b>Đặc biệt phù hợp với</b> những đội ngũ muốn tăng trưởng bằng sản phẩm số</p><div>{["STARTUP & MVP","SOFTWARE COMPANY","SAAS PRODUCT","SME & RETAIL"].map(x=><span key={x}>{x}</span>)}</div></div>
      </section>

      <StudioPulse />

      <section className="platform-section section" id="about">
        <div className="container" id="solutions">
          <div className="section-heading centered"><span>HỆ SINH THÁI DOLPHINX</span><h2>Một đối tác cho toàn bộ hành trình số hoá</h2><p>Từ điểm chạm đầu tiên của khách hàng đến hệ thống vận hành phía sau—mọi thứ được thiết kế để làm việc cùng nhau.</p></div>
          <div className="platform-tabs"><div><Globe2/><b>Tiếp thị & Bán hàng</b><span>Website tạo chuyển đổi</span></div><div><Users/><b>Quản lý khách hàng</b><span>Mini App và dữ liệu</span></div><div><Workflow/><b>Vận hành tinh gọn</b><span>Phần mềm và tự động hoá</span></div></div>
          <div className="platform-flow"><span>Thu hút</span><i/><span>Chuyển đổi</span><i/><span>Chăm sóc</span><i/><span>Vận hành</span></div>
        </div>
      </section>

      <section className="solutions-section section">
        <div className="container">
          <div className="section-heading"><span>GIẢI PHÁP TOÀN DIỆN</span><h2>Xây đúng sản phẩm cho từng giai đoạn tăng trưởng</h2></div>
          <div className="solution-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className={`solution-row ${index % 2 ? "reverse" : ""}`} key={service.id}>
                  <div className="solution-copy"><div className="solution-number">{service.number}</div><div className={`solution-icon ${service.accent}`}><Icon size={22}/></div><span>{service.eyebrow}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.points.map(point=><li key={point}><Check size={16}/>{point}</li>)}</ul><Link href={service.id === "website" ? "/website" : service.id === "miniapp" ? "/zalo-mini-app" : "/#contact"}>{service.id === "software" ? "Liên hệ ngay" : "Xem trang dịch vụ"} <ArrowRight size={16}/></Link></div>
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
              <div className="project-meta"><div><Chip>LANDING PAGE CONCEPT</Chip><h3>Blue Bean Coffee</h3><p>Landing page thương hiệu F&B với menu trực quan, đặt bàn nhanh và storytelling sản phẩm.</p></div><a href="#solutions">Xem năng lực <ArrowRight size={17}/></a></div>
            </article>
            <article className="project-card">
              <div className="project-scene retail-scene">
                <Image src="/images/project-retail-unsplash.jpg" alt="Cửa hàng thời trang hiện đại" fill sizes="(max-width: 900px) 100vw, 36vw"/>
                <div className="project-phone"><div className="phone-notch"/><b>MONO Member</b><div><small>ĐIỂM TÍCH LUỸ</small><strong>1.860</strong><span>Hạng Silver</span></div><p>Ưu đãi riêng của bạn</p><i/><i/></div>
              </div>
              <div className="project-meta"><div><Chip>ZALO MINI APP CONCEPT</Chip><h3>MONO Retail Club</h3><p>Thành viên, voucher và đơn hàng ngay trong Zalo.</p></div><Link href="/zalo-mini-app" aria-label="Xem các concept Zalo Mini App"><ArrowRight size={19}/></Link></div>
            </article>
            <article className="project-card project-dark">
              <div className="project-scene software-scene">
                <div className="software-preview"><aside><b>DX</b><i/><i/><i/><i/></aside><main><span>Operations Workspace</span><h3>Business pulse</h3><div className="preview-stats"><i/><i/><i/></div><div className="preview-graph">{[35,55,42,68,60,86,74].map((x,i)=><i key={i} style={{height:`${x}%`}}/>)}</div></main></div>
              </div>
              <div className="project-meta"><div><Chip>SOFTWARE CONCEPT</Chip><h3>FlowOps Workspace</h3><p>CRM và quản lý vận hành tập trung cho đội ngũ SME.</p></div><Link href="/web-app" aria-label="Xem các concept Web App"><ArrowRight size={19}/></Link></div>
            </article>
          </div>
          <div className="work-note"><BadgeCheck size={17}/><span>Mỗi dự án thật sẽ được thiết kế lại theo thương hiệu, người dùng và quy trình riêng của doanh nghiệp.</span></div>
        </div>
      </section>

      <section className="industries-section section" id="industries">
        <div className="container">
          <div className="section-heading centered"><span>ĐÁP ỨNG NHIỀU LĨNH VỰC</span><h2>Một nền tảng linh hoạt cho bài toán riêng của bạn</h2></div>
          <div className="industry-layout">
            <div className="industry-photo"><Image src="/images/software-team-pexels.jpg" alt="Đội ngũ phần mềm cùng phát triển sản phẩm" fill sizes="(max-width: 900px) 100vw, 45vw"/><div><span>PRODUCT TEAM</span><h3>Từ ý tưởng đến sản phẩm có thể sử dụng thật.</h3></div></div>
            <div className="industry-grid">{industries.map(({icon:Icon,title,text})=><Card className="industry-card" key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p><ArrowRight size={17}/></Card>)}</div>
          </div>
        </div>
      </section>

      <section className="why-section section">
        <div className="container">
          <div className="section-heading centered"><span>VÌ SAO CHỌN DOLPHINX?</span><h2>Công nghệ phải tạo ra kết quả kinh doanh</h2><p>Chúng tôi đo một dự án bằng khả năng giải quyết bài toán thật, không phải số lượng tính năng.</p></div>
          <div className="metric-row"><div><b>03</b><span>Năng lực cốt lõi</span></div><div><b>01</b><span>Đầu mối xuyên suốt</span></div><div><b>100%</b><span>Thiết kế theo nhu cầu</span></div><div><b>24/7</b><span>Hệ thống sẵn sàng</span></div></div>
          <div className="why-grid">{[
            [ShieldCheck,"Bảo mật và ổn định","Kiến trúc rõ ràng, phân quyền phù hợp và chủ động phương án sao lưu."],
            [Rocket,"Triển khai theo giai đoạn","Ưu tiên phần tạo giá trị trước để bạn sớm có sản phẩm đưa vào sử dụng."],
            [Database,"Dữ liệu liền mạch","Kết nối website, Mini App và phần mềm thành một nguồn dữ liệu thống nhất."],
            [Headphones,"Đồng hành dài hạn","Hướng dẫn vận hành, hỗ trợ sau bàn giao và sẵn sàng mở rộng hệ thống."],
          ].map(([Icon,title,text])=><Card className="why-card" key={String(title)}>{typeof Icon !== "string" && <Icon size={23}/>}<h3>{String(title)}</h3><p>{String(text)}</p></Card>)}</div>
        </div>
      </section>

      <section className="case-section section" id="case-study">
        <div className="container">
          <div className="section-heading centered"><span>TÌNH HUỐNG TRIỂN KHAI MẪU</span><h2>Từ điểm nghẽn vận hành đến trải nghiệm liền mạch</h2><p>Mô phỏng cách DolphinX tiếp cận một bài toán bán lẻ phổ biến.</p></div>
          <div className="case-card">
            <div className="case-person"><Image src="/images/vietnamese-retail-team.png" alt="Đội ngũ bán lẻ Việt Nam vận hành cửa hàng" fill sizes="(max-width: 800px) 100vw, 45vw"/><div><b>Hệ sinh thái bán lẻ địa phương</b><span>Website · Mini App · CRM</span></div></div>
            <div className="case-content"><div><span className="case-icon">?</span><div><b>Bài toán</b><p>Dữ liệu khách hàng nằm rời rạc giữa cửa hàng, tin nhắn và file tính. Đội ngũ khó theo dõi lịch sử mua hàng và chăm sóc khách quay lại.</p></div></div><div><span className="case-icon"><Zap size={15}/></span><div><b>Giải pháp</b><p>Kết nối website, Zalo Mini App thành viên và CRM nội bộ để đồng bộ hồ sơ, điểm thưởng, voucher và hiệu quả chiến dịch.</p></div></div><div className="case-results"><span><b>68%</b>khách quay lại</span><span><b>-40%</b>thao tác thủ công</span><span><b>01</b>nguồn dữ liệu</span></div><Link href="/#contact">Khám phá cách triển khai <ArrowRight size={16}/></Link></div>
          </div>
        </div>
      </section>

      <section className="packages-section section" id="packages">
        <div className="container">
          <div className="section-heading centered"><span>GÓI DỊCH VỤ</span><h2>Bắt đầu vừa đủ, mở rộng đúng lúc</h2><p>Phạm vi và chi phí chính thức được xác định sau buổi phân tích nhu cầu.</p></div>
          <div className="package-grid">{packages.map(pack=><Card className={`package-card ${pack.featured ? "featured" : ""}`} key={pack.name}>{pack.featured && <Chip className="popular-chip">Được chọn nhiều</Chip>}<span>{pack.label}</span><h3>{pack.name}</h3><p>{pack.description}</p><div className="package-price">Nhận đề xuất <b>theo mục tiêu</b></div><ul>{pack.features.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><Link href="/#contact">Liên hệ ngay <ArrowRight size={16}/></Link></Card>)}</div>
        </div>
      </section>

      <section className="process-section section" id="process">
        <div className="container process-layout"><div className="process-copy"><span>QUY TRÌNH MINH BẠCH</span><h2>Từ bài toán đến sản phẩm trong 4 bước rõ ràng</h2><p>Mỗi giai đoạn đều có đầu ra cụ thể. Workflow trực quan giúp bạn thấy cách thiết kế và phát triển chạy song song trước khi vận hành.</p><ContactButton label="Trao đổi với DolphinX"/></div><WorkflowCanvas/></div>
      </section>

      <section className="faq-section section"><div className="container faq-layout"><div className="faq-intro"><span>CÂU HỎI THƯỜNG GẶP</span><h2>Những điều bạn cần biết trước khi bắt đầu</h2><p>Chưa thấy câu trả lời phù hợp? <Link href="/#contact">Liên hệ ngay với DolphinX</Link>.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><button type="button" className={`faq-item ${activeFaq===i?"active":""}`} key={q} onClick={()=>setActiveFaq(activeFaq===i?-1:i)} aria-expanded={activeFaq===i}><span><b>{q}</b><ChevronDown size={19}/></span>{activeFaq===i&&<p>{a}</p>}</button>)}</div></div></section>

      <section className="final-cta" id="contact"><div className="container cta-panel"><div><span>SẴN SÀNG TẠO RA SẢN PHẨM TIẾP THEO?</span><h2>Biến ý tưởng và quy trình của bạn thành một sản phẩm số đáng tin cậy.</h2><p>Một cuộc trao đổi ngắn để xác định đúng bài toán, phạm vi và bước đi đầu tiên.</p><div><ContactButton light label="Liên hệ ngay"/></div></div><div className="cta-orbit"><i/><i/><i/><b>DX</b><span><Globe2/>WEB</span><span><Smartphone/>MINI</span><span><Code2/>APP</span></div></div></section>

      <ServiceFooter />
    </main>
  );
}
