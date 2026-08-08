"use client";

import { ArrowUp, ExternalLink, MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react";
import { StableLink as Link } from "./StableLink";

export function GlobalExperience() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

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

  return (
    <>
      <div className="page-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      <div className="quick-dock" aria-label="Liên hệ nhanh">
        <Link href="/#contact" className="quick-contact"><MessageCircleMore size={17}/><span>Liên hệ ngay</span></Link>
        <a href="https://www.facebook.com/profile.php?id=61565408955535&locale=vi_VN" target="_blank" rel="noreferrer" aria-label="Facebook DolphinX Studio"><ExternalLink size={16}/></a>
        <button type="button" className={showTop ? "is-visible" : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Lên đầu trang"><ArrowUp size={16}/></button>
      </div>
    </>
  );
}
