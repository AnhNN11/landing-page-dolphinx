export type MiniAppTemplate = {
  slug: string;
  name: string;
  category: string;
  icon: "education" | "food" | "reward" | "fashion" | "market" | "health";
  eyebrow: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  accent: string;
  accentSoft: string;
  modules: string[];
  screens: string[];
};

export const miniAppTemplates: MiniAppTemplate[] = [
  {
    slug: "campus-hub",
    name: "Campus Hub",
    category: "Giáo dục",
    icon: "education",
    eyebrow: "EDUCATION MINI APP",
    headline: "Một cổng thông tin gọn nhẹ cho toàn bộ hành trình học viên.",
    summary: "Tuyển sinh, thông báo và lịch học ngay trong Zalo.",
    challenge: "Thông tin tuyển sinh, lịch học và thông báo thường nằm ở nhiều nhóm chat hoặc biểu mẫu rời rạc.",
    approach: "Tổ chức lại các điểm chạm thành một cổng học viên đơn giản, dễ tra cứu và phù hợp với thói quen sử dụng Zalo.",
    accent: "#075fc2",
    accentSoft: "#eaf4ff",
    modules: ["Form đăng ký tuyển sinh", "Bản tin và thông báo", "Quản lý lịch học", "Hồ sơ học viên"],
    screens: ["Trang chủ học viên", "Lịch học", "Bản tin", "Đăng ký tư vấn"],
  },
  {
    slug: "bistro-order",
    name: "Bistro Order",
    category: "F&B",
    icon: "food",
    eyebrow: "F&B MINI APP",
    headline: "Từ xem menu đến đặt món trong một trải nghiệm liền mạch.",
    summary: "Menu điện tử, giỏ hàng, giao nhận và membership cho F&B.",
    challenge: "Khách phải chuyển qua nhiều kênh để xem món, hỏi giá, đặt hàng và theo dõi ưu đãi thành viên.",
    approach: "Đưa menu, lựa chọn topping, giỏ hàng và thông tin thành viên vào một luồng thao tác ngắn ngay trong Mini App.",
    accent: "#f07832",
    accentSoft: "#fff1e8",
    modules: ["Menu theo danh mục", "Tuỳ chọn món và topping", "Giỏ hàng và giao nhận", "Thông báo thành viên"],
    screens: ["Menu hôm nay", "Chi tiết món", "Giỏ hàng", "Thành viên"],
  },
  {
    slug: "reward-spin",
    name: "Reward Spin",
    category: "Loyalty",
    icon: "reward",
    eyebrow: "LOYALTY MINI APP",
    headline: "Biến một chiến dịch quà tặng thành trải nghiệm có thể đo lường.",
    summary: "Đăng ký, vòng quay thưởng, kho quà và lịch sử trúng thưởng.",
    challenge: "Các chương trình quay thưởng thủ công khó kiểm soát lượt tham gia, dữ liệu khách hàng và lịch sử nhận quà.",
    approach: "Thiết kế hành trình minh bạch từ điều kiện tham gia, lượt quay đến thông báo và lưu trữ phần thưởng.",
    accent: "#7c4dff",
    accentSoft: "#f1ecff",
    modules: ["Form tham gia", "Vòng quay may mắn", "Thông báo giải thưởng", "Kho voucher"],
    screens: ["Trang chiến dịch", "Vòng quay", "Kết quả", "Quà của tôi"],
  },
  {
    slug: "fashion-member",
    name: "Fashion Member",
    category: "e-Commerce",
    icon: "fashion",
    eyebrow: "FASHION MINI APP",
    headline: "Một cửa hàng thành viên được thiết kế cho màn hình nhỏ.",
    summary: "Sản phẩm, bộ lọc, thanh toán và theo dõi hạng thành viên.",
    challenge: "Danh mục thời trang nhiều biến thể dễ trở nên rối trên mobile, đặc biệt khi kết hợp mua hàng và quyền lợi thành viên.",
    approach: "Ưu tiên khả năng khám phá sản phẩm, chọn biến thể nhanh và giữ quyền lợi thành viên luôn dễ nhìn thấy.",
    accent: "#0c315f",
    accentSoft: "#e9f0f8",
    modules: ["Bộ lọc sản phẩm", "Giỏ hàng và thanh toán", "Theo dõi đơn hàng", "Hạng thành viên"],
    screens: ["Bộ sưu tập", "Chi tiết sản phẩm", "Thanh toán", "Member profile"],
  },
  {
    slug: "fresh-market",
    name: "Fresh Market",
    category: "Bán lẻ",
    icon: "market",
    eyebrow: "RETAIL MINI APP",
    headline: "Mua hàng thiết yếu nhanh như gửi một tin nhắn.",
    summary: "Danh mục hàng hoá, giỏ hàng, thanh toán và lịch sử đặt hàng.",
    challenge: "Cửa hàng bán lẻ cần danh mục dễ tìm, cập nhật được và một luồng đặt hàng phù hợp với khách mua lặp lại.",
    approach: "Tạo lối tắt theo nhóm hàng, tìm kiếm rõ ràng và cho phép mua lại từ đơn cũ để giảm số thao tác.",
    accent: "#0a9b6b",
    accentSoft: "#e7f8f1",
    modules: ["Danh mục và tìm kiếm", "Giỏ hàng", "Thanh toán", "Mua lại từ đơn cũ"],
    screens: ["Siêu thị", "Tìm kiếm", "Giỏ hàng", "Đơn đã mua"],
  },
  {
    slug: "health-booking",
    name: "Health Booking",
    category: "Dịch vụ",
    icon: "health",
    eyebrow: "HEALTHCARE MINI APP",
    headline: "Đặt lịch dịch vụ rõ ràng, nhẹ nhàng và đáng tin cậy.",
    summary: "Tra cứu dịch vụ, chuyên khoa, lịch hẹn và lịch sử sử dụng.",
    challenge: "Khách thường phải gọi điện để hỏi lịch trống, dịch vụ phù hợp và xác nhận lại thông tin hẹn.",
    approach: "Chia quy trình đặt lịch thành các bước dễ hiểu: chọn dịch vụ, chuyên gia, thời gian và xác nhận.",
    accent: "#13a6c8",
    accentSoft: "#e7f8fb",
    modules: ["Danh mục dịch vụ", "Đặt lịch theo chuyên gia", "Xác nhận lịch hẹn", "Lịch sử sử dụng"],
    screens: ["Dịch vụ", "Chuyên gia", "Chọn lịch", "Lịch hẹn của tôi"],
  },
];

export function getMiniAppTemplate(slug: string) {
  return miniAppTemplates.find((template) => template.slug === slug);
}
