import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Canvas } from "@react-three/fiber";

import {
  Environment,
  Float,
  ContactShadows,
} from "@react-three/drei";

import gsap from "gsap";

import * as THREE from "three";

import {
  ArrowRight,
  Play,
  ShieldCheck,
  Cloud,
  BarChart3,
  Users,
  Church,
  MessageCircle,
} from "lucide-react";

import BookModel from "../components/BookModel";

export default function Hero() {
  const heroRef = useRef(null);

  const contentRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const [isMobile, setIsMobile] =
    useState(false);

  /* =========================================================
     MOBILE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  /* =========================================================
     MOUSE
  ========================================================= */

  useEffect(() => {
    const move = (e) => {
      mouse.current.x =
        (e.clientX /
          window.innerWidth -
          0.5) *
        2;

      mouse.current.y =
        (e.clientY /
          window.innerHeight -
          0.5) *
        2;
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  /* =========================================================
     GSAP
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          Array.from(
            contentRef.current.children
          ),
          {
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          }
        );
      }

      gsap.to(".hero-ring", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     FEATURES
  ========================================================= */

  const features = useMemo(
    () => [
      {
        icon: ShieldCheck,
        title: "Secure & Reliable",
      },
      {
        icon: Cloud,
        title: "Cloud Powered",
      },
      {
        icon: BarChart3,
        title: "Smart Analytics",
      },
      {
        icon: Users,
        title: "Community Focused",
      },
    ],
    []
  );

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
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,111,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(214,178,111,0.12),transparent_30%)]" />
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:90px_90px]" />
    <div className="absolute -top-[180px] -left-[150px] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#d6b26f]/20 blur-[120px]" />
    <div className="absolute -bottom-[180px] -right-[180px] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />
  </div>
  <div className="relative z-10 w-full max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 min-h-screen grid lg:grid-cols-2 gap-10 lg:gap-20 items-center pt-[110px] sm:pt-[130px] pb-16 lg:py-0">
    <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
      <div
        className="mb-6 sm:mb-9 w-fit inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/70 backdrop-blur-2xl border border-[#c89d49]/20 shadow-[0_20px_60px_rgba(15,23,42,0.08)] text-[#c89d49] font-semibold text-[0.8rem] sm:text-[0.95rem]">
        <ShieldCheck size={15} />
        Trusted by 150+ Parishes
      </div>
      <h1 className="flex flex-col leading-[0.95] pb-4 sm:pb-6 mb-6 sm:mb-8 font-['Cormorant_Garamond'] font-bold tracking-[-0.04em] bg-gradient-to-br from-[#f3dfb2] via-[#d7b36f] to-[#8d6724] bg-clip-text text-transparent text-[clamp(3.2rem,14vw,9rem)] break-words">
        Parish
        Management
      </h1>
      <p
        className="
          max-w-[650px]
          text-[0.95rem]
          sm:text-[1.08rem]
          leading-[1.85]
          sm:leading-[2]
          text-[#66748f]
          mb-8
          sm:mb-10
        "
      >
        Fidelis empowers churches
        and parish communities
        through intelligent record
        management, sacramental
        workflows, secure cloud
        infrastructure, analytics,
        and seamless communication
        tools.
      </p>
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          gap-4
          sm:gap-5
          w-full
          sm:w-auto
          mb-12
          sm:mb-16
        "
      >

        {/* PRIMARY */}

        <button
          className="
            w-full
            sm:w-auto
            h-12
            sm:h-16
            px-6
            sm:px-8
            rounded-full
            inline-flex
            items-center
            justify-center
            gap-3
            bg-gradient-to-br
            from-[#d8b36a]
            to-[#c89d49]
            text-white
            font-bold
            shadow-[0_18px_45px_rgba(200,157,73,0.25)]
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          Learn More

          <ArrowRight size={18} />
        </button>

        {/* SECONDARY */}

        <button
          className="
            inline-flex
            items-center
            gap-4
            font-semibold
            text-[#0f172a]
          "
        >
          <div
            className="
              w-[48px]
              h-[48px]
              sm:w-[52px]
              sm:h-[52px]
              rounded-full
              flex
              items-center
              justify-center
              bg-white
              border
              border-slate-200
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
          >
            <Play size={16} />
          </div>

          Watch Demo
        </button>
      </div>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <div
        className="
          w-full
          grid
          grid-cols-2
          sm:grid-cols-4
          gap-5
          sm:gap-6
        "
      >
        {features.map(
          (item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  gap-3
                  text-center
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-[18px]
                    sm:rounded-[20px]
                    flex
                    items-center
                    justify-center
                    bg-white/70
                    border
                    border-[#c89d49]/10
                    shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                    text-[#c89d49]
                  "
                >
                  <Icon size={20} />
                </div>

                <p
                  className="
                    text-[0.82rem]
                    sm:text-[0.92rem]
                    font-semibold
                    text-slate-800
                    leading-[1.6]
                  "
                >
                  {item.title}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>

    {/* =========================================================
        RIGHT
    ========================================================= */}

    <div
      className="
        relative
        w-full
        h-[320px]
        sm:h-[500px]
        md:h-[650px]
        lg:h-[920px]
        xl:h-[1000px]
        flex
        items-center
        justify-center
        order-1
        lg:order-2
      "
    >

      {/* EFFECTS */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">

        {/* RING */}

        <div
          className="
            hero-ring
            absolute
            w-[320px]
            h-[320px]
            sm:w-[500px]
            sm:h-[500px]
            lg:w-[720px]
            lg:h-[720px]
            rounded-full
            border-2
            border-[#d6b26f]/20
          "
        />

        {/* GLOW */}

        <div
          className="
            absolute
            w-[220px]
            h-[220px]
            sm:w-[420px]
            sm:h-[420px]
            lg:w-[560px]
            lg:h-[560px]
            rounded-full
            bg-[radial-gradient(rgba(214,178,111,0.18),transparent_70%)]
            blur-[30px]
          "
        />
      </div>
<div
  className="
    absolute
    left-[-8px]
    sm:left-[2%]
    md:left-[4%]
    lg:left-[-30px]
    top-[48%]
    md:top-[45%]
    z-20

    flex
    items-center

    gap-2
    sm:gap-3
    md:gap-4

    px-3
    sm:px-4
    md:px-6

    py-3
    sm:py-4
    md:py-5

    rounded-[20px]
    sm:rounded-[24px]
    md:rounded-[28px]

    bg-white/90
    backdrop-blur-2xl

    border
    border-white/70

    shadow-[0_20px_50px_rgba(15,23,42,0.08)]

    scale-[0.62]
    sm:scale-[0.78]
    md:scale-90
    lg:scale-100
  "
>
  <div
    className="
      w-[42px]
      h-[42px]
      sm:w-[50px]
      sm:h-[50px]
      md:w-[60px]
      md:h-[60px]

      rounded-full

      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-[#efd9a4]
      to-[#c89d49]

      text-white
      shrink-0
    "
  >
    <Church className="w-4 h-4 sm:w-5 sm:h-5" />
  </div>

  <div>
    <h4
      className="
        text-[1rem]
        sm:text-[1.25rem]
        md:text-[1.8rem]

        font-bold
        text-slate-900
        leading-none
      "
    >
      150+
    </h4>

    <p
      className="
        text-[0.68rem]
        sm:text-[0.78rem]
        md:text-base

        text-slate-500
        whitespace-nowrap
      "
    >
      Active Parishes
    </p>
  </div>
</div>

{/* =========================================================
    TOP RIGHT
========================================================= */}

<div
  className="
    absolute
    top-[10%]
    sm:top-[12%]

    right-[-10px]
    sm:right-[1%]
    lg:right-[-10px]

    z-20

    flex
    items-center

    gap-2
    sm:gap-3
    md:gap-4

    px-3
    sm:px-4
    md:px-6

    py-3
    sm:py-4
    md:py-5

    rounded-[20px]
    sm:rounded-[24px]
    md:rounded-[28px]

    bg-white/90
    backdrop-blur-2xl

    border
    border-white/70

    shadow-[0_20px_50px_rgba(15,23,42,0.08)]

    scale-[0.62]
    sm:scale-[0.78]
    md:scale-90
    lg:scale-100
  "
>
  <div
    className="
      w-[42px]
      h-[42px]
      sm:w-[50px]
      sm:h-[50px]
      md:w-[60px]
      md:h-[60px]

      rounded-full

      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-[#efd9a4]
      to-[#c89d49]

      text-white
      shrink-0
    "
  >
    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
  </div>

  <div>
    <h4
      className="
        text-[1rem]
        sm:text-[1.25rem]
        md:text-[1.8rem]

        font-bold
        text-slate-900
        leading-none
      "
    >
      1M+
    </h4>

    <p
      className="
        text-[0.68rem]
        sm:text-[0.78rem]
        md:text-base

        text-slate-500
        whitespace-nowrap
      "
    >
      Records Managed
    </p>
  </div>
</div>

{/* =========================================================
    BOTTOM RIGHT
========================================================= */}

<div
  className="
    absolute
    bottom-[10%]
    sm:bottom-[16%]
    lg:bottom-[18%]

    right-[-10px]
    sm:right-[2%]
    lg:right-0

    z-20

    flex
    items-center

    gap-2
    sm:gap-3
    md:gap-4

    px-3
    sm:px-4
    md:px-6

    py-3
    sm:py-4
    md:py-5

    rounded-[20px]
    sm:rounded-[24px]
    md:rounded-[28px]

    bg-white/90
    backdrop-blur-2xl

    border
    border-white/70

    shadow-[0_20px_50px_rgba(15,23,42,0.08)]

    scale-[0.62]
    sm:scale-[0.78]
    md:scale-90
    lg:scale-100
  "
>
  <div
    className="
      w-[42px]
      h-[42px]
      sm:w-[50px]
      sm:h-[50px]
      md:w-[60px]
      md:h-[60px]

      rounded-full

      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-[#efd9a4]
      to-[#c89d49]

      text-white
      shrink-0
    "
  >
    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
  </div>

  <div>
    <h4
      className="
        text-[1rem]
        sm:text-[1.25rem]
        md:text-[1.8rem]

        font-bold
        text-slate-900
        leading-none
      "
    >
      99.9%
    </h4>

    <p
      className="
        text-[0.68rem]
        sm:text-[0.78rem]
        md:text-base

        text-slate-500
        whitespace-nowrap
      "
    >
      Uptime Guaranteed
    </p>
  </div>
</div>

      <Canvas
        shadows={{
          type: THREE.PCFShadowMap,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        dpr={isMobile ? 1 : [1, 2]}
        camera={{
          position: [0, 0, 6.2],
          fov: 35,
        }}
        className="relative z-10 w-full h-full"
      >

        {/* LIGHTS */}

        <ambientLight intensity={1.4} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          castShadow
        />

        <pointLight
          position={[0, 3, 2]}
          intensity={2}
          color="#d6b26f"
        />

        <spotLight
          position={[0, 6, 4]}
          intensity={2.5}
          angle={0.35}
          penumbra={1}
          color="#fff6e7"
        />

        {/* ENV */}

        <Environment preset="sunset" />

        {/* FLOAT */}

        <Float
          speed={1}
          rotationIntensity={0}
          floatIntensity={0.5}
        >
          <BookModel mouse={mouse} />
        </Float>

        {/* SHADOW */}

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.35}
          scale={10}
          blur={2.5}
          far={5}
        />
      </Canvas>
    </div>
  </div>
</section>
  );
}