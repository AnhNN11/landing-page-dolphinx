import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiết kế Website & Landing Page chuyển đổi cao",
  description: "DolphinX Studio thiết kế website và landing page theo thương hiệu, tối ưu tốc độ, SEO và chuyển đổi cho startup và doanh nghiệp.",
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
