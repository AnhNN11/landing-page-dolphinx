import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Dịch vụ phát triển Zalo Mini App cho doanh nghiệp",
  description:
    "DolphinX Studio thiết kế và phát triển Zalo Mini App kết nối OA, thành viên, tích điểm, voucher, bán hàng, đặt lịch và phần mềm quản trị.",
  path: "/zalo-mini-app",
});

export default function ZaloMiniAppLayout({ children }: LayoutProps<"/zalo-mini-app">) {
  return children;
}
