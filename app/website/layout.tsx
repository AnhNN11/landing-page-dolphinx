import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Dịch vụ thiết kế & phát triển Website tại Quảng Ngãi",
  description: "DolphinX Studio thiết kế website doanh nghiệp, landing page và website bán hàng tại Quảng Ngãi, tối ưu tốc độ, SEO kỹ thuật và chuyển đổi.",
  path: "/website",
});

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
