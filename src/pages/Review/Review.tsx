import "../../../node_modules/swiper/modules/navigation.css"; // Navigation module swiper/modules/navigation.scss
import "../../../node_modules/swiper/modules/pagination.css"; // Pagination module swiper/modules/pagination.scss
import "../../../node_modules/swiper/swiper.css"; // core Swiper
import "./Review.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AliBravo from "../../assets/images/avatar-ali.png";
import anishaLi from "../../assets/images/avatar-anisha.png";
import RichWatts from "../../assets/images/avatar-richard.png";
import SunilGough from "../../assets/images/avatar-shanai.png";

// import { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

export const Review = () => {
  return (
    <section className="review ">
      <div className="review_title">
        <p className="review_title_text">What they’ve said</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="review_content"
      >
        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review_content_item_div">
            <div className="review_content_item">
              <img
                className="review_content_item_img"
                src={SunilGough}
                alt="  Shanai Gough"
              />
              <p className="review_content_item_title"> Shanai Gough</p>
              <p className="review_content_item_description">
                “Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in-sync
                without being intrusive.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="max-w-[1675px] mx-auto text-center mt-10 mb-20 md:mt-0 md:mb-44">
        <a href="https://example.com" target="_blank">
          <button className="btn hoverable">Get Started</button>
        </a>
      </div>
    </section>
  );
};
