import { memo } from "react";

function TimelineSkeleton() {
  return (
    <div
      className="
        animate-pulse
        rounded-[30px]
        border
        border-[#dccfb8]
        bg-white
        p-8
      "
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="h-[56px] w-[56px] rounded-full bg-[#efe8da]" />

        <div className="space-y-3">
          <div className="h-4 w-24 rounded-full bg-[#efe8da]" />

          <div className="h-3 w-20 rounded-full bg-[#efe8da]" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-7 w-[60%] rounded-full bg-[#efe8da]" />

        <div className="h-3 w-full rounded-full bg-[#efe8da]" />

        <div className="h-3 w-[92%] rounded-full bg-[#efe8da]" />

        <div className="h-3 w-[70%] rounded-full bg-[#efe8da]" />
      </div>
    </div>
  );
}

export default memo(
  TimelineSkeleton
);