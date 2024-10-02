import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from 'react-hook-form';
import axios from "axios"
import toast from "react-hot-toast"
function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      email:data.fullname,     //note jab ham user create kr rhe h to data ke under hi sb kuch h email
      password:data.password, //ur fullname api se jo create kiye wo isiliye data.fullname sb lga h
      
    }

    //ye inforamtion ko store krna h to backend ka api call
     await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Loggedin Succesfully!!!');
        document.getElementById("my_model_3").close();
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000)
      }
      
    }).catch((err)=>{
      if(err.response) {
        console.log(err);
        toast.error("Error: " +err.response.data.message);
        setTimeout(()=>{},2000)
      }
    });




  };
  return (
   <>
   <dialog id="my_modal_3" className="modal  ">
  <div className="modal-box md:h-[360px]  dark:bg-slate-900 dark:text-white md:mr-12">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_model_3").close()}>
      ✕
      </Link>
    
    {/* Login */}
    <h3 className="font-bold md:text-xl">Login!</h3>
   <div className="mt-4 space-y-2">
    {/* email input */}
    <span className="font-bold text-lg">Email</span>
    <br/>
    <input type="email"
    placeholder="Enter your Email" 
    className="w-80 px-3 py-2 border rounded-md outline-none"
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
    className="w-80 px-3 py-2 border rounded-md outline-none" 
    {...register("password", { required: true })}
    />
    <br/>
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}

   </div>
   {/* button */}
   
<div className="flex flex-col items-center space-y-4 mt-6 md:flex-row md:justify-around md:space-y-0 md:space-x-6 md:mt-8 md:mr-20">
  <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300">
    Login
  </button>
  
  <p className="font-semibold text-center text-lg md:text-xl md:mt-0">
    Not registered? 
    <Link to="/signup" className="underline text-blue-500 cursor-pointer ml-1">
      Signup
    </Link>
  </p>
</div>
</form>
</div>
</dialog>
</>
  );
}

export default Login

