
import React from 'react'
import Navbar from '../home/Navbar'

import './animelist.css';



const Animelist = ({ user }) => {
  return (
    <div className='h-screen w-screen flex bg-gray-200 overflow-hidden '>
      {/* Sidebar */}
      <div className='h-full w-[30%] bg-gradient-to-bl from-orange-400 to-white'>
        <h1 className=' uppercase text-[20px] pt-52 pl-9 font-[700]'>
          Most <br /> Popular
        </h1> 
        <img className='h-[500px] w-[500px] absolute top-[30%] ' src="https://imgs.search.brave.com/rJ1UBw_UEBP8982RYnaJmsv1H7-kRiEKeif9USvOuO0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQXN0/YS1QTkctSEQucG5n" alt="" />
        <Navbar />
      </div>

      {/* Anime List Section */}
      <div className='flex-1 flex flex-col justify-center p-5 mt-25 overflow-hidden'>
        <h2 className='text-2xl font-bold mb-6'>Top Anime Picks</h2>

        {/* 👇 This div will scroll sideways (only this one) */}
        <div 
          className='side flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4'
        >
          {user.map((anime, index) => (
            <div
              key={index}
              className='flex-shrink-0 h-[350px] w-[250px] bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'
            >
              <img
                className='h-[90%] w-full object-cover'
                src={anime.img}
                alt={anime.title}
              />
              <h2 className='text-center font-bold text-lg mb-2'>
                {anime.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Animelist
