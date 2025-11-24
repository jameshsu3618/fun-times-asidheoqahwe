function Flights() {
  return (
    <div id="flights" className="content-section active">
      <div className="timeline-card">
        <h2 style={{ color: 'var(--indigo)', marginBottom: '20px' }}>✈️ Outbound Flight</h2>
        <div className="reservation-grid">
          <div className="res-label">Date:</div>
          <div className="res-value">December 11, 2025</div>
          <div className="res-label">Flight:</div>
          <div className="res-value">UA875 - United Airlines</div>
          <div className="res-label">Route:</div>
          <div className="res-value">SFO → HND (Tokyo Haneda)</div>
          <div className="res-label">Departure:</div>
          <div className="res-value">10:15 AM PST</div>
          <div className="res-label">Arrival:</div>
          <div className="res-value">2:50 PM JST (Dec 12)</div>
          <div className="res-label">Duration:</div>
          <div className="res-value">11h 35m</div>
          <div className="res-label">Class:</div>
          <div className="res-value">United Polaris Business</div>
          <div className="res-label">Seats:</div>
          <div className="res-value">2D (Jen), 2G (Rui)</div>
          <div className="res-label">Aircraft:</div>
          <div className="res-value">Boeing 777-200</div>
          <div className="res-label">Confirmation:</div>
          <div className="res-value">M2ZWZ0</div>
        </div>
      </div>

      <div className="timeline-card">
        <h2 style={{ color: 'var(--indigo)', marginBottom: '20px' }}>✈️ Return Flight</h2>
        <div className="reservation-grid">
          <div className="res-label">Date:</div>
          <div className="res-value">December 21, 2025</div>
          <div className="res-label">Flight:</div>
          <div className="res-value">UA7939 - Operated by ANA</div>
          <div className="res-label">Route:</div>
          <div className="res-value">HND → SFO</div>
          <div className="res-label">Departure:</div>
          <div className="res-value">10:55 PM JST</div>
          <div className="res-label">Arrival:</div>
          <div className="res-value">3:20 PM PST (same day)</div>
          <div className="res-label">Duration:</div>
          <div className="res-value">9h 25m</div>
          <div className="res-label">Class:</div>
          <div className="res-value">Economy</div>
          <div className="res-label">Seats:</div>
          <div className="res-value">41D (Jen), 41E (Rui)</div>
          <div className="res-label">Aircraft:</div>
          <div className="res-value">Boeing 777-300ER</div>
          <div className="res-label">Confirmation:</div>
          <div className="res-value">M2ZWZ0</div>
        </div>
      </div>
    </div>
  )
}

export default Flights
