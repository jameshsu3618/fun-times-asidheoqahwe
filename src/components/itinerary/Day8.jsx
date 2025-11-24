function Day8() {
  return (
    <>
      <div className="timeline-card">
        <div className="time-badge">Morning</div>
        <div className="activity-title">🗻 Travel to Mt. Fuji</div>
        <div className="activity-description">
          Journey to HOSHINOYA Fuji
        </div>
      </div>

      <div className="reservation-alert">
        <div className="reservation-header">
        </div>
        <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
          <strong>(6:10 PM):</strong> Mountain Shabu-shabu Hotpot - ¥18,150 (serves 3)<br />
          Confirmation: 4017894<br /><br />
          <strong>(6:30 PM):</strong> Red Wine Sukiyaki Hot Pot - ¥18,150 (serves 3)<br />
          Confirmation: 4018707<br /><br />
        </div>
      </div>

      <div className="hotel-card">
        <div className="hotel-header">
          <div className="hotel-icon">🏨</div>
          <div>
            <div style={{ fontWeight: 600 }}>HOSHINOYA Fuji</div>
            <div style={{ color: '#666', fontSize: '0.9em' }}>Check-in Dec 18 (2 nights)</div>
          </div>
        </div>
        <div style={{ color: '#666', marginBottom: '10px' }}>
          1408 Oishi, Fujikawaguchiko-machi, Yamanashi<br />
          Tel: +81-50-3134-8091
        </div>
        <a href="https://maps.google.com/?q=HOSHINOYA+Fuji+1408+Oishi+Fujikawaguchiko" target="_blank" rel="noreferrer" className="map-btn">
          📍 Navigate
        </a>
      </div>
    </>
  )
}

export default Day8
