import {useState,useEffect} from "react"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json"
import Cards from "./Cards";
import axios from "axios"
export default function Freebook() {

  //yaha data backend se la rhe h kar rhe h
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async () => {
      try{
      const res =await axios.get("http://localhost:4001/book");//isi url par data h ye postman check api h jo data read kiya tha
      console.log(res.data);
     const data= res.data.filter((data) => data.category === "free");
      setBook(data)
      }catch(error){
        console.log(error)
      }
    }
    getBook();
  },[])

//ye phle list .json se la rhe the
  // const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div> 
      <h1 className="font-semibold text-xl  mt-14 ">Free Offered Book</h1>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur libero rerum voluptatibus voluptates quasi fugit accusamus debitis, ab dolores vitae .</p>
      </div>
     
      <div>
      <Slider {...settings}>
        {book.map((item) => (
  <Cards item={item} key={item.id} />
))}
      </Slider>
      </div>
      </div> 
    </>
  )
}
