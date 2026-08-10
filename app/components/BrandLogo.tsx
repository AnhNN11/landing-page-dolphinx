import Image from "next/image";

type BrandLogoProps = {
  inverse?: boolean;
  size?: "sm" | "md";
  className?: string;
};

export function BrandLogo({ inverse = false, size = "md", className = "" }: BrandLogoProps) {
  const compact = size === "sm";

  return (
    <span
      className={`inline-flex shrink-0 items-center ${compact ? "gap-2" : "gap-2.5"} ${className}`}
      role="img"
      aria-label="DolphinX Studio"
    >
      <span
        className={`brand-dolphin-mark relative grid shrink-0 place-items-center ${compact ? "h-11 w-12" : "h-14 w-16"}`}
      >
        <Image
          src="/images/dolphinx-dolphin-mark-192.webp"
          alt=""
          width={192}
          height={192}
          className="brand-dolphin-motion h-full w-full object-contain drop-shadow-[0_8px_10px_rgba(7,95,194,.18)]"
        />
      </span>

      <span className="grid leading-none">
        <strong
          className={`font-[family-name:var(--display)] font-extrabold tracking-[-.055em] ${inverse ? "text-white" : "text-[#071c4b]"} ${compact ? "text-[19px]" : "text-[22px]"}`}
        >
          Dolphin<span className="text-[#17bad7]">X</span>
        </strong>
        <span className={`mt-1 font-bold tracking-[.26em] ${inverse ? "text-cyan-200/75" : "text-[#55708f]"} ${compact ? "text-[5.5px]" : "text-[6.5px]"}`}>
          PRODUCT STUDIO
        </span>
      </span>
    </span>
  );
}
