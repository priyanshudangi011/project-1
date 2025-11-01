
import React from 'react'
import Navbar from '../home/Navbar'

const About = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden relative">
      <Navbar />

      {/* Main Content */}
      <div className="h-full flex items-center justify-center px-20">
        <div className="max-w-5xl bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center border border-orange-300">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-6 tracking-wide uppercase">
            About Our Anime Universe
          </h1>

          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to <span className="font-semibold text-orange-600">OtakuVerse</span> — a space built for every anime and manga lover.  
            Here, we celebrate the beauty of storytelling, art, and emotion that make anime a way of life.  
            Whether you’re sailing with the Straw Hats, walking the path of a shinobi,  
            or diving into the shadows with Gojo Satoru — this is your world. 🌏✨
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-6">
            Our mission is to bring fans together — share recommendations, explore top anime and manga,  
            discuss theories, and relive the moments that defined our favorite characters.  
            Join our community and let’s keep the spirit of anime alive, one frame at a time! 💫
          </p>

          <div className="mt-10 flex justify-center gap-8">
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
              Join the Community
            </button>
            <button className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-100 transition">
              <a href="http://localhost:5173/animelist">Explore Anime List</a>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Image */}
      <img
        src="https://imgs.search.brave.com/AnpB0myK4S0J_do-zjetqiM3__DcwwDWgwBCdCwM-Xg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvQW55/YS1CYWNrZ3JvdW5k/LVBORy5wbmc"
        alt="anime character"
        className="absolute bottom-0 right-0 h-[500px] opacity-30 select-none"
      />
    </div>
  )
}

export default About
