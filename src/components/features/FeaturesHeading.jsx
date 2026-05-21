import {
  memo,
  useEffect,
} from "react";

import gsap from "gsap";

import { ShieldCheck } from "lucide-react";

import useReveal from "./useReveal";

function FeaturesHeading() {
  const [headingRef, visible] =
    useReveal(0.2);

  /* =========================================================
     GSAP REVEAL
  ========================================================= */

  useEffect(() => {
    if (
      !visible ||
      !headingRef.current
    )
      return;

    gsap.fromTo(
      headingRef.current.children,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.inOut",
      }
    );
  }, [visible, headingRef]);

  return (
    <div
      ref={headingRef}
      className="
        mx-auto
        mb-16
        max-w-[800px]
        text-center

        lg:mb-20
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
        <ShieldCheck size={16} />

        Platform Features
      </div>

      <h2
        className="
          mb-6
          font-['Cormorant_Garamond']
          text-[clamp(2.8rem,6vw,5.5rem)]
          font-bold
          leading-[0.95]
          tracking-[-0.04em]
          text-[#07152f]
          opacity-0
        "
      >
        Everything Your
        Parish Needs
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
        Streamline parish operations
        with modern sacramental
        management, analytics,
        communication systems, and
        secure cloud-powered
        infrastructure.
      </p>
    </div>
  );
}

export default memo(
  FeaturesHeading
);