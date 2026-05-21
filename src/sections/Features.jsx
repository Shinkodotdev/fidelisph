import {
  lazy,
  memo,
  Suspense,
  useEffect,
} from "react";

import gsap from "gsap";

import FeaturesHeading from "../components/features/FeaturesHeading";

import { FEATURES } from "../components/features/featuresData";

import FeatureCardSkeleton from "../components/features/FeatureCardSkeleton";

import useReveal from "../components/features/useReveal";

/* =========================================================
   LAZY
========================================================= */

const FeatureCard = lazy(() =>
  import("../components/features/FeatureCard")
);

function Features() {
  const [sectionRef, visible] =
    useReveal(0.08);

  /* =========================================================
     GSAP
  ========================================================= */

  useEffect(() => {
    if (!visible || !sectionRef.current)
      return;

    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        /* HEADING */

        gsap.fromTo(
          ".feature-heading > *",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: "power3.out",
          }
        );

        /* CARDS */

        gsap.fromTo(
          ".feature-card",
          {
            opacity: 0,
            y: 70,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 1,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [visible, sectionRef]);

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
    >
      {/* BG */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-0
            top-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#d6b26f]/8
            blur-[70px]

            lg:h-[320px]
            lg:w-[320px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#d6b26f]/8
            blur-[70px]

            lg:h-[320px]
            lg:w-[320px]
          "
        />
      </div>

      {/* CONTAINER */}

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
        {/* SKELETON */}

        {!visible && (
          <div
            className="
              grid
              gap-5

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {Array.from({
              length: 6,
            }).map((_, index) => (
              <FeatureCardSkeleton
                key={index}
              />
            ))}
          </div>
        )}

        {/* CONTENT */}

        {visible && (
          <>
            <div className="feature-heading">
              <FeaturesHeading />
            </div>

            {/* GRID */}

            <div
              className="
                grid
                gap-5

                md:grid-cols-2

                xl:grid-cols-3
              "
            >
              {FEATURES.map(
                (item) => (
                  <Suspense
                    key={item.title}
                    fallback={
                      <FeatureCardSkeleton />
                    }
                  >
                    <FeatureCard
                      title={item.title}
                      description={
                        item.description
                      }
                      icon={item.icon}
                    />
                  </Suspense>
                )
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default memo(Features);