import type { ReactNode } from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Về chúng tôi",
  description:
    "DolphinX Studio là product studio tại Quảng Ngãi, thiết kế DXWeb, DXMobile, DXFlow và DXZalo cho doanh nghiệp Việt Nam.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
