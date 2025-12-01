# Japan Trip 2025 - Interactive Itinerary

A modular, single-page web application for planning a luxury trip to Japan.

## 📁 Project Structure

```
├── index.html              # Main HTML file (69 lines)
├── script.js               # JavaScript functionality
├── styles.css              # Styling
├── partials/              # Modular HTML sections
│   ├── overview.html      # Trip overview and highlights
│   ├── itinerary.html     # Daily itinerary (11 days)
│   ├── flights.html       # Flight information
│   ├── hotels.html        # Hotel bookings
│   ├── dining.html        # Restaurant reservations
│   ├── expenses.html      # Budget tracking
│   └── contacts.html      # Emergency contacts and info
└── images/                # Image assets
    └── hotels/            # Hotel images
```

## 🎯 Features

- **Modular Architecture**: HTML sections loaded dynamically from `/partials` directory
- **Password Protected**: Secure 6-digit PIN access
- **Responsive Design**: Works on desktop and mobile
- **Offline Ready**: Caches loaded sections for offline access
- **GitHub Pages Compatible**: No build process required

## 🚀 How It Works

### Dynamic Loading
- HTML content is split into separate files in the `partials/` directory
- Sections are loaded asynchronously via `fetch()` when accessed
- Loaded sections are cached to avoid redundant requests
- Initial section (overview) loads automatically after authentication

### File Organization
- **index.html**: Minimal structure with empty content divs
- **partials/*.html**: Individual section content
- **script.js**: Handles authentication, navigation, and dynamic loading
- **styles.css**: All styling rules

## 📊 Benefits

- **Maintainability**: Edit individual sections without touching main HTML
- **Performance**: Sections loaded on-demand
- **Code Organization**: Clear separation of concerns
- **File Size**: Main HTML reduced from 2,057 to 69 lines (96.6% reduction)
- **GitHub Pages**: Works without any build process

## 🔧 Making Changes

### Editing Content
To update a section, simply edit the corresponding file in `partials/`:
- Trip overview → `partials/overview.html`
- Daily plans → `partials/itinerary.html`
- Flights → `partials/flights.html`
- Hotels → `partials/hotels.html`
- Restaurants → `partials/dining.html`
- Budget → `partials/expenses.html`
- Contacts/Info → `partials/contacts.html`

### Adding New Sections
1. Create new HTML file in `partials/` directory
2. Add section div to `index.html`
3. Add navigation button in `index.html`
4. Register the section in `script.js` `sectionFiles` object

## 🌐 Deployment

This site is designed for GitHub Pages:
1. Push changes to your repository
2. Enable GitHub Pages in repository settings
3. Site will be available at `https://username.github.io/repository-name/`

No build process or deployment configuration needed!

## 🔐 Security

- Password: `092994` (stored in `script.js`)
- Authentication persists in session storage
- Password only accepts numeric input

## 💡 Technical Details

- **No Dependencies**: Pure vanilla JavaScript
- **No Build Tools**: Direct HTML/CSS/JS
- **Browser Support**: Modern browsers with ES6+ support
- **File Protocol**: Works locally via `file://` or HTTP server
