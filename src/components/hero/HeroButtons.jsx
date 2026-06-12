import {
  memo,
  useEffect,
  useState,
} from "react";

import gsap from "gsap";

import {
  ArrowRight,
  Play,
  X,
  ShieldCheck,
  Church,
  Cloud,
  BarChart3,
} from "lucide-react";

/* =========================================================
   MODAL
========================================================= */

function Modal({
  open,
  onClose,
  children,
}) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow =
      "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".modal-overlay",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
        }
      );

      gsap.fromTo(
        ".modal-content",
        {
          opacity: 0,
          y: 60,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        }
      );
    });

    return () => {
      document.body.style.overflow =
        "auto";

      ctx.revert();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        modal-overlay
        fixed
        inset-0
        isolate
        z-[99999]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-black/60
        p-4
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        className="
          modal-content
          relative
          w-full
          max-w-[1200px]
          max-h-[90vh]
          overflow-y-auto
          rounded-[34px]
          border
          border-white/20
          bg-[#fcfbf8]
          shadow-[0_40px_120px_rgba(15,23,42,0.18)]
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* CLOSE */}

        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-50
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-700
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <X size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

function HeroButtons() {
  const [
    learnMoreOpen,
    setLearnMoreOpen,
  ] = useState(false);

  const [
    demoOpen,
    setDemoOpen,
  ] = useState(false);

  return (
    <>
      {/* BUTTONS */}

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
        {/* LEARN MORE */}

        <button
          onClick={() =>
            setLearnMoreOpen(true)
          }
          className="
            group
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
            hover:shadow-[0_25px_60px_rgba(200,157,73,0.35)]

            sm:h-14
            sm:w-auto
          "
        >
          Learn More

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

        {/* WATCH DEMO */}

        <button
          onClick={() =>
            setDemoOpen(true)
          }
          className="
            group
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
              transition-all
              duration-300
              group-hover:scale-110
            "
          >
            <Play
              size={16}
              className="ml-[2px]"
            />
          </div>

          Watch Demo
        </button>
      </div>

      {/* =========================================================
         LEARN MORE MODAL
      ========================================================= */}

      <Modal
        open={learnMoreOpen}
        onClose={() =>
          setLearnMoreOpen(false)
        }
      >
        <div className="relative overflow-hidden p-8 sm:p-12">
          {/* BG */}

          <div
            className="
              absolute
              left-0
              top-0
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#d6b26f]/10
              blur-[70px]
            "
          />

          {/* CONTENT */}

          <div className="relative z-10">
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#d6b26f]/20
                bg-white
                px-5
                py-3
                text-[0.9rem]
                font-semibold
                text-[#c89d49]
              "
            >
              <ShieldCheck size={16} />

              Fidelis Platform
            </div>

            <h2
              className="
                mb-6
                font-['Cormorant_Garamond']
                text-[clamp(2.6rem,5vw,4.8rem)]
                font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-[#07152f]
              "
            >
              Modern Parish
              Management System
            </h2>

            <p
              className="
                mb-10
                max-w-[650px]
                text-[1rem]
                leading-[2]
                text-[#66748f]
              "
            >
              Fidelis centralizes
              sacramental records,
              finance, ministries,
              analytics, scheduling,
              communication, and
              cloud infrastructure into
              one unified ecclesiastical
              ecosystem.
            </p>

            {/* FEATURES */}

            <div
              className="
                grid
                gap-5

                sm:grid-cols-2
              "
            >
              {[
                {
                  icon: Church,
                  title:
                    "Sacramental Records",
                },

                {
                  icon: Cloud,
                  title:
                    "Cloud Infrastructure",
                },

                {
                  icon: BarChart3,
                  title:
                    "Smart Analytics",
                },

                {
                  icon: ShieldCheck,
                  title:
                    "Security & Compliance",
                },
              ].map(
                (
                  {
                    icon: Icon,
                    title,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[#eadfcd]
                      bg-white/70
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-[#f3dfb2]
                        to-[#c89d49]
                        text-white
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <h3
                      className="
                        font-semibold
                        text-[#07152f]
                      "
                    >
                      {title}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* =========================================================
         DEMO MODAL
      ========================================================= */}

      <Modal
        open={demoOpen}
        onClose={() =>
          setDemoOpen(false)
        }
      >
        <div className="relative overflow-hidden">
          {/* VIDEO */}

          <div
            className="
              aspect-video
              w-full
              bg-black
            "
          >
            <iframe
              className="
                h-full
                w-full
              "
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Fidelis Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* CONTENT */}

          <div className="p-8">
            <h3
              className="
                mb-4
                text-[1.8rem]
                font-bold
                text-[#07152f]
              "
            >
              Fidelis Platform Demo
            </h3>

            <p
              className="
                leading-[1.9]
                text-[#66748f]
              "
            >
              Explore how Fidelis
              simplifies parish
              operations through
              intelligent sacramental
              management, analytics,
              communication systems,
              and secure cloud-based
              workflows.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default memo(HeroButtons);