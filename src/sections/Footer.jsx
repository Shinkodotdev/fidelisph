import {
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#07152f] to-[#0f2348] pt-24 pb-10">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#d6b26f]/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#d6b26f]/10 blur-[150px]" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">

        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-16 pb-20 border-b border-white/10">

          {/* LEFT */}

          <div>

            <div className="mb-7">

              <h2 className="font-['Cormorant_Garamond'] text-[clamp(3rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] font-bold bg-gradient-to-br from-[#f3dfb2] via-[#d7b36f] to-[#8d6724] bg-clip-text text-transparent">

                FIDELIS

              </h2>

            </div>

            <p className="max-w-[420px] text-white/70 leading-[2] text-[1rem] mb-8">

              Empowering churches and parish communities
              through secure cloud infrastructure,
              intelligent workflows, sacramental records,
              analytics, and modern engagement tools.

            </p>

            <div className="flex items-center gap-4">

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white/80
                  hover:bg-[#c89d49]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <i className="ri-facebook-fill text-lg" />
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white/80
                  hover:bg-[#c89d49]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <i className="ri-instagram-line text-lg" />
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white/80
                  hover:bg-[#c89d49]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <i className="ri-twitter-x-line text-lg" />
              </a>

              <a
                href="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white/80
                  hover:bg-[#c89d49]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <i className="ri-youtube-line text-lg" />
              </a>

            </div>
          </div>

          {/* PLATFORM */}

          <div>

            <h3 className="text-white font-semibold text-[1.1rem] mb-6">

              Platform

            </h3>

            <div className="flex flex-col gap-4">

              {[
                "Dashboard",
                "Sacramental Records",
                "Analytics",
                "Cloud Infrastructure",
                "Community Management",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-[#d6b26f] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-white font-semibold text-[1.1rem] mb-6">

              Company

            </h3>

            <div className="flex flex-col gap-4">

              {[
                "home",
                "features",
                "mission",
                "feedback",
                "timeline",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-[#d6b26f] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}

          <div>

            <h3 className="text-white font-semibold text-[1.1rem] mb-6">

              Get Started

            </h3>

            <p className="text-white/60 leading-[1.9] mb-8">

              Experience the future of parish
              administration and community engagement.

            </p>

            <button
              className="
                w-full
                h-14
                rounded-full
                bg-gradient-to-br
                from-[#f3dfb2]
                to-[#c89d49]
                text-white
                font-semibold
                shadow-[0_18px_45px_rgba(200,157,73,0.25)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Launch Platform
            </button>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-white/50 text-sm text-center md:text-left">

            © 2026 Fidelis Parish Management System.
            All rights reserved.

          </p>

          <div className="flex items-center gap-6 text-sm">

            <a
              href="#"
              className="text-white/50 hover:text-[#d6b26f] transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-white/50 hover:text-[#d6b26f] transition-colors duration-300"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-white/50 hover:text-[#d6b26f] transition-colors duration-300"
            >
              Security
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}