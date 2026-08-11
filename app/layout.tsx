import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "./globals.css";
import { GlobalExperience } from "./components/GlobalExperience";
import { LocaleProvider } from "./components/LocaleProvider";
import { absoluteUrl, serializeJsonLd, SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DolphinX Studio | Product Studio cho Startup, SaaS & Doanh nghiệp",
    template: "%s | DolphinX Studio",
  },
  description:
    "DolphinX Studio thiết kế website, phát triển Zalo Mini App, MVP và phần mềm theo yêu cầu cho startup, SaaS, doanh nghiệp và hộ kinh doanh.",
  alternates: { canonical: "/" },
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "DolphinX Studio",
      url: SITE_URL,
      logo: absoluteUrl("/icon.png"),
      image: absoluteUrl("/og.png"),
      description:
        "Product studio thiết kế website, Zalo Mini App, ứng dụng mobile và phần mềm theo yêu cầu cho doanh nghiệp Việt.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61565408955535",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "60 Nguyễn Trường Tộ",
        addressLocality: "Phường Đăk Cấm",
        addressRegion: "Quảng Ngãi",
        addressCountry: "VN",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "DolphinX Studio",
      url: SITE_URL,
      image: absoluteUrl("/og.png"),
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Việt Nam" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "60 Nguyễn Trường Tộ",
        addressLocality: "Phường Đăk Cấm",
        addressRegion: "Quảng Ngãi",
        addressCountry: "VN",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dịch vụ sản phẩm số",
        itemListElement: [
          "Thiết kế website và landing page",
          "Phát triển Zalo Mini App",
          "Phát triển mobile app",
          "Web app và phần mềm theo yêu cầu",
          "Đào tạo lập trình",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DolphinX Studio",
      inLanguage: ["vi-VN", "en"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "globalThis.process ??= { env: {} }; globalThis.process.env ??= {};" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
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
