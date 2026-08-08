import type { Metadata } from "next";
import { StudioEditor } from "./StudioEditor";

export const metadata: Metadata = {
  title: "DolphinX Web Studio — Tự thiết kế website",
  description:
    "Trình thiết kế website trực quan của DolphinX Studio với template, khối nội dung, tuỳ chỉnh thương hiệu và xem trước responsive.",
};

export default function StudioPage() {
  return <StudioEditor />;
}
