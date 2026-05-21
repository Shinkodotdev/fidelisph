import { memo } from "react";

function FeatureCardSkeleton() {
  return (
    <div
      className="
        animate-pulse
        rounded-[28px]
        border
        border-[#eadfcd]
        bg-white
        p-7

        md:p-8
      "
    >
      <div
        className="
          mb-6
          h-[64px]
          w-[64px]
          rounded-[20px]
          bg-[#efe8da]
        "
      />

      <div
        className="
          mb-4
          h-6
          w-[70%]
          rounded-full
          bg-[#efe8da]
        "
      />

      <div className="space-y-3">
        <div className="h-3 w-full rounded-full bg-[#efe8da]" />

        <div className="h-3 w-[90%] rounded-full bg-[#efe8da]" />

        <div className="h-3 w-[65%] rounded-full bg-[#efe8da]" />
      </div>
    </div>
  );
}

export default memo(
  FeatureCardSkeleton
);