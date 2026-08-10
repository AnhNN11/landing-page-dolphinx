import Image from "next/image";

export function RouteLoading() {
  return (
    <main className="route-loading" aria-label="Đang tải trang" aria-busy="true">
      <div className="route-loading-mark" aria-hidden="true">
        <i className="route-loading-ring ring-one" />
        <i className="route-loading-ring ring-two" />
        <Image
          src="/images/dolphinx-dolphin-mark-192.webp"
          alt=""
          width={192}
          height={192}
          priority
        />
      </div>
      <div className="route-loading-copy">
        <span>DOLPHINX PRODUCT STUDIO</span>
        <b>Đang chuẩn bị trải nghiệm cho bạn</b>
      </div>
      <div className="route-loading-line" aria-hidden="true"><i /></div>
      <p className="sr-only">DolphinX đang tải nội dung trang tiếp theo.</p>
    </main>
  );
}
