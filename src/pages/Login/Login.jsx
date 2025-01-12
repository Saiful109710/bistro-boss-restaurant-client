import React, { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import loginImg from '../../assets/others//authentication2.png'
import loginBgImg from '../../assets/others/authentication.png'
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const captchaRef = useRef(null)
    const [disabled,setIsDisabled] = useState(true)
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value

        logInUser(email,password)
        .then(result=>{
          console.log(result.user)
          
          navigate('/')
          Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    const handleCaptchaValidate = ()=>{
            const user_captcha_value = captchaRef.current.value
            if(validateCaptcha(user_captcha_value)){
                    setIsDisabled(false)
            }else{
                setIsDisabled(true)
            }
    }
  return (
    <div style={{backgroundImage:`url(${loginBgImg})`}} className="hero bg-base-200 min-h-screen ">
      <div style={{backgroundImage:`url(${loginBgImg})`}} className="hero-content shadow-xl drop-shadow-lg  flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card py-10 w-full max-w-sm shrink-0 ">
            <h2 className='text-4xl font-bold text-slate-800'>Sign In</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
                <LoadCanvasTemplate />
             <div className="flex gap-3 items-center">
             <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type the text above"
                className="input input-bordered"
                required
              />
              <button onClick={handleCaptchaValidate} className="btn btn-sm border-0 border-b-4 btn-outline">Validate</button>
             </div>

            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-outline border-0 border-b-4 ">Login</button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-yellow-600 text-center">New Here? <Link to='/register'>Create New Account</Link> </p>
            <p className="text-center text-slate-600 font-medium">Or Sign in with</p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
