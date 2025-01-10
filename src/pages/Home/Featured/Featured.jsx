import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="hero featured-item bg-fixed  ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="py-10 my-10">
        <SectionTitle
          
          subheading="Check it out"
          heading="FROM OUR MENU"
          
        ></SectionTitle>
        <div className="flex justify-center items-center rounded-lg gap-10 py-10 mx-32  ">
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
            <button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
