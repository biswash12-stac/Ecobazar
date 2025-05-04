import { InstaIcon } from '../../assets/icons'
import {useApp} from '../Context/UseContext'
import LastFooter from './LastFooter'
const MainFooter = () => {
    const{social}=useApp()
  return (
    <>
    <div className="grid grid-cols-6 gap-4">
    <div className="col-span-6 text-center ">
      <h2 className="text-2xl font-bold relative top-20 hover:underline">Follow Us On Social Handles</h2>
    </div>
  
    {social.map((items) => (
      <div key={items.name} className="relative top-10">
        {/* Image */}
        <img
          src={items.image}
          className="w-[200px] h-[20rem] rounded-2xl "
          alt={items.name}
        />
        {/* Text overlay on top of the image */}
        <a
        href={`https://www.instagram.com`}  // Link to Instagram page
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={InstaIcon}  // Replace with the actual path to Instagram logo
          alt="Instagram"
          className="w-16 h-16"
        />
      </a>
     
      </div>
    ))}
  </div>
  <LastFooter/>
  </>
  
  )
}

export default MainFooter
