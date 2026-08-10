import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "DolphinX Studio là product studio tại Quảng Ngãi, thiết kế DXWeb, DXMobile, DXFlow và DXZalo cho doanh nghiệp Việt Nam.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
