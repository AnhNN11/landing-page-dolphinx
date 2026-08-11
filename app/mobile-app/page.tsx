import { DigitalProductGallery, type DigitalProject } from "../components/DigitalProductGallery";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Thiết kế Mobile App iOS & Android",
  description: "DolphinX Studio thiết kế và phát triển ứng dụng mobile cho bán lẻ, vận hành, giáo dục và dịch vụ.",
  path: "/mobile-app",
});

const projects: DigitalProject[] = [
  { id:"retail-companion", name:"Retail Companion", category:"Retail Mobile App", headline:"Mua sắm, thành viên và ưu đãi trong một ứng dụng.", summary:"Concept mobile app cho thương hiệu bán lẻ kết nối catalog, membership và lịch sử giao dịch.", image:"/images/mini-app-showcase.png", accent:"#075fc2", features:["Catalog","Membership","Order tracking"], imageFit:"cover", imagePosition:"center" },
  { id:"fieldops-mobile", name:"FieldOps Mobile", category:"Operations App", headline:"Công việc hiện trường được cập nhật ngay tại nơi diễn ra.", summary:"Ứng dụng cho đội ngũ kỹ thuật nhận việc, cập nhật checklist, hình ảnh và trạng thái bàn giao.", image:"/images/business-platform.png", accent:"#f07832", features:["Task board","Checklist","Offline sync"], imageFit:"cover", imagePosition:"center" },
  { id:"campus-connect", name:"Campus Connect", category:"Education App", headline:"Một cổng học tập gọn cho học viên và phụ huynh.", summary:"Concept ứng dụng giáo dục với lịch học, thông báo, tiến độ và liên hệ trung tâm.", image:"/images/zalo-vietnamese-students.webp", accent:"#7c4dff", features:["Schedule","Progress","Notifications"], imageFit:"cover", imagePosition:"center" },
  { id:"service-pocket", name:"Service Pocket", category:"Booking App", headline:"Đặt dịch vụ và theo dõi lịch hẹn không cần gọi điện.", summary:"Ứng dụng đặt lịch cho doanh nghiệp dịch vụ với hồ sơ khách hàng và nhắc hẹn.", image:"/images/zalo-real-hands-phones.webp", accent:"#0a9b6b", features:["Booking","Profiles","Reminders"], imageFit:"cover", imagePosition:"center" },
];

export default function MobileAppPage(){return <DigitalProductGallery eyebrow="MOBILE APP STUDIO" title="Ứng dụng mobile cho những hành trình" highlight="cần quay lại mỗi ngày." description="Thiết kế và phát triển ứng dụng iOS, Android theo nghiệp vụ thật — từ trải nghiệm người dùng đến dữ liệu và tích hợp phía sau." projects={projects} mode="mobile"/>;}
