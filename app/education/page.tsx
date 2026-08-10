import type { Metadata } from "next";
import { EducationPageContent } from "./EducationPageContent";

export const metadata: Metadata = {
  title: "Lập trình cho trẻ em 8–16 tuổi tại Quảng Ngãi",
  description: "DXAcademy by DolphinX Studio giúp trẻ 8–16 tuổi học Scratch, web, game, JavaScript, React và Python qua dự án thực hành theo nhóm nhỏ.",
  keywords: ["lập trình cho trẻ em", "khóa học coding cho trẻ", "Scratch cho trẻ em", "học lập trình Quảng Ngãi", "DXAcademy"],
};

export default function EducationPage() {
  return <EducationPageContent />;
}
