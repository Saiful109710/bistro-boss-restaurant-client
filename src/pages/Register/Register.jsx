import React, { useContext } from "react";
import loginImg from "../../assets/others//authentication2.png";
import loginBgImg from "../../assets/others/authentication.png";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>console.log(result.user))
    .catch(err=>{
        console.log(err.message)
    })
  };

  // const handleSubmit = (e)=>{
  //     e.preventDefault();
  //     const name = e.target.name.value
  //     const email = e.target.email.value
  //     const password = e.target.password.value
  //     const confirmPassword = e.target.confirmPassword.value
  //     console.log(name,email,password,confirmPassword)

  // }
  return (
   <>
   <Helmet>
    <title>Bistro Boss | Register</title>
   </Helmet>
     <div
      style={{ backgroundImage: `url(${loginBgImg})` }}
      className="hero bg-base-200 min-h-screen "
    >
      <div
        style={{ backgroundImage: `url(${loginBgImg})` }}
        className="hero-content shadow-xl drop-shadow-lg  flex-col md:flex-row"
      >
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card py-10  w-full max-w-sm shrink-0 ">
          <h2 className="text-4xl font-bold text-slate-800">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { minLength: 6, maxLength: 20 ,pattern:/^(?=.*[a-z])(?=.*[A-Z]).*$/})}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password field is required</p>
              )}
                {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 character</p>
              )}
               {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be less then 20 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">Password must at least one uppercase,lowercase,one number and one special number</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-outline border-0 border-b-4 border-yellow-600">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-yellow-600 text-center">
              Already Have an Account? <Link to="/login">Go to Log In</Link>{" "}
            </p>
            <p className="text-center text-slate-600 font-medium">
              Or Sign in with
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Register;
