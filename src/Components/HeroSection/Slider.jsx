import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import leftArrow from '../../assets/images/leftArrow.svg';
import { arrRight, rightarr } from '../../assets/images';
import { Rectangle1,rect3,Rectangle2 } from '../../assets/products';
import Button from '../Button/Button';
import Footer from './Footer';

const Slider = ({topCategory})=>{
    const[currentIndex,setCurrentIndex] = useState(0);
    const handleNext = () => {
if(currentIndex+4<topCategory.length){
setCurrentIndex((prevIndex) => prevIndex + 1);
}


    }
    const handlePrev = () => {
        
        if(currentIndex>0){
            setCurrentIndex((prevIndex) => prevIndex - 1);

        }
    };
    const item =  topCategory.slice(currentIndex, currentIndex + 4)


    const [time, setTime] = useState({
        day: "00",
        hour: "00",
        minute: "00",
        second: "00",
      });
    
      useEffect(() => {
        const updateClock = () => {
          const now = new Date();
          const day = now.getDay();
          const hour = now.getHours();
          const minute = now.getMinutes();
          const second = now.getSeconds();
    
          setTime({
            day: String(day).padStart(2, "0"),
            hour: String(hour).padStart(2, "0"),
            minute: String(minute).padStart(2, "0"),
            second: String(second).padStart(2, "0"),
          });
        };
    
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
      }, []);


      const TimeBox = ({ label, value }) => (
        <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2 text-white">
          <span className="text-xl font-light">{value}</span>
          <span className="text-xs">{label}</span>
        </div>
      );
    
return(
    <>
    
    <div className='flex  gap-4 items-center justify-center  '>
<img src={leftArrow} alt="" onClick={handlePrev} />
   

    {item.map((item)=>(
        <div className='flex items-center  flex-wrap relative w-full max-w-lg mx-auto overflow-hidden rounded-xl' key={item.id}>
            <div className=' flex flex-col items-center justify-center gap-2 bg-white  h-[180px] w-[250px] px-8 rounded shadow-md ' >

            <img src={item.image} alt="" />
            <span className='font-semibold'>{item.title}</span>
            {/* <span>{item.price}</span> */}
            <span>{item.no}</span>
            </div>
            </div>
         
    ))}
    <img src={arrRight} onClick={handleNext} alt="" />
    
    </div>

    {/* banner part */}
    <div className='flex items-center justify-center px-10 '>

    <div className="grid grid-cols-3 gap-10 relative top-10 ">
  <div className=" " >
    <img src={rect3} alt=""  />
    <div className="absolute top-15 left-1  flex flex-col items-center justify-center  rounded-xl p-4 gap-2">
        <span className='font-semibold text-xl text-white poppins-thin'>BEST DEALS</span>
        <span className='font-semibold text-2xl text-white'>Sale Of the Month</span>
        
        <div className="flex justify-center items-center gap-2  ">
        <TimeBox label="DAYS"  className="text-black"  value={time.day} />
        <TimeBox label="HOURS" className="text-black"   value={time.hour} />
        <TimeBox label="MINS"  className="text-black"  value={time.minute} />
        <TimeBox label="SECS"  className="text-black"  value={time.second} />
      </div>
        
        <Button  variant="secondary" size='medium' showIcon={true} />
    

    </div>
    </div>
  <div className="w-full h-full" >
<img src={Rectangle2}  />
<div className='flex flex-col items-center justify-center absolute top-20 right-[27rem]'>
<span className='text-white poppins-thins mb-4'>85% FAT FREE</span>
<h3 className='font-semibold text-2xl text-white'>LOW-FAT MEAT</h3>
<p className='text-white text-xl mb-6 mt-4'>Started at <b className='text-[#e59618] text-3xl'>$79.99</b></p>
<Button  variant="secondary" size='medium' showIcon={true} />
</div>

    </div>
  <div >
  <img src={Rectangle1} alt="" className='' />
  <div className='poppins-thin absolute top-30 right-25 flex flex-col items-center justify-center gap-4 '>
    <h3 className=' relative bottom-10 left-10 text-slate-500 font-bold'>SUMMER SALE</h3>
    <p className='font-semibold text-2xl relative left-10 bottom-12'>100% FRESH FRUIT</p>
    <span className='text-[#1A1A1A] relative left-10 bottom-10 '>up to <b className='bg-black ml-2 text-[#e59618] font-semibold px-4 py-0.5 rounded'>64% off</b></span>
  <span className='relative bottom-5 left-10'>

  <Button  variant="secondary" size='medium' showIcon={true} />
  </span>
  </div>

  </div>
</div>
    </div>

  <Footer/>

    
   
    </>
)
}


Slider.propTypes = {
    topCategory: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            // price: PropTypes.string.isRequired,
            no: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Slider;