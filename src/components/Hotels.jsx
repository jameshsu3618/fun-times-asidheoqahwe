function Hotels() {
  const hotels = [
    {
      name: 'HOSHINOYA Tokyo',
      dates: 'Dec 12-14 (2 nights)',
      address: '1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004',
      phone: '+81-50-3134-8091',
      mapQuery: 'HOSHINOYA+Tokyo+1-9-1+Otemachi'
    },
    {
      name: 'Palace Hotel Tokyo',
      dates: 'Dec 14-15 (1 night)',
      address: '1-1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005',
      phone: '+81-3-3211-5211',
      mapQuery: 'Palace+Hotel+Tokyo+1-1-1+Marunouchi'
    },
    {
      name: 'Gora Kadan',
      dates: 'Dec 15-17 (2 nights)',
      address: '1300 Gora, Hakone-machi, Ashigarashimo-gun, Kanagawa',
      phone: '0460-82-3331',
      mapQuery: 'Gora+Kadan+1300+Gora+Hakone'
    },
    {
      name: 'Gora Hanaougi Madoka no Mori',
      dates: 'Dec 17-18 (1 night)',
      address: '1320-862 Gora, Hakone-machi, Ashigarashimo-gun, Kanagawa',
      phone: '0460-82-4100',
      confirmation: '6175866726',
      note: 'Check-in by 18:00!',
      mapQuery: 'Gora+Hanaougi+1320-862+Gora+Hakone'
    },
    {
      name: 'HOSHINOYA Fuji',
      dates: 'Dec 18-20 (2 nights)',
      address: '1408 Oishi, Fujikawaguchiko-machi, Yamanashi 401-0305',
      phone: '+81-50-3134-8091',
      mapQuery: 'HOSHINOYA+Fuji+1408+Oishi'
    },
    {
      name: 'Fufu Kawaguchiko',
      dates: 'Dec 20-21 (1 night)',
      address: '2211-1 Mizuguchi, Fuji-Kawaguchiko-Machi, Yamanashi 401-0304',
      phone: '0570-0117-22',
      mapQuery: 'Fufu+Kawaguchiko+2211-1+Mizuguchi'
    }
  ]

  return (
    <div id="hotels" className="content-section active">
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel-card" style={{ marginBottom: '20px' }}>
          <div className="hotel-header">
            <div className="hotel-icon">🏨</div>
            <div>
              <div style={{ fontWeight: 600 }}>{hotel.name}</div>
              <div style={{ color: '#666', fontSize: '0.9em' }}>{hotel.dates}</div>
            </div>
          </div>
          <div style={{ color: '#666', marginBottom: '10px' }}>
            {hotel.address}<br />
            Tel: {hotel.phone}
            {hotel.confirmation && (
              <>
                <br />Confirmation: {hotel.confirmation}
              </>
            )}
            {hotel.note && (
              <>
                <br /><strong>Note: {hotel.note}</strong>
              </>
            )}
          </div>
          <a href={`https://maps.google.com/?q=${hotel.mapQuery}`} target="_blank" rel="noreferrer" className="map-btn">
            📍 Navigate
          </a>
        </div>
      ))}
    </div>
  )
}

export default Hotels
