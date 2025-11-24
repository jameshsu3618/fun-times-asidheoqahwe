function Day7() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">8:00 AM</div>
        <div className="activity-title">🍳 Traditional Ryokan Breakfast</div>
        <div className="activity-description">
          Final breakfast at Gora Kadan before checkout<br />
          Included in your ryokan stay<br />
          Traditional Japanese-style meal
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">Before 6:00 PM</div>
        <div className="activity-title">⚠️ Check-in Deadline</div>
        <div className="activity-description">
          Must check-in to Gora Hanaougi by 18:00<br />
          Dinner time slots: 18:00, 18:30, or 19:00
        </div>
      </div>

      <div className="hotel-card">
        <div className="hotel-header">
          <div className="hotel-icon">🏨</div>
          <div>
            <div style={{ fontWeight: 600 }}>Gora Hanaougi Madoka no Mori</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Check-in Dec 17 (1 night)</div>
          </div>
        </div>
        <div style={{ color: '#666', marginBottom: '10px' }}>
          1320-862 Gora, Hakone-machi, Kanagawa<br />
          Tel: 0460-82-4100<br />
          Confirmation: 6175866726
        </div>
        <a href="https://maps.google.com/?q=Gora+Hanaougi+1320-862+Gora+Hakone" target="_blank" rel="noreferrer" className="map-btn">
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
          <div className="res-value">Gora Hanaougi Madoka no Mori</div>
          <div className="res-label">Time Options:</div>
          <div className="res-value">6:00 PM, 6:30 PM, or 7:00 PM (Choose at check-in)</div>
          <div className="res-label">Style:</div>
          <div className="res-value">Traditional Multi-Course Kaiseki</div>
          <div className="res-label">Location:</div>
          <div className="res-value">Private dining room</div>
          <div className="res-label">Special Notes:</div>
          <div className="res-value">Premium wagyu beef course available</div>
        </div>
      </div>
    </>
  )
}

export default Day7
