import { AppleIcon, FacebookIcon, InstaIcon, MethodApplePayIcon, MethodDiscoverIcon, MethodVisaIcon, PinterestIcon, Secure, TwitterIcon } from "../../assets/icons";
import { Logo, PlayIcon } from "../../assets/images";

const LastFooter = () => {
  return (
    <>
<div className="w-[98vw] relative right-57 top-8 bg-[#F3F3E0] py-10 px-4 sm:px-6 rounded-xl">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
    {/* Left Side: Logo & Text */}
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
      <img
        src={Logo}
        alt="Logo"
        className="w-24 h-8 sm:w-30 sm:h-10 transition-transform duration-300 hover:scale-105"
      />
      <div className="text-center sm:text-left relative left-50">
        <h3 className="font-bold text-xl sm:text-2xl transition-all duration-300 hover:text-emerald-600">
          Subscribe to Our Newsletter
        </h3>
        <span className="text-sm text-[#5f7e7c] mt-1">
          Follow us on social media for daily fresh veggie deals.
        </span>
      </div>
    </div>

    {/* Right Side: Input + Button */}
    <div className="w-full lg:w-[400px] relative">
      <input
        type="email"
        placeholder="Your email address"
        className="w-full px-5 py-3 pr-32 rounded-2xl text-black text-sm sm:text-base border border-gray-300 outline-none transition duration-300 focus:ring-2 focus:ring-emerald-200"
      />
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-2xl transition-all duration-300 hover:scale-105">
        Subscribe
      </button>
    </div>
  </div>
</div>

      {/* black footer */}
      <div className="bg-[#191919] w-[98.5vw] relative right-58 top-10 rounded-xl gap-10 poppins-thin flex flex-col px-10 pb-20">
        {/* Main content row */}
        <div className="flex flex-wrap items-start justify-around pt-10">
          {/* about shoppery */}
          <div className="w-80 flex flex-col mb-8">
            <h3 className="text-white font-semibold">About Shoppery</h3>
            <span className="text-[#808080] text-[12px]">
              shopper is a e-business of fresh Veggies and farming. we provide
              fresh veggies and help you to grow your first veggies
            </span>
            <div className="flex items-center justify-center text-[10px] text-white gap-7 relative right-10 top-5">
              <a href="tel:+9779847774304">+977-9847774304</a>
              <address>
                kageshowri,Manohara
                <br />
                Nepal, 44600
              </address>
            </div>
          </div>

          {/* next part */}
          <div className="mb-8">
            <a className="text-white text-[15px] hover:underline">My Account</a>
            <ul className="text-[#808080] text-[10px] font-semibold leading-5 mt-2">
              <li>My account</li>
              <li>Order History</li>
            </ul>
            <a className="text-white text-[15px] hover:underline mt-4 block">
              Shopping cart
            </a>
            <ul className="text-[#808080] text-[10px] font-semibold leading-5 mt-2">
              <li>Whislist</li>
              <li>Setting</li>
            </ul>
          </div>

          {/* help part */}
          <div className="mb-8">
            <a className="text-xl text-white hover:underline">Help</a>
            <ul className="text-[#808080] text-[10px] font-semibold leading-6 mt-2">
              <li>Contact</li>
              <li>Faqs</li>
              <li>Terms and condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* proxy part */}
          <div className="mb-8">
            <a className="text-xl text-white hover:underline">Proxy</a>
            <ul className="text-[#808080] text-[10px] font-semibold leading-5 mt-2">
              <li>About</li>
              <li>Shop</li>
              <li>Products Details</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Payment part */}
          <div className="flex flex-col items-center px-4 py-6 bg-transparent mb-8">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-4 text-center">
              Download our Mobile App
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* App Store */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px] h-[50px]">
                <img src={AppleIcon} alt="App Store" className="w-7 h-7 object-contain" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/70 font-light">Download on the</span>
                  <span className="text-[14px] text-white font-semibold">App Store</span>
                </div>
              </div>
              {/* Google Play */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-pointer w-[180px] h-[50px]">
                <img src={PlayIcon} alt="Google Play" className="w-7 h-7 object-contain" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/70 font-light">Download on the</span>
                  <span className="text-[14px] text-white font-semibold">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media section with white line above */}
        <div className="border-t border-white/20 pt-6 mt-6 w-full">
          <div className="flex  items-center justify-around">
            <div className="flex gap-4">
              <a href="#" className="bg-emerald-500 rounded-full p-2 hover:bg-emerald-600 transition">
                <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200 transition">
                <img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200 transition">
                <img src={PinterestIcon} alt="Pinterest" className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200 transition">
                <img src={InstaIcon} alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
            <span className="text-[#808080]  text-[1rem]">Ecobazar eCommerce © 2021. All Rights Reserved</span>
            <div className="flex items-center gap-2">
              <img src={MethodApplePayIcon} alt="" />
              <img src={MethodVisaIcon} alt="" />
              <img src={MethodDiscoverIcon} alt="" />
              <img src={MethodDiscoverIcon} alt="" />
              <img src={Secure} alt="" />
            </div>

          </div>
        </div>
      </div>
 
     </>
  );
};

export default LastFooter;



