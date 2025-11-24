function Day6() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">8:00 AM</div>
        <div className="activity-title">🍳 Traditional Ryokan Breakfast</div>
        <div className="activity-description">
          Japanese-style breakfast at Gora Kadan<br />
          Included in your ryokan stay<br />
          Served in-room or dining room
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">All Day</div>
        <div className="activity-title">♨️ Hakone Experience</div>
        <div className="activity-description">
          Enjoy onsen, explore Hakone<br />
          Day 2 at Gora Kadan
        </div>
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
          <div className="res-label">Note:</div>
          <div className="res-value">Second night - Different seasonal menu from Day 1</div>
          <div className="res-label">Location:</div>
          <div className="res-value">Private dining room or in-room</div>
        </div>
      </div>
    </>
  )
}

export default Day6
