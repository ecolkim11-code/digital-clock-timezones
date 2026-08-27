# Digital Clock - Multiple Time Zones

A beautiful, responsive web application that displays the current time in different time zones around the world.

## Features

✨ **Key Features:**
- 🌍 Display time in multiple time zones simultaneously
- 🕐 Both digital and analog clock displays
- ➕ Add custom time zones dynamically
- ❌ Remove time zones with a single click
- 📱 Fully responsive design for mobile and desktop
- 🎨 Beautiful gradient UI with smooth animations
- ⚡ Real-time updates (every second)
- 📅 Shows date information for each timezone
- ✅ Input validation for timezone names

## How to Use

1. **Open the Application**
   - Open `index.html` in a modern web browser

2. **Add a Time Zone**
   - Enter a timezone name in the input field (e.g., `America/New_York`, `Europe/London`, `Asia/Tokyo`)
   - Click the "Add Timezone" button or press Enter
   - The clock will appear on the page

3. **Remove a Time Zone**
   - Click the "×" button in the top-right corner of any clock card

4. **Supported Timezones**
   - Use standard IANA timezone identifiers
   - Examples:
     - Americas: `America/New_York`, `America/Los_Angeles`, `America/Chicago`, `America/Denver`
     - Europe: `Europe/London`, `Europe/Paris`, `Europe/Berlin`, `Europe/Madrid`
     - Asia: `Asia/Tokyo`, `Asia/Shanghai`, `Asia/Dubai`, `Asia/Bangkok`
     - Australia: `Australia/Sydney`, `Australia/Melbourne`
     - Africa: `Africa/Cairo`, `Africa/Johannesburg`
     - Etc.

## Default Time Zones

The application starts with 4 default time zones:
- 🗽 America/New_York (Eastern Time)
- 🇬🇧 Europe/London (GMT/BST)
- 🗾 Asia/Tokyo (JST)
- 🇦🇺 Australia/Sydney (AEDT/AEST)

## Display Elements

Each clock card shows:
1. **Timezone Name** - Location/Region identifier
2. **Digital Time** - HH:MM:SS format (24-hour)
3. **Analog Clock** - Visual representation with hour, minute, and second hands
4. **Date** - Current date in the specified timezone
5. **Remove Button** - Delete this timezone from display

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling, gradients, and animations
- **JavaScript (ES6+)** - Clock logic and timezone handling
- **Intl API** - Native timezone support

## Browser Compatibility

- Chrome/Edge 24+
- Firefox 29+
- Safari 10+
- Opera 15+
- Modern mobile browsers

## Files

- `index.html` - Main HTML file with structure
- `styles.css` - Styling and responsive design
- `script.js` - Clock functionality and timezone handling
- `README.md` - This documentation

## Installation

No installation required! Simply:
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding timezones!

## Tips

- Use Tab key to navigate between input field and button
- The app validates timezone names automatically
- Clocks update every second for real-time accuracy
- Responsive design adapts to any screen size
- Information is stored locally (no internet required after loading)

## Future Enhancements

- [ ] Save favorite timezones to local storage
- [ ] 12-hour/24-hour format toggle
- [ ] Dark mode theme
- [ ] Sound alarm feature
- [ ] Timezone search/autocomplete
- [ ] Multiple clock styles
- [ ] Time difference calculator

## License

Free to use and modify for personal or commercial projects.

## Author

Created with ❤️ for timezone enthusiasts and global teams.
