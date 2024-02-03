import React from "react";
import "./testimonial.css";
import Profile1 from "/src/images/profile1.jpg";
import Profile2 from "/src/images/profile2.jpg";
import Profile3 from "/src/images/profile3.jpg";

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
      "Franck was an invaluable asset to our team during the development of our mobile app. His strong problem-solving skills and proactive approach ensured that we stayed on track and met our deadlines. He was always willing to go the extra mile and even suggested improvements that we hadn't considered. He is a highly skilled developer with a deep understanding of user experience, and his work is of the highest quality. I am confident that Franck will continue to be a success in his field.",
  },
  {
    image: Profile2,
    name: "Daniele Sami",
    review:
      "I hired Franck to help me create a personal portfolio website, and I am thoroughly impressed with the results. He was able to take my vague ideas and transform them into a polished and professional website that perfectly reflects my brand. He was patient and understanding throughout the process, and he made sure that I was completely satisfied with the final product. He is a talented designer and developer who is both creative and meticulous. I highly recommend his services to anyone looking for a reliable and skilled web professional.",
  },
  {
    image: Profile3,
    name: "Ahmet Abdu",
    review:
      "Franck's work on my website was truly exceptional. Not only did he bring my vision to life with a stunning and user-friendly design, but he also exceeded my expectations with his technical expertise and efficiency. He was incredibly communicative throughout the entire process, always keeping me informed and addressing my concerns promptly. The end result was a website that not only looked great, but also performed flawlessly, leading to a significant increase in traffic and conversions. I wouldn't hesitate to recommend Franck to anyone looking for a talented and reliable web developer.",
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
