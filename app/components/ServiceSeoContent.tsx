"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { absoluteUrl, serializeJsonLd, SITE_URL } from "../seo";
import { useLocale } from "./LocaleProvider";
import { StableLink as Link } from "./StableLink";

type ServiceKey = "website" | "zalo" | "web" | "mobile";

type LocalizedText = {
  vi: string;
  en: string;
};

type ServiceSeoConfig = {
  path: string;
  serviceName: string;
  serviceType: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  introduction: LocalizedText;
  capabilities: Array<{ title: LocalizedText; description: LocalizedText }>;
  faqs: Array<{ question: LocalizedText; answer: LocalizedText }>;
  relatedLinks: Array<{ href: string; label: LocalizedText }>;
};

const serviceSeoConfigs: Record<ServiceKey, ServiceSeoConfig> = {
  website: {
    path: "/website",
    serviceName: "Dịch vụ thiết kế và phát triển website",
    serviceType: "Thiết kế website, phát triển website và landing page",
    eyebrow: { vi: "DỊCH VỤ PHÁT TRIỂN WEBSITE", en: "WEBSITE DEVELOPMENT SERVICES" },
    title: {
      vi: "Thiết kế website theo mục tiêu kinh doanh, không chỉ theo giao diện.",
      en: "Website design built around business goals, not just visual style.",
    },
    introduction: {
      vi: "DolphinX Studio thiết kế website doanh nghiệp, landing page, website bán hàng và nền tảng nội dung tại Quảng Ngãi và trên toàn quốc. Mỗi dự án được xây từ cấu trúc thông tin, hành trình chuyển đổi, SEO kỹ thuật đến khả năng quản trị sau bàn giao.",
      en: "DolphinX Studio designs corporate websites, landing pages, commerce experiences and content platforms for businesses in Vietnam. Each project covers information architecture, conversion journeys, technical SEO and post-launch administration.",
    },
    capabilities: [
      {
        title: { vi: "Website giới thiệu doanh nghiệp", en: "Corporate websites" },
        description: { vi: "Trình bày thương hiệu, năng lực, dịch vụ và bằng chứng tin cậy trong một cấu trúc dễ tìm kiếm.", en: "Present brand, capabilities, services and trust signals in a search-friendly structure." },
      },
      {
        title: { vi: "Landing page chuyển đổi", en: "Conversion landing pages" },
        description: { vi: "Trang đích cho quảng cáo, ra mắt sản phẩm, tuyển sinh hoặc thu lead với CTA và đo lường rõ ràng.", en: "Campaign pages for launches, enrolment and lead generation with clear calls to action and measurement." },
      },
      {
        title: { vi: "Website bán hàng", en: "E-commerce websites" },
        description: { vi: "Danh mục, giỏ hàng, thanh toán, vận chuyển và quản lý đơn hàng phù hợp quy trình thực tế.", en: "Catalogues, carts, payments, shipping and order management aligned with real operations." },
      },
      {
        title: { vi: "Nâng cấp website & SEO", en: "Website redesign and SEO" },
        description: { vi: "Cải thiện tốc độ, nội dung, trải nghiệm mobile, cấu trúc SEO và khả năng tạo chuyển đổi của website hiện có.", en: "Improve speed, content, mobile experience, SEO structure and conversion performance of an existing site." },
      },
    ],
    faqs: [
      {
        question: { vi: "Chi phí thiết kế website được tính như thế nào?", en: "How is website design priced?" },
        answer: { vi: "Chi phí phụ thuộc số trang, mức độ thiết kế riêng, nội dung, bán hàng và các hệ thống cần tích hợp. DolphinX làm rõ phạm vi trước khi gửi báo giá theo từng hạng mục.", en: "Cost depends on page count, custom design depth, content, commerce and required integrations. DolphinX defines scope before providing an itemised estimate." },
      },
      {
        question: { vi: "Thiết kế website mất bao lâu?", en: "How long does website development take?" },
        answer: { vi: "Landing page tập trung có thể hoàn thành trong khoảng 5–12 ngày. Website doanh nghiệp hoặc bán hàng cần thêm thời gian tùy nội dung, phản hồi và tích hợp.", en: "A focused landing page can take about 5–12 days. Corporate and commerce websites require more time depending on content, feedback and integrations." },
      },
      {
        question: { vi: "Website có được tối ưu SEO ngay từ đầu không?", en: "Is technical SEO included from the start?" },
        answer: { vi: "Có. Cấu trúc heading, metadata, canonical, sitemap, robots, schema, hiệu năng và liên kết nội bộ được thiết lập như nền tảng SEO. Thứ hạng vẫn cần nội dung hữu ích và độ uy tín theo thời gian.", en: "Yes. Headings, metadata, canonicals, sitemaps, robots, schema, performance and internal links are established as SEO foundations. Rankings still require useful content and authority over time." },
      },
      {
        question: { vi: "DolphinX có nhận thiết kế website tại Quảng Ngãi và từ xa không?", en: "Does DolphinX work locally and remotely?" },
        answer: { vi: "Có. DolphinX Studio làm việc trực tiếp tại Quảng Ngãi và triển khai từ xa cho doanh nghiệp trên toàn quốc với quy trình trao đổi, duyệt nội dung và bàn giao rõ ràng.", en: "Yes. DolphinX Studio works directly in Quảng Ngãi and remotely with businesses across Vietnam through a clear review and handover process." },
      },
    ],
    relatedLinks: [
      { href: "/blog/thiet-ke-website-quang-ngai-chi-phi-quy-trinh-checklist", label: { vi: "Chi phí và quy trình thiết kế website tại Quảng Ngãi", en: "Website design process in Quảng Ngãi" } },
      { href: "/web-app", label: { vi: "Phát triển web app và phần mềm theo yêu cầu", en: "Custom web app development" } },
      { href: "/zalo-mini-app", label: { vi: "Phát triển Zalo Mini App", en: "Zalo Mini App development" } },
    ],
  },
  zalo: {
    path: "/zalo-mini-app",
    serviceName: "Dịch vụ phát triển Zalo Mini App",
    serviceType: "Thiết kế và phát triển Zalo Mini App cho doanh nghiệp",
    eyebrow: { vi: "DỊCH VỤ ZALO MINI APP", en: "ZALO MINI APP SERVICES" },
    title: {
      vi: "Phát triển Zalo Mini App gắn với bán hàng và chăm sóc khách hàng.",
      en: "Zalo Mini Apps connected to sales and customer retention.",
    },
    introduction: {
      vi: "DolphinX Studio phát triển Zalo Mini App cho bán lẻ, F&B, spa, giáo dục, lưu trú và doanh nghiệp dịch vụ. Mini App có thể kết nối Zalo OA, thành viên, tích điểm, voucher, đặt hàng, đặt lịch và hệ thống quản trị phía sau.",
      en: "DolphinX Studio develops Zalo Mini Apps for retail, F&B, beauty, education, hospitality and service businesses, connecting OA, membership, loyalty, ordering, booking and administration systems.",
    },
    capabilities: [
      {
        title: { vi: "Thành viên, tích điểm & voucher", en: "Membership, points and vouchers" },
        description: { vi: "Xây chương trình khách hàng thân thiết, cấp hạng, đổi quà và ưu đãi theo hành vi.", en: "Build loyalty programmes with tiers, rewards and behaviour-based offers." },
      },
      {
        title: { vi: "Đặt hàng và thanh toán", en: "Ordering and payments" },
        description: { vi: "Cho khách xem sản phẩm, đặt món, theo dõi đơn và thanh toán ngay trong hành trình Zalo.", en: "Let customers browse, order, track and pay within the Zalo journey." },
      },
      {
        title: { vi: "Đặt lịch và nhắc hẹn", en: "Booking and reminders" },
        description: { vi: "Chọn dịch vụ, chi nhánh, nhân sự, khung giờ và nhận thông báo trước lịch hẹn.", en: "Choose services, branches, staff and time slots with appointment reminders." },
      },
      {
        title: { vi: "Kết nối OA, CRM và API", en: "OA, CRM and API integration" },
        description: { vi: "Đồng bộ hồ sơ khách hàng, giao dịch, phân nhóm và dữ liệu vận hành với hệ thống hiện có.", en: "Synchronise profiles, transactions, segments and operations with existing systems." },
      },
    ],
    faqs: [
      {
        question: { vi: "Zalo Mini App phù hợp với doanh nghiệp nào?", en: "Which businesses benefit from a Zalo Mini App?" },
        answer: { vi: "Mini App phù hợp với doanh nghiệp có khách hàng sử dụng Zalo thường xuyên và cần hành trình lặp lại như mua hàng, tích điểm, đặt lịch, nhận ưu đãi hoặc tra cứu thông tin.", en: "A Mini App suits businesses whose customers use Zalo regularly and repeat journeys such as purchasing, earning points, booking, receiving offers or checking information." },
      },
      {
        question: { vi: "Làm Zalo Mini App có cần Zalo OA không?", en: "Is a Zalo OA required?" },
        answer: { vi: "Doanh nghiệp nên có Zalo OA đã thiết lập đúng thông tin để kết nối truyền thông và vận hành Mini App. DolphinX có thể hỗ trợ rà soát OA và chuẩn bị luồng triển khai.", en: "Businesses should have a properly configured Zalo OA for communication and Mini App operations. DolphinX can review the OA and prepare the implementation flow." },
      },
      {
        question: { vi: "Chi phí phát triển Zalo Mini App phụ thuộc vào đâu?", en: "What affects Zalo Mini App cost?" },
        answer: { vi: "Chi phí phụ thuộc số màn hình, module thành viên, đặt hàng hoặc đặt lịch, hệ thống quản trị, API, hạ tầng và các khoản phí bên thứ ba nếu có.", en: "Cost depends on screen count, membership, ordering or booking modules, administration, APIs, infrastructure and applicable third-party fees." },
      },
      {
        question: { vi: "Mini App có kết nối phần mềm đang sử dụng không?", en: "Can the Mini App connect to existing software?" },
        answer: { vi: "Có thể nếu hệ thống hiện tại cung cấp API hoặc cơ chế trao đổi dữ liệu phù hợp. DolphinX sẽ khảo sát dữ liệu, phân quyền và cách đồng bộ trước khi xác định phạm vi.", en: "Yes, when the existing system provides suitable APIs or data exchange. DolphinX reviews data, permissions and synchronisation before defining scope." },
      },
    ],
    relatedLinks: [
      { href: "/blog/zalo-mini-app-phu-hop-voi-doanh-nghiep-nao", label: { vi: "Doanh nghiệp nào nên làm Zalo Mini App?", en: "Who should build a Zalo Mini App?" } },
      { href: "/web-app", label: { vi: "Hệ thống quản trị và CRM phía sau Mini App", en: "Administration and CRM systems" } },
      { href: "/website", label: { vi: "Thiết kế website doanh nghiệp", en: "Corporate website design" } },
    ],
  },
  web: {
    path: "/web-app",
    serviceName: "Dịch vụ phát triển phần mềm theo yêu cầu",
    serviceType: "Phát triển web app, CRM và phần mềm quản lý doanh nghiệp",
    eyebrow: { vi: "PHẦN MỀM THEO YÊU CẦU", en: "CUSTOM SOFTWARE DEVELOPMENT" },
    title: {
      vi: "Web app và phần mềm quản lý được xây quanh quy trình thật.",
      en: "Web apps and management software built around real workflows.",
    },
    introduction: {
      vi: "DolphinX Studio phát triển phần mềm theo yêu cầu cho bán hàng, vận hành, dữ liệu và quản trị nội bộ. Phạm vi có thể bắt đầu từ một MVP tập trung rồi mở rộng thành CRM, dashboard, cổng khách hàng hoặc nền tảng nhiều vai trò.",
      en: "DolphinX Studio develops custom software for sales, operations, data and internal management, starting with a focused MVP and expanding into CRM, dashboards, customer portals or multi-role platforms.",
    },
    capabilities: [
      {
        title: { vi: "CRM và quản lý khách hàng", en: "CRM and customer management" },
        description: { vi: "Quản lý lead, cơ hội, lịch sử tương tác, nhắc việc và báo cáo hiệu suất bán hàng.", en: "Manage leads, opportunities, interaction history, tasks and sales performance." },
      },
      {
        title: { vi: "Dashboard và báo cáo", en: "Dashboards and reporting" },
        description: { vi: "Tổng hợp dữ liệu thành KPI, biểu đồ, cảnh báo và báo cáo theo vai trò quản lý.", en: "Turn operational data into KPIs, charts, alerts and role-based reports." },
      },
      {
        title: { vi: "Phần mềm quản lý nghiệp vụ", en: "Business operations software" },
        description: { vi: "Số hóa quy trình đơn hàng, kho, lịch hẹn, công việc, hồ sơ và phê duyệt nội bộ.", en: "Digitise orders, inventory, bookings, tasks, records and internal approvals." },
      },
      {
        title: { vi: "MVP và nền tảng SaaS", en: "MVP and SaaS platforms" },
        description: { vi: "Kiểm chứng sản phẩm với phạm vi tập trung, kiến trúc có thể mở rộng và lộ trình phát triển theo dữ liệu sử dụng.", en: "Validate products with focused scope, scalable architecture and a usage-led roadmap." },
      },
    ],
    faqs: [
      {
        question: { vi: "Khi nào doanh nghiệp nên làm phần mềm theo yêu cầu?", en: "When should a business choose custom software?" },
        answer: { vi: "Nên cân nhắc khi quy trình cốt lõi không phù hợp với phần mềm có sẵn, dữ liệu bị phân tán hoặc đội ngũ phải lặp lại nhiều thao tác thủ công gây sai sót.", en: "Consider custom software when core workflows do not fit off-the-shelf tools, data is fragmented or teams repeat error-prone manual work." },
      },
      {
        question: { vi: "Có thể bắt đầu bằng MVP nhỏ không?", en: "Can the project start with a small MVP?" },
        answer: { vi: "Có. DolphinX ưu tiên một quy trình hoặc nhóm người dùng quan trọng nhất, đo hiệu quả thực tế rồi mới mở rộng tính năng và tích hợp.", en: "Yes. DolphinX prioritises the most important workflow or user group, measures real impact and then expands features and integrations." },
      },
      {
        question: { vi: "Phần mềm có tích hợp hệ thống hiện tại không?", en: "Can the software integrate with existing systems?" },
        answer: { vi: "Có thể tích hợp qua API, webhook, tệp dữ liệu hoặc cơ chế đồng bộ phù hợp. Khả năng tích hợp được khảo sát trước khi chốt kiến trúc và chi phí.", en: "Integration can use APIs, webhooks, data files or appropriate synchronisation. Feasibility is reviewed before architecture and cost are finalised." },
      },
      {
        question: { vi: "Ai sở hữu mã nguồn và dữ liệu sau bàn giao?", en: "Who owns the source code and data?" },
        answer: { vi: "Phạm vi sở hữu, kho mã nguồn, dữ liệu, tài khoản hạ tầng và tài liệu vận hành được ghi rõ trong thỏa thuận bàn giao của dự án.", en: "Ownership of source repositories, data, infrastructure accounts and operating documentation is defined clearly in the project handover agreement." },
      },
    ],
    relatedLinks: [
      { href: "/mobile-app", label: { vi: "Phát triển ứng dụng mobile iOS & Android", en: "iOS and Android app development" } },
      { href: "/zalo-mini-app", label: { vi: "Kết nối phần mềm với Zalo Mini App", en: "Connect software with Zalo Mini App" } },
      { href: "/website", label: { vi: "Website và cổng thông tin doanh nghiệp", en: "Websites and business portals" } },
    ],
  },
  mobile: {
    path: "/mobile-app",
    serviceName: "Dịch vụ phát triển Mobile App",
    serviceType: "Thiết kế và phát triển ứng dụng mobile iOS, Android",
    eyebrow: { vi: "DỊCH VỤ MOBILE APP", en: "MOBILE APP DEVELOPMENT" },
    title: {
      vi: "Phát triển ứng dụng iOS và Android từ ý tưởng đến phát hành.",
      en: "iOS and Android app development from idea to release.",
    },
    introduction: {
      vi: "DolphinX Studio thiết kế UI/UX và phát triển Mobile App cho bán lẻ, dịch vụ, giáo dục, vận hành và sản phẩm startup. Dự án bao gồm trải nghiệm người dùng, backend, API, kiểm thử và hỗ trợ chuẩn bị phát hành lên App Store, Google Play.",
      en: "DolphinX Studio designs and develops mobile apps for retail, services, education, operations and startups, covering UX, backend, APIs, testing and store-release preparation.",
    },
    capabilities: [
      {
        title: { vi: "Ứng dụng iOS & Android", en: "iOS and Android apps" },
        description: { vi: "Phát triển đa nền tảng hoặc theo nền tảng riêng dựa trên trải nghiệm, hiệu năng và phạm vi sản phẩm.", en: "Cross-platform or native delivery based on experience, performance and product scope." },
      },
      {
        title: { vi: "MVP cho startup", en: "Startup MVPs" },
        description: { vi: "Xác định luồng cốt lõi, prototype, bản phát hành đầu tiên và dữ liệu cần theo dõi để kiểm chứng thị trường.", en: "Define core journeys, prototypes, the first release and metrics needed for market validation." },
      },
      {
        title: { vi: "Ứng dụng vận hành doanh nghiệp", en: "Business operations apps" },
        description: { vi: "Nhận việc, checklist, lịch hẹn, hồ sơ, thông báo và đồng bộ dữ liệu cho đội ngũ di động.", en: "Tasks, checklists, bookings, records, notifications and data sync for mobile teams." },
      },
      {
        title: { vi: "Backend và phát hành store", en: "Backend and store release" },
        description: { vi: "API, đăng nhập, phân quyền, analytics, crash report và chuẩn bị hồ sơ phát hành ứng dụng.", en: "APIs, authentication, permissions, analytics, crash reporting and store submission preparation." },
      },
    ],
    faqs: [
      {
        question: { vi: "Nên làm ứng dụng iOS, Android hay cả hai?", en: "Should we build for iOS, Android or both?" },
        answer: { vi: "Lựa chọn phụ thuộc nhóm người dùng, thiết bị phổ biến, ngân sách và yêu cầu trải nghiệm. Nhiều MVP có thể bắt đầu đa nền tảng để giảm thời gian kiểm chứng.", en: "The choice depends on users, device mix, budget and experience requirements. Many MVPs can begin cross-platform to shorten validation time." },
      },
      {
        question: { vi: "Chi phí phát triển Mobile App phụ thuộc vào gì?", en: "What affects mobile app development cost?" },
        answer: { vi: "Các yếu tố chính gồm số màn hình, nền tảng, backend, tài khoản người dùng, thanh toán, thông báo, tích hợp, kiểm thử và yêu cầu phát hành store.", en: "Key factors include screen count, platforms, backend, user accounts, payments, notifications, integrations, testing and store-release requirements." },
      },
      {
        question: { vi: "DolphinX có hỗ trợ đưa ứng dụng lên App Store và Google Play không?", en: "Does DolphinX support App Store and Google Play submission?" },
        answer: { vi: "Có. DolphinX hỗ trợ chuẩn bị build, hình ảnh, mô tả và các yêu cầu kỹ thuật. Tài khoản nhà phát triển và quyết định duyệt cuối cùng thuộc Apple hoặc Google.", en: "Yes. DolphinX supports builds, imagery, descriptions and technical requirements. Developer accounts and final approval remain with Apple or Google." },
      },
      {
        question: { vi: "Sau khi phát hành có bảo trì và nâng cấp không?", en: "Is post-launch maintenance available?" },
        answer: { vi: "Có thể xây kế hoạch bảo trì theo phạm vi gồm theo dõi lỗi, cập nhật hệ điều hành, cải tiến tính năng và hỗ trợ vận hành sau phát hành.", en: "A scoped maintenance plan can cover error monitoring, operating-system updates, feature improvements and post-release support." },
      },
    ],
    relatedLinks: [
      { href: "/web-app", label: { vi: "Backend và phần mềm quản trị doanh nghiệp", en: "Backend and business administration software" } },
      { href: "/zalo-mini-app", label: { vi: "Zalo Mini App không cần cài đặt", en: "Install-free Zalo Mini Apps" } },
      { href: "/website", label: { vi: "Website giới thiệu và landing page", en: "Corporate websites and landing pages" } },
    ],
  },
};

