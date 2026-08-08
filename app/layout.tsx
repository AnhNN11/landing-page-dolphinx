import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DolphinX Studio | Website, Zalo Mini App & Phần mềm doanh nghiệp",
    template: "%s | DolphinX Studio",
  },
  description:
    "DolphinX Studio thiết kế website, phát triển Zalo Mini App và phần mềm theo yêu cầu cho doanh nghiệp, hộ kinh doanh tại Quảng Ngãi và toàn quốc.",
  keywords: [
    "thiết kế website Quảng Ngãi",
    "Zalo Mini App",
    "phần mềm doanh nghiệp",
    "phần mềm theo yêu cầu",
    "DolphinX Studio",
    "chuyển đổi số SME",
  ],
  authors: [{ name: "DolphinX Studio" }],
  creator: "DolphinX Studio",
  publisher: "DolphinX Studio",
  category: "Công nghệ thông tin",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "DolphinX Studio",
    title: "DolphinX Studio | Công nghệ gọn hơn. Kinh doanh lớn hơn.",
    description:
      "Website, Zalo Mini App và phần mềm theo yêu cầu cho doanh nghiệp Việt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DolphinX Studio | Giải pháp số cho doanh nghiệp",
    description:
      "Thiết kế website, Zalo Mini App và phần mềm theo yêu cầu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
