import React from 'react'
import { exploreImage } from '../assets/assets'
import { Box } from 'lucide-react'

const Explore = () => {
  return (
  <div className="sm:pl-10 sm:pr-10 pb-10 border-gray-300 w-screen overflow-hidden">
  <div className='flex items-center gap-3 mb-10 p-5 '>
    <Box/>
    <h1>EXPLORE</h1>
  </div>
  {exploreImage.map((dets, index) => (
  <div
    key={index}
    className={`flex w-screen items-center p-5 border-gray-300 cursor-pointer transition duration-500 group ease-in-out hover:bg-black hover:text-white hover:scale-102
      ${index === 0 ? "border-t border-b " : "border-b "} `}
  >
    <div className="w-[20%] items-center flex justify-center">
      <img
        className="sm:w-[130px] sm:h-[130px] w-[130px] object-cover "
        src={dets.image}
        alt=""
      />
    </div>
    <h1 className="w-[80%] sm:text-6xl text-4xl ml-10 font-semibold">{dets.title}</h1>
  </div>
))}
</div>
  )
}

export default Explore
