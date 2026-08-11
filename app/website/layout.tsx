import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Thiết kế Website & Landing Page chuyển đổi cao",
  description: "DolphinX Studio thiết kế website và landing page theo thương hiệu, tối ưu tốc độ, SEO và chuyển đổi cho startup và doanh nghiệp.",
  path: "/website",
});

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
