import "./Review.css";

import AliBravo from "../../assets/images/avatar-ali.png";
import anishaLi from "../../assets/images/avatar-anisha.png";
import RichWatts from "../../assets/images/avatar-richard.png";
import SunilGough from "../../assets/images/avatar-shanai.png";

export const Review = () => {
  return (
    <section className="review ">
      <div className="review_title">
        <p className="review_title_text">What they’ve said</p>
      </div>

      <div className="review_content swiper-wrapper">
        <div className="review_content_item_div">
          <div className="review_content_item">
            <img
              className="review_content_item_img"
              src={anishaLi}
              alt="anisha li"
            />
            <p className="review_content_item_title"> Anisha Li</p>
            <p className="review_content_item_description">
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>

        <div className="review_content_item_div">
          <div className="review_content_item">
            <img
              className="review_content_item_img"
              src={AliBravo}
              alt=" Ali Bravo"
            />
            <p className="review_content_item_title"> Ali Bravo</p>
            <p className="review_content_item_description">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>

        <div className="review_content_item_div">
          <div className="review_content_item">
            <img
              className="review_content_item_img"
              src={RichWatts}
              alt="  Richard Watts"
            />
            <p className="review_content_item_title"> Richard Watts</p>
            <p className="review_content_item_description">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </div>

        <div className="review_content_item_div">
          <div className="review_content_item">
            <img
              className="review_content_item_img"
              src={SunilGough}
              alt="  Shanai Gough"
            />
            <p className="review_content_item_title"> Shanai Gough</p>
            <p className="review_content_item_description">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
