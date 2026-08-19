import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Thiết kế Website tại Quảng Ngãi & Landing Page",
  description: "DolphinX Studio thiết kế website tại Quảng Ngãi và landing page theo thương hiệu, tối ưu tốc độ, SEO và chuyển đổi cho doanh nghiệp.",
  path: "/website",
});

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
