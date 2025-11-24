import { useState, useEffect } from 'react'

function Header() {
  const [countdown, setCountdown] = useState('Calculating...')

  useEffect(() => {
    const updateCountdown = () => {
      const tripDate = new Date('2025-12-11T10:15:00-08:00')
      const now = new Date()
      const diff = tripDate - now

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

        setCountdown(`${days} days, ${hours} hours, ${minutes} minutes`)
      } else {
        setCountdown('Your journey has begun! 🎉')
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app-header">
      <div className="header-content">
        <h1>🇯🇵 Japan Journey 2025</h1>
        <p style={{ fontSize: '1.1em', opacity: 0.9 }}>Tokyo → Hakone → Mt. Fuji</p>
        <div className="countdown">
          <div className="countdown-label">Adventure begins in:</div>
          <div className="countdown-timer">{countdown}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
