// import React from 'react'
import PropTypes from 'prop-types';
import { bestSeller, OfferIcon } from '../../assets/products';
import Button from '../Button/Button';
import Slider from './Slider';
import { topCategory } from '../../assets/TopCategory';

const Grid = ({products,hotSell,bestSeller,topRated}) => {
  return (
    <div>

<div className="grid grid-flow-col auto-cols-max gap-6  p-4">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 min-w-[200px] poppins-thin"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <img src={item.image} alt={item.title} className="w-30 h-30 object-contain bg-transparent" />
        <div className='flex items-center '>
    <div className='flex items-center flex-col  relative right-3 '>

        <span className=" text-[#445e5c] relative left-1">{item.title}</span>
        <span className=" font-medium relative right-3"> {item.price}</span>
        <p className="text-yellow-500 text-sm relative right-3">
          {"⭐".repeat(Math.floor(item.rating)) +
            (item.rating % 1 !== 0 ? "⭐️" : "")}
        </p>
            </div>
        <div className='relative left-3 top-5 bg-gray-200 rounded-full py-2 px-2'>
          <img src={item.cart} alt="" />
        </div>
            </div>
      </div>
    </div>
  ))}
</div>




        <div className="grid grid-cols-12 gap-4">
         




<div className="col-span-3 space-y-4 mt-6">
  <h3 className='text-xl text-slate-600'>Hot Deals</h3>
    {hotSell.map((itm)=>(
  <div className="bg-white p-4 rounded hover:shadow-blue-700 -lg text-slate-800 shadow-md border border-gray-200  " key={itm.id}>
      <div className='flex  items-center   gap-5'>
        <img src={itm.image} alt={itm.image} className='w-15' />
        <div className='flex flex-col gap-1'>

        <p className='text-[#288242] font-light'>{itm.title}</p>
        <span className='font-semibold'>{itm.price}</span>
        <div className='flex items-center gap-2  '>
        <img src={itm.image2} alt="" className='w-8' />
        <img src={itm.image1} alt="" className='w-8' />
        <img src={itm.image3} alt="" className='w-8' />

        </div>
        <p className="text-yellow-500">
             {"⭐".repeat(Math.floor(itm.rating)) +
               (itm.rating % 1 !== 0 ? "⭐️" : "")}
         </p>

        </div>

      </div>
  </div>
    ))}

</div>

<div className="col-span-3 space-y-4 mt-6">
<h3 className='text-xl text-slate-600'>Best Seller</h3>

    {bestSeller.map((its)=>(
      <div className="bg-white p-4 rounded  hover:shadow-green-700 -lg text-slate-800 shadow-md border border-gray-200" key={its.id}>
    <div className='flex items-center gap-5'>

    <img src={its.image} alt="" className='w-15'/>
<div className="flex flex-col gap-2 ">
  <span className='text-[#445e5c]'>{its.title}</span>
  <span className='font-semibold'>{its.price}</span>
  <p className="text-yellow-500">
             {"⭐".repeat(Math.floor(its.rating)) +
               (its.rating % 1 !== 0 ? "⭐️" : "")}
         </p>
</div>
    </div>
  </div>
    ))}

</div>

<div className="col-span-3 space-y-4 mt-6">
<h3 className='text-xl text-slate-600'>Top Rated</h3>
  
    {topRated.map((ito)=>(
      <div key={ito.id} className="bg-white p-4 rounded   hover:shadow-purple-700 -lg text-slate-800 shadow-md border border-gray-200">
    <div className='flex items-center gap-5'>

    <img src={ito.image} alt="" className='w-15' />
    <div className='flex flex-col gap-2'>
      <span className='text-[#445e5c]'>{ito.title}</span>
      <span className='font-semibold'>{ito.price}</span>
      <p className="text-yellow-500">
             {"⭐".repeat(Math.floor(ito.rating)) +
               (ito.rating % 1 !== 0 ? "⭐️" : "")}
         </p>
    </div>
               </div>
  </div>
    ))}

</div>

    
<div className="col-span-3 mt-6">
  <div className="bg-white  rounded text-slate-800 shadow-md border border-gray-200  w-full h-[90%] ">
  <img src={OfferIcon} alt="" className='w-full h-full object-cover ' />
  <div className='flex flex-col items-center relative bottom-80 '>
    <span className='font-medium text-xl relative  bottom-10'>SUMMER SALE</span>
    <span className='text-emerald-500 text-2xl font-semibold relative bottom-5'>75% off</span>
   <Button className="" showIcon={true}/>
  </div>

  </div>
</div>

</div>
<Slider topCategory={topCategory}/>
</div>

  )
}

Grid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      cart: PropTypes.string.isRequired,
    })
  ).isRequired,
  hotSell: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  bestSeller: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,

}

export default Grid

