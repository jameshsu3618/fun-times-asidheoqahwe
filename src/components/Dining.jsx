function Dining() {
  return (
    <div id="dining" className="content-section active">
      <div className="reservation-alert" style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--indigo)', marginBottom: '20px' }}>🍽️ Restaurant Reservations</h2>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
          <h3 style={{ color: 'var(--indigo)', marginBottom: '10px' }}>Yakitori Hirano</h3>
          <div className="reservation-grid">
            <div className="res-label">Date:</div>
            <div className="res-value">December 12, 2025</div>
            <div className="res-label">Time:</div>
            <div className="res-value">9:30 PM (21:30)</div>
            <div className="res-label">Location:</div>
            <div className="res-value">Ginza 8-12-15, Zenkoku Nenryo Kaikan 1F</div>
            <div className="res-label">Course:</div>
            <div className="res-value">Premium Hanatsubaki Course</div>
            <div className="res-label">Price:</div>
            <div className="res-value">¥15,000 per person + 10% service</div>
            <div className="res-label">Total:</div>
            <div className="res-value">¥33,000</div>
            <div className="res-label">Confirmation:</div>
            <div className="res-value">CQU7XW3ZQS</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #FFF9E6, var(--sakura))', padding: '20px', borderRadius: '8px', marginBottom: '15px', border: '2px solid var(--gold)' }}>
          <h3 style={{ color: 'var(--indigo)', marginBottom: '10px' }}>✨ Shintomi Kitafuku - Anniversary Lunch</h3>
          <div className="reservation-grid">
            <div className="res-label">Date:</div>
            <div className="res-value">December 13, 2025</div>
            <div className="res-label">Time:</div>
            <div className="res-value">12:00 PM (Noon)</div>
            <div className="res-label">Location:</div>
            <div className="res-value">1-7-9 Shintomi, Nakazato Building 1F</div>
            <div className="res-label">Course:</div>
            <div className="res-value">Eel and live Matsuba crab course (winter)</div>
            <div className="res-label">Special Request:</div>
            <div className="res-value">Wedding Anniversary - Can we have 1 eel, one uni?</div>
            <div className="res-label">Price:</div>
            <div className="res-value">¥99,000 per person + ¥19,800 service</div>
            <div className="res-label">Total:</div>
            <div className="res-value">¥217,800</div>
            <div className="res-label">Cancellation:</div>
            <div className="res-value">100% fee within 24hrs</div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
          <h3 style={{ color: 'var(--indigo)', marginBottom: '10px' }}>Miyake Akira</h3>
          <div className="reservation-grid">
            <div className="res-label">Date:</div>
            <div className="res-value">December 13, 2025</div>
            <div className="res-label">Time:</div>
            <div className="res-value">7:00 PM (19:00)</div>
            <div className="res-label">Location:</div>
            <div className="res-value">Roppongi 3-8-12, JT Building 1F</div>
            <div className="res-label">Course:</div>
            <div className="res-value">Seasonal Omakase (Caviar, eel, Matsuba crab, fugu)</div>
            <div className="res-label">Price:</div>
            <div className="res-value">¥33,880 per person + 10% service</div>
            <div className="res-label">Total:</div>
            <div className="res-value">¥74,536</div>
            <div className="res-label">Confirmation:</div>
            <div className="res-value">SYUEW8PEWM</div>
            <div className="res-label">Note:</div>
            <div className="res-value">2.5 hour stay limit, 100% cancellation fee 3-5 days before</div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
          <h3 style={{ color: 'var(--indigo)', marginBottom: '10px' }}>Teppanyaki Go - Palace Hotel</h3>
          <div className="reservation-grid">
            <div className="res-label">Date:</div>
            <div className="res-value">December 14, 2025</div>
            <div className="res-label">Time:</div>
            <div className="res-value">7:00 PM (19:00)</div>
            <div className="res-label">Purpose:</div>
            <div className="res-value">Wedding Anniversary</div>
            <div className="res-label">Course:</div>
            <div className="res-value">Kobe & Matsusaka beef</div>
            <div className="res-label">Price:</div>
            <div className="res-value">¥ 32,000 × 1 + ¥ 43,000 × 1 + 10% service</div>
            <div className="res-label">Total:</div>
            <div className="res-value">¥82,500</div>
            <div className="res-label">Phone:</div>
            <div className="res-value">03-3211-5322</div>
            <div className="res-label">Note:</div>
            <div className="res-value">Business casual dress code</div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--indigo)', marginBottom: '10px' }}>Hotel & Ryokan Dining</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li><strong>Dec 12:</strong> HOSHINOYA Tokyo - Ryokan dinner (5:30 PM, ¥61,600)</li>
            <li><strong>Dec 13:</strong> HOSHINOYA Tokyo - Holistic Ryokan Breakfast (8:00 AM, ¥19,360)</li>
            <li><strong>Dec 14:</strong> Teppanyaki Go - Palace Hotel (7:00 PM, ¥82,500)</li>
            <li><strong>Dec 15:</strong> Gora Kadan - Ryokan dinner included (6:00 PM)</li>
            <li><strong>Dec 16:</strong> Gora Kadan - Ryokan dinner included (6:00 PM)</li>
            <li><strong>Dec 17:</strong> Gora Hanaougi - Ryokan dinner included (6:00/6:30/7:00 PM slot)</li>
            <li><strong>Dec 18:</strong> HOSHINOYA Fuji - Room Service Dinner (¥18,150) - VERIFY WHICH</li>
            <li><strong>Dec 19:</strong> Morning BOX (¥9,680), Pizza Workshop (¥8,470), Dining Course (¥24,200)</li>
            <li><strong>Dec 20:</strong> Fufu Kawaguchiko - Ryokan dinner included (6:00 PM)</li>
            <li><strong>Dec 20:</strong> Fufu Kawaguchiko - Grill Morning breakfast (7:30 AM, ¥9,680)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dining
