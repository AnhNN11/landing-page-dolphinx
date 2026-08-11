import { StudioEditor } from "./StudioEditor";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "DolphinX Web Studio — Tự thiết kế website",
  description:
    "Trình thiết kế website trực quan của DolphinX Studio với template, khối nội dung, tuỳ chỉnh thương hiệu và xem trước responsive.",
  path: "/studio",
});

export default function StudioPage() {
  return <StudioEditor />;
}
