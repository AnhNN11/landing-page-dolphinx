"use client";

import Image from "next/image";
import { Button, Card, Chip } from "@heroui/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Headphones,
  Layers3,
  MapPin,
  Menu,
  MessageCircleMore,
  Phone,
  QrCode,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const phoneNumber = "0964106456";

const services = [
  {
    icon: Globe2,
    eyebrow: "01 / WEBSITE",
    title: "Website chuyên nghiệp",
    description:
      "Xây dựng website bán hàng, giới thiệu doanh nghiệp và landing page nhanh, đẹp, dễ quản trị.",
    points: ["Chuẩn SEO kỹ thuật", "Tối ưu mọi màn hình", "Dễ dàng mở rộng"],
    accent: "service-blue",
  },
  {
    icon: Smartphone,
    eyebrow: "02 / ZALO MINI APP",
    title: "Zalo Mini App",
    description:
      "Đưa sản phẩm và dịch vụ đến gần khách hàng ngay trong Zalo, không cần tải thêm ứng dụng.",
    points: ["Bán hàng & tích điểm", "Voucher & chăm sóc", "Kết nối Zalo OA"],
    accent: "service-cyan",
  },
  {
    icon: Code2,
    eyebrow: "03 / PHẦN MỀM",
    title: "Phần mềm theo yêu cầu",
    description:
      "Số hoá quy trình đặc thù bằng giải pháp vừa vặn với cách doanh nghiệp đang vận hành.",
    points: ["Quản lý tập trung", "Tự động hoá tác vụ", "Báo cáo trực quan"],
    accent: "service-indigo",
  },
];

const faqs = [
  {
    question: "DolphinX Studio phù hợp với mô hình kinh doanh nào?",
    answer:
      "Chúng tôi tập trung phục vụ doanh nghiệp vừa và nhỏ, hộ kinh doanh, cửa hàng, đơn vị dịch vụ và các đội ngũ cần một giải pháp số gọn, dễ dùng, có thể phát triển theo từng giai đoạn.",
  },
  {
    question: "Tôi chưa biết nên làm website, Mini App hay phần mềm?",
    answer:
      "Bạn chỉ cần chia sẻ mục tiêu và quy trình hiện tại. DolphinX sẽ cùng bạn xác định điểm cần ưu tiên, đề xuất giải pháp phù hợp và lộ trình triển khai thực tế trước khi bắt đầu.",
  },
  {
    question: "Sau khi bàn giao có được hướng dẫn sử dụng không?",
    answer:
      "Có. Mỗi dự án đều có tài liệu, hướng dẫn vận hành và giai đoạn hỗ trợ sau bàn giao. Phạm vi cụ thể sẽ được thống nhất rõ ràng ngay từ đề xuất dự án.",
  },
  {
    question: "Thời gian triển khai một dự án là bao lâu?",
    answer:
      "Thời gian phụ thuộc vào quy mô và mức độ tích hợp. Sau buổi trao đổi đầu tiên, chúng tôi sẽ gửi lộ trình gồm các mốc thiết kế, phát triển, kiểm thử và bàn giao để bạn dễ theo dõi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DolphinX Studio",
  description:
    "Dịch vụ thiết kế website, phát triển Zalo Mini App và phần mềm theo yêu cầu cho doanh nghiệp, hộ kinh doanh.",
  telephone: "+84964106456",
  areaServed: "Việt Nam",
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Nguyễn Trường Tộ",
    addressLocality: "Phường Đăk Cấm",
    addressRegion: "Tỉnh Quảng Ngãi",
    addressCountry: "VN",
  },
  serviceType: [
    "Thiết kế website",
    "Phát triển Zalo Mini App",
    "Phần mềm theo yêu cầu",
  ],
};

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#top" aria-label="DolphinX Studio - Trang chủ">
      <Image
        src="/images/dolphinx-logo.png"
        alt="DolphinX Studio"
        width={280}
        height={130}
        priority
        className={compact ? "brand-image brand-image-compact" : "brand-image"}
      />
    </a>
  );
}

