import Button from "../Button/Button";
// import { slider2} from "../../assets/images";
import slider from "../../assets/images/slider.svg"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deliveryTruck,  headPhonesIcon, packageIcon, shoppingIcon } from "../../assets/images";
import Hero3 from "./Hero3";

const Hero2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // All slides have identical content
  const heroContent = [
    {
      welcomeText: "Welcome to Shoppery",
      title: "Fresh & Healthy",
      title2: "Organic Food",
      saleText: "Sale Up to ",
      discount: "30% Off",
      description: "Free Shipping on all Your order. We deliver, you enjoy",
      image: slider
    },
    {
      welcomeText: "Welcome to Shoppery",
      title: "Fresh & Healthy",
      title2: "Organic Food",
      saleText: "Sale Up to ",
      discount: "30% Off",
      description: "Free Shipping on all Your order. We deliver, you enjoy",
      image: slider
    },
    {
      welcomeText: "Welcome to Shoppery",
      title: "Fresh & Healthy",
      title2: "Organic Food",
      saleText: "Sale Up to ",
      discount: "30% Off",
      description: "Free Shipping on all Your order. We deliver, you enjoy",
      image: slider
    }
  ];

  const handleDotClick = (newIndex) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 px-8 relative ">
        {/* Animated Content */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full items-center justify-between"
          >
            {/* Text Content (Same on all slides) */}
            <div className="flex justify-center flex-col gap-4 relative bottom-10 sm:top-10 md:top-5 ">
              <span className="text-[#07ae60] lg:mr-25 sm:relative sm:left-[100px] sm:w-[200px] sm:bottom-5   sm:font-semibold">
                {heroContent[activeIndex].welcomeText}
              </span>

              <span className="text-4xl sm:text-2xl sm:font-medium sm:leading-[2.5rem] font-semibold text-[#1A1A1A] leading-[3rem]">
                {heroContent[activeIndex].title} <br /> {heroContent[activeIndex].title2}
              </span>

              <div className="space-y-4">
                <p className="text-xl">
                  {heroContent[activeIndex].saleText}
                  <span className="font-semibold ml-2 text-[#FF8A00] text-2xl">
                    {heroContent[activeIndex].discount}
                  </span>
                </p>
                <p className="text-[#808080]  sm:hidden md:flex ">
                  {heroContent[activeIndex].description}
                </p>
                <Button />
              </div>
            </div>

            {/* Image Content (Same on all slides) */}
            <div>
              <img 
                src={heroContent[activeIndex].image} 
                alt="slider-img" 
                className="w-[42rem] mt-3" 
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 py-4 relative bottom-5 sm:top-15 md:top-[-8px] ">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="p-2 focus:outline-none"
          >
            <span 
              className={`block rounded-full h-2 transition-all ${
                activeIndex === index 
                  ? "w-4 bg-[#07ae60]" 
                  : "w-2 bg-[#B4CCB4]"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center lg:relative lg:bottom-8" >
        <div className="w-[90%] relative bottom-5   hidden sm:top-20  md:top-2    bg-[#ffffff] h-20 sm:hidden md:flex items-center justify-between px-4 b-2 border-zinc-600 shadow-lg rounded sm:w-[95%]   sm:gap-2">
        <div className="flex  items-center gap-2.5">
       <img src={deliveryTruck} alt=""  />
       <div className="flex flex-col poppins-thin ">
        <span className="text-[1rem]  sm:text-[10px] font-semibold">Free Shipping</span>
        <span className="text-[#999999] text-[12px] sm:text[10px] sm:font-medium sm:text-zinc-800">Free Shipping on all YOur Order</span>
       </div>
        </div>
        <div className="flex items-center gap-2.5 ">
       <img src={headPhonesIcon} alt="" />
       <div className="flex flex-col ">
        <span className="font-semibold text-[16px]  sm:text-[10px]">Customer Support 24/7</span>
        <span className="text-[#999999] text-[12px] sm:text[10px] sm:font-medium sm:text-zinc-800">Instant access to Support</span>
       </div>
        </div>
        <div className="flex items-center gap-2.5 ">
       <img src={shoppingIcon} alt="" />
       <div className="flex flex-col ">
        <span className="font-semibold text-[16px]  sm:text-[10px]">100% Secure Payment</span>
        <span className="text-[#999999] text-[12px] sm:text[10px] sm:font-medium sm:text-zinc-800">We ensure your money is save</span>
       </div>
        </div>
        <div className="flex items-center gap-2.5">
       <img src={packageIcon} alt="" />
       <div className="flex flex-col ">
        <span className="font-semibold text-[16px]  sm:text-[10px]">Money-Back Gurantee</span>
        <span className="text-[#999999] text-[12px]  sm:text[10px] sm:font-medium sm:text-zinc-800">30 days Money-Back Guarantee</span>
       </div>
        </div>
        </div>
      </div>
      <Hero3/>
    </>
  );
};

export default Hero2; 