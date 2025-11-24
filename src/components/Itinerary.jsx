import { useState } from 'react'
import Day1 from './itinerary/Day1'
import Day2 from './itinerary/Day2'
import Day3 from './itinerary/Day3'
import Day4 from './itinerary/Day4'
import Day5 from './itinerary/Day5'
import Day6 from './itinerary/Day6'
import Day7 from './itinerary/Day7'
import Day8 from './itinerary/Day8'
import Day9 from './itinerary/Day9'
import Day10 from './itinerary/Day10'
import Day11 from './itinerary/Day11'

function Itinerary() {
  const [activeDay, setActiveDay] = useState(1)

  const days = [
    { number: 1, label: 'Dec 11' },
    { number: 2, label: 'Dec 12' },
    { number: 3, label: 'Dec 13' },
    { number: 4, label: 'Dec 14' },
    { number: 5, label: 'Dec 15' },
    { number: 6, label: 'Dec 16' },
    { number: 7, label: 'Dec 17' },
    { number: 8, label: 'Dec 18' },
    { number: 9, label: 'Dec 19' },
    { number: 10, label: 'Dec 20' },
    { number: 11, label: 'Dec 21' },
  ]

  const dayComponents = {
    1: <Day1 />,
    2: <Day2 />,
    3: <Day3 />,
    4: <Day4 />,
    5: <Day5 />,
    6: <Day6 />,
    7: <Day7 />,
    8: <Day8 />,
    9: <Day9 />,
    10: <Day10 />,
    11: <Day11 />,
  }

  return (
    <div id="itinerary" className="content-section active">
      <div className="day-selector">
        {days.map((day) => (
          <button
            key={day.number}
            className={`day-btn ${activeDay === day.number ? 'active' : ''}`}
            onClick={() => setActiveDay(day.number)}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="day-content active">
        {dayComponents[activeDay]}
      </div>
    </div>
  )
}

export default Itinerary
