import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Get Started"}) => {
  return (
    <div className=' cursor-pointer hover:scale-110 hover:px-6 transition-all duration-200 hidden lg:visible w-40 px-4 py-2 bg-zinc-100 text-black rounded-full lg:flex items-center justify-between '>
        <span className=' text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
        </div>
  )
}

export default Button