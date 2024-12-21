// import BackgroundImg from "../../assets/images/bg-tablet-pattern.svg";

import illstrationgroundImg from "../../assets/images/illustration-intro.svg";

export const NavHero = () => {
  return (
    <div>
      <section className="nav_hero ">
        <div className="nav_hero_text_left">
          <h2 className="nav_hero_title">
            {" "}
            Bring everyone together to build better products.
          </h2>
          <p className="nav_hero_paragraph">
            {" "}
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="nav_hero_btn hoverable">Get Started</button>
        </div>

        <div className="nav_hero_img_right">
          <img src={illstrationgroundImg} alt="illstrationgroundImg Pattern" />
        </div>
      </section>
    </div>
  );
};
