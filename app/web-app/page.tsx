import type { Metadata } from "next";
import { DigitalProductGallery, type DigitalProject } from "../components/DigitalProductGallery";

export const metadata: Metadata = { title: "Phát triển Web App & Phần mềm doanh nghiệp", description: "DolphinX Studio phát triển CRM, dashboard, phần mềm quản lý và web app theo yêu cầu cho doanh nghiệp." };

const projects: DigitalProject[] = [
  { id:"flowops-crm", name:"FlowOps CRM", category:"Sales Operations", headline:"Một nơi để nhìn thấy toàn bộ hành trình khách hàng.", summary:"CRM concept cho đội bán hàng quản lý lead, lịch sử trao đổi, cơ hội và hoạt động tiếp theo.", image:"/images/startup-meeting-pexels.jpg", accent:"#075fc2", features:["Lead pipeline","Activity log","Reporting"] },
  { id:"inventory-cloud", name:"Inventory Cloud", category:"Retail Operations", headline:"Tồn kho rõ ràng từ cửa hàng đến kênh bán online.", summary:"Web app quản lý hàng hoá, nhập xuất, cảnh báo tồn và đối soát theo chi nhánh.", image:"/images/project-retail-unsplash.jpg", accent:"#0a9b6b", features:["Multi-store","Stock alert","Reconciliation"] },
  { id:"booking-console", name:"Booking Console", category:"Service Management", headline:"Lịch hẹn, nhân sự và công suất trong cùng một màn hình.", summary:"Phần mềm điều phối lịch dịch vụ với phân ca, hồ sơ khách và báo cáo hiệu suất.", image:"/images/software-team-pexels.jpg", accent:"#7c4dff", features:["Calendar","Staff shifts","Customer records"] },
  { id:"retail-analytics", name:"Retail Analytics", category:"Business Intelligence", headline:"Dữ liệu bán hàng được chuyển thành quyết định dễ hiểu.", summary:"Dashboard theo dõi doanh thu, sản phẩm, cửa hàng và chiến dịch cho đội ngũ quản lý.", image:"/images/vietnamese-retail-team.png", accent:"#f07832", features:["KPI dashboard","Store compare","Export report"] },
];

export default function WebAppPage(){return <DigitalProductGallery eyebrow="WEB APP & BUSINESS SOFTWARE" title="Phần mềm được xây quanh cách doanh nghiệp" highlight="thực sự vận hành." description="CRM, dashboard và hệ thống quản lý theo yêu cầu với giao diện dễ dùng, dữ liệu rõ và khả năng mở rộng theo quy trình." projects={projects} mode="web"/>;}
