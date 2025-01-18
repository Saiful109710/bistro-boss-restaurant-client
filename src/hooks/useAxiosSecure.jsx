import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const axiosSecure = axios.create({
    baseURL:'https://bistro-boss-server-three-kappa.vercel.app'
})

// request interceptor to add authorization header fro every secure call to the api
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOutUser} = useAuth()
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors',token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    },(error)=>{
        return  Promise.reject(error)
    })

    // intercepts 401 & 403 status
    axiosSecure.interceptors.response.use((response)=>{
        return response;
    },async(error)=>{
        const status = error.response.status
            console.log('status error in the interceptors',error)
            // for 401 403 logout the user and login to the login page
            if(status===401 || status === 403){
                await logOutUser();
                navigate('/login')
            }

            return Promise.reject(error)
    })
    return axiosSecure
}

export default useAxiosSecure
