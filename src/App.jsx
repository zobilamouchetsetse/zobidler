import React, { useEffect, useState } from 'react'

const girls = [
  { name: "Luna", gif: "https://media.tenor.com/b7KkWaQl7gUAAAAd/anime-girl.gif", income: 2 },
  { name: "Mia", gif: "https://media.tenor.com/TIuvpU7K8F0AAAAC/anime.gif", income: 5 },
  { name: "Zara", gif: "https://media.tenor.com/Qp4ed5LJdgoAAAAC/anime-breasts.gif", income: 8 },
  { name: "Aria", gif: "https://media.tenor.com/XaUOtwLDOU8AAAAC/anime-tits.gif", income: 15 },
  { name: "Nova", gif: "https://media.tenor.com/OaDs6AFsFXgAAAAC/anime-hot.gif", income: 25 },
  { name: "Eve", gif: "https://media.tenor.com/7AqHrsKhd2cAAAAC/anime-sexy.gif", income: 40 }
]

export default function App() {
  const [money, setMoney] = useState(0)
  const [timers, setTimers] = useState(Array(girls.length).fill(0))
  const [boosts, setBoosts] = useState(Array(girls.length).fill(false))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => prev.map(t => Math.min(t + 0.1, 5)))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const collect = (i) => {
    if (timers[i] >= 5) {
      const boost = boosts[i] ? 10 : 1
      setMoney(prev => prev + girls[i].income * boost)
      const newTimers = [...timers]
      newTimers[i] = 0
      setTimers(newTimers)
    }
  }

  const toggleBoost = (i) => {
    if (!boosts[i]) {
      const newBoosts = [...boosts]
      newBoosts[i] = true
      setBoosts(newBoosts)
      setTimeout(() => {
        const resetBoosts = [...boosts]
        resetBoosts[i] = false
        setBoosts(resetBoosts)
      }, 10000)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl text-cyan-400 font-bold text-center mb-4">💦 SexIdler Clone</h1>
      <div className="text-center text-xl mb-4">💰 Money: {money.toFixed(1)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {girls.map((girl, i) => (
          <div key={i} className="bg-gray-900 rounded-xl shadow-lg p-2 text-center">
            <img src={girl.gif} className="rounded-lg w-full h-40 object-cover mb-2" />
            <p className="font-bold">{girl.name}</p>
            <div className="h-2 bg-gray-700 rounded my-2">
              <div
                className="h-full bg-lime-400 transition-all duration-100"
                style={{ width: `${(timers[i] / 5) * 100}%` }}
              ></div>
            </div>
            <button
              className="bg-green-400 text-black font-bold px-3 py-1 rounded mr-2"
              onClick={() => collect(i)}
            >
              Collect
            </button>
            <button
              className={`px-3 py-1 rounded font-bold ${boosts[i] ? 'bg-yellow-300 text-black' : 'bg-blue-400 text-black'}`}
              onClick={() => toggleBoost(i)}
            >
              Boost x10
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}