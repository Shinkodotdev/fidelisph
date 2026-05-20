import { memo, useMemo } from "react";

import {
  ShieldCheck,
  Church,
  BarChart3,
  Users,
  Cloud,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   STATIC DATA
========================================================= */

const FEATURES = [
  {
    title: "Sacramental Records",
    description:
      "Digitally manage baptisms, confirmations, weddings, and parish documentation with secure cloud storage.",
    icon: Church,
  },

  {
    title: "Analytics Dashboard",
    description:
      "Gain insights into parish growth, attendance, and engagement through intelligent analytics.",
    icon: BarChart3,
  },

  {
    title: "Community Engagement",
    description:
      "Connect parishioners through announcements, events, ministries, and communication tools.",
    icon: Users,
  },

  {
    title: "Cloud Infrastructure",
    description:
      "Access records securely from anywhere with enterprise-grade cloud architecture.",
    icon: Cloud,
  },

  {
    title: "Security & Compliance",
    description:
      "Protect sensitive parish information with encrypted storage and secure authentication.",
    icon: ShieldCheck,
  },

  {
    title: "Automation Workflows",
    description:
      "Automate repetitive parish administrative workflows and improve operational efficiency.",
    icon: ArrowRight,
  },
];

/* =========================================================
   CARD
========================================================= */

const FeatureCard = memo(function FeatureCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <article
      className="
        group
        relative
        rounded-[28px]
        border
        border-[#eadfcd]
        bg-white
        p-7
        md:p-8
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* LIGHT EFFECT */}

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
          <Icon size={26} strokeWidth={2} />
        </div>

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
});

/* =========================================================
   COMPONENT
========================================================= */

function Features() {
  const features = useMemo(() => FEATURES, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fcfbf8]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-0
            top-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#d6b26f]/10
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#d6b26f]/10
            blur-[100px]
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

        <div className="mx-auto mb-16 max-w-[800px] text-center lg:mb-20">

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
              sm:text-[1.08rem]
            "
          >
            Streamline parish operations with modern
            sacramental management, analytics,
            communication systems, and secure
            cloud-powered infrastructure.
          </p>
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
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Features);