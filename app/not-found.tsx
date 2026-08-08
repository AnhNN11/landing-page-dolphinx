import { ArrowLeft, Compass, Home } from "lucide-react";
import { ServiceFooter, ServiceNav } from "./components/MarketingChrome";
import { StableLink as Link } from "./components/StableLink";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <ServiceNav />
      <section className="relative grid min-h-[70vh] place-items-center overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(19,199,233,.2),transparent_28%),linear-gradient(#fff,#f3f8ff)]"/>
        <div className="relative max-w-3xl">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#071c4b] text-cyan-300 shadow-2xl"><Compass size={28}/></span>
          <b className="mt-8 block text-[11px] font-black tracking-[.2em] text-[#075fc2]">LẠC KHỎI HẢI TRÌNH · 404</b>
          <h1 className="mt-5 font-[family-name:var(--display)] text-[clamp(50px,8vw,92px)] font-semibold leading-none tracking-[-.07em]">Trang này chưa có trên bản đồ.</h1>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-600">Liên kết có thể đã thay đổi. Bạn có thể quay về trang chủ hoặc tiếp tục khám phá các dịch vụ của DolphinX.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#075fc2] px-6 text-xs font-bold text-white"><Home size={16}/>Về trang chủ</Link><Link href="/website" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-blue-100 bg-white px-6 text-xs font-bold text-[#075fc2]"><ArrowLeft size={16}/>Xem dịch vụ Website</Link></div>
        </div>
      </section>
      <ServiceFooter />
    </main>
  );
}
