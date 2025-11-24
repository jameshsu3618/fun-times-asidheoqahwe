function Navigation({ activeSection, setActiveSection }) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Daily Plan' },
    { id: 'flights', label: 'Flights' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'dining', label: 'Dining' },
    { id: 'expenses', label: 'Budget' },
    { id: 'contacts', label: 'Info' },
  ]

  const handleTabClick = (sectionId) => {
    setActiveSection(sectionId)
    window.scrollTo(0, 0)
  }

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-tab ${activeSection === tab.id ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Navigation
