import React from "react";
import "./testimonial.css";
import Profile1 from "C:/Users/usr186/Desktop/franckportofolio/public/images/profile1.jpg";
import Profile2 from "C:/Users/usr186/Desktop/franckportofolio/public/images/profile2.jpg";
import Profile3 from "C:/Users/usr186/Desktop/franckportofolio/public/images/profile3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const data = [
  {
    image: Profile1,
    name: "Franck Ndala",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, velit?",
  },
  {
    image: Profile2,
    name: "Daniele Sami",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, velit?",
  },
  {
    image: Profile3,
    name: "Ahmet Abdu",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, velit?",
  },
];

const testimonial = () => {
  return (
    <section id="testimonial">
      <h5> Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={item.image} alt="review image" />
            </div>
            <h5 className="client_name">{item.name}</h5>
            <small className="client_review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default testimonial;
