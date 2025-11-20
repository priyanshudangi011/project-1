import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../public/home/Home'
import About from '../public/about/About'
import Animelist from '../public/animelist/Animelist'
import Manga from '../public/manga/Manga'
import Community from '../public/community/Community'
import { title } from 'framer-motion/client'

const App = () => {
//   let anime=[{
//     title:'One piece',
//     img:'project-1/public/components/Luffy Sticker.jpg'
//   },{
//     title:'Sakamoto days',
//     img:'project-1/public/components/Sakamoto Days _ Manga Poster.jpg'
//   },{title:'Bleach',
//     img:'project-1/public/components/Bleach.jpg'
//   },{
//     title:'Berserk',
//     img:'project-1/public/components/download (1).jpg'
//   },{title:'Jujutsukaisan',img:'project-1/public/components/Gojo Satoru Poster_.jpg'},
//   {title:'vagabond',img:'project-1/public/components/Vagabond Magna Poster - Christian Palacios.jpg'},{title:'itadore',img:'project-1/public/components/itadori jjk.jpg'}
// ]
let anime = [
  { title: 'One Piece', img: '/Luffy Sticker.jpg' },
  { title: 'Sakamoto Days', img: '/Sakamoto Days _ Manga Poster.jpg' },
  { title: 'Bleach', img: '/Bleach.jpg' },
  { title: 'Berserk', img: '/download (1).jpg' },
  { title: 'Jujutsu Kaisen', img: '/Gojo Satoru Poster_.jpg' },
  { title: 'Vagabond', img: '/Vagabond Magna Poster - Christian Palacios.jpg' },
  { title: 'Itadori', img: '/itadori jjk.jpg' }
];

  return (
    <div>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/animelist' element={<Animelist user={anime}/>}/>
  <Route path='/manga' element={<Manga/>}/>
  <Route path='/community' element={<Community/>}/>
</Routes>

     

    </div>
  )
}

export default App