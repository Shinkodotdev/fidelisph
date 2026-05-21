import {
  memo,
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import {
  Star,
  Quote,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const feedbacks = [
  {
    name: "Fr. Michael Reyes",
    role: "Parish Administrator",
    image:
      "https://i.pravatar.cc/120?img=12",
    feedback:
      "Fidelis transformed the way we manage sacramental records and parish operations. Everything is now centralized, secure, and much easier for our staff.",
  },

  {
    name: "Sister Angela Cruz",
    role: "Church Secretary",
    image:
      "https://i.pravatar.cc/120?img=32",
    feedback:
      "The platform is intuitive and beautifully designed. Managing parish documents and community engagement has become significantly faster.",
  },

  {
    name: "Fr. Daniel Santos",
    role: "Diocese Coordinator",
    image:
      "https://i.pravatar.cc/120?img=45",
    feedback:
      "The analytics and cloud accessibility gave our diocese better visibility and operational efficiency across multiple parishes.",
  },
];

/* =========================================================
   INTERSECTION REVEAL
========================================================= */

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            !entry.isIntersecting
          )
            return;

          /* =========================================================
             GSAP
          ========================================================= */

          const heading =
            element.querySelector(
              ".feedback-heading"
            );

          const cards =
            element.querySelectorAll(
              ".feedback-card"
            );

          gsap.fromTo(
            heading?.children,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.8,
              ease: "power3.out",
            }
          );

          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 60,
              scale: 0.96,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power4.out",
            }
          );

          observer.disconnect();
        },
        {
          threshold: 0.12,
          rootMargin:
            "120px 0px",
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return ref;
}

/* =========================================================
   CARD
========================================================= */

const FeedbackCard = memo(
  function FeedbackCard({
    item,
  }) {
    return (
      <article
        className="
          feedback-card
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[#eadfcd]
          bg-white
          p-7
          opacity-0
          will-change-transform

          lg:p-8
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
            bg-[radial-gradient(circle_at_top_right,rgba(214,178,111,0.12),transparent_42%)]
          "
        />

        {/* CONTENT */}

        <div className="relative z-10">
          {/* TOP */}

          <div className="mb-7 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                width="70"
                height="70"
                className="
                  h-[64px]
                  w-[64px]
                  rounded-full
                  border-4
                  border-white
                  object-cover
                  shadow-md
                "
              />

              {/* INFO */}

              <div>
                <h3
                  className="
                    text-[1.08rem]
                    font-bold
                    text-[#07152f]
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    text-[0.92rem]
                    font-medium
                    text-[#8b6a2f]
                  "
                >
                  {item.role}
                </p>
              </div>
            </div>

            {/* QUOTE */}

            <div
              className="
                flex
                h-[50px]
                w-[50px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#f3dfb2]
                to-[#c89d49]
                text-white
              "
            >
              <Quote size={20} />
            </div>
          </div>

          {/* STARS */}

          <div className="mb-5 flex gap-1 text-[#d6b26f]">
            {Array.from({
              length: 5,
            }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill="currentColor"
              />
            ))}
          </div>

          {/* FEEDBACK */}

          <p
            className="
              text-[0.98rem]
              leading-[1.9]
              text-[#66748f]
            "
          >
            {item.feedback}
          </p>
        </div>
      </article>
    );
  }
);

/* =========================================================
   MAIN
========================================================= */

function Feedback() {
  const sectionRef =
    useReveal();

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f7f5f2]
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
        {/* HEADING */}

        <div
          className="
            feedback-heading
            mx-auto
            mb-16
            max-w-[850px]
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
            <Star size={16} />

            Community Feedback
          </div>

          <h2
            className="
              mb-6
              font-['Cormorant_Garamond']
              text-[clamp(2.8rem,6vw,5.8rem)]
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              text-[#07152f]
              opacity-0
            "
          >
            Trusted by
            Modern Churches
          </h2>

          <p
            className="
              mx-auto
              max-w-[720px]
              text-[1rem]
              leading-[2]
              text-[#66748f]
              opacity-0

              sm:text-[1.08rem]
            "
          >
            Discover how churches and
            parish communities are
            transforming their
            operations with Fidelis.
          </p>
        </div>

        {/* GRID */}

        <div
          className="
            grid
            gap-6

            lg:grid-cols-3
          "
        >
          {feedbacks.map((item) => (
            <FeedbackCard
              key={item.name}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Feedback);