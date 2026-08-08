type BrandLogoProps = {
  inverse?: boolean;
  size?: "sm" | "md";
  className?: string;
};

export function BrandLogo({ inverse = false, size = "md", className = "" }: BrandLogoProps) {
  const compact = size === "sm";

  return (
    <span
      className={`inline-flex shrink-0 items-center ${compact ? "gap-2.5" : "gap-3"} ${className}`}
      role="img"
      aria-label="DolphinX Studio"
    >
      <span
        className={`relative grid shrink-0 place-items-center overflow-hidden bg-gradient-to-br from-[#0848ad] via-[#078bd8] to-[#19cbd9] shadow-[0_10px_30px_rgba(7,113,202,.24)] ${compact ? "h-10 w-10 rounded-[13px]" : "h-12 w-12 rounded-[16px]"}`}
      >
        <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full border border-white/30" />
        <span className="absolute -bottom-4 -left-3 h-9 w-9 rounded-full border border-white/20" />
        <span className={`relative -translate-x-0.5 font-[family-name:var(--display)] font-black leading-none tracking-[-.12em] text-white ${compact ? "text-[22px]" : "text-[27px]"}`}>
          D
        </span>
        <span className={`absolute right-1.5 top-1.5 grid place-items-center rounded-md border border-white/35 bg-white/15 font-black leading-none text-white backdrop-blur-sm ${compact ? "h-4 w-4 text-[8px]" : "h-[18px] w-[18px] text-[9px]"}`}>
          X
        </span>
        <span className="absolute bottom-2 left-2 flex items-end gap-[2px]">
          <i className="h-px w-1.5 rounded-full bg-white/55" />
          <i className="h-px w-2 rounded-full bg-white/75" />
          <i className="h-px w-2.5 rounded-full bg-white" />
        </span>
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
