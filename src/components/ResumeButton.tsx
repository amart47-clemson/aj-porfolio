import { site } from "@/lib/data";

type ResumeButtonProps = {
  className?: string;
  size?: "sm" | "md";
  onClick?: () => void;
};

export function ResumeButton({
  className = "",
  size = "md",
  onClick,
}: ResumeButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-xs"
      : "px-7 py-3.5 text-sm";

  return (
    <a
      href={site.resume}
      download="Anthony-Joseph-Martino-Jr-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent font-semibold text-zinc-400 transition-colors hover:border-orange-500/30 hover:text-white ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      Download Resume
    </a>
  );
}
