"use client";

import Image from "next/image";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Coffee,
  GraduationCap,
  HeartHandshake,
  Hotel,
  MessageCircleMore,
  QrCode,
  RefreshCcw,
  ScanLine,
  ShoppingBag,
  Star,
  Store,
  TicketPercent,
  UserRoundCheck,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ReferenceGallery } from "../components/ReferenceGallery";
import { ServiceFooter, ServiceNav } from "../components/MarketingChrome";
import { ServicePricing } from "../components/ServicePricing";
import { StableLink as Link } from "../components/StableLink";

const features: Array<[LucideIcon, string, string, string]> = [
  [UserRoundCheck, "Membership", "Thẻ thành viên số, cấp hạng và quyền lợi hiển thị ngay trong Zalo.", "bg-cyan-50 text-cyan-700"],
  [Star, "Tích điểm", "Quét bill, cộng điểm, đổi quà và theo dõi lịch sử giao dịch rõ ràng.", "bg-blue-50 text-blue-700"],
  [TicketPercent, "Ưu đãi", "Voucher cá nhân hóa theo nhóm khách hàng, hành vi và thời điểm.", "bg-violet-50 text-violet-700"],
  [ShoppingBag, "Mua hàng", "Danh mục, giỏ hàng, trạng thái đơn và hỗ trợ sau bán trong một luồng.", "bg-emerald-50 text-emerald-700"],
  [CalendarDays, "Đặt lịch", "Chọn dịch vụ, chi nhánh, nhân sự và khung giờ thuận tiện.", "bg-orange-50 text-orange-700"],
  [UsersRound, "Giới thiệu bạn bè", "Mã giới thiệu, thưởng hai chiều và đo lường hiệu quả chiến dịch.", "bg-rose-50 text-rose-700"],
];

const industries: Array<[LucideIcon, string, string]> = [
  [Store, "Bán lẻ", "Thành viên · tích điểm · đổi quà"],
  [Coffee, "F&B", "Đặt món · voucher · đặt bàn"],
  [HeartHandshake, "Spa & làm đẹp", "Đặt lịch · liệu trình · chăm sóc"],
  [GraduationCap, "Giáo dục", "Tuyển sinh · học viên · thông báo"],
  [Hotel, "Lưu trú", "Đặt phòng · ưu đãi · khách thân thiết"],
  [ShoppingBag, "Thương mại", "Mua hàng · đơn hàng · hậu mãi"],
];

