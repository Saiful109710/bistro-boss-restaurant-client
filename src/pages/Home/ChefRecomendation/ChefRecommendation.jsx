import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const ChefRecommendation = () => {
  return (
    <section>
      <SectionTitle
        subheading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-5">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 ">
            <img
            
              src={img1}
              alt="Shoes"
              className="rounded-xl w-full max-w-[300px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn bg-white text-yellow-600 outline-none border-b-2 border-yellow-600">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 ">
            <img
            
              src={img1}
              alt="Shoes"
              className="rounded-xl w-full max-w-[300px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn bg-white hover:bg-black text-yellow-600 outline-none border-b-2 border-yellow-600">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 ">
            <img
            
              src={img1}
              alt="Shoes"
              className="rounded-xl w-full max-w-[300px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn bg-white text-yellow-600 outline-none border-b-2 border-yellow-600">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendation;
