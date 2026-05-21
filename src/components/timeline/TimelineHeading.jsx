import { memo } from "react";

import { Clock3 } from "lucide-react";

function TimelineHeading() {
  return (
    <div
      className="
        timeline-heading
        mx-auto
        mb-20
        max-w-[850px]
        text-center
      "
    >
      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#d6b26f]/20
          bg-white
          px-5
          py-3
          text-[0.92rem]
          font-semibold
          text-[#c89d49]
          opacity-0
        "
      >
        <Clock3 size={16} />

        Development Timeline
      </div>

      <h2
        className="
          mb-6
          font-['Cormorant_Garamond']
          text-[clamp(3rem,6vw,5.8rem)]
          font-bold
          leading-[0.95]
          tracking-[-0.04em]
          text-[#07152f]
          opacity-0
        "
      >
        Project
        Progress Roadmap
      </h2>

      <p
        className="
          mx-auto
          max-w-[700px]
          text-[1rem]
          leading-[2]
          text-[#66748f]
          opacity-0

          sm:text-[1.08rem]
        "
      >
        Track the current development
        progress, milestones,
        completed phases, and
        upcoming features of the
        Fidelis Parish Management
        System.
      </p>
    </div>
  );
}

export default memo(
  TimelineHeading
);