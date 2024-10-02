import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios'
// import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
function Course() {
  //aya backend ka api call hua h
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async () => {
      try{
      const res =await axios.get("http://localhost:4001/book");//isi url par data h ye postman check api h jo data read kiya tha
      console.log(res.data);
      setBook(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className=" mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          We're delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12  text-xl">
        This course is designed to enhance your reading comprehension, critical thinking, 
        and analytical skills through the study of a variety of texts. Whether you’re an avid reader or someone looking to improve your reading habits, 
        this course will guide you through techniques for deep reading, note-taking, and critically engaging with different genres of books. By the end of the course, 
        you'll not only have read several key texts but also developed the ability to analyze them in depth and discuss themes, characters, and ideas with greater insight.
       
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>
       
      </div>
     <div className="mt-12  grid grid-cols-1 md:grid-cols-4">
       {
       book.map((item)=>(
       <Cards key={item.id} item={ item}/>
))
       }
     </div>
    </div>
    </>
  )
}

export default Course;