export function ServiceSeoContent({ service }: { service: ServiceKey }) {
  const { locale } = useLocale();
  const config = serviceSeoConfigs[service];
  const pick = (value: LocalizedText) => value[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(config.path)}#service`,
        name: config.serviceName,
        serviceType: config.serviceType,
        description: config.introduction.vi,
        url: absoluteUrl(config.path),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Việt Nam" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl(config.path),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(config.path)}#faq`,
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question.vi,
          acceptedAnswer: { "@type": "Answer", text: faq.answer.vi },
        })),
      },
    ],
  };

  return (
    <section className="deferred-section px-4 py-20 md:py-28" aria-labelledby={`${service}-service-heading`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr] md:items-end">
          <div>
            <span className="text-[10px] font-black tracking-[.16em] text-[#075fc2]">{pick(config.eyebrow)}</span>
            <h2 id={`${service}-service-heading`} className="dx-heading-gradient dx-vietnamese-title mt-4 font-[family-name:var(--display)] text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl md:leading-tight md:tracking-[-.05em]">{pick(config.title)}</h2>
          </div>
          <p className="max-w-2xl justify-self-end text-sm leading-7 text-slate-600 md:text-base">{pick(config.introduction)}</p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {config.capabilities.map((capability) => (
            <article key={capability.title.vi} className="rounded-[22px] border border-blue-100 bg-[#f8fbff] p-7 md:p-8">
              <CheckCircle2 size={21} className="text-[#075fc2]" />
              <h3 className="mt-5 text-base font-bold text-[#071c4b]">{pick(capability.title)}</h3>
              <p className="mt-3 text-xs leading-6 text-slate-600">{pick(capability.description)}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[.78fr_1.22fr]">
          <div>
            <span className="text-[10px] font-black tracking-[.16em] text-[#075fc2]">FAQ</span>
            <h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em]">{locale === "vi" ? "Câu hỏi thường gặp trước khi bắt đầu." : "Common questions before starting."}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">{locale === "vi" ? "Phạm vi chính xác được xác định sau khi hiểu mục tiêu, người dùng, dữ liệu và hệ thống cần kết nối." : "Exact scope is defined after understanding goals, users, data and connected systems."}</p>
          </div>
          <div className="grid gap-3">
            {config.faqs.map((faq) => (
              <details key={faq.question.vi} className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-blue-200 open:bg-blue-50/40">
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-[#071c4b]">{pick(faq.question)}</summary>
                <p className="mt-4 border-t border-blue-100 pt-4 text-xs leading-6 text-slate-600">{pick(faq.answer)}</p>
              </details>
            ))}
          </div>
        </div>

        <nav className="mt-12 rounded-2xl border border-blue-100 bg-white p-6" aria-label={locale === "vi" ? "Dịch vụ và nội dung liên quan" : "Related services and resources"}>
          <span className="text-[9px] font-black tracking-[.14em] text-slate-400">{locale === "vi" ? "XEM THÊM" : "EXPLORE MORE"}</span>
          <div className="mt-4 flex flex-wrap gap-3">
            {config.relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-50 px-4 text-[11px] font-bold text-[#075fc2]">
                {pick(item.label)} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
