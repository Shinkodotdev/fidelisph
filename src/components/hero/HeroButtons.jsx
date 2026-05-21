import {
  ArrowRight,
  Play,
} from "lucide-react";

export default function HeroButtons() {
  return (
    <div
      className="
        mb-14
        flex
        w-full
        flex-col
        items-center
        gap-4

        sm:w-auto
        sm:flex-row
      "
    >
      <button
        className="
          inline-flex
          h-12
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-gradient-to-br
          from-[#d8b36a]
          to-[#c89d49]
          px-7
          text-sm
          font-bold
          text-white
          shadow-[0_18px_45px_rgba(200,157,73,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1

          sm:h-14
          sm:w-auto
        "
      >
        Learn More

        <ArrowRight size={18} />
      </button>

      <button
        className="
          inline-flex
          items-center
          gap-4
          font-semibold
          text-[#0f172a]
        "
      >
        <div
          className="
            flex
            h-[50px]
            w-[50px]
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          <Play size={16} />
        </div>

        Watch Demo
      </button>
    </div>
  );
}