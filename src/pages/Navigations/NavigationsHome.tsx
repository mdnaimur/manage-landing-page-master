import "./Navigations.css";

import { NavHero } from "./NavHero";
import { Navbar } from "./Navbar";

export const NavigationsHome = () => {
  return (
    <div className="font-BeVetnamPro">
      <div
        className="-z-10 top-0 h-full max-w-lg md:max-w-none w-full right-0 absolute bg-BodyBackImg bg-no-repeat 
         bg-[size:clamp(420px,calc(35vmin+270px),500px)] md:bg-[size:clamp(420px,80vmin,700px)] 
        bg-[position:top_-30%_right_calc(1vmin-130px)] sm:bg-[position:top_-30%_right_calc(5vmin-70px)]
        md:bg-[position:calc(100%+150px)_-100px]
        aria-hidden 
      "
      />
      <Navbar />
      {/* className="-z-10 top-0 h-full max-w-lg md:max-w-none w-full right-0 absolute bg-[url(/bg-tablet-pattern.svg)]
        bg-[size:clamp(420px,calc(35vmin+270px),500px)] md:bg-[size:clamp(420px,80vmin,700px)] bg-no-repeat 
        bg-[position:top_-30%_right_calc(1vmin-130px)] sm:bg-[position:top_-30%_right_calc(5vmin-70px)]
        md:bg-[position:calc(100%+150px)_-100px]"
        aria-hidden */}
      <main>
        <NavHero />
      </main>
    </div>
  );
};
