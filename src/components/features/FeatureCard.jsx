import {
  memo,
  useEffect,
} from "react";

import gsap from "gsap";

import useReveal from "./useReveal";

function FeatureCard({
  title,
  description,
  icon: Icon,
  delay,
}) {
  const [cardRef, visible] =
    useReveal(0.12);

  /* =========================================================
     GSAP SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    if (!visible || !cardRef.current)
      return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        delay,
        ease: "power3.inOut",
      }
    );
  }, [visible, delay, cardRef]);

  return (
    <article
      ref={cardRef}
      className="
        group
        relative
        rounded-[28px]
        border
        border-[#eadfcd]
        bg-white
        p-7
        opacity-0
        will-change-transform

        md:p-8
      "
    >
      {/* HOVER LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(214,178,111,0.10),transparent_42%)]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">
        {/* ICON */}

        <div
          className="
            mb-6
            flex
            h-[64px]
            w-[64px]
            items-center
            justify-center
            rounded-[20px]
            bg-gradient-to-br
            from-[#f3dfb2]
            to-[#c89d49]
            text-white
          "
        >
          <Icon size={26} />
        </div>

        {/* TITLE */}

        <h3
          className="
            mb-4
            text-[1.45rem]
            font-bold
            leading-tight
            text-[#07152f]
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            text-[0.98rem]
            leading-[1.9]
            text-[#66748f]
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default memo(FeatureCard);