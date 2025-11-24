function Info() {
  return (
    <div id="contacts" className="content-section active">
      <div className="contact-card">
        <h2 style={{ marginBottom: '20px' }}>📞 Important Contacts</h2>

        <div className="contact-row">
          <div className="contact-icon">🚨</div>
          <div>
            <strong>Japan Emergency</strong><br />
            Police: 110 | Fire/Ambulance: 119
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-icon">🇺🇸</div>
          <div>
            <strong>US Embassy Tokyo</strong><br />
            +81-3-3224-5000
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-icon">💴</div>
          <div>
            <strong>Exchange Rate</strong><br />
            $1 USD ≈ ¥150 JPY
          </div>
        </div>
      </div>

      <div className="contact-card">
        <h2 style={{ marginBottom: '20px' }}>📝 Important Notes</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Gora Hanaougi: Must check-in by 18:00 on Dec 17</li>
          <li>Shintomi Kitafuku: 100% cancellation fee within 24hrs</li>
          <li>Miyake Akira: 100% cancellation fee 3-5 days before</li>
          <li>evian SPA: Arrive 60 minutes early, cancellation by 3pm day prior</li>
          <li>HOSHINOYA Fuji: Verify which dinner reservation (Dec 18)</li>
          <li>Early Morning Canoeing: Max 180kg per canoe</li>
          <li>Forest Pizza: Cannot accommodate food allergies</li>
          <li>E-bike Tour: Min height 138cm (participants cleared)</li>
        </ul>
      </div>

      <div className="contact-card">
        <h2 style={{ marginBottom: '20px' }}>🌡️ Weather Forecast</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Tokyo:</strong> 8-15°C (46-59°F)</li>
          <li><strong>Hakone:</strong> 5-12°C (41-54°F)</li>
          <li><strong>Mt. Fuji Area:</strong> 0-8°C (32-46°F)</li>
          <li>Pack warm layers, especially for Mt. Fuji!</li>
        </ul>
      </div>
    </div>
  )
}

export default Info
