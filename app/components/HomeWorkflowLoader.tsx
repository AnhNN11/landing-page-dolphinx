"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HomeWorkflowCanvas = dynamic(
  () => import("./HomeWorkflowCanvas").then((module) => module.HomeWorkflowCanvas),
  { ssr: false, loading: WorkflowLoading },
);

function WorkflowLoading() {
  return <div className="workflow-canvas workflow-loading" aria-label="Đang tải sơ đồ quy trình" aria-busy="true"><i/><span>Đang tải quy trình</span></div>;
}

export function HomeWorkflowLoader() {
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
      { rootMargin: "600px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [visible]);

  return <div ref={hostRef}>{visible ? <HomeWorkflowCanvas /> : <WorkflowLoading />}</div>;
}
