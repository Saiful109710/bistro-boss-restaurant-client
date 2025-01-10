import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-item py-10">
      <SectionTitle
        subheading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="flex justify-center items-center gap-10 py-10 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-3 text-white">
          <p>Aug 20, 2029</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
