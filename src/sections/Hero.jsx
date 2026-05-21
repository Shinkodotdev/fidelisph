import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroBackground from "../components/hero/HeroBackground";
import HeroContent from "../components/hero/HeroContent";
import HeroCanvas from "../components/hero/HeroCanvas";
import HeroStats from "../components/hero/HeroStats";

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
      gsap.to(".hero-ring", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#f2ede5]
        via-[#ebe4d7]
        to-[#e3dac9]
      "
    >
      <HeroBackground />
      <div className=" relative z-10 mx-auto grid min-h-screen w-full max-w-[1450px] items-center gap-12 px-5 pb-16 pt-[110px] sm:px-8 sm:pt-[130px] lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-0 xl:px-12">
        <HeroContent contentRef={contentRef} />
        <div
          className="
            relative
            order-1
            flex
            h-[340px]
            w-full
            items-center
            justify-center
            sm:h-[520px]
            md:h-[680px]
            lg:order-2
            lg:h-[900px]
          "
        >
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div
              className="
                hero-ring
                absolute
                h-[320px]
                w-[320px]
                rounded-full
                border-2
                border-[#d6b26f]/20
                sm:h-[500px]
                sm:w-[500px]
                lg:h-[720px]
                lg:w-[720px]
              "
            />
            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                bg-[radial-gradient(rgba(214,178,111,0.18),transparent_70%)]
                blur-[30px]
                sm:h-[420px]
                sm:w-[420px]
                lg:h-[560px]
                lg:w-[560px]
              "
            />
          </div>
          <HeroStats />
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}