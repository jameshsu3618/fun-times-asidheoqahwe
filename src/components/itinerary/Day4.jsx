function Day4() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">Morning</div>
        <div className="activity-title">🏨 Check-out HOSHINOYA Tokyo</div>
        <div className="activity-description">
          Transfer to Palace Hotel Tokyo
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">3:00 PM</div>
        <div className="activity-title">🏨 Check-in Palace Hotel Tokyo</div>
        <div className="activity-description">
          1-1-1 Marunouchi, Chiyoda-ku<br />
          Tel: +81-3-3211-5211
        </div>
      </div>

      <div className="timeline-card">
        <div className="time-badge">5:30 PM</div>
        <div className="activity-title">💆‍♀️ evian SPA TOKYO</div>
        <div className="activity-description">
          Prenatal Body Therapy 60min<br />
          Confirmation: 381232REV1<br />
          Arrive 60 minutes early<br />
          Use hotel guest elevators
        </div>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
          <div className="alert-icon">🍽️</div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--indigo)' }}>Anniversary Dinner</div>
          </div>
        </div>
        <div className="reservation-grid">
          <div className="res-label">Restaurant:</div>
          <div className="res-value">Teppanyaki Go - Palace Hotel Tokyo</div>
          <div className="res-label">Time:</div>
          <div className="res-value">7:00 PM (19:00)</div>
          <div className="res-label">Purpose:</div>
          <div className="res-value">Wedding Anniversary</div>
          <div className="res-label">Course:</div>
          <div className="res-value">Kobe &Matsusaka beef </div>
          <div className="res-label">Note:</div>
          <div className="res-value">Business casual dress code</div>
          <div className="res-label">Price</div>
          <div className="res-value">¥ 32,000 × 1 + ¥ 43,000 × 1 + 10% service</div>
          <div className="res-label">Phone:</div>
          <div className="res-value">03-3211-5322</div>
        </div>
        <a href="https://maps.google.com/?q=Palace+Hotel+Tokyo+1-1-1+Marunouchi" target="_blank" rel="noreferrer" className="map-btn">
          📍 Navigate to Restaurant
        </a>
      </div>
    </>
  )
}

export default Day4