export default function ZaloMiniAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <ServiceNav />

      <section className="relative overflow-hidden bg-[#071c4b] px-4 pb-20 pt-16 text-white md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(20,203,244,.34),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(20,113,230,.28),transparent_33%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-[10px] font-extrabold tracking-[.14em] text-cyan-200"><span className="grid h-6 w-10 place-items-center rounded-md bg-white"><Image src="/images/zalo-wordmark.png" alt="Zalo" width={320} height={115} className="h-auto w-8"/></span> MINI APP STUDIO</span>
            <h1 className="mt-7 max-w-2xl font-[family-name:var(--display)] text-[clamp(50px,7vw,88px)] font-semibold leading-[.98] tracking-[-.06em]">Mọi trải nghiệm khách hàng, <span className="dx-gradient-text-light">ngay trong Zalo.</span></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-300 md:text-base">Từ tích điểm, ưu đãi đến mua hàng và đặt lịch — DolphinX xây một Mini App liền mạch, dễ dùng và kết nối được với vận hành thật.</p>
            <div className="mt-9 flex flex-wrap gap-4"><Link className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-400 px-6 text-xs font-extrabold text-[#071c4b] shadow-xl shadow-cyan-500/20" href="/#contact">Liên hệ ngay <ArrowRight size={17}/></Link><a className="flex min-h-12 items-center gap-2 px-2 text-xs font-bold text-white" href="#templates">Xem sản phẩm đang chạy <ArrowRight size={16}/></a><a className="flex min-h-12 items-center gap-2 px-2 text-xs font-bold text-cyan-200" href="#pricing">Cách tính chi phí <ArrowRight size={16}/></a></div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold text-slate-300"><span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-cyan-300"/>Thiết kế theo nghiệp vụ</span><span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-cyan-300"/>Tích hợp API</span><span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-cyan-300"/>Tối ưu mobile</span></div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/8 p-3 shadow-[0_50px_100px_rgba(0,0,0,.35)] backdrop-blur-xl">
              <Image src="/images/zalo-vietnamese-students.webp" alt="Nhóm sinh viên Việt Nam trải nghiệm các tiện ích của Zalo Mini App" width={1200} height={750} priority sizes="(max-width: 768px) 100vw, 620px" className="h-auto w-full rounded-[23px]" />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#102b50]/90 p-4 shadow-2xl backdrop-blur-xl"><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-slate-950"><ScanLine size={20}/></span><span><b className="block text-xs">ZAUI · Giao diện thực tế</b><small className="text-[9px] text-slate-300">Hình ảnh tham khảo Zalo Mini App</small></span></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24" id="features">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr]"><div><span className="text-[10px] font-black tracking-[.16em] text-blue-700">TẤT CẢ TRONG MỘT ZALO OA</span><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Một Mini App, trọn hành trình khách hàng.</h2></div><p className="self-end max-w-xl text-sm leading-7 text-slate-600">Không bắt khách cài thêm ứng dụng. Mọi tương tác quan trọng được gom vào một trải nghiệm quen thuộc, từ thu hút đến chăm sóc lại.</p></div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">{features.map(([Icon,title,text,tone]) => <article key={title} className="group min-h-60 rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"><span className={`grid h-11 w-11 place-items-center rounded-xl ${tone}`}><Icon size={21}/></span><h3 className="mt-8 text-base font-bold">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{text}</p><ArrowRight size={16} className="mt-7 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700"/></article>)}</div>
        </div>
      </section>

      <ReferenceGallery source="zalo" />

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-3 shadow-[0_35px_80px_rgba(9,42,88,.12)]"><Image src="/images/zalo-business-miniapp-showcase.webp" alt="Giao diện Zalo Mini App dành cho doanh nghiệp trên thiết bị thật" width={1400} height={875} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full rounded-[20px]"/></div>
          <div><span className="text-[10px] font-black tracking-[.16em] text-blue-700">AI + AUTOMATION</span><h2 className="dx-heading-gradient mt-4 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Mini App ở phía trước. Dữ liệu thông minh ở phía sau.</h2><p className="mt-6 text-sm leading-7 text-slate-600">Kết nối dữ liệu khách hàng, phân nhóm hành vi và kích hoạt đúng kịch bản chăm sóc. Đội ngũ vẫn kiểm soát được toàn bộ lịch sử và hiệu suất vận hành.</p><div className="mt-8 grid gap-4 text-xs font-semibold text-slate-700 sm:grid-cols-2"><span className="flex gap-3"><Bot size={18} className="text-blue-700"/>AI Agent hỗ trợ 24/7</span><span className="flex gap-3"><RefreshCcw size={18} className="text-blue-700"/>Kịch bản tự động</span><span className="flex gap-3"><MessageCircleMore size={18} className="text-blue-700"/>Hợp nhất tương tác</span><span className="flex gap-3"><QrCode size={18} className="text-blue-700"/>Đồng bộ giao dịch</span></div></div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center"><span className="text-[10px] font-black tracking-[.16em] text-blue-700">HÀNH TRÌNH MẪU</span><h2 className="dx-heading-gradient mx-auto mt-4 max-w-3xl font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.05em] md:text-6xl">Từ một lần ghé thăm đến một khách hàng quay lại.</h2></div>
          <div className="relative mt-14 grid gap-4 md:grid-cols-4"><div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-blue-200 via-cyan-400 to-blue-200 md:block"/>{[[ScanLine,"01","Quét QR","Khách mở Mini App từ OA, tại quầy hoặc trên hóa đơn."],[UserRoundCheck,"02","Trở thành thành viên","Thông tin được lưu với sự đồng ý và phân nhóm phù hợp."],[WandSparkles,"03","Nhận đúng ưu đãi","Kịch bản gửi ưu đãi dựa trên hành vi và hạng thành viên."],[RefreshCcw,"04","Quay lại mua","Khách đặt lịch, mua hàng hoặc đổi quà ngay trong Mini App."]].map(([Icon,step,title,text]) => { const StepIcon = Icon as LucideIcon; return <div key={String(step)} className="relative rounded-2xl border border-slate-200 bg-white p-7"><span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border-8 border-white bg-blue-700 text-white"><StepIcon size={20}/></span><b className="mt-6 block text-[9px] tracking-[.18em] text-blue-700">BƯỚC {String(step)}</b><h3 className="mt-3 text-base font-bold">{String(title)}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{String(text)}</p></div>; })}</div>
        </div>
      </section>

      <section className="bg-[#071c4b] px-4 py-24 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-end gap-8 md:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[.18em] text-cyan-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"/>THEO TỪNG NGÀNH HÀNG</span>
              <h2 className="mt-5 max-w-2xl font-[family-name:var(--display)] text-[clamp(42px,5vw,66px)] font-semibold leading-[1.04] tracking-[-.055em] text-white">Mỗi ngành một nghiệp vụ. <span className="dx-gradient-text-light">Mỗi khách hàng một hành trình.</span></h2>
            </div>
            <p className="max-w-xl border-l border-cyan-300/25 pl-6 text-sm leading-7 text-slate-300">DolphinX thiết kế từng module theo cách doanh nghiệp thực sự phục vụ khách hàng — đúng quy trình, đúng dữ liệu và không ép mọi mô hình vào một mẫu có sẵn.</p>
          </div>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {industries.map(([Icon,label,description],index) => <article key={label} className="group relative min-h-48 overflow-hidden rounded-2xl border border-white/10 bg-white/[.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[.09] hover:shadow-[0_24px_55px_rgba(0,20,70,.28)]">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/20 to-blue-500/10 text-cyan-200 shadow-[inset_0_1px_rgba(255,255,255,.12)] transition group-hover:scale-105 group-hover:text-white"><Icon strokeWidth={1.8} size={23}/></span>
                <small className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] font-black tracking-[.13em] text-cyan-300">0{index + 1}</small>
              </div>
              <h3 className="mt-7 font-[family-name:var(--display)] text-xl font-semibold tracking-[-.035em] text-white">{label}</h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-300">{description}</p>
              <span className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 to-transparent transition-transform duration-300 group-hover:scale-x-100"/>
            </article>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-24"><div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#082b78] via-[#075fc2] to-[#13c7e9] text-white md:grid-cols-[1.2fr_.8fr]"><div className="p-9 md:p-16"><span className="text-[10px] font-black tracking-[.16em] text-cyan-100">BẮT ĐẦU TỪ BÀI TOÁN THẬT</span><h2 className="dx-heading-gradient-light mt-5 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Xây Mini App mà khách hàng muốn dùng lại.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-blue-50">Trao đổi trực tiếp về mô hình kinh doanh, dữ liệu hiện có và hành trình cần tối ưu.</p><Link className="dx-light-action mt-8 inline-flex items-center gap-2 rounded-xl px-6 text-xs font-bold" href="/#contact">Liên hệ ngay <ArrowRight size={17}/></Link></div><div className="relative min-h-[340px]"><Image src="/images/dolphinx-mascot-zalo-v2.webp" alt="Cá heo DolphinX đội nón lá giới thiệu Zalo Mini App" fill sizes="(max-width: 768px) 100vw, 420px" className="object-contain object-center drop-shadow-[0_28px_32px_rgba(3,27,75,.28)]"/><div className="absolute inset-0 bg-gradient-to-r from-[#075fc2] via-transparent to-transparent"/></div></div></section>

      <ServicePricing service="zalo" />
      <ServiceFooter />
    </main>
  );
}
