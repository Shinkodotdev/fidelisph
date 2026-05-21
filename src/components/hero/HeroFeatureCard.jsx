export default function HeroFeatureCard({
  item,
}) {
  const Icon = item.icon;

  return (
    <div
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
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-[18px]
          border
          border-[#c89d49]/10
          bg-white/70
          text-[#c89d49]
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]

          sm:h-14
          sm:w-14
        "
      >
        <Icon size={20} />
      </div>

      <p
        className="
          text-[0.82rem]
          font-semibold
          leading-[1.6]
          text-slate-800

          sm:text-[0.92rem]
        "
      >
        {item.title}
      </p>
    </div>
  );
}