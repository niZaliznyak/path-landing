import { IntroCard } from "./components/IntroCard";
import { WhatUsersSay } from "./components/WhatUsersSay";
import { WhatWeDo } from "./components/WhatWeDo";
import { WhyCard } from "./components/WhyCard";

function LandingPage() {
  return (
    <div className="flex flex-col min-w-450p w-full items-center pt-14 md:pt-24">
      <div className="max-w-6xl space-y-20">
        <IntroCard />
        <WhyCard />
        <WhatWeDo />
      </div>
      <WhatUsersSay />
    </div>
  );
}

export default LandingPage;
