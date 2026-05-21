export default function HeroStatCard({
  item,
}) {
  const Icon = item.icon;

  return (
    <div
      className={`
        absolute
        z-20
        flex
        items-center
        gap-3
        rounded-[24px]
        border
        border-white/70
        bg-white/90
        px-4
        py-4
        shadow-[0_20px_50px_rgba(15,23,42,0.08)]
        backdrop-blur-xl
        ${item.position}

        scale-[0.72]
        sm:scale-[0.85]
        lg:scale-100
      `}
    >
      <div
        className="
          flex
          h-[54px]
          w-[54px]
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-[#efd9a4]
          to-[#c89d49]
          text-white
        "
      >
        <Icon size={22} />
      </div>

      <div>
        <h4 className="text-[1.4rem] font-bold text-slate-900">
          {item.value}
        </h4>

        <p className="text-[0.88rem] text-slate-500 whitespace-nowrap">
          {item.label}
        </p>
      </div>
    </div>
  );
}