function ContactButton({ secondary = false }: { secondary?: boolean }) {
  return (
    <Button
      variant={secondary ? "outline" : "primary"}
      size="lg"
      className={secondary ? "button-secondary" : "button-primary"}
      onPress={() => {
        window.location.href = `tel:${phoneNumber}`;
      }}
    >
      <Phone size={18} aria-hidden="true" />
      {secondary ? "0964 106 456" : "Tư vấn miễn phí"}
      {!secondary && <ArrowRight size={18} aria-hidden="true" />}
    </Button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="site-shell" id="top">
        <header className="site-header">
          <div className="announcement">
            <span><Sparkles size={14} /> Đồng hành số hoá cùng doanh nghiệp Việt</span>
            <a href={`tel:${phoneNumber}`}>Trao đổi ngay: 0964 106 456</a>
          </div>
          <nav className="nav container" aria-label="Điều hướng chính">
            <Logo />
            <div className="nav-links">
              <a href="#services">Dịch vụ</a>
              <a href="#solutions">Giải pháp</a>
              <a href="#process">Quy trình</a>
              <a href="#faq">Hỏi đáp</a>
            </div>
            <div className="nav-cta"><ContactButton /></div>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
          {menuOpen && (
            <div className="mobile-menu">
              {[
                ["Dịch vụ", "#services"],
                ["Giải pháp", "#solutions"],
                ["Quy trình", "#process"],
                ["Hỏi đáp", "#faq"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
              <a className="mobile-call" href={`tel:${phoneNumber}`}><Phone size={17} /> 0964 106 456</a>
            </div>
          )}
        </header>

        <main>
          <section className="hero section">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <div className="container hero-grid">
              <div className="hero-copy">
                <Chip color="accent" variant="soft" className="eyebrow-chip">
                  <Zap size={14} /> Giải pháp số dành cho SME & hộ kinh doanh
                </Chip>
                <h1>
                  Công nghệ gọn hơn.<br />
                  <span>Kinh doanh lớn hơn.</span>
                </h1>
                <p className="hero-lead">
                  DolphinX Studio thiết kế website, Zalo Mini App và phần mềm theo yêu cầu — giúp bạn bán hàng tốt hơn, vận hành rõ hơn và phát triển bền vững hơn.
                </p>
                <div className="hero-actions">
                  <ContactButton />
                  <Button
                    variant="outline"
                    size="lg"
                    className="button-secondary"
                    onPress={() => document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Xem giải pháp <ArrowRight size={18} />
                  </Button>
                </div>
                <div className="hero-proof" aria-label="Cam kết dịch vụ">
                  <span><BadgeCheck size={18} /> Tư vấn đúng nhu cầu</span>
                  <span><BadgeCheck size={18} /> Bàn giao minh bạch</span>
                  <span><BadgeCheck size={18} /> Hỗ trợ vận hành</span>
                </div>
              </div>

              <div className="hero-visual" aria-label="Minh hoạ hệ thống website và ứng dụng">
                <div className="visual-frame">
                  <Image
                    src="/images/business-platform.png"
                    alt="Giao diện phần mềm quản lý trên laptop và ứng dụng khách hàng trên điện thoại"
                    width={1586}
                    height={992}
                    priority
                    sizes="(max-width: 900px) 100vw, 52vw"
                  />
                </div>
                <div className="floating-card floating-card-top">
                  <div className="floating-icon"><Rocket size={20} /></div>
                  <div><strong>Sẵn sàng tăng trưởng</strong><span>Nền tảng được thiết kế để mở rộng</span></div>
                </div>
                <div className="floating-card floating-card-bottom">
                  <div className="status-dot" />
                  <div><strong>Vận hành liền mạch</strong><span>Web · Mini App · Phần mềm</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="trust-strip">
            <div className="container trust-grid">
              <p>Đúng giải pháp cho từng giai đoạn phát triển</p>
              <div><Store size={22} /><span>Hộ kinh doanh</span></div>
              <div><Layers3 size={22} /><span>Doanh nghiệp SME</span></div>
              <div><Workflow size={22} /><span>Đội ngũ vận hành</span></div>
              <div><Rocket size={22} /><span>Thương hiệu mới</span></div>
            </div>
          </section>

          <section className="section services-section" id="services">
            <div className="container">
              <div className="section-heading centered">
                <span className="section-kicker">DỊCH VỤ CỐT LÕI</span>
                <h2>Một đối tác công nghệ.<br /><span>Ba hướng tăng trưởng.</span></h2>
                <p>Từ điểm chạm với khách hàng đến hệ thống vận hành bên trong, mọi giải pháp đều được thiết kế quanh bài toán kinh doanh của bạn.</p>
              </div>
              <div className="service-grid">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} variant="default" className={`service-card ${service.accent}`}>
                      <Card.Header>
                        <div className="service-icon"><Icon size={25} /></div>
                        <span className="service-eyebrow">{service.eyebrow}</span>
                      </Card.Header>
                      <Card.Content>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul>
                          {service.points.map((point) => <li key={point}><Check size={16} />{point}</li>)}
                        </ul>
                      </Card.Content>
                      <Card.Footer>
                        <a href={`tel:${phoneNumber}`}>Nhận tư vấn <ArrowRight size={17} /></a>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section solutions-section" id="solutions">
            <div className="container">
              <div className="section-heading split-heading">
                <div>
                  <span className="section-kicker">GIẢI PHÁP THỰC TẾ</span>
                  <h2>Nhìn thấy sản phẩm.<br /><span>Hiểu ngay giá trị.</span></h2>
                </div>
                <p>Giao diện trực quan chỉ là điểm bắt đầu. Bên dưới là một hệ thống được tính toán để khách hàng thao tác dễ dàng và đội ngũ của bạn vận hành hiệu quả.</p>
              </div>

              <div className="showcase-grid">
                <article className="showcase-card showcase-large">
                  <div className="showcase-image">
                    <Image src="/images/business-platform.png" alt="Giải pháp quản lý tập trung trên web và điện thoại" width={1586} height={992} sizes="(max-width: 900px) 100vw, 64vw" />
                  </div>
                  <div className="showcase-copy">
                    <div className="showcase-icon"><BarChart3 size={22} /></div>
                    <div>
                      <span>PHẦN MỀM QUẢN LÝ</span>
                      <h3>Một nơi để theo dõi toàn bộ hoạt động</h3>
                      <p>Dữ liệu, đơn hàng và báo cáo được sắp xếp rõ ràng để bạn nắm bắt tình hình nhanh hơn.</p>
                    </div>
                  </div>
                </article>

                <article className="showcase-card showcase-phone">
                  <div className="showcase-image">
                    <Image src="/images/mini-app-showcase.png" alt="Giao diện Mini App bán hàng, tích điểm và voucher" width={1448} height={1086} sizes="(max-width: 900px) 100vw, 36vw" />
                  </div>
                  <div className="showcase-copy">
                    <div className="showcase-icon"><QrCode size={22} /></div>
                    <div>
                      <span>ZALO MINI APP</span>
                      <h3>Chạm để mua. Quét để quay lại.</h3>
                      <p>Tạo trải nghiệm mua hàng, tích điểm và chăm sóc ngay trên nền tảng khách hàng quen dùng.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section value-section">
            <div className="container value-grid">
              <div className="value-copy">
                <span className="section-kicker light">KHÁC BIỆT CỦA DOLPHINX</span>
                <h2>Không chỉ viết code.<br />Chúng tôi cùng bạn giải bài toán.</h2>
                <p>Mỗi quyết định thiết kế đều xuất phát từ mục tiêu kinh doanh, thói quen của người dùng và năng lực vận hành thực tế của đội ngũ.</p>
                <ContactButton />
              </div>
              <div className="value-cards">
                {[
                  [Bot, "Tư vấn dễ hiểu", "Biến nhu cầu kinh doanh thành giải pháp công nghệ rõ ràng, không làm bạn ngợp bởi thuật ngữ."],
                  [ShieldCheck, "Lộ trình minh bạch", "Thống nhất phạm vi, mốc triển khai và tiêu chí bàn giao trước khi phát triển."],
                  [Zap, "Tối ưu để dùng thật", "Ưu tiên trải nghiệm nhanh, đơn giản và phù hợp với người sử dụng hàng ngày."],
                  [Headphones, "Đồng hành sau bàn giao", "Hướng dẫn, tài liệu và hỗ trợ giúp đội ngũ tự tin đưa hệ thống vào vận hành."],
                ].map(([Icon, title, text]) => {
                  const ValueIcon = Icon as typeof Bot;
                  return (
                    <div className="value-card" key={title as string}>
                      <ValueIcon size={23} />
                      <h3>{title as string}</h3>
                      <p>{text as string}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section process-section" id="process">
            <div className="container">
              <div className="section-heading centered compact">
                <span className="section-kicker">QUY TRÌNH HỢP TÁC</span>
                <h2>Rõ ràng từ ý tưởng<br /><span>đến khi vận hành.</span></h2>
              </div>
              <div className="process-grid">
                {[
                  ["01", "Lắng nghe", "Hiểu mục tiêu, khách hàng và cách bạn đang vận hành."],
                  ["02", "Đề xuất", "Xây dựng phạm vi, giải pháp và lộ trình phù hợp."],
                  ["03", "Triển khai", "Thiết kế, phát triển và cập nhật tiến độ theo từng mốc."],
                  ["04", "Đồng hành", "Kiểm thử, hướng dẫn, bàn giao và hỗ trợ vận hành."],
                ].map(([number, title, text]) => (
                  <div className="process-item" key={number}>
                    <span className="process-number">{number}</span>
                    <div className="process-line"><span /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section faq-section" id="faq">
            <div className="container faq-grid">
              <div className="faq-intro">
                <span className="section-kicker">CÂU HỎI THƯỜNG GẶP</span>
                <h2>Bạn đang cân nhắc?<br /><span>Bắt đầu từ đây.</span></h2>
                <p>Chưa thấy câu trả lời bạn cần? Gọi cho DolphinX, chúng tôi sẽ trao đổi thẳng vào bài toán của bạn.</p>
                <a href={`tel:${phoneNumber}`} className="inline-contact"><Phone size={18} /> 0964 106 456</a>
              </div>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary><span>{faq.question}</span><ChevronDown size={20} /></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-section section">
            <div className="container">
              <div className="cta-panel">
                <div className="cta-orb cta-orb-one" />
                <div className="cta-orb cta-orb-two" />
                <div className="cta-content">
                  <Chip color="accent" variant="soft" className="cta-chip"><MessageCircleMore size={15} /> Bắt đầu bằng một cuộc trò chuyện</Chip>
                  <h2>Sẵn sàng đưa ý tưởng<br />thành sản phẩm thật?</h2>
                  <p>Chia sẻ bài toán của bạn. DolphinX Studio sẽ giúp bạn tìm hướng đi phù hợp, rõ ràng và có thể triển khai.</p>
                  <div className="cta-actions">
                    <ContactButton />
                    <Button variant="outline" size="lg" className="button-on-dark" onPress={() => window.location.href = `tel:${phoneNumber}`}>
                      <Phone size={18} /> 0964 106 456
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Logo compact />
              <p>Giải pháp công nghệ thực tế cho doanh nghiệp và hộ kinh doanh Việt Nam.</p>
            </div>
            <div className="footer-column">
              <h3>Dịch vụ</h3>
              <a href="#services">Thiết kế website</a>
              <a href="#services">Zalo Mini App</a>
              <a href="#services">Phần mềm theo yêu cầu</a>
            </div>
            <div className="footer-column">
              <h3>Liên hệ</h3>
              <a href={`tel:${phoneNumber}`}><Phone size={16} /> 0964 106 456</a>
              <p><MapPin size={17} />60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam</p>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} DolphinX Studio. All rights reserved.</span>
            <span>Thiết kế để tạo giá trị thật.</span>
          </div>
        </footer>

        <a className="floating-contact" href={`tel:${phoneNumber}`} aria-label="Gọi DolphinX Studio">
          <Phone size={21} /><span>0964 106 456</span>
        </a>
      </div>
    </>
  );
}
