# Japan Trip 2025 - Interactive Itinerary

test app for fun!
### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Server will start at http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── itinerary/         # Individual day components
│   │   │   ├── Day1.jsx
│   │   │   ├── Day2.jsx
│   │   │   └── ... (Day 1-11)
│   │   ├── Budget.jsx         # Budget section
│   │   ├── Dining.jsx         # Restaurant reservations
│   │   ├── Flights.jsx        # Flight information
│   │   ├── Header.jsx         # App header with countdown
│   │   ├── Hotels.jsx         # Hotel listings
│   │   ├── Info.jsx           # Important information
│   │   ├── Itinerary.jsx      # Daily itinerary container
│   │   ├── Navigation.jsx     # Tab navigation
│   │   ├── Overview.jsx       # Trip overview
│   │   └── QuickActions.jsx   # Floating action button
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   └── main.jsx               # App entry point
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies
└── vite.config.js            # Vite configuration
```

## Design System

### Color Palette

- **Sakura Pink**: `#FEE5E5` - Headers and accents
- **Indigo**: `#2D3E50` - Primary text and buttons
- **Tea Green**: `#C9D8B6` - Secondary accents
- **Gold**: `#D4AF37` - Highlights and important notes
- **White/Gray**: Clean background with subtle gradients

### Typography

- **Primary**: Cormorant Garamond - Elegant serif for UI
- **Japanese**: Noto Serif JP - For Japanese text elements

## Features in Detail

### Countdown Timer
- Updates every 60 seconds
- Shows days, hours, and minutes until departure
- Displays celebration message after trip begins

### Navigation System
- 7 main sections: Overview, Daily Plan, Flights, Hotels, Dining, Budget, Info
- Active state highlighting
- Smooth scroll to top on section change
- Sticky navigation bar

### Daily Itinerary
- 11-day selector with date labels
- Individual components for each day
- Timeline cards for activities
- Reservation alerts with detailed information
- Google Maps integration for locations

### Quick Actions
- Emergency contacts (Police: 110, Fire/Ambulance: 119, US Embassy)
- Quick access to Google Maps
- Currency converter (USD to JPY)
- Weather forecast information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved
