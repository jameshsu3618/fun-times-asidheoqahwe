import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Overview from './components/Overview'
import Itinerary from './components/Itinerary'
import Flights from './components/Flights'
import Hotels from './components/Hotels'
import Dining from './components/Dining'
import Budget from './components/Budget'
import Info from './components/Info'
import QuickActions from './components/QuickActions'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="App">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="content-wrapper">
        {activeSection === 'overview' && <Overview />}
        {activeSection === 'itinerary' && <Itinerary />}
        {activeSection === 'flights' && <Flights />}
        {activeSection === 'hotels' && <Hotels />}
        {activeSection === 'dining' && <Dining />}
        {activeSection === 'expenses' && <Budget />}
        {activeSection === 'contacts' && <Info />}
      </div>

      <QuickActions />
    </div>
  )
}

export default App
