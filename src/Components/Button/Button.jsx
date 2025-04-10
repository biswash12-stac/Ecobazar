import rightarr from "../../assets/images/rightarr.svg"
import { motion } from "framer-motion";
const Button =()=>{
    return(
        <>
        <button className="bg-emerald-500 text-center px-8 py-3 justify-center rounded-2xl text-white mt-8 relative right-3  flex items-center sm:py-2 sm:px-4 ">
            Shop Now
            {/* <img src={rightarr} alt="right arrow" className="ml-2" /> */}
            <motion.img
  src={rightarr}
  alt="right arrow"
  className="ml-2 w-4 h-6"
  animate={{ x: [0, 8, 0] }} // Moves 10px to the right and back
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        </button>
        
        </>


    )
}

export default Button;