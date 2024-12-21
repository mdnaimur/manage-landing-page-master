import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Review.css";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AliBravo from "../../assets/images/avatar-ali.png";
import anishaLi from "../../assets/images/avatar-anisha.png";
import RichWatts from "../../assets/images/avatar-richard.png";
import SunilGough from "../../assets/images/avatar-shanai.png";

// Initialize Swiper modules

const reviews = [
  {
    id: 1,
    name: "Anisha Li",
    description:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    image: AliBravo,
  },
  {
    id: 2,
    name: "Ali Bravo",
    description:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    image: anishaLi,
  },
  {
    id: 3,
    name: "Richard Watts",
    description:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    image: RichWatts,
  },
  {
    id: 4,
    name: "Shanai Gough",
    description:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    image: SunilGough,
  },
];

export const DemoSilder = () => {
  return (
    <section className="review py-12 bg-gray-100">
      <div className="review_title text-center mb-8">
        <p className="review_title_text text-3xl font-bold text-gray-800">
          What they’ve said
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // Link to the custom class
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="review_content max-w-6xl mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review_content_item_div p-4">
              <div className="review_content_item bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  className="review_content_item_img w-24 h-24 rounded-full mx-auto mb-4"
                  src={review.image}
                  alt={review.name}
                />
                <p className="review_content_item_title font-semibold text-lg text-gray-800 mb-2">
                  {review.name}
                </p>
                <p className="review_content_item_description text-gray-600 text-sm">
                  {review.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination mt-4 flex justify-center"></div>
    </section>
  );
};
