import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiết kế Zalo Mini App cho doanh nghiệp",
  description:
    "DolphinX Studio phát triển Zalo Mini App tích điểm, membership, bán hàng, đặt lịch và tự động hóa chăm sóc khách hàng.",
  keywords: [
    "thiết kế Zalo Mini App",
    "Zalo Mini App Quảng Ngãi",
    "tích điểm Zalo OA",
    "membership Zalo",
    "mini app bán hàng",
  ],
  openGraph: {
    title: "Zalo Mini App | DolphinX Studio",
    description: "Biến Zalo OA thành một hành trình mua hàng và chăm sóc khách hàng liền mạch.",
  },
};

export default function ZaloMiniAppLayout({ children }: LayoutProps<"/zalo-mini-app">) {
  return children;
}
