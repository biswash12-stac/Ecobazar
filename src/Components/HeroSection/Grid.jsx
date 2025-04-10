// import React from 'react'

// const Grid = ({products}) => {
//   return (
//     <div className='grid grid-cols-12 gap-4'>
//        <div className="col-span-12 grid grid-cols-5 gap-4">
//       {products.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center"
//         >
//           <div className='flex items-center flex-col'>
//           <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mb-4" />
//           <h3 className="font-semibold">{item.title}</h3>
//           <p className="text-green-600 font-bold">{item.price}</p>
//           <p className="text-yellow-500">
//             {"⭐".repeat(Math.floor(item.rating)) +
//               (item.rating % 1 !== 0 ? "⭐️" : "")}
//           </p>
//           </div>
//           <div>
//           <img src={item.Cart} alt={item.Cart} />

//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Grid


const Grid = ({products}) => {
  return (
    <div>
        <div className="grid grid-cols-12 gap-4">

<div className="col-span-12 grid grid-cols-5 gap-4">
    
{products.map((item)=>(
  <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between " >
    <div className="flex flex-col ">
        <img src={item.image} alt={item.image} />
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-green-600 font-bold">{item.price}</p>
        <p className="text-yellow-500">
             {"⭐".repeat(Math.floor(item.rating)) +
               (item.rating % 1 !== 0 ? "⭐️" : "")}
         </p>
    </div>
    <div>
        <img src={item.cart} alt="cart"  className="w-8"/>
    </div>
    
  </div>

))}
</div>

<div className="col-span-3 space-y-4 mt-6">
  <h3 className="text-xl font-semibold">Hot Deals</h3>
  <div className="bg-white p-4 rounded shadow">Green Apple</div>
  <div className="bg-white p-4 rounded shadow">Indian Malta</div>
  <div className="bg-white p-4 rounded shadow">Green Lettuce</div>
</div>

<div className="col-span-3 space-y-4 mt-6">
  <h3 className="text-xl font-semibold">Best Seller</h3>
  <div className="bg-white p-4 rounded shadow">Eggplant</div>
  <div className="bg-white p-4 rounded shadow">Red Capsicum</div>
  <div className="bg-white p-4 rounded shadow">Red Tomatos</div>
</div>

<div className="col-span-3 space-y-4 mt-6">
  <h3 className="text-xl font-semibold">Top Rated</h3>
  <div className="bg-white p-4 rounded shadow">Big Potatoes</div>
  <div className="bg-white p-4 rounded shadow">Corn</div>
  <div className="bg-white p-4 rounded shadow">Fresh Cauliflower</div>
</div>

<div className="col-span-3 mt-6">
  <div className="bg-green-100 text-center rounded-lg p-6 h-full flex flex-col justify-center items-center shadow">
    <h4 className="text-2xl font-bold text-green-600">SUMMER SALE</h4>
    <p className="text-4xl font-extrabold text-green-700 mt-2">75% off</p>
    <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
      Shop Now →
    </button>
  </div>
</div>

</div>
</div>

  )
}

export default Grid

