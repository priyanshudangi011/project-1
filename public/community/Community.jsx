import React from 'react'
import Navbar from '../home/Navbar'

const Community = () => {
  // Example community posts
  const posts = [
    {
      username: 'NarutoFan99',
      avatar: 'https://imgs.search.brave.com/85lZpqj7XT9Q14lmAnmR8UuKsbK7cYJSre0FwXmWL-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL05h/cnV0by1LaWQtRnJl/ZS1QTkcucG5n',
      content: 'Just finished watching Jujutsu Kaisen Season 2 😭🔥 Gojo is unstoppable!',
      time: '2 hours ago',
    },
    {
      username: 'LuffyLover',
      avatar: '/project-1/public/components/Luffy Sticker.jpg',
      content: 'One Piece chapter this week was mind-blowing! Gear 5 supremacy 💪',
      time: '5 hours ago',
    },
    {
      username: 'MangaReaderX',
      avatar: '/project-1/public/components/download (1).jpg',
      content: 'Vagabond is pure art. Takehiko Inoue is a legend ✨',
      time: '1 day ago',
    },
  ]

  const trends = ['#OnePiece', '#AttackOnTitan', '#GojoSatoru', '#ChainsawMan', '#AnimeArt']

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden">
      <Navbar />

      <div className="flex pt-24 px-12 gap-10 mt-30">
        {/* Main Feed */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-orange-600 mb-6 uppercase tracking-wide">
            Community Feed
          </h1>

          {/* Post Cards */}
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-5 mb-6 border border-orange-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={post.avatar}
                  alt={post.username}
                  className="h-12 w-12 rounded-full object-cover border-2 border-orange-400"
                />
                <div className="text-left">
                  <h3 className="font-bold text-gray-800">{post.username}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-lg">{post.content}</p>
            </div>
          ))}

          {/* New Post Input */}
          <div className="mt-10 bg-white/70 p-5 rounded-xl shadow-md">
            <h2 className="font-bold text-orange-600 text-xl mb-3">
              Share Your Thoughts
            </h2>
            <textarea
              placeholder="What's on your mind?"
              className="w-full h-24 border border-orange-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button className="mt-3 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Post
            </button>
          </div>
        </div>

        {/* Sidebar - Trending Topics */}
        <div className="w-[25%] bg-white/60 shadow-md backdrop-blur-md rounded-xl p-5 h-fit border border-orange-200">
          <h2 className="font-bold text-xl text-orange-600 mb-4">
            🔥 Trending Topics
          </h2>
          <ul className="space-y-2">
            {trends.map((tag, index) => (
              <li
                key={index}
                className="text-gray-700 hover:text-orange-600 font-semibold cursor-pointer transition"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Community
