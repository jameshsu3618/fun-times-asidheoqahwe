function Budget() {
  return (
    <div id="expenses" className="content-section active">
      <div className="expense-tracker">
        <div className="expense-header">
          <h2>💴 Trip Budget</h2>
          <div className="expense-total">$5,425+</div>
        </div>

        <div className="expense-item">
          <span className="expense-category">✈️ Flights (All Paid)</span>
          <span className="expense-amount">All Paid</span>
        </div>

        <div className="expense-item">
          <span className="expense-category">🏨 Hotels</span>
          <span className="expense-amount">All Paid</span>
        </div>

        <div className="expense-item">
          <span className="expense-category">🍽️ Dining (Restaurants)</span>
          <span className="expense-amount">$4,595+</span>
        </div>

        <div className="expense-item">
          <span className="expense-category">🎌 Activities & Spa</span>
          <span className="expense-amount">$636</span>
        </div>

        <div className="expense-item">
          <span className="expense-category">💆 In-Room Massage</span>
          <span className="expense-amount">$194</span>
        </div>
      </div>

      <div className="timeline-card">
        <h3 style={{ color: 'var(--indigo)', marginBottom: '15px' }}>Payment Status</h3>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Paid:</strong> All flights (Visa 4270)</li>
          <li><strong>Pay on Arrival:</strong> All restaurants, activities, and spa treatments</li>
          <li><strong>Pending:</strong> Hotel charges (prices TBD)</li>
          <li><strong>Included:</strong> Ryokan dinners at HOSHINOYA Tokyo, Gora Kadan, Gora Hanaougi, and Fufu Kawaguchiko</li>
        </ul>
      </div>

      <div className="timeline-card">
        <h3 style={{ color: 'var(--indigo)', marginBottom: '15px' }}>Exchange Rate Reference</h3>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Current Rate:</strong> ¥150 = $1 USD (approx.)</li>
          <li><strong>Quick Reference:</strong></li>
          <li>¥1,000 = $6.67</li>
          <li>¥10,000 = $66.67</li>
          <li>¥100,000 = $666.67</li>
        </ul>
      </div>
    </div>
  )
}

export default Budget
