import type { Metadata } from "next";
import { LegalDocument, type LegalDocumentData } from "../components/LegalDocument";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chính sách quyền riêng tư",
  description:
    "Chính sách quyền riêng tư của DolphinX Studio mô tả dữ liệu được thu thập, cách sử dụng, lưu giữ, chia sẻ và quyền của người dùng, bao gồm dữ liệu từ Google APIs.",
  path: "/privacy-policy",
});

const privacyPolicy: LegalDocumentData = {
  kind: "privacy",
  eyebrow: {
    vi: "TRUNG TÂM PHÁP LÝ · PRIVACY POLICY",
    en: "LEGAL CENTER · PRIVACY POLICY",
  },
  title: {
    vi: "Chính sách quyền riêng tư",
    en: "Privacy Policy",
  },
  summary: {
    vi: "Chúng tôi tôn trọng dữ liệu của bạn. Tài liệu này giải thích rõ DolphinX thu thập thông tin nào, sử dụng ra sao và cách bạn kiểm soát dữ liệu của mình.",
    en: "We respect your data. This document explains what DolphinX collects, how it is used, and how you can control your information.",
  },
  effectiveDate: {
    vi: "04 tháng 09, 2026",
    en: "September 4, 2026",
  },
  sibling: {
    href: "/terms-of-service",
    label: {
      vi: "Xem Điều khoản sử dụng",
      en: "View Terms of Service",
    },
  },
  sections: [
    {
      id: "controller",
      title: {
        vi: "Đơn vị chịu trách nhiệm",
        en: "Who is responsible",
      },
      paragraphs: [
        {
          vi: "CÔNG TY TNHH MTV DOLPHINX STUDIO (“DolphinX”, “chúng tôi”), mã số thuế 6101312616, địa chỉ 60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam, chịu trách nhiệm đối với việc xử lý dữ liệu được mô tả trong Chính sách này.",
          en: "CÔNG TY TNHH MTV DOLPHINX STUDIO (“DolphinX”, “we”, “us”), tax code 6101312616, at 60 Nguyen Truong To, Dak Cam Ward, Quang Ngai Province, Vietnam, is responsible for the data processing described in this Policy.",
        },
        {
          vi: "Chính sách áp dụng cho website dolphinxstudio.com, biểu mẫu tư vấn, DolphinX Web Studio và các ứng dụng do DolphinX cung cấp có dẫn liên kết đến tài liệu này.",
          en: "This Policy applies to dolphinxstudio.com, our consultation form, DolphinX Web Studio, and DolphinX applications that link to this document.",
        },
      ],
    },
    {
      id: "data-collected",
      title: {
        vi: "Dữ liệu chúng tôi xử lý",
        en: "Data we process",
      },
      paragraphs: [
        {
          vi: "Tùy vào cách bạn sử dụng website hoặc dịch vụ, DolphinX chỉ xử lý dữ liệu cần thiết để cung cấp tính năng bạn lựa chọn.",
          en: "Depending on how you use the website or services, DolphinX processes only the data needed to provide the features you choose.",
        },
      ],
      items: [
        {
          vi: "Thông tin bạn gửi qua biểu mẫu tư vấn: họ tên, số điện thoại, email (nếu có), dịch vụ quan tâm, ngân sách dự kiến, nội dung yêu cầu và trang gửi biểu mẫu.",
          en: "Information submitted through the consultation form: name, phone number, optional email, service of interest, estimated budget, request details, and the source page.",
        },
        {
          vi: "Thông tin tài khoản Google khi bạn chủ động đăng nhập hoặc kết nối Google: mã định danh tài khoản và các thông tin cơ bản hoặc quyền cụ thể được hiển thị trên màn hình đồng ý của Google.",
          en: "Google account information when you actively sign in or connect Google: your account identifier and the basic information or specific permissions shown on Google's consent screen.",
        },
        {
          vi: "Dữ liệu lưu trên thiết bị như lựa chọn ngôn ngữ, bản nháp thiết kế và hình ảnh bạn đưa vào DolphinX Web Studio.",
          en: "On-device data such as your language preference, design drafts, and images you add to DolphinX Web Studio.",
        },
        {
          vi: "Dữ liệu kỹ thuật tối thiểu do hạ tầng lưu trữ xử lý để phân phối website, phát hiện lỗi, chống lạm dụng và bảo vệ dịch vụ, chẳng hạn địa chỉ IP, loại trình duyệt, thời điểm và đường dẫn truy cập.",
          en: "Minimum technical data processed by our hosting infrastructure to deliver the website, detect errors, prevent abuse, and protect the service, such as IP address, browser type, access time, and requested path.",
        },
      ],
      note: {
        vi: "DolphinX không nhận hoặc lưu mật khẩu tài khoản Google của bạn.",
        en: "DolphinX does not receive or store your Google account password.",
      },
    },
    {
      id: "google-data",
      title: {
        vi: "Dữ liệu từ Google APIs",
        en: "Google API data",
      },
      paragraphs: [
        {
          vi: "Khi một tính năng cho phép đăng nhập bằng Google, chúng tôi có thể nhận tên, địa chỉ email, ảnh hồ sơ và mã định danh tài khoản để xác thực, tạo hồ sơ và bảo vệ tài khoản. Nếu một tính năng cần thêm dữ liệu Google, quyền truy cập cụ thể, loại dữ liệu và mục đích sử dụng sẽ được hiển thị trước khi bạn đồng ý.",
          en: "When a feature supports Google Sign-In, we may receive your name, email address, profile picture, and account identifier to authenticate you, create your profile, and protect your account. If a feature needs additional Google data, the specific permission, data type, and purpose will be shown before you consent.",
        },
        {
          vi: "Chúng tôi chỉ sử dụng dữ liệu Google để cung cấp hoặc cải thiện tính năng mà bạn chủ động yêu cầu; không bán dữ liệu Google, không dùng cho quảng cáo cá nhân hóa, đánh giá tín dụng, giám sát người dùng hoặc huấn luyện mô hình AI dùng chung.",
          en: "We use Google data only to provide or improve the feature you actively request. We do not sell Google data or use it for personalized advertising, credit assessment, user surveillance, or training general-purpose AI models.",
        },
        {
          vi: "Nhân sự chỉ được truy cập dữ liệu Google khi cần để bảo mật, xử lý sự cố theo yêu cầu của bạn, tuân thủ pháp luật hoặc khi bạn đã đồng ý rõ ràng. Quyền truy cập được giới hạn theo vai trò và nhu cầu công việc.",
          en: "Personnel may access Google data only when needed for security, user-requested support, legal compliance, or with your clear consent. Access is limited by role and business need.",
        },
      ],
      note: {
        vi: "Việc DolphinX sử dụng và chuyển giao thông tin nhận từ Google APIs tuân thủ Google API Services User Data Policy, bao gồm các yêu cầu về Limited Use:",
        en: "DolphinX's use and transfer of information received from Google APIs complies with the Google API Services User Data Policy, including its Limited Use requirements:",
      },
    },
    {
      id: "purposes",
      title: {
        vi: "Mục đích sử dụng dữ liệu",
        en: "How we use data",
      },
      paragraphs: [
        {
          vi: "DolphinX không sử dụng dữ liệu cá nhân cho mục đích không tương thích với lý do dữ liệu được thu thập. Khi pháp luật yêu cầu, chúng tôi sẽ xin sự đồng ý trước khi dùng dữ liệu cho một mục đích mới.",
          en: "DolphinX does not use personal data for purposes incompatible with why it was collected. Where required by law, we will request consent before using data for a new purpose.",
        },
      ],
      items: [
        {
          vi: "Tiếp nhận, phân loại và phản hồi yêu cầu tư vấn hoặc hỗ trợ.",
          en: "Receive, organize, and respond to consultation or support requests.",
        },
        {
          vi: "Xác thực người dùng và cung cấp tính năng đăng nhập hoặc kết nối Google đã được yêu cầu.",
          en: "Authenticate users and provide requested Google sign-in or connection features.",
        },
        {
          vi: "Vận hành, duy trì, xử lý lỗi và cải thiện độ an toàn, ổn định của dịch vụ.",
          en: "Operate, maintain, troubleshoot, and improve the safety and reliability of the service.",
        },
        {
          vi: "Ngăn chặn gian lận, lạm dụng hoặc truy cập trái phép và thực hiện nghĩa vụ pháp lý hợp lệ.",
          en: "Prevent fraud, abuse, or unauthorized access and satisfy valid legal obligations.",
        },
      ],
    },
    {
      id: "sharing",
      title: {
        vi: "Chia sẻ và bên xử lý dữ liệu",
        en: "Sharing and data processors",
      },
      paragraphs: [
        {
          vi: "Chúng tôi không bán dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ trong phạm vi cần thiết với nhà cung cấp hạ tầng, nhân sự hoặc nhà thầu có nghĩa vụ bảo mật, hoặc cơ quan có thẩm quyền khi pháp luật yêu cầu.",
          en: "We do not sell personal data. Data is shared only as needed with infrastructure providers, personnel or contractors bound by confidentiality, or competent authorities when legally required.",
        },
      ],
      items: [
        {
          vi: "Google Apps Script và Google Sheets để tiếp nhận, lưu và quản lý thông tin do bạn gửi qua biểu mẫu tư vấn.",
          en: "Google Apps Script and Google Sheets to receive, store, and manage information submitted through the consultation form.",
        },
        {
          vi: "Vercel, Cloudflare và các nhà cung cấp hạ tầng triển khai được DolphinX sử dụng để phân phối, bảo vệ và giám sát kỹ thuật cho website.",
          en: "Vercel, Cloudflare, and other deployment infrastructure providers used by DolphinX to deliver, protect, and technically monitor the website.",
        },
        {
          vi: "Đối tác dự án khác chỉ khi cần thiết để thực hiện dịch vụ đã thỏa thuận hoặc khi bạn đã được thông báo phù hợp.",
          en: "Other project partners only when necessary to provide an agreed service or after appropriate notice to you.",
        },
      ],
    },
    {
      id: "device-storage",
      title: {
        vi: "Cookie và lưu trữ trên thiết bị",
        en: "Cookies and on-device storage",
      },
      paragraphs: [
        {
          vi: "Website dùng bộ nhớ trình duyệt để ghi nhớ ngôn ngữ bạn chọn. DolphinX Web Studio có thể lưu bản nháp và hình ảnh trong trình duyệt để bạn tiếp tục làm việc trên cùng thiết bị. Các dữ liệu này không tự động được tải lên máy chủ DolphinX.",
          en: "The website uses browser storage to remember your selected language. DolphinX Web Studio may keep drafts and images in your browser so you can continue on the same device. This data is not automatically uploaded to DolphinX servers.",
        },
        {
          vi: "Bạn có thể xóa dữ liệu này trong cài đặt trình duyệt. Việc xóa dữ liệu trình duyệt, dùng chế độ riêng tư hoặc đổi thiết bị có thể làm mất bản nháp đã lưu cục bộ.",
          en: "You can remove this data in your browser settings. Clearing browser data, using private mode, or changing devices may remove locally stored drafts.",
        },
      ],
    },
    {
      id: "retention-security",
      title: {
        vi: "Thời gian lưu giữ và bảo mật",
        en: "Retention and security",
      },
      paragraphs: [
        {
          vi: "Yêu cầu tư vấn được lưu tối đa 24 tháng kể từ lần trao đổi cuối cùng, trừ khi cần lưu lâu hơn để thực hiện hợp đồng, giải quyết tranh chấp hoặc đáp ứng nghĩa vụ pháp lý. Hồ sơ dự án và giao dịch được lưu theo thời hạn pháp luật áp dụng.",
          en: "Consultation requests are retained for up to 24 months after the last interaction unless a longer period is needed to perform a contract, resolve a dispute, or meet a legal obligation. Project and transaction records are retained as required by applicable law.",
        },
        {
          vi: "Dữ liệu xác thực và token Google, nếu một ứng dụng DolphinX cần lưu, chỉ được giữ khi kết nối còn hoạt động và cần thiết cho tính năng bạn sử dụng. Sau khi bạn thu hồi quyền hoặc yêu cầu xóa, dữ liệu hoạt động sẽ được xóa trong vòng 30 ngày, trừ bản sao lưu có chu kỳ giới hạn hoặc dữ liệu phải lưu theo pháp luật.",
          en: "Google authentication data and tokens, if a DolphinX application needs to store them, are kept only while the connection is active and needed for your chosen feature. After you revoke access or request deletion, active data will be removed within 30 days, except limited-cycle backups or records that must be retained by law.",
        },
        {
          vi: "Chúng tôi áp dụng biện pháp kỹ thuật và tổ chức hợp lý như truyền dữ liệu được mã hóa, kiểm soát truy cập theo nhu cầu công việc và hạn chế quyền của nhà cung cấp. Tuy vậy, không hệ thống nào có thể bảo đảm an toàn tuyệt đối.",
          en: "We apply reasonable technical and organizational safeguards, including encrypted data transmission, need-to-know access controls, and limited provider permissions. No system, however, can guarantee absolute security.",
        },
      ],
    },
    {
      id: "your-rights",
      title: {
        vi: "Quyền và lựa chọn của bạn",
        en: "Your rights and choices",
      },
      paragraphs: [
        {
          vi: "Trong phạm vi pháp luật áp dụng, bạn có thể yêu cầu được biết, truy cập, chỉnh sửa, cung cấp bản sao, hạn chế xử lý, rút lại sự đồng ý hoặc xóa dữ liệu cá nhân. Bạn cũng có thể phản đối một số hoạt động xử lý và khiếu nại tới cơ quan có thẩm quyền.",
          en: "Subject to applicable law, you may ask to know about, access, correct, receive a copy of, restrict, withdraw consent to, or delete your personal data. You may also object to certain processing and lodge a complaint with a competent authority.",
        },
        {
          vi: "Để yêu cầu xóa dữ liệu tại DolphinX, hãy dùng biểu mẫu liên hệ ở cuối trang và ghi rõ “Yêu cầu xóa dữ liệu”, tài khoản hoặc địa chỉ email liên quan. Chúng tôi có thể cần xác minh danh tính trước khi xử lý yêu cầu.",
          en: "To request deletion from DolphinX, use the contact form linked at the end of this page and include “Data deletion request” plus the relevant account or email address. We may need to verify your identity before processing the request.",
        },
        {
          vi: "Bạn có thể thu hồi quyền truy cập Google bất kỳ lúc nào tại trang quản lý ứng dụng kết nối trong Tài khoản Google. Việc thu hồi có thể khiến tính năng liên quan ngừng hoạt động.",
          en: "You can revoke Google access at any time from the connected apps page in your Google Account. Revocation may cause the related feature to stop working.",
        },
      ],
    },
    {
      id: "children",
      title: {
        vi: "Dữ liệu của trẻ em",
        en: "Children's data",
      },
      paragraphs: [
        {
          vi: "Các dịch vụ đào tạo dành cho người chưa thành niên được cung cấp với sự tham gia của cha mẹ hoặc người giám hộ. Website không chủ đích cho phép trẻ em tự tạo tài khoản hoặc kết nối Google nếu chưa có sự đồng ý phù hợp. Nếu cho rằng trẻ đã gửi dữ liệu không đúng quy định, cha mẹ hoặc người giám hộ có thể yêu cầu chúng tôi xóa dữ liệu.",
          en: "Training services for minors are provided with parent or guardian involvement. The website is not intended to let children independently create accounts or connect Google without appropriate consent. A parent or guardian who believes a child submitted data improperly may ask us to delete it.",
        },
      ],
    },
    {
      id: "changes",
      title: {
        vi: "Thay đổi Chính sách",
        en: "Changes to this Policy",
      },
      paragraphs: [
        {
          vi: "Chúng tôi có thể cập nhật Chính sách này khi tính năng, nhà cung cấp hoặc yêu cầu pháp lý thay đổi. Phiên bản mới sẽ được đăng tại URL này cùng ngày cập nhật. Nếu thay đổi ảnh hưởng đáng kể đến quyền của bạn, DolphinX sẽ thông báo bằng phương thức phù hợp trước khi thay đổi có hiệu lực khi pháp luật yêu cầu.",
          en: "We may update this Policy when features, providers, or legal requirements change. The new version will be posted at this URL with an updated date. If a change materially affects your rights, DolphinX will provide appropriate notice before it takes effect where required by law.",
        },
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
  return <LegalDocument data={privacyPolicy} />;
}
