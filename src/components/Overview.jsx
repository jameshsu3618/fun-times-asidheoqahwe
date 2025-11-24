function Overview() {
  return (
    <div id="overview" className="content-section active">
      <div className="quick-info-grid">
        <div className="quick-card">
          <div className="quick-icon">✈️</div>
          <div>
            <div style={{ fontWeight: 600 }}>Outbound Flight</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Dec 11 - UA875</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Business Class</div>
          </div>
        </div>
        <div className="quick-card">
          <div className="quick-icon">🏨</div>
          <div>
            <div style={{ fontWeight: 600 }}>6 Hotels</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>9 Nights Total</div>
          </div>
        </div>
        <div className="quick-card">
          <div className="quick-icon">🍽️</div>
          <div>
            <div style={{ fontWeight: 600 }}>Special Anniversary</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Shintomi Kitafuku</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Dec 13, 12:00 PM</div>
          </div>
        </div>
        <div className="quick-card">
          <div className="quick-icon">📅</div>
          <div>
            <div style={{ fontWeight: 600 }}>10 Days</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Dec 11-21, 2025</div>
          </div>
        </div>
      </div>

      <div className="timeline-card">
        <h2 style={{ marginBottom: '20px' }}>Trip Highlights</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5em' }}>🏙️</span>
            <div>
              <strong>Tokyo (Dec 12-15)</strong> - HOSHINOYA & Palace Hotel, Premium Dining
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5em' }}>♨️</span>
            <div>
              <strong>Hakone (Dec 15-18)</strong> - Gora Kadan & Gora Hanaougi Ryokans
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5em' }}>🗻</span>
            <div>
              <strong>Mt. Fuji (Dec 18-21)</strong> - HOSHINOYA Fuji & Lake Views
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-card">
        <h2 style={{ marginBottom: '20px' }}>⚠️ Important Notes</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Dec 17:</strong> Gora Hanaougi check-in by 18:00. Dinner slots: 18:00, 18:30, 19:00</li>
          <li><strong>Dec 18:</strong> Make sure to figure out dinner times at each Ryokan </li>
          <li><strong>Dec 19:</strong> Early morning canoeing at 06:50 AM</li>
          <li><strong>Cancellation Policies:</strong> Many restaurants have strict 24-48hr policies</li>
        </ul>
      </div>
    </div>
  )
}

export default Overview
