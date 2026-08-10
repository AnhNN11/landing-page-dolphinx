import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "./globals.css";
import { GlobalExperience } from "./components/GlobalExperience";
import { LocaleProvider } from "./components/LocaleProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DolphinX Studio | Product Studio cho Startup, SaaS & Doanh nghiệp",
    template: "%s | DolphinX Studio",
  },
  description:
    "DolphinX Studio thiết kế website, phát triển Zalo Mini App, MVP và phần mềm theo yêu cầu cho startup, SaaS, doanh nghiệp và hộ kinh doanh.",
  keywords: [
    "thiết kế website Quảng Ngãi",
    "Zalo Mini App",
    "phần mềm doanh nghiệp",
    "phần mềm theo yêu cầu",
    "DolphinX Studio",
    "chuyển đổi số SME",
    "phát triển MVP startup",
    "thiết kế SaaS",
    "product studio Việt Nam",
    "khóa học fullstack web",
    "khóa học lập trình mobile",
    "lập trình cho trẻ em Quảng Ngãi",
  ],
  authors: [{ name: "DolphinX Studio" }],
  creator: "DolphinX Studio",
  publisher: "DolphinX Studio",
  category: "Công nghệ thông tin",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "DolphinX Studio",
    title: "DolphinX Studio | Sản phẩm số bắt đầu từ bài toán thật",
    description:
      "Product studio xây website, Zalo Mini App, MVP và phần mềm theo yêu cầu.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "DolphinX Studio — Sản phẩm số cho doanh nghiệp tăng trưởng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DolphinX Studio | Product Studio cho Startup & Doanh nghiệp",
    description:
      "Thiết kế website, Zalo Mini App và phần mềm theo yêu cầu.",
    images: ["/og.png"],
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: "globalThis.process ??= { env: {} }; globalThis.process.env ??= {};" }} />
      </head>
      <body>
        <LocaleProvider>
          <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>
          <GlobalExperience />
          <div id="main-content">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
