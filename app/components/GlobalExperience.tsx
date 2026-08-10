"use client";

import { ArrowUp, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { RouteLoading } from "./RouteLoading";

const ProductAdvisorBot = dynamic(
  () => import("./ProductAdvisorBot").then((module) => module.ProductAdvisorBot),
  { ssr: false },
);

export function GlobalExperience() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [advisorReady, setAdvisorReady] = useState(false);
  const [routePending, setRoutePending] = useState(false);
  const routePendingRef = useRef(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
        setShowTop(window.scrollY > 720);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const clearPending = () => {
      routePendingRef.current = false;
      setRoutePending(false);
      delete document.body.dataset.routePending;
    };
    const navigateOnDemand = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target || target.target === "_blank" || target.hasAttribute("download")) return;
      const next = new URL(target.href, window.location.href);
      if (next.origin !== window.location.origin) return;
      const current = new URL(window.location.href);
      if (next.pathname === current.pathname && next.search === current.search) return;
      if (routePendingRef.current) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      routePendingRef.current = true;
      document.body.dataset.routePending = "true";
      setRoutePending(true);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => window.location.assign(next.href)));
    };
    document.addEventListener("click", navigateOnDemand);
    window.addEventListener("pageshow", clearPending);
    return () => {
      document.removeEventListener("click", navigateOnDemand);
      window.removeEventListener("pageshow", clearPending);
    };
  }, []);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => setAdvisorReady(true), { timeout: 1400 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timeoutId = window.setTimeout(() => setAdvisorReady(true), 900);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {routePending && <div className="route-transition-overlay"><RouteLoading /></div>}
      <div className="page-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      <div className="quick-dock" aria-label="Liên hệ nhanh">
        <a href="https://www.facebook.com/profile.php?id=61565408955535&locale=vi_VN" target="_blank" rel="noreferrer" aria-label="Facebook DolphinX Studio"><ExternalLink size={16}/></a>
        <button type="button" className={showTop ? "is-visible" : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Lên đầu trang"><ArrowUp size={16}/></button>
      </div>
      {advisorReady && <ProductAdvisorBot />}
    </>
  );
}
