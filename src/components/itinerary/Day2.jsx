function Day2() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">2:50 PM JST</div>
        <div className="activity-title">✈️ Arrival at Haneda Airport</div>
        <div className="activity-description">
          Welcome to Tokyo! Clear customs and immigration.
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">Evening</div>
        <div className="activity-title">🏨 Check-in HOSHINOYA Tokyo</div>
        <div className="activity-description">
          Luxury ryokan in the heart of Tokyo<br />
          2 nights stay<br />
          <strong>Note: Dinner at ryokan (5:30 PM)</strong>
        </div>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
          <div className="alert-icon">🍱</div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--indigo)' }}>Ryokan Dinner</div>
          </div>
        </div>
        <div className="reservation-grid">
          <div className="res-label">Venue:</div>
          <div className="res-value">HOSHINOYA Tokyo</div>
          <div className="res-label">Time:</div>
          <div className="res-value">5:30 PM</div>
          <div className="res-label">Style:</div>
          <div className="res-value">Traditional Kaiseki</div>
          <div className="res-label">Location:</div>
          <div className="res-value">In-room or dining room</div>
          <div className="res-label">Price:</div>
          <div className="res-value">¥28,000 per person + 10% service</div>
          <div className="res-label">Total:</div>
          <div className="res-value">¥61,600</div>
        </div>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
          <div className="alert-icon">🍽️</div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--indigo)' }}>Late Dinner</div>
          </div>
        </div>
        <div className="reservation-grid">
          <div className="res-label">Restaurant:</div>
          <div className="res-value">Yakitori Hirano</div>
          <div className="res-label">Time:</div>
          <div className="res-value">9:30 PM (21:30)</div>
          <div className="res-label">Course:</div>
          <div className="res-value">Premium Hanatsubaki Course</div>
          <div className="res-label">Price:</div>
          <div className="res-value">¥15,000 per person + 10% service</div>
          <div className="res-label">Confirmation:</div>
          <div className="res-value">CQU7XW3ZQS</div>
        </div>
        <a href="https://maps.google.com/?q=Yakitori+Hirano+Ginza+8-12-15" target="_blank" rel="noreferrer" className="map-btn">
          📍 Navigate to Restaurant
        </a>
      </div>
    </>
  )
}

export default Day2
