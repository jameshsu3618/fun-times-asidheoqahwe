function Day3() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">8:00 AM</div>
        <div className="activity-title">🍳 Holistic Ryokan Breakfast</div>
        <div className="activity-description">
          At HOSHINOYA Tokyo<br />
          ¥9,680 per person | Confirmation: 4018815
        </div>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
          <div className="alert-icon">✨</div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--indigo)' }}>Anniversary Lunch!</div>
          </div>
        </div>
        <div className="reservation-grid">
          <div className="res-label">Restaurant:</div>
          <div className="res-value">Shintomi Kitafuku</div>
          <div className="res-label">Time:</div>
          <div className="res-value">12:00 PM (Noon)</div>
          <div className="res-label">Special Request:</div>
          <div className="res-value">Can we have 1 eel one uni? Wedding Anniversary</div>
          <div className="res-label">Course:</div>
          <div className="res-value">Eel and live Matsuba crab course (winter)</div>
          <div className="res-label">Price:</div>
          <div className="res-value">¥99,000 per person + ¥19,800 service</div>
          <div className="res-label">Total:</div>
          <div className="res-value">¥217,800</div>
        </div>
        <a href="https://maps.google.com/?q=1-7-9+Shintomi+Nakazato+Building+1F" target="_blank" rel="noreferrer" className="map-btn">
          📍 Navigate to Restaurant
        </a>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
          <div className="alert-icon">🍽️</div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--indigo)' }}>Dinner Reservation</div>
          </div>
        </div>
        <div className="reservation-grid">
          <div className="res-label">Restaurant:</div>
          <div className="res-value">Miyake Akira</div>
          <div className="res-label">Time:</div>
          <div className="res-value">7:00 PM (19:00)</div>
          <div className="res-label">Course:</div>
          <div className="res-value">Seasonal Omakase (Caviar, eel, Matsuba crab, fugu)</div>
          <div className="res-label">Price:</div>
          <div className="res-value">¥33,880 per person + 10% service</div>
          <div className="res-label">Confirmation:</div>
          <div className="res-value">SYUEW8PEWM</div>
          <div className="res-label">Note:</div>
          <div className="res-value">2.5 hour stay limit</div>
        </div>
        <a href="https://maps.google.com/?q=Roppongi+3-8-12+JT+Building+1F" target="_blank" rel="noreferrer" className="map-btn">
          📍 Navigate to Restaurant
        </a>
      </div>
    </>
  )
}

export default Day3
