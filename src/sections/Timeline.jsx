import {
  lazy,
  memo,
  Suspense,
  useEffect,
} from "react";

import gsap from "gsap";

import TimelineHeading from "../components/timeline/TimelineHeading";

import TimelineSkeleton from "../components/timeline/TimelineSkeleton";

import { timeline } from "../components/timeline/timelineData";

import useReveal from "../components/timeline/useReveal";

const TimelineCard = lazy(() =>
  import("../components/timeline/TimelineCard")
);

function Timeline() {
  const [sectionRef, visible] =
    useReveal(0.08);

  /* =========================================================
     GSAP
  ========================================================= */

  useEffect(() => {
    if (!visible) return;

    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        gsap.fromTo(
          ".timeline-heading > *",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 1,
            ease: "power3.inOut",
          }
        );

        gsap.fromTo(
          ".timeline-card",
          {
            opacity: 0,
            y: 70,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.inOut",
            delay: 0.2,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#fcfbf8]
        py-20

        sm:py-24

        lg:py-32
      "
       id="timeline"
    >
      {/* BG */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-0
            top-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#d6b26f]/8
            blur-[70px]

            lg:h-[360px]
            lg:w-[360px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#d6b26f]/8
            blur-[70px]

            lg:h-[360px]
            lg:w-[360px]
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5

          sm:px-8

          lg:px-10

          xl:px-12
        "
      >
        {/* HEADING */}

        <div className="timeline-heading">
          <TimelineHeading />
        </div>

        {/* GRID */}

        <div className="mx-auto max-w-[1100px] space-y-8">
          {timeline.map((item) => (
            <Suspense
              key={item.phase}
              fallback={
                <TimelineSkeleton />
              }
            >
              <TimelineCard item={item} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Timeline);