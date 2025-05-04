# Let's Green the Earth

A modern, responsive website for an environmental sustainability organization dedicated to environmental conservation, education, counseling, and elderly care services.

![Let's Green the Earth Website](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80)

## Project Overview

Let's Green the Earth is a global volunteer society focused on four key service pillars:

1. **Environmental Campaigns** - Tree planting, clean-up events, and sustainability education
2. **Education Support** - Free tutoring, scholarship opportunities, and resource distribution
3. **Counseling Services** - Mental health support and awareness programs
4. **Elderly Care** - Medical assistance, companionship, and support for seniors

The website aims to educate visitors about our mission, showcase our impact, and provide opportunities for involvement through volunteering, donations, and partnerships.

## Technologies Used

- **React** - Frontend library for building user interfaces
- **TypeScript** - Static typing to enhance code quality and developer experience
- **React Router** - For navigation and routing between pages
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - SVG icon set for visual elements

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Modern, clean UI with consistent design language
- Multiple page sections highlighting services and impact
- Interactive components including:
  - Navigation with mobile responsiveness
  - Image gallery with filtering
  - Donation form with amount selection
  - Interactive service cards
  - Newsletter signup
  - Contact form

## Pages

- **Home** - Introduction to the organization and its mission
- **About** - Organization history, values, and team information
- **Services** - Details about the four service pillars
- **Get Involved** - Ways to volunteer, donate, partner, or fundraise
- **Gallery** - Photo collection of events and activities
- **News** - Latest articles and upcoming events
- **Contact** - Contact form and information
- **Donate** - Interactive donation form with impact stories

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/lets-green-the-earth.git
   cd lets-green-the-earth
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
lets-green-the-earth/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component with routes
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles and Tailwind imports
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Customization

### Tailwind Theme

The Tailwind theme is configured in `index.html` with custom colors and fonts:

- **Primary Colors**: Green shades for environmental themes
- **Secondary Colors**: Blue shades for trust and stability
- **Accent Colors**: Yellow, orange, and brown for warmth and energy
- **Fonts**: Custom heading and body fonts for brand identity

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Unsplash for placeholder images
- Heroicons for SVG icons
- Tailwind CSS for styling utilities 