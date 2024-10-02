import React from 'react'
// import {Link,uselocation,useNavigate } from "react-router-dom"
import { Link, useLocation, useNavigate } from "react-router-dom";

import Login from "./Login"
import { useForm } from 'react-hook-form';
import axios from "axios"
import toast from "react-hot-toast"
function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,   //note jab ham user create kr rhe h to data ke under hi sb kuch h email
      email:data.email,   //ur fullname api se jo create kiye wo isiliye data.fullname sb lga h
      password:data.password,
    }

    //ye inforamtion ko store krna h to backend ka api call
     await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('signup Succesfully!!!');
        navigate(from,{replace:true})
      }
      //ye chez ka use jab sign up ho jaye tb ye browser ke localStroage min store ho jye
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response) {
        console.log(err);
        toast.error("Error: " +err.response.data.message)
      }
    })
  };

  return (
    <> 
    <div className="flex h-screen items-center justify-center   ">
     <div  className="w-[450px]  ">
    <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      
    {/* Login */}
    <h3 className="font-bold text-xl ">Signup!</h3>
   <div className="mt-4 space-y-2">
    <span className="font-bold text-lg">Name</span>
    <br/>
    
     
    <input type="name"
    placeholder="Enter your Fullname" 
    className="w-80 px-3 py-3 border rounded-md outline-none"
    {...register("fullname", { required: true })}
      />  
      
    <br/>
    {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}  
   </div>

   <div className="mt-4 space-y-2">
    <span className="font-bold text-lg">Email</span>
    <br/>
    <input type="email"
    placeholder="Enter your Email" 
    className="w-80 px-3 py-3 border rounded-md outline-none"
    {...register("email", { required: true })}
    />  
    <br/>
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
   </div>

   {/* Password */}
   <div className="mt-4 space-y-2">
    <span className="font-bold text-lg">Password</span>
    <br/>
    <input type="password"
    placeholder="Enter your password" 
    className="w-80 px-3 py-3 border rounded-md outline-none"
    {...register("password", { required: true })}
    />
    <br/>
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
   </div>
   {/* button */}
   <div className="flex justify-around mt-4">
    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
      Signup
      </button>
    <div className ="font-semibold text-xl">Have account? 
      <button className="underline text-blue-500 cursor-pointer"
    onClick={()=>document.getElementById("my_modal_3").showModal()} >
     Login 
     </button>
     <Login />
     </div>
    </div>
  </form>

  </div>
</div>
    </div>
    </>
  )
}

export default Signup
