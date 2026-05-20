import {
  CheckCircle2,
  Clock3,
  Layers3,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    phase: "Phase 01",
    title: "Planning & Research",
    description:
      "Gathering parish requirements, user workflows, and defining the overall system architecture.",
    status: "Completed",
    icon: CheckCircle2,
  },

  {
    phase: "Phase 02",
    title: "UI/UX Design",
    description:
      "Designing the modern interface, responsive layouts, branding, and user experience flows.",
    status: "Completed",
    icon: Layers3,
  },

  {
    phase: "Phase 03",
    title: "Core Development",
    description:
      "Building authentication, sacramental records, dashboards, cloud infrastructure, and APIs.",
    status: "In Progress",
    icon: Clock3,
  },

  {
    phase: "Phase 04",
    title: "Testing & Optimization",
    description:
      "Improving performance, responsiveness, security, and preparing the platform for deployment.",
    status: "Upcoming",
    icon: Rocket,
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf8] py-24 sm:py-32">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#d6b26f]/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#d6b26f]/10 blur-[100px]" />

      </div>

      {/* CONTAINER */}

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* HEADING */}

        <div className="mx-auto mb-20 max-w-[850px] text-center">

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
              shadow-[0_10px_40px_rgba(15,23,42,0.05)]
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
              sm:text-[1.08rem]
            "
          >
            Track the current development progress,
            milestones, completed phases, and upcoming
            features of the Fidelis Parish Management System.
          </p>
        </div>

        {/* TIMELINE */}

        <div className="relative mx-auto max-w-[1100px]">

          {/* LINE */}

          <div
  className="
    absolute
    inset-0
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
    bg-[radial-gradient(circle_at_top_right,rgba(214,178,111,0.18),transparent_45%)]
  "
/>

          <div className="space-y-10">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    gap-6
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-[#dccfb8]
                    bg-gradient-to-br
                    from-[#f5efe5]
                    via-[#efe7db]
                    to-[#e8dfd1]
                    p-7
                    shadow-[0_20px_60px_rgba(15,23,42,0.07)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
                    md:flex-row
                    md:items-start
                    md:gap-10
                    md:p-10
                    "
                >
                  {/* ICON */}

                  <div className="relative z-10 flex items-center">

                    <div
                      className="
                        flex
                        h-[56px]
                        w-[56px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-[#f3dfb2]
                        to-[#c89d49]
                        text-white
                        shadow-[0_15px_35px_rgba(200,157,73,0.25)]
                      "
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex-1">

                    <div className="mb-4 flex flex-wrap items-center gap-4">

                      <span
                        className="
                          rounded-full
                          bg-[#f8f3e7]
                          px-4
                          py-2
                          text-[0.82rem]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-[#c89d49]
                        "
                      >
                        {item.phase}
                      </span>

                      <span
                        className={`
                          rounded-full
                          px-4
                          py-2
                          text-[0.82rem]
                          font-semibold
                          ${
                            item.status === "Completed"
                                ? "bg-emerald-200/70 text-emerald-800"
                                : item.status === "In Progress"
                                ? "bg-amber-200/70 text-amber-800"
                                : "bg-slate-200/70 text-slate-700"
                          }
                        `}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3
                      className="
                        mb-4
                        text-[1.8rem]
                        font-bold
                        leading-tight
                        text-[#07152f]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        max-w-[720px]
                        text-[1rem]
                        leading-[2]
                        text-[#66748f]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}