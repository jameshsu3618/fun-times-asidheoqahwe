function Day5() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">Morning</div>
        <div className="activity-title">🏨 Travel to Hakone</div>
        <div className="activity-description">
          Check-out Palace Hotel<br />
          Journey to Hakone mountain resort area
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">8:00 AM</div>
        <div className="activity-title">🍳 Breakfast</div>
        <div className="activity-description">
          Breakfast at Palace Hotel Tokyo before checkout<br />
          Ryokan breakfast will be included at Gora Kadan starting tomorrow
        </div>
      </div>

      <div className="hotel-card">
        <div className="hotel-header">
          <div className="hotel-icon">🏨</div>
          <div>
            <div style={{ fontWeight: 600 }}>Gora Kadan</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Check-in Dec 15 (2 nights)</div>
          </div>
        </div>
        <div style={{ color: '#666', marginBottom: '10px' }}>
          1300 Gora, Hakone-machi, Kanagawa<br />
          Tel: 0460-82-3331
        </div>
        <a href="https://maps.google.com/?q=Gora+Kadan+1300+Gora+Hakone" target="_blank" rel="noreferrer" className="map-btn">
          📍 Navigate
        </a>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
          <div className="alert-icon">🍱</div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--indigo)' }}>Ryokan Kaiseki Dinner</div>
          </div>
        </div>
        <div className="reservation-grid">
          <div className="res-label">Venue:</div>
          <div className="res-value">Gora Kadan</div>
          <div className="res-label">Time:</div>
          <div className="res-value">6:00 PM (18:00)</div>
          <div className="res-label">Style:</div>
          <div className="res-value">Traditional Multi-Course Kaiseki</div>
          <div className="res-label">Location:</div>
          <div className="res-value">Private dining room or in-room</div>
          <div className="res-label">Note:</div>
          <div className="res-value">Included in accommodation - Premium ryokan experience</div>
        </div>
      </div>
    </>
  )
}

export default Day5
