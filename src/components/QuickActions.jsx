function QuickActions() {
  const handleClick = () => {
    const actions = [
      '📞 Emergency Contacts',
      '🗺️ Open Google Maps',
      '💱 Currency Converter',
      '🌡️ Weather Update'
    ]

    const choice = prompt('Quick Actions:\n\n' + actions.join('\n') + '\n\nEnter 1-4:')

    switch (choice) {
      case '1':
        alert('Emergency Contacts:\n\nPolice: 110\nFire/Ambulance: 119\nUS Embassy: +81-3-3224-5000')
        break
      case '2':
        window.open('https://maps.google.com/', '_blank')
        break
      case '3':
        const usd = prompt('Enter USD amount:')
        if (usd) {
          alert(`$${usd} USD = ¥${(usd * 150).toFixed(0)} JPY (approx.)`)
        }
        break
      case '4':
        alert('Weather Forecast:\n\nTokyo: 8-15°C\nHakone: 5-12°C\nMt. Fuji: 0-8°C\n\nPack warm layers!')
        break
      default:
        break
    }
  }

  return (
    <div className="floating-action" onClick={handleClick}>
      📱
    </div>
  )
}

export default QuickActions
