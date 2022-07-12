import { IntroCard } from "./components/IntroCard";
import { WhatUsersSay } from "./components/WhatUsersSay";
import { WhatWeDo } from "./components/WhatWeDo";
import { WhyCard } from "./components/WhyCard";

function LandingPage() {
  return (
    <div className="flex flex-col min-w-450p max-w-6xl items-center space-y-20 pt-14">
      <IntroCard/>
      <WhyCard />
      <WhatWeDo />
      <WhatUsersSay />
    </div>
  );
}

export default LandingPage;
