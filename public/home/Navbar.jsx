import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[100px] absolute top-[0%] m-[50px] flex gap-[700px]' >
      <Link className='text-[50px] leading-12 font-[500]' ><h1 className='text-orange-400' to='/'>Pini </h1><h1>Gimi</h1></Link>
        <div className=" w-full flex gap-[50px] text-[30px] font-[500]"> 
        <Link to='/project-1/about'>About</Link>
        <Link to='/project-1/animelist'>AnimeList</Link>
        <Link to='/project-1/manga'>Manga </Link>
        <Link to='/project-1/community'>Community</Link>
    </div>
    </div>
  )
}

export default Navbar