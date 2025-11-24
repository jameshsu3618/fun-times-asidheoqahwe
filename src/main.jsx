import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// Save to localStorage for offline access
localStorage.setItem('japanTrip2025', JSON.stringify({
  lastUpdated: new Date().toISOString(),
  dataVersion: '1.0'
}))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
