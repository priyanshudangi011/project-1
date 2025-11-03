
import React from 'react'
import Navbar from '../home/Navbar'

const Manga = () => {
  const mangaList = [
    { title: 'Berserk', img: '/project-1/public/components/download (1).jpg' },
    { title: 'Vagabond', img: '/project-1/public/components/Vagabond Magna Poster - Christian Palacios.jpg' },
    { title: 'Monstor', img: '/project-1/public/components/download (2).jpg' },
    { title: 'Attack on Titan', img: '/project-1/public/components/Attack.jpg' },
    { title: 'Jujutsu Kaisen', img: '/project-1/public/components/itadori jjk.jpg' },
    { title: 'One Piece', img: '/project-1/components/Luffy Sticker.jpg' },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-orange-100 via-white to-orange-200">
      <Navbar />

      <div className="pt-28 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-2 uppercase">
          Manga Collection
        </h1>
        <p className="text-gray-700 mb-10 text-lg max-w-2xl">
          Explore legendary manga stories and stunning artwork loved by millions.
        </p>

        <div className="grid grid-cols-3 gap-8 px-10 max-w-6xl">
          {mangaList.map((manga, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={manga.img}
                
                alt={manga.title}
                className="h-[400px] w-full object-cover"
              />
              <h2 className="p-4 font-bold text-xl text-orange-600">
                {manga.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Manga

