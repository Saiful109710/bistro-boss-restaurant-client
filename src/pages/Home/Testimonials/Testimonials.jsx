import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";


import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="space-y-5 my-10 max-w-5xl mx-auto">
      <SectionTitle
        subheading="What Our Clients Say"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center mx-24 my-16 gap-8">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <FaQuoteLeft className="text-5xl"></FaQuoteLeft>
              <p className="md:w-2/3 text-center">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
