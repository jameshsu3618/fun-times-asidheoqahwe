function Day10() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">7:30 AM</div>
        <div className="activity-title">🍳 Grill Morning</div>
        <div className="activity-description">
          Grilled breakfast at Fufu Kawaguchiko<br />
          ¥9,680 for 2 | Confirmation: 4017908
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">Morning</div>
        <div className="activity-title">🏨 Check-out HOSHINOYA Fuji</div>
        <div className="activity-description">
          Transfer to Fufu Kawaguchiko
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">12:00 PM</div>
        <div className="activity-title">🍕 Forest Pizza Workshop</div>
        <div className="activity-description">
          Make your own pizza in the forest<br />
          Includes one drink - ¥8,470 for 2<br />
          Confirmation: 4018774
        </div>
      </div>

      <div className="hotel-card">
        <div className="hotel-header">
          <div className="hotel-icon">🏨</div>
          <div>
            <div style={{ fontWeight: 600 }}>Fufu Kawaguchiko</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Check-in Dec 20 (1 night)</div>
          </div>
        </div>
        <div style={{ color: '#666', marginBottom: '10px' }}>
          2211-1 Mizuguchi, Fuji-Kawaguchiko-Machi, Yamanashi<br />
          Tel: 0570-0117-22
        </div>
        <a href="https://maps.google.com/?q=Fufu+Kawaguchiko+2211-1+Mizuguchi" target="_blank" rel="noreferrer" className="map-btn">
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
          <div className="res-value">Fufu Kawaguchiko</div>
          <div className="res-label">Time:</div>
          <div className="res-value">6:00 PM (18:00)</div>
          <div className="res-label">Style:</div>
          <div className="res-value">Traditional Kaiseki with Mt. Fuji views</div>
          <div className="res-label">Location:</div>
          <div className="res-value">Private dining room overlooking Lake Kawaguchi</div>
          <div className="res-label">Special:</div>
          <div className="res-value">Last night celebration dinner</div>
        </div>
      </div>
    </>
  )
}

export default Day10
