import { ShieldCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div
      className="
        mb-6
        inline-flex
        w-fit
        items-center
        gap-3
        rounded-full
        border
        border-[#c89d49]/20
        bg-white/70
        px-5
        py-3
        text-[0.82rem]
        font-semibold
        text-[#c89d49]
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        backdrop-blur-xl
      "
    >
      <ShieldCheck size={16} />

      Trusted by 150+ Parishes
    </div>
  );
}