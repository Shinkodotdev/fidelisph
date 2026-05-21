import { memo } from "react";

function TimelineCard({ item }) {
  const Icon = item.icon;

  return (
    <article
      className="
        timeline-card
        group
        relative
        flex
        flex-col
        gap-6
        overflow-hidden
        rounded-[30px]
        border
        border-[#dccfb8]
        bg-white
        p-7
        opacity-0
        will-change-transform

        md:flex-row
        md:gap-10
        md:p-10
      "
    >
      {/* HOVER */}

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
          "
        >
          <Icon size={24} />
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative z-10 flex-1">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          {/* PHASE */}

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

          {/* STATUS */}

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-[0.82rem]
              font-semibold
              ${
                item.status ===
                "Completed"
                  ? "bg-emerald-100 text-emerald-700"
                  : item.status ===
                    "In Progress"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-slate-100 text-slate-700"
              }
            `}
          >
            {item.status}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mb-4
            text-[1.7rem]
            font-bold
            leading-tight
            text-[#07152f]
          "
        >
          {item.title}
        </h3>

        {/* DESC */}

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
    </article>
  );
}

export default memo(TimelineCard);