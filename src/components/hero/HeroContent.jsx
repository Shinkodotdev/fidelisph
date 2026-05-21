import HeroBadge from "./HeroBadge";

import HeroButtons from "./HeroButtons";

import HeroFeatures from "./HeroFeatures";

export default function HeroContent({
  contentRef,
}) {
  return (
    <div
      ref={contentRef}
      className="
        relative
        z-10
        order-2
        flex
        flex-col
        items-center
        text-center

        lg:order-1
        lg:items-start
        lg:text-left
      "
    >
      <HeroBadge />

      <h1
        className="
          mb-6
          flex
          flex-col
          bg-gradient-to-br
          from-[#f3dfb2]
          via-[#d7b36f]
          to-[#8d6724]
          bg-clip-text
          pb-4
          font-['Cormorant_Garamond']
          text-[clamp(3.4rem,13vw,8rem)]
          font-bold
          leading-[0.92]
          tracking-[-0.05em]
          text-transparent
        "
      >
        Parish
        Management
      </h1>

      <p
        className="
          mb-10
          max-w-[650px]
          text-[0.98rem]
          leading-[1.9]
          text-[#66748f]

          sm:text-[1.08rem]
          sm:leading-[2]
        "
      >
        Fidelis empowers churches and
        parish communities through
        intelligent record management,
        sacramental workflows, secure
        cloud infrastructure, analytics,
        and seamless communication
        tools.
      </p>

      <HeroButtons />

      <HeroFeatures />
    </div>
  );
}