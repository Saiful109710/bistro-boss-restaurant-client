import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
      const {googleLogIn} = useAuth()
      const navigate = useNavigate()
      const location = useLocation()

      const from = location.state?.from?.pathname || '/'
      const handleGoogleLogIn = ()=>{
          googleLogIn()
          .then(res=>{
              navigate(from)
          })
      }

  return (
    <div className='flex justify-center items-center gap-5'>
        <button onClick={handleGoogleLogIn} className='btn rounded-full bg-none btn-outline'><FaGoogle className='text-xl'></FaGoogle></button>
        <button className='btn rounded-full bg-none btn-outline'><FaFacebook className='text-xl'></FaFacebook></button>
        <button className='btn rounded-full bg-none btn-outline'><FaGithub className='text-xl'></FaGithub></button>
    </div>
  )
}

export default SocialLogin
