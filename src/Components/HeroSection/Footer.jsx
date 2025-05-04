import { useState } from "react";
import { InvertedComma } from "../../assets/Clinet-Testimonial";
import { arrRight, GreenArrow, leftIcon, rightarr } from "../../assets/images";
import { useApp } from "../Context/UseContext";
import PropTypes from "prop-types";
import MainFooter from "../FinalFooter/MainFooter";

const Footer = () => {
  const {products,Clients}=useApp()
  const [currentIndex, setCurrentIndex] =useState(0);

  const handlePrev = ()=>{
    if(currentIndex>0){
      setCurrentIndex(currentIndex-1)
    }
  }
  const handleNext = () => {
    if (currentIndex < Clients.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  return (
    <div className="mt-20 px-6 py-8 bg-white">
      {/* Newest Products Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Newest Products</h2>
        <span className="flex items-center gap-2 text-emerald-600 cursor-pointer hover:underline text-sm">
          View All
          <img src={GreenArrow} alt="arrow" className="w-4 h-4" />
        </span>
      </div>

      
  

    <div className="flex gap-4 w-max">
    {products.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg shadow-md p-4 min-w-[200px] flex flex-col"
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover"
            />
            <span className="font-semibold">{item.title}</span>
            <span className="text-sm text-gray-600">{item.price}</span>
            <p className="text-yellow-500">
              {"⭐".repeat(Math.floor(item.rating)) +
                (item.rating % 1 !== 0 ? "⭐️" : "")}
            </p>
          </div>
          <div className="relative -top-2">
            <img src={item.cart} alt="cart" className="w-6 h-6" />
          </div>
        </div>
      </div>
    ))}
  </div>
      

  


<div className="relative top-10 flex flex-col ">

<div className="flex items-center justify-between px-10  ">
    <h4>Client Testimonials</h4>
   <div className="flex items-center justify-between gap-5">
   <img onClick={handlePrev} src={leftIcon} alt=""  className="bg-[#e5fffd] rounded-full px-2 py-2"/>
   <img src={rightarr} alt="" onClick={handleNext}  className="bg-emerald-500 rounded-full px-2 py-2"/>
   </div>
  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {Clients.slice(currentIndex,currentIndex+3).map((item) => (
    <div
    key={item.id}
    className="bg-white text-black rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between "
    >
      <img src={item.comma} className="w-8 mb-2" alt="" />
      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">{item.description}</p>

      {/* Profile and Rating */}
      <div className="flex items-center justify-between">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src={item.images}
            alt={item.name}
            className="w-12 h-12 object-cover rounded-full border border-gray-300"
            />
          <div className="flex flex-col leading-tight">
            <span className="font-medium ">{item.name}</span>
            <span className="text-xs text-gray-500">{item.role}</span>
          </div>
        </div>

        {/* Rating */}
        <p className="text-yellow-500 text-lg">
          {"⭐".repeat(Math.floor(item.rating))}
          {item.rating % 1 !== 0 ? "⭐" : ""}
        </p>
      </div>
    </div>
  ))}
  </div>
  
</div>

<MainFooter/>
    </div>
  );
};


Footer.propTypes = {
  ClientDetails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default Footer;

