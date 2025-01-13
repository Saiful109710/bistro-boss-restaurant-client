import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCart()
    const {name,image,price,recipe,_id} = item

    const handleFoodCart = ()=>{
          
          if(user && user?.email){
            // set data to database
            console.log(user.email)
            const cartItem = {
                  menuId:_id,
                  email:user.email,
                  name,
                  image,
                  price
            }
            
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
              console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                  title:`${name} is added`,
                  timer:1500
                })
              }
              refetch()
              
            })
            
          }else{
            Swal.fire({
              title: "You are not logged in?",
              text: "please login to add to the cart",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
              //  send to the user login page
              navigate('/login',{state:{from:location}})
              }
            });
          }
    }
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
          <button onClick={handleFoodCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-yellow-600">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
