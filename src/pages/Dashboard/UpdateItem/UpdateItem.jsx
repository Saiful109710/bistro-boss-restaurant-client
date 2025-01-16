import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item)
  const {name,category,recipe,image,price} = item
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // image upload to imgbb and then get an url
    console.log(res.data);
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount>0) {
        // show success popup
        reset();
        Swal.fire({
          position: "center",
          title: `${data.name} is Updated to the menu`,
          showConfirmButton: false,
          icon: "success",
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subheading="Refresh Info"
      ></SectionTitle>
      <div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label htmlFor="">Recipe Name</label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-5">
            <div className="form-control w-full">
              <label>Category</label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label htmlFor="">Price</label>
              <input
                type="text"
                defaultValue={price}
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="">Recipe Details</label>
            <textarea
            defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24 "
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-gradient-to-r from-yellow-400 to-yellow-700 text-white">
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
