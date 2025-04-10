// import Map from "../assets/icons/Map.svg";
import Map from "../../assets/icons/Map.svg"
import DownArrow from "../../assets/icons/DownArrow.svg";

import SecondNav from "./SecondNav";
import FinalNav from "./FinalNav";

const FirstNav = () => {
  return (
    <>
    <div >
      <div className="container  flex items-center justify-aaround lg:justify-around  relative right-10 mx-auto py-4 poppins sm:px-5 md:px-0 sm:font-bold lg:font-normal  ">
        <div className="flex items-center justify-center gap-4 sm:gap-2 ml-5 ">
          <img src={Map} alt="location" />
          <span className="sm:w-[30rem] w-[30rem] md:w-[30rem] "> Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        {/* nav right part */}
        <div className="flex items-center justify-between gap-4 ">
          <div className=" items-center  gap-2 hidden sm:hidden md:flex">
            <p>ENG</p>
            <img src={DownArrow} alt="language dropdown" />
            <p>USD</p>
            <img src={DownArrow} alt="" />
          </div>

          <div className="flex items-center  sm:gap-[10px] sm:relative sm:right-5 relative right-5 md:left-10 ">
            <span className="w-15">Sign in</span>
            <span className="w-15">/</span>
            <span className="w-20 relative right-10">Sign up</span>
          </div>
        </div>
      </div>
    </div>
    <SecondNav/>
    <FinalNav/>
    </>
  );
};

export default FirstNav;
