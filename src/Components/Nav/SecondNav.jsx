import { SearchIcon,HeartIcon,Cart} from "../../assets/icons"
import { Logo} from "../../assets/images"
const SecondNav = ()=>{
    return(

        <>
        <div className="sm:text-center">
            {/* logo part */}
            <div className="flex items-center  justify-evenly px-4 sm:px-5 sm:gap-5">
                <img src={Logo} alt="logo" />
           
                <div className="flex items-center border-2 border-purple-500 rounded px-4 space-x-2 w-auto">
    <span className="">
        <img src={SearchIcon} alt="Search Icon" className="h-5 w-8" />
    </span>
    <input type="text" className="border sm:text-[20px] text-xl px-3 py-1 sm:py-0 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 " placeholder="Search" />
    <button className="bg-emerald-500 rounded px-6 py-2 text-white hover:bg-emerald-600 relative left-4">Search</button>
</div>
                <div className="sm:hidden md:block ">
                    <div className="lg:flex lg:items-center hidden justify-center gap-4 md:hidden">
                        <img src={HeartIcon} alt="" className="" />
                        <span className="bg-slate-200 h-10  w-0.5"></span>
                        <div className="flex items-center gap-4">
                            <img src={Cart} alt="" className="w-10 " />
                            <div className=" ">
                                <p className="text-[#4d4d4d]">Shopping Cart</p>
                                <p className="font-semibold text-[#4d4d4d] mr-6 text-xl">$57.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>



    )
}

export default SecondNav