import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
        <button className='btn rounded-full bg-none btn-outline'><FaGoogle className='text-xl'></FaGoogle></button>
        <button className='btn rounded-full bg-none btn-outline'><FaFacebook className='text-xl'></FaFacebook></button>
        <button className='btn rounded-full bg-none btn-outline'><FaGithub className='text-xl'></FaGithub></button>
    </div>
  )
}

export default SocialLogin
