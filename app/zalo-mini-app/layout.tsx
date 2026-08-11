import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Thiết kế Zalo Mini App cho doanh nghiệp",
  description:
    "DolphinX Studio phát triển Zalo Mini App tích điểm, membership, bán hàng, đặt lịch và tự động hóa chăm sóc khách hàng.",
  path: "/zalo-mini-app",
});

export default function ZaloMiniAppLayout({ children }: LayoutProps<"/zalo-mini-app">) {
  return children;
}
