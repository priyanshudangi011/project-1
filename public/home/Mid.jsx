import React from 'react'
import './btn.css';

const Mid = () => {
  return (
    <section className='absolute top-[30%] right-[9%] '>
        <div className='upper text-left  text-[50px] font-[600] leading-[1]'><h1>Streaming Anime content</h1>
        <h1>quality content is here </h1>
        <h1>enjoy it</h1></div>
        <button  className='btn p-[5px] px-[50px] pb-[10px] text-[20px] font-[500]  bg-gradient-to-r from-orange-100 to-blue-100 border-none mt-[20px] ml-[10px] rounded-full  active:scale-[0.95] duration-300 ease-in' ><a href="http://localhost:5173/animelist">Explore</a></button>
         {/* <a href={href} className="inline-block">
      <button className="
        relative overflow-hidden
        px-12 py-3 text-xl font-medium
        bg-gradient-to-r from-orange-400 to-blue-400
        text-white rounded-full
        transition-transform duration-300 ease-in-out
        hover:scale-105
        active:scale-95
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-r before:from-orange-600 before:to-blue-600
        before:opacity-0 before:animate-glow
        hover:before:opacity-100
      "></button></a> */}
    </section>
  )
}

export default Mid