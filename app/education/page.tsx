import { EducationPageContent } from "./EducationPageContent";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Lập trình cho trẻ em 8–16 tuổi tại Quảng Ngãi",
  description: "DXAcademy by DolphinX Studio giúp trẻ 8–16 tuổi học Scratch, web, game, JavaScript, React và Python qua dự án thực hành theo nhóm nhỏ.",
  path: "/education",
});

export default function EducationPage() {
  return <EducationPageContent />;
}
