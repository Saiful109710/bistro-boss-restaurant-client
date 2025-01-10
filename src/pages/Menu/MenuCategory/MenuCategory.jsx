import React from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";
import Cover from "../../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items ,title,img}) => {
  return (
    <div className="my-10 space-y-10">
        {
            title && <Cover img={img} title={title}></Cover>
        }
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Your Favorite food</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
