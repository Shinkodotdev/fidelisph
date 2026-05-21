export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,111,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(214,178,111,0.12),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute -left-[150px] -top-[180px] h-[420px] w-[420px] rounded-full bg-[#d6b26f]/20 blur-[120px]" />

      <div className="absolute -bottom-[180px] -right-[180px] h-[420px] w-[420px] rounded-full bg-[#d6b26f]/10 blur-[120px]" />
    </div>
  );
}