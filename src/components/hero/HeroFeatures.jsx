import HeroFeatureCard from "./HeroFeatureCard";

import { FEATURES } from "./heroData";

export default function HeroFeatures() {
  return (
    <div
      className="
        grid
        w-full
        grid-cols-2
        gap-5

        sm:grid-cols-4
        sm:gap-6
      "
    >
      {FEATURES.map((item) => (
        <HeroFeatureCard
          key={item.title}
          item={item}
        />
      ))}
    </div>
  );
}