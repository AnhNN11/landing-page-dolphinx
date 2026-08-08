export type BlogGraphic = "miniapp" | "landing" | "loyalty" | "seo" | "automation" | "roadmap";

export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  graphic: BlogGraphic;
  accent: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  takeaway: string;
  sources?: Array<{ label: string; href: string }>;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "zalo-mini-app-phu-hop-voi-doanh-nghiep-nao",
    title: "Zalo Mini App phù hợp với mô hình doanh nghiệp nào?",
    category: "Zalo Mini App",
    excerpt: "Nhận diện những bài toán nên làm Mini App trước khi bắt đầu đầu tư giao diện và tính năng.",
    description: "Hướng dẫn doanh nghiệp đánh giá khi nào nên triển khai Zalo Mini App dựa trên tần suất tương tác, dữ liệu và hành trình khách hàng.",
    date: "2026-08-08",
    dateLabel: "08.08.2026",
    readingTime: "7 phút đọc",
    graphic: "miniapp",
    accent: "#075fc2",
    intro: "Mini App hiệu quả nhất khi nó rút ngắn một hành trình vốn đang diễn ra rời rạc: khách xem sản phẩm ở một nơi, hỏi tư vấn ở một nơi và quay lại nhận ưu đãi ở một nơi khác. Bài toán cần giải quyết nên đến trước danh sách tính năng.",
    sections: [
      { heading: "Bắt đầu từ tần suất quay lại", paragraphs: ["Nếu khách hàng chỉ tương tác một lần rồi rời đi, một landing page tốt có thể đã đủ. Mini App phát huy giá trị khi người dùng quay lại để mua hàng, đặt lịch, kiểm tra đơn, tích điểm hoặc nhận quyền lợi."], bullets: ["F&B và bán lẻ có mua lặp lại", "Spa, phòng khám và dịch vụ có lịch hẹn", "Giáo dục có lịch học và thông báo", "Thương hiệu có chương trình thành viên"] },
      { heading: "Dữ liệu phải phục vụ trải nghiệm", paragraphs: ["Thu thập nhiều dữ liệu không tự động tạo ra tăng trưởng. Doanh nghiệp cần xác định dữ liệu nào giúp cá nhân hoá ưu đãi, giảm thao tác hoặc hỗ trợ đội ngũ chăm sóc khách hàng.", "Một mô hình dữ liệu nhỏ nhưng sử dụng đều đặn thường có giá trị hơn một hệ thống phức tạp không ai vận hành."] },
      { heading: "MVP nên có một hành trình chính", paragraphs: ["Phiên bản đầu tiên nên tập trung vào một hành trình tạo giá trị rõ nhất, ví dụ đặt món, đặt lịch hoặc quản lý thành viên. Những module còn lại có thể mở rộng sau khi có dữ liệu sử dụng thật."], bullets: ["Một CTA chính trên trang chủ", "Không quá bốn mục điều hướng", "Thông báo trạng thái rõ ràng", "Có chỉ số để đo sau khi ra mắt"] },
    ],
    takeaway: "Mini App không cần nhiều tính năng để hữu ích; nó cần giải quyết đúng một hành trình được khách hàng lặp lại.",
    sources: [{ label: "Zalo Mini App Blog", href: "https://miniapp.zaloplatforms.com/blog/" }, { label: "ZaUI Templates", href: "https://miniapp.zaloplatforms.com/zaui-templates" }],
  },
  {
    slug: "thiet-ke-zalo-mini-app-de-khach-hang-muon-quay-lai",
    title: "Thiết kế Zalo Mini App để khách hàng muốn quay lại",
    category: "UX/UI",
    excerpt: "Từ trang chủ, voucher đến lịch sử giao dịch: cấu trúc nào giúp Mini App dễ hiểu trên màn hình nhỏ?",
    description: "Các nguyên tắc UX/UI cho Zalo Mini App về điều hướng, nội dung, loyalty và trải nghiệm mua lặp lại.",
    date: "2026-08-06",
    dateLabel: "06.08.2026",
    readingTime: "6 phút đọc",
    graphic: "loyalty",
    accent: "#7c4dff",
    intro: "Người dùng mở Mini App để hoàn thành một việc, không phải để học cách sử dụng một giao diện mới. Điều hướng quen thuộc, trạng thái rõ và nội dung đúng ngữ cảnh quan trọng hơn hiệu ứng phức tạp.",
    sections: [
      { heading: "Trang chủ cần trả lời ba câu hỏi", paragraphs: ["Tôi đang có quyền lợi gì, tôi có thể làm gì ngay bây giờ và trạng thái gần nhất của tôi là gì. Ba câu trả lời này nên xuất hiện trong vùng nhìn đầu tiên."], bullets: ["Điểm hoặc hạng thành viên", "Tác vụ chính như đặt món hay đặt lịch", "Đơn hàng, lịch hẹn hoặc voucher gần nhất"] },
      { heading: "Thiết kế cho ngón tay và sự gián đoạn", paragraphs: ["Nút bấm cần đủ lớn, nội dung phải có thứ tự và người dùng có thể quay lại hoàn thành tác vụ sau khi bị gián đoạn. Các form dài nên được chia bước và lưu trạng thái hợp lý."] },
      { heading: "Loyalty phải dễ hiểu", paragraphs: ["Khách cần biết cách nhận điểm, dùng điểm và thời hạn quyền lợi mà không phải đọc một trang thể lệ dài. Lịch sử giao dịch là phần tạo niềm tin quan trọng nhưng thường bị bỏ quên."], bullets: ["Hiển thị số dư và thay đổi gần nhất", "Giải thích điều kiện ngay cạnh CTA", "Cho biết voucher đã dùng hoặc hết hạn", "Tránh gamification không gắn với giá trị thật"] },
    ],
    takeaway: "Một Mini App tốt khiến khách hoàn thành tác vụ mà không phải suy nghĩ về cấu trúc của ứng dụng.",
    sources: [{ label: "ZaUI Coffee Tutorial", href: "https://miniapp.zaloplatforms.com/documents/tutorial/coffee-shop/" }],
  },
  {
    slug: "landing-page-khac-website-nhu-the-nao",
    title: "Landing page khác website như thế nào khi mục tiêu là bán hàng?",
    category: "Landing Page",
    excerpt: "Chọn đúng định dạng cho chiến dịch ngắn hạn, thương hiệu dài hạn và hành trình tìm kiếm của khách hàng.",
    description: "So sánh landing page và website theo mục tiêu chuyển đổi, SEO, nội dung và chi phí vận hành cho doanh nghiệp.",
    date: "2026-08-04",
    dateLabel: "04.08.2026",
    readingTime: "8 phút đọc",
    graphic: "landing",
    accent: "#f07832",
    intro: "Landing page và website không loại trừ nhau. Một bên tập trung vào một hành động trong một chiến dịch; bên còn lại xây nền tảng thông tin và niềm tin dài hạn. Quyết định sai thường đến từ việc bắt đầu bằng giao diện thay vì mục tiêu.",
    sections: [
      { heading: "Khi nào landing page là lựa chọn đúng", paragraphs: ["Landing page phù hợp khi bạn có một nguồn traffic, một thông điệp và một hành động chính. Ví dụ: đăng ký hội thảo, nhận tư vấn, đặt mua sản phẩm mới hoặc tải tài liệu."], bullets: ["Chiến dịch có thời hạn", "Một nhóm khách hàng cụ thể", "Một offer rõ ràng", "Có ngân sách quảng cáo và đo chuyển đổi"] },
      { heading: "Khi nào cần website đầy đủ", paragraphs: ["Website phù hợp khi khách cần tìm hiểu nhiều nhóm dịch vụ, kiểm chứng năng lực, đọc nội dung chuyên sâu hoặc quay lại thường xuyên. Nó cũng là nền tảng tốt hơn cho chiến lược SEO dài hạn."] },
      { heading: "Cách hai nền tảng làm việc cùng nhau", paragraphs: ["Website giữ vai trò trung tâm thương hiệu và nội dung. Landing page được tạo theo từng chiến dịch, nhưng vẫn dùng chung hệ thống màu, font, tracking và dữ liệu khách hàng.", "Khi thiết kế cùng một hệ thống, doanh nghiệp không phải bắt đầu lại từ đầu cho mỗi chiến dịch."] },
    ],
    takeaway: "Chọn landing page cho một mục tiêu chuyển đổi; chọn website cho một hệ thống thương hiệu và tăng trưởng dài hạn.",
  },
  {
    slug: "checklist-landing-page-chuyen-doi",
    title: "Checklist landing page chuyển đổi: kiểm tra gì trước khi chạy quảng cáo?",
    category: "Landing Page",
    excerpt: "Một checklist thực dụng cho thông điệp, CTA, mobile, tốc độ, tracking và niềm tin.",
    description: "Checklist tối ưu landing page trước khi chạy quảng cáo, bao gồm nội dung, UX mobile, hiệu suất và đo lường.",
    date: "2026-08-02",
    dateLabel: "02.08.2026",
    readingTime: "9 phút đọc",
    graphic: "seo",
    accent: "#0a9b6b",
    intro: "Một trang đẹp có thể vẫn không tạo chuyển đổi nếu thông điệp mơ hồ, form gây ngại hoặc dữ liệu đo lường chưa sẵn sàng. Kiểm tra trước khi mua traffic luôn rẻ hơn sửa sau chiến dịch.",
    sections: [
      { heading: "Thông điệp trong năm giây đầu", paragraphs: ["Khách cần biết trang dành cho ai, giải quyết vấn đề gì và bước tiếp theo là gì. Headline không nên chỉ là khẩu hiệu; nó phải có thông tin đủ để người đọc tự nhận ra mình."], bullets: ["Headline nói rõ kết quả", "Subheadline giải thích cách làm", "CTA dùng động từ cụ thể", "Hình ảnh hỗ trợ đúng sản phẩm"] },
      { heading: "Mobile và tốc độ", paragraphs: ["Phần lớn lỗi chuyển đổi xuất hiện trên màn hình nhỏ: chữ quá bé, CTA nằm ngoài tầm tay, form dài hoặc ảnh tải chậm. Hãy kiểm tra bằng thiết bị thật và kết nối mạng thông thường."] },
      { heading: "Tracking trước traffic", paragraphs: ["Đừng chờ đến khi chiến dịch chạy mới kiểm tra dữ liệu. Sự kiện gửi form, nhấn gọi hành động và trạng thái thành công cần được xác nhận trước."], bullets: ["Đặt tên sự kiện nhất quán", "Kiểm tra trang cảm ơn", "Loại bỏ gửi form trùng", "Ghi lại phiên bản nội dung khi A/B test"] },
    ],
    takeaway: "Landing page sẵn sàng chạy quảng cáo khi thông điệp, trải nghiệm và đo lường cùng chỉ về một mục tiêu.",
  },
  {
    slug: "nen-tang-so-cho-doanh-nghiep-nho",
    title: "Nền tảng số cho doanh nghiệp nhỏ: nên xây gì trước?",
    category: "Chuyển đổi số",
    excerpt: "Một lộ trình ưu tiên website, dữ liệu khách hàng, tự động hoá và phần mềm mà không làm hệ thống quá nặng.",
    description: "Lộ trình xây nền tảng số thực tế cho SME, từ website và dữ liệu khách hàng đến tự động hoá vận hành.",
    date: "2026-07-30",
    dateLabel: "30.07.2026",
    readingTime: "8 phút đọc",
    graphic: "roadmap",
    accent: "#13a6c8",
    intro: "Chuyển đổi số không bắt đầu bằng việc mua nhiều phần mềm. Nó bắt đầu bằng việc xác định điểm nào đang làm mất khách, mất thời gian hoặc mất dữ liệu, sau đó xây một lớp giải pháp đủ nhỏ để đội ngũ sử dụng được.",
    sections: [
      { heading: "Lớp một: điểm chạm khách hàng", paragraphs: ["Website hoặc landing page cần làm rõ doanh nghiệp cung cấp gì và khách nên thực hiện bước nào. Đây là nơi chuẩn hoá thông điệp trước khi đầu tư quảng cáo hoặc automation."] },
      { heading: "Lớp hai: dữ liệu và chăm sóc", paragraphs: ["Form, Zalo Mini App hoặc CRM cần gom đúng dữ liệu để đội ngũ có thể theo dõi trạng thái và chăm sóc lại. Không nên nhập cùng một thông tin ở nhiều hệ thống."], bullets: ["Nguồn khách hàng", "Nhu cầu và trạng thái", "Lịch sử tương tác", "Đồng ý nhận chăm sóc"] },
      { heading: "Lớp ba: tự động hoá có kiểm soát", paragraphs: ["Tự động hoá nên xử lý việc lặp lại như phân loại lead, gửi nhắc lịch hoặc cập nhật trạng thái. Những quyết định cần bối cảnh vẫn nên có con người tham gia."] },
    ],
    takeaway: "Xây nền tảng số theo từng lớp: điểm chạm, dữ liệu, rồi mới tự động hoá quy trình đã rõ.",
  },
  {
    slug: "tu-dong-hoa-quy-trinh-khong-lam-mat-trai-nghiem",
    title: "Tự động hoá quy trình mà không làm mất trải nghiệm con người",
    category: "Automation",
    excerpt: "Chọn đúng bước để tự động hoá trong marketing, bán hàng và chăm sóc khách hàng.",
    description: "Nguyên tắc thiết kế automation cho doanh nghiệp, cân bằng hiệu suất vận hành và trải nghiệm khách hàng.",
    date: "2026-07-28",
    dateLabel: "28.07.2026",
    readingTime: "7 phút đọc",
    graphic: "automation",
    accent: "#075fc2",
    intro: "Automation tốt làm giảm thời gian chờ và sai sót. Automation kém tạo ra tin nhắn không đúng ngữ cảnh, dữ liệu trùng và cảm giác khách hàng đang nói chuyện với một hệ thống không hiểu mình.",
    sections: [
      { heading: "Tự động hoá tín hiệu, không tự động hoá sự thấu hiểu", paragraphs: ["Các bước dựa trên điều kiện rõ ràng có thể tự động: xác nhận đã nhận form, nhắc lịch, phân nhóm hoặc báo cho nhân viên phụ trách. Tư vấn giải pháp và xử lý ngoại lệ vẫn cần con người."] },
      { heading: "Thiết kế đường thoát", paragraphs: ["Mỗi luồng tự động cần có cách để khách yêu cầu hỗ trợ, sửa thông tin hoặc dừng nhận nội dung. Đây vừa là trải nghiệm tốt vừa giúp dữ liệu sạch hơn."], bullets: ["Cho biết tin nhắn được gửi vì lý do gì", "Có người phụ trách khi automation thất bại", "Không gửi lại cùng nội dung liên tục", "Ghi log trạng thái để kiểm tra"] },
      { heading: "Đo hiệu quả ở cấp quy trình", paragraphs: ["Đừng chỉ đo số tin nhắn đã gửi. Hãy theo dõi thời gian phản hồi, tỷ lệ hoàn thành, số lỗi cần xử lý thủ công và trải nghiệm sau mỗi điểm chạm."] },
    ],
    takeaway: "Tự động hoá nên làm quy trình nhanh và rõ hơn, đồng thời giữ một lối chuyển sang con người khi khách cần.",
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
