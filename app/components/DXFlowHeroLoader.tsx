"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./DXFlowHeroVisual.module.css";

function DXFlowFallback() {
  return (
    <div className={`${styles.shell} ${styles.fallbackShell}`} aria-label="Đang tải sơ đồ tự động hoá DXFlow">
      <div className={styles.topbar}><span><i/>DXFLOW AUTOMATION <em>05 node · 04 tác vụ</em></span><b>Đang khởi tạo</b></div>
      <div className={styles.fallbackCanvas} aria-hidden="true">
        <div className={styles.fallbackColumn}>
          <span className={`${styles.fallbackNode} ${styles.fallbackSource}`}><small>01 · NGUỒN DỮ LIỆU</small><b>Lead mới</b><i/></span>
          <span className={`${styles.fallbackNode} ${styles.fallbackCondition}`}><small>02 · ĐIỀU KIỆN</small><b>Kiểm tra nhu cầu</b><i/></span>
        </div>
        <div className={styles.fallbackColumn}>
          <span className={`${styles.fallbackNode} ${styles.fallbackAction}`}><small>03 · TỰ ĐỘNG</small><b>Tạo cơ hội CRM</b><i/></span>
          <span className={`${styles.fallbackNode} ${styles.fallbackNurture}`}><small>04 · CHĂM SÓC</small><b>Bổ sung thông tin</b><i/></span>
        </div>
        <span className={`${styles.fallbackNode} ${styles.fallbackOutput}`}><small>KẾT QUẢ</small><b>FlowOps</b><i/></span>
      </div>
      <div className={styles.fallbackStatus}><i/>Đang đồng bộ workflow</div>
    </div>
  );
}

const DXFlowHeroVisual = dynamic(
  () => import("./DXFlowHeroVisual").then((module) => module.DXFlowHeroVisual),
  { ssr: false, loading: DXFlowFallback },
);

export function DXFlowHeroLoader() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [visible]);

  return <div ref={hostRef}>{visible ? <DXFlowHeroVisual/> : <DXFlowFallback/>}</div>;
}
