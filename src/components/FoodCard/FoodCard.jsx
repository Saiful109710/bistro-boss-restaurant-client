import React from "react";

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full max-w-[300px] h-[200px]"
        />
      </figure>
      <p className="bg-slate-900 py-2 px-4  text-white absolute right-0 mt-5 mr-5 rounded-md">${price}</p>
      <div className="card-body items-center text-center p-5">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn bg-white text-yellow-600 outline-none border-b-2 border-yellow-600">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
