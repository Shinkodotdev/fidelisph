import {
  Church,
  ShieldCheck,
  Users,
  Landmark,
  HeartHandshake,
  Database,
} from "lucide-react";

const missionItems = [
  {
    title: "Unified Parish Operations",
    description:
      "Centralize sacramental records, ministries, financial management, scheduling, and community engagement into one secure ecosystem.",
    icon: Database,
  },

  {
    title: "Modern Ecclesiastical Infrastructure",
    description:
      "Empower churches and dioceses with cloud-based technologies designed specifically for ecclesiastical administration.",
    icon: Landmark,
  },

  {
    title: "Community & Ministry Focused",
    description:
      "Strengthen communication, parish involvement, ministries, and pastoral coordination through connected workflows.",
    icon: Users,
  },

  {
    title: "Secure & Reliable Framework",
    description:
      "Protect sensitive parish records and administrative data through enterprise-grade security and modern infrastructure.",
    icon: ShieldCheck,
  },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f2] py-24 sm:py-32">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* TOP */}

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}

          <div>

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#d6b26f]/20
                bg-white/80
                px-5
                py-3
                text-[0.92rem]
                font-semibold
                text-[#c89d49]
                shadow-[0_10px_40px_rgba(15,23,42,0.05)]
              "
            >
              <Church size={16} />

              Parish Mission
            </div>

            <h2
              className="
                mb-8
                font-['Cormorant_Garamond']
                text-[clamp(3rem,6vw,6rem)]
                font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-[#07152f]
              "
            >
              One Unified
              Ecclesiastical Platform
            </h2>

            <p
              className="
                mb-8
                text-[1.02rem]
                leading-[2]
                text-[#66748f]
                sm:text-[1.08rem]
              "
            >
              Fidelis modernizes parish and diocesan
              administration through a unified digital
              ecosystem designed to centralize records,
              ministries, liturgical operations, finance,
              scheduling, and community engagement.
            </p>

            <p
              className="
                text-[1.02rem]
                leading-[2]
                text-[#66748f]
                sm:text-[1.08rem]
              "
            >
              Built with a balance of tradition and
              technology, Fidelis empowers churches
              with intuitive workflows, secure cloud
              infrastructure, and scalable management
              systems tailored for modern ecclesiastical
              operations.
            </p>

          </div>

          {/* RIGHT */}

          <div className="relative flex items-center justify-center">

            {/* GLOW */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />

            {/* CENTER CIRCLE */}

            <div
              className="
                relative
                flex
                h-[260px]
                w-[260px]
                items-center
                justify-center
                rounded-full
                border
                border-[#e4d7c2]
                bg-gradient-to-br
                from-[#f8f3ea]
                to-[#efe5d6]
                shadow-[0_30px_80px_rgba(15,23,42,0.08)]
              "
            >

              <div className="text-center">

                <div
                  className="
                    mb-3
                    font-['Cormorant_Garamond']
                    text-[3rem]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    bg-gradient-to-br
                    from-[#f3dfb2]
                    via-[#d7b36f]
                    to-[#8d6724]
                    bg-clip-text
                    text-transparent
                  "
                >
                  FIDELIS
                </div>

                <p className="mx-auto max-w-[180px] text-sm leading-[1.8] text-[#66748f]">

                  Unified Ecclesiastical
                  Management System

                </p>
              </div>
            </div>

            {/* FLOATING MODULES */}

            {[
              {
                label: "Sacramental Records",
                icon: Database,
                position:
                  "top-0 left-1/2 -translate-x-1/2",
              },

              {
                label: "Financial Management",
                icon: Landmark,
                position:
                  "top-[22%] right-0",
              },

              {
                label: "Community Engagement",
                icon: Users,
                position:
                  "bottom-[20%] right-[5%]",
              },

              {
                label: "Ministry Coordination",
                icon: HeartHandshake,
                position:
                  "bottom-0 left-1/2 -translate-x-1/2",
              },

              {
                label: "Church Operations",
                icon: Church,
                position:
                  "bottom-[20%] left-[5%]",
              },

              {
                label: "Security Infrastructure",
                icon: ShieldCheck,
                position:
                  "top-[22%] left-0",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`
                    absolute
                    ${item.position}
                    flex
                    items-center
                    gap-4
                  `}
                >

                  <div
                    className="
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#f3dfb2]
                      to-[#c89d49]
                      text-white
                      shadow-[0_20px_50px_rgba(200,157,73,0.25)]
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <div
                    className="
                      hidden
                      rounded-full
                      border
                      border-[#e5d9c8]
                      bg-white/90
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-[#07152f]
                      shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                      lg:block
                    "
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM GRID */}

        <div className="mt-28 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

          {missionItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#ded2bf]
                  bg-gradient-to-br
                  from-[#f6f1e8]
                  via-[#efe7db]
                  to-[#e8dfd1]
                  p-8
                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_90px_rgba(15,23,42,0.10)]
                "
              >

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

                <div className="relative z-10">

                  <div
                    className="
                      mb-7
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center
                      rounded-[22px]
                      bg-gradient-to-br
                      from-[#f3dfb2]
                      to-[#c89d49]
                      text-white
                      shadow-[0_15px_35px_rgba(200,157,73,0.25)]
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-[1.5rem] font-bold text-[#07152f]">

                    {item.title}

                  </h3>

                  <p className="leading-[1.9] text-[#66748f]">

                    {item.description}

                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}