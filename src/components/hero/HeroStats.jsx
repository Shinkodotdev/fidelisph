import HeroStatCard from "./HeroStatCard";

import { STATS } from "./heroData";

export default function HeroStats() {
  return (
    <>
      {STATS.map((item) => (
        <HeroStatCard
          key={item.label}
          item={item}
        />
      ))}
    </>
  );
}