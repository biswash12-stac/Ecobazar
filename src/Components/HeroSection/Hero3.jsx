import {bestSeller, hotSell, products, topRated} from "../../assets/products"
import Grid from "./Grid"
const Hero3 = () => {
  return (
    <div>
      <div className="p-6 bg-green-50 h-[150vh]">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>
      
   
      <Grid products={products}  hotSell={hotSell} bestSeller ={bestSeller} topRated={topRated} />
    </div>
    </div>
  )
}

export default Hero3
