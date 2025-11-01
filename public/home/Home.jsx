
import React from 'react'
import Navbar from './Navbar'
import Mid from './Mid'

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden  bg-white relative">
      {/* Gradient Background */}
      <div className="h-full w-[60%] bg-gradient-to-r from-orange-100 to-transparent z-[1]">
        <img
          className="h-[900px] absolute left-[-22%] top-[27%]"
          src="https://imgs.search.brave.com/85lZpqj7XT9Q14lmAnmR8UuKsbK7cYJSre0FwXmWL-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL05h/cnV0by1LaWQtRnJl/ZS1QTkcucG5n"
          alt=""
        />
        <img
          className="h-[750px] absolute left-[6%] top-[17%] z-1"
          src="https://imgs.search.brave.com/iMGkYk5qUnmqI3Q43lEqG11rOkRGRwwD9SWmIEmlor8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMy9JY2hp/Z28tUE5HLVRyYW5z/cGFyZW50LUltYWdl/LnBuZw"
          alt=""
        />
        <img
          className="h-[450px] absolute left-[17%] top-[37%]"
          src="https://imgs.search.brave.com/dfDVOeDdaH_M5Q87XHCGhGz--1I_zf-9I28RnslV98w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvVGFu/amlyby1QTkctUGlj/LnBuZw"
          alt=""
        />
      </div>

      <Navbar />
      <Mid />
    </div>
  )
}

export default Home
