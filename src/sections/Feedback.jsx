import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

export default function Feedback() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f2] py-24 sm:py-32">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />

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
              bg-white/80
              px-5
              py-3
              text-[0.92rem]
              font-semibold
              text-[#c89d49]
              shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            "
          >
            <Star size={16} />

            Community Feedback
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
              sm:text-[1.08rem]
            "
          >
            Discover how churches and parish communities
            are transforming their operations with Fidelis.
          </p>
        </div>

        {/* FEEDBACK GRID */}

        <div className="grid gap-7 lg:grid-cols-3">

          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
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

              {/* GLOW */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top_right,rgba(214,178,111,0.16),transparent_42%)]
                "
              />

              {/* CONTENT */}

              <div className="relative z-10">

                {/* TOP */}

                <div className="mb-8 flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-[70px]
                        w-[70px]
                        rounded-full
                        object-cover
                        border-4
                        border-white/80
                        shadow-lg
                      "
                    />

                    <div>

                      <h3 className="text-[1.2rem] font-bold text-[#07152f]">

                        {item.name}

                      </h3>

                      <p className="text-[#8b6a2f] font-medium">

                        {item.role}

                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      h-[52px]
                      w-[52px]
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
                    <Quote size={22} />
                  </div>
                </div>

                {/* STARS */}

                <div className="mb-6 flex items-center gap-1 text-[#d6b26f]">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* FEEDBACK */}

                <p
                  className="
                    text-[1rem]
                    leading-[2]
                    text-[#66748f]
                  "
                >
                  {item.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}

        <div className="mt-14 flex items-center justify-center gap-4">

          <button
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-full
              border
              border-[#ded2bf]
              bg-white/80
              text-[#07152f]
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              transition-all
              duration-300
              hover:bg-[#c89d49]
              hover:text-white
            "
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-full
              border
              border-[#ded2bf]
              bg-white/80
              text-[#07152f]
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              transition-all
              duration-300
              hover:bg-[#c89d49]
              hover:text-white
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}