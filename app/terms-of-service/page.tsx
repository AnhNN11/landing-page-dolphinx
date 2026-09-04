import type { Metadata } from "next";
import { LegalDocument, type LegalDocumentData } from "../components/LegalDocument";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Điều khoản sử dụng",
  description:
    "Điều khoản sử dụng website, công cụ và dịch vụ của DolphinX Studio, bao gồm tài khoản, Google OAuth, nội dung người dùng và các dịch vụ bên thứ ba.",
  path: "/terms-of-service",
});

const termsOfService: LegalDocumentData = {
  kind: "terms",
  eyebrow: {
    vi: "TRUNG TÂM PHÁP LÝ · TERMS OF SERVICE",
    en: "LEGAL CENTER · TERMS OF SERVICE",
  },
  title: {
    vi: "Điều khoản sử dụng",
    en: "Terms of Service",
  },
  summary: {
    vi: "Những nguyên tắc rõ ràng để bạn sử dụng website, công cụ và dịch vụ DolphinX một cách an toàn, minh bạch và có trách nhiệm.",
    en: "Clear rules for using DolphinX websites, tools, and services safely, transparently, and responsibly.",
  },
  effectiveDate: {
    vi: "04 tháng 09, 2026",
    en: "September 4, 2026",
  },
  sibling: {
    href: "/privacy-policy",
    label: {
      vi: "Xem Chính sách quyền riêng tư",
      en: "View Privacy Policy",
    },
  },
  sections: [
    {
      id: "acceptance",
      title: {
        vi: "Chấp thuận Điều khoản",
        en: "Acceptance of the Terms",
      },
      paragraphs: [
        {
          vi: "Khi truy cập hoặc sử dụng website, công cụ hay dịch vụ có dẫn đến Điều khoản này, bạn xác nhận đã đọc và đồng ý tuân thủ Điều khoản sử dụng cùng Chính sách quyền riêng tư của DolphinX. Nếu bạn sử dụng thay mặt tổ chức, bạn xác nhận mình có thẩm quyền ràng buộc tổ chức đó.",
          en: "By accessing or using a website, tool, or service that links to these Terms, you confirm that you have read and agree to follow these Terms of Service and the DolphinX Privacy Policy. If you act for an organization, you confirm that you are authorized to bind it.",
        },
        {
          vi: "Nếu không đồng ý, vui lòng ngừng sử dụng phần dịch vụ liên quan. Một số sản phẩm hoặc dự án có thể có điều khoản bổ sung được trình bày trước khi bạn sử dụng hoặc ký kết.",
          en: "If you do not agree, please stop using the relevant service. Certain products or projects may have additional terms presented before use or contracting.",
        },
      ],
    },
    {
      id: "services",
      title: {
        vi: "Phạm vi dịch vụ DolphinX",
        en: "Scope of DolphinX services",
      },
      paragraphs: [
        {
          vi: "DolphinX cung cấp thông tin, công cụ và dịch vụ liên quan đến website, ứng dụng di động, web app, Zalo Mini App, phần mềm theo yêu cầu, tự động hóa và đào tạo công nghệ.",
          en: "DolphinX provides information, tools, and services related to websites, mobile apps, web apps, Zalo Mini Apps, custom software, automation, and technology education.",
        },
        {
          vi: "Nội dung, ví dụ, thời gian và mức giá trên website có tính tham khảo. Phạm vi, chi phí, tiến độ, tiêu chí nghiệm thu, quyền sở hữu và hỗ trợ của từng dự án được quy định trong báo giá, đơn đặt hàng hoặc hợp đồng riêng. Khi có khác biệt, thỏa thuận riêng đã ký sẽ được ưu tiên cho dự án đó.",
          en: "Website content, examples, timelines, and prices are indicative. Scope, fees, schedule, acceptance criteria, ownership, and support for each project are governed by a separate proposal, order, or contract. If there is a conflict, the signed project agreement controls for that project.",
        },
      ],
    },
    {
      id: "accounts-google",
      title: {
        vi: "Tài khoản và Google OAuth",
        en: "Accounts and Google OAuth",
      },
      paragraphs: [
        {
          vi: "Một số tính năng có thể cho phép bạn đăng nhập hoặc kết nối bằng tài khoản Google. Bạn phải cung cấp thông tin chính xác, bảo vệ quyền truy cập thiết bị và tài khoản, đồng thời thông báo cho DolphinX khi phát hiện việc sử dụng trái phép.",
          en: "Some features may let you sign in or connect with a Google Account. You must provide accurate information, protect access to your devices and accounts, and notify DolphinX if you discover unauthorized use.",
        },
        {
          vi: "DolphinX chỉ yêu cầu các quyền được hiển thị trên màn hình đồng ý của Google. Bạn có thể từ chối hoặc thu hồi quyền trong Tài khoản Google, nhưng khi đó tính năng phụ thuộc vào quyền này có thể không hoạt động. Việc sử dụng sản phẩm Google cũng chịu các điều khoản và chính sách riêng của Google.",
          en: "DolphinX requests only the permissions shown on Google's consent screen. You may decline or revoke access in your Google Account, but features that depend on that access may stop working. Your use of Google products is also subject to Google's own terms and policies.",
        },
      ],
    },
    {
      id: "acceptable-use",
      title: {
        vi: "Sử dụng được phép",
        en: "Acceptable use",
      },
      paragraphs: [
        {
          vi: "Bạn chỉ được sử dụng dịch vụ cho mục đích hợp pháp và phù hợp với quyền của mình. Bạn chịu trách nhiệm đối với hoạt động được thực hiện thông qua tài khoản hoặc nội dung do mình cung cấp.",
          en: "You may use the services only for lawful purposes and within your rights. You are responsible for activity performed through your account and for content you provide.",
        },
      ],
      items: [
        {
          vi: "Không truy cập trái phép, dò quét lỗ hổng, vượt qua biện pháp bảo mật hoặc gây quá tải dịch vụ.",
          en: "Do not gain unauthorized access, scan for vulnerabilities, bypass security controls, or overload the service.",
        },
        {
          vi: "Không phát tán mã độc, nội dung trái pháp luật, gian lận, lừa đảo hoặc dữ liệu mà bạn không có quyền sử dụng.",
          en: "Do not distribute malware, unlawful, fraudulent, or deceptive content, or data you have no right to use.",
        },
        {
          vi: "Không xâm phạm quyền riêng tư, quyền sở hữu trí tuệ hoặc quyền hợp pháp khác của bất kỳ cá nhân hay tổ chức nào.",
          en: "Do not infringe the privacy, intellectual property, or other legal rights of any person or organization.",
        },
        {
          vi: "Không sao chép, bán lại, khai thác tự động hoặc đảo ngược công nghệ độc quyền của DolphinX, trừ khi được pháp luật cho phép hoặc có chấp thuận bằng văn bản.",
          en: "Do not copy, resell, automatically exploit, or reverse engineer proprietary DolphinX technology unless permitted by law or approved in writing.",
        },
      ],
    },
    {
      id: "user-content",
      title: {
        vi: "Nội dung và dữ liệu của người dùng",
        en: "User content and data",
      },
      paragraphs: [
        {
          vi: "Bạn giữ quyền sở hữu đối với nội dung hợp pháp mà mình cung cấp, tải lên hoặc tạo ra. Bạn cho phép DolphinX xử lý nội dung đó trong phạm vi cần thiết để vận hành tính năng, thực hiện yêu cầu của bạn, bảo vệ dịch vụ và đáp ứng nghĩa vụ pháp lý.",
          en: "You retain ownership of lawful content you provide, upload, or create. You allow DolphinX to process that content only as needed to operate features, fulfill your requests, protect the service, and meet legal obligations.",
        },
        {
          vi: "Bạn xác nhận mình có đủ quyền đối với nội dung đã cung cấp và nội dung không vi phạm pháp luật hoặc quyền của bên thứ ba. DolphinX có thể gỡ bỏ hoặc hạn chế nội dung khi cần xử lý vi phạm, rủi ro bảo mật hoặc yêu cầu pháp lý hợp lệ.",
          en: "You confirm that you have sufficient rights to the content and that it does not violate law or third-party rights. DolphinX may remove or restrict content to address violations, security risks, or valid legal requests.",
        },
      ],
    },
    {
      id: "web-studio",
      title: {
        vi: "DolphinX Web Studio và lưu trữ cục bộ",
        en: "DolphinX Web Studio and local storage",
      },
      paragraphs: [
        {
          vi: "Bản nháp và hình ảnh trong DolphinX Web Studio hiện được lưu trong trình duyệt trên thiết bị của bạn và không tự động đồng bộ với máy chủ DolphinX. Việc xóa dữ liệu trình duyệt, dùng chế độ riêng tư, đổi trình duyệt hoặc đổi thiết bị có thể làm mất bản nháp.",
          en: "Drafts and images in DolphinX Web Studio are currently stored in the browser on your device and are not automatically synchronized to DolphinX servers. Clearing browser data, using private mode, changing browsers, or changing devices may remove your drafts.",
        },
        {
          vi: "Bạn nên xuất hoặc sao lưu nội dung quan trọng. DolphinX không chịu trách nhiệm đối với mất mát dữ liệu cục bộ do thao tác trên thiết bị, giới hạn trình duyệt hoặc sự cố ngoài khả năng kiểm soát hợp lý của chúng tôi.",
          en: "You should export or back up important content. DolphinX is not responsible for loss of locally stored data caused by device actions, browser limits, or events outside our reasonable control.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: {
        vi: "Sở hữu trí tuệ",
        en: "Intellectual property",
      },
      paragraphs: [
        {
          vi: "Tên gọi, nhãn hiệu, giao diện, mã nguồn, hình ảnh, tài liệu và nội dung do DolphinX tạo ra thuộc DolphinX hoặc bên cấp phép tương ứng, trừ nội dung của người dùng và sản phẩm đã được chuyển giao theo hợp đồng riêng.",
          en: "Names, trademarks, interfaces, source code, images, documents, and content created by DolphinX belong to DolphinX or the relevant licensor, except user content and deliverables transferred under a separate agreement.",
        },
        {
          vi: "Các bản mô phỏng, giao diện mẫu, số liệu minh họa và nội dung trình diễn trên website được dùng để giải thích năng lực hoặc ý tưởng, trừ khi được ghi rõ là dự án hoặc kết quả thực tế của khách hàng.",
          en: "Mockups, sample interfaces, illustrative metrics, and demonstration content on the website explain capabilities or concepts unless expressly identified as an actual client project or result.",
        },
      ],
    },
    {
      id: "third-parties",
      title: {
        vi: "Dịch vụ và liên kết bên thứ ba",
        en: "Third-party services and links",
      },
      paragraphs: [
        {
          vi: "Website hoặc ứng dụng có thể liên kết hay tích hợp với Google, Zalo, Facebook, nhà cung cấp lưu trữ và các dịch vụ khác. DolphinX không kiểm soát toàn bộ hoạt động, tính sẵn sàng hoặc nội dung của bên thứ ba. Việc bạn sử dụng các dịch vụ đó chịu điều khoản và chính sách riêng của họ.",
          en: "The website or applications may link to or integrate with Google, Zalo, Facebook, hosting providers, and other services. DolphinX does not control all third-party operations, availability, or content. Your use of those services is subject to their own terms and policies.",
        },
        {
          vi: "DolphinX sẽ lựa chọn và cấu hình đối tác trong phạm vi hợp lý, nhưng không bảo đảm rằng một dịch vụ bên thứ ba luôn hoạt động không gián đoạn hoặc không thay đổi API, điều khoản hay giới hạn sử dụng.",
          en: "DolphinX will select and configure partners with reasonable care, but does not guarantee that a third-party service will remain uninterrupted or will not change its APIs, terms, or usage limits.",
        },
      ],
    },
    {
      id: "availability-liability",
      title: {
        vi: "Tính sẵn sàng và giới hạn trách nhiệm",
        en: "Availability and limitation of liability",
      },
      paragraphs: [
        {
          vi: "DolphinX nỗ lực duy trì website và công cụ ổn định, an toàn, nhưng không cam kết dịch vụ luôn không gián đoạn, không có lỗi hoặc phù hợp với mọi mục đích. Bạn chịu trách nhiệm đánh giá kết quả trước khi dùng cho quyết định kinh doanh, pháp lý, tài chính hoặc vận hành quan trọng.",
          en: "DolphinX works to keep the website and tools stable and secure but does not promise uninterrupted, error-free service or fitness for every purpose. You are responsible for reviewing outputs before using them for important business, legal, financial, or operational decisions.",
        },
        {
          vi: "Trong phạm vi pháp luật cho phép, DolphinX không chịu trách nhiệm đối với thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc hệ quả phát sinh từ việc sử dụng dịch vụ miễn phí hay nội dung tham khảo. Trách nhiệm đối với dịch vụ trả phí được xác định theo hợp đồng liên quan. Không nội dung nào trong Điều khoản này loại trừ quyền bắt buộc của người tiêu dùng hoặc trách nhiệm không thể giới hạn theo pháp luật.",
          en: "To the extent permitted by law, DolphinX is not liable for indirect, incidental, special, or consequential losses arising from free services or informational content. Liability for paid services is governed by the relevant agreement. Nothing in these Terms excludes mandatory consumer rights or liability that cannot legally be limited.",
        },
      ],
    },
    {
      id: "suspension",
      title: {
        vi: "Tạm ngừng và chấm dứt",
        en: "Suspension and termination",
      },
      paragraphs: [
        {
          vi: "Bạn có thể ngừng sử dụng dịch vụ hoặc thu hồi kết nối Google bất kỳ lúc nào. DolphinX có thể hạn chế hoặc chấm dứt quyền sử dụng khi có vi phạm Điều khoản, rủi ro bảo mật, hành vi gây hại, yêu cầu pháp lý hoặc khi một tính năng bị ngừng cung cấp.",
          en: "You may stop using the service or revoke a Google connection at any time. DolphinX may restrict or terminate access for a Terms violation, security risk, harmful conduct, legal requirement, or discontinuation of a feature.",
        },
        {
          vi: "Sau khi chấm dứt, dữ liệu và token liên quan được xử lý theo Chính sách quyền riêng tư, thỏa thuận dự án và nghĩa vụ lưu giữ áp dụng.",
          en: "After termination, related data and tokens are handled under the Privacy Policy, project agreements, and applicable retention obligations.",
        },
      ],
    },
    {
      id: "changes-law",
      title: {
        vi: "Thay đổi, luật áp dụng và giải quyết tranh chấp",
        en: "Changes, governing law, and disputes",
      },
      paragraphs: [
        {
          vi: "DolphinX có thể cập nhật Điều khoản khi dịch vụ hoặc yêu cầu pháp lý thay đổi. Phiên bản mới được đăng tại URL này cùng ngày cập nhật. Việc tiếp tục sử dụng sau ngày có hiệu lực đồng nghĩa bạn chấp thuận phiên bản mới, trong phạm vi pháp luật cho phép.",
          en: "DolphinX may update these Terms when services or legal requirements change. The new version will be posted at this URL with an updated date. Continued use after the effective date means you accept the new version, to the extent permitted by law.",
        },
        {
          vi: "Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Khi có tranh chấp, các bên trước hết sẽ trao đổi thiện chí để tìm giải pháp. Nếu không thể giải quyết, tranh chấp có thể được đưa đến cơ quan có thẩm quyền theo pháp luật áp dụng.",
          en: "These Terms are governed by the laws of Vietnam. If a dispute arises, the parties will first try in good faith to resolve it through discussion. If unresolved, the dispute may be submitted to the competent authority under applicable law.",
        },
      ],
    },
  ],
};

export default function TermsOfServicePage() {
  return <LegalDocument data={termsOfService} />;
}
