import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navItems = [
    "Home",
    "Features",
    "Mission",
    "Feedback",
    "Timeline",
  ];

  return (
    <>
     <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-[#f8f4ec]/85 backdrop-blur-2xl border-b border-[#e9dfcf] shadow-[0_4px_30px_rgba(120,98,58,0.06)]"
            : ""
        }`}>
        <div className="w-[min(1450px,calc(100%-48px))] mx-auto flex items-center justify-between py-5">
          <div className="text-[2.3rem] tracking-[0.28em] font-['Cormorant_Garamond'] font-bold bg-gradient-to-br from-[#f3dfb2] via-[#d7b36f] to-[#8d6724] bg-clip-text text-transparent">
            FIDELIS
          </div>
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-[0.96rem] text-slate-500 font-medium hover:text-gold transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center">
            <button className="h-14 px-8 rounded-full bg-gradient-to-br from-[#d8b36a] to-[#c89d49] text-white font-semibold shadow-gold hover:-translate-y-1 transition-all">
              Launch Platform
            </button>
          </div>

          {/* TOGGLE */}

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="lg:hidden w-11 h-11 rounded-full border border-slate-200 bg-white/70 backdrop-blur-xl flex items-center justify-center"
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE */}

      <div
        className={`fixed inset-0 z-[998] bg-white/95 backdrop-blur-2xl transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 px-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() =>
                setOpen(false)
              }
              className="text-4xl font-semibold text-dark hover:text-gold transition"
            >
              {item}
            </a>
          ))}

          <button className="mt-4 w-full max-w-sm h-14 rounded-full bg-gradient-to-br from-[#d8b36a] to-[#c89d49] text-white font-semibold shadow-gold">
            Launch Platform
          </button>
        </div>
      </div>
    </>
  );
}