# TechVid - Educational Technology Platform

A modern, responsive educational technology platform built with React.js, featuring job-ready programs in Engineering, Pharmacy, Agriculture, Management, and Emerging Technologies.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Multiple Pages**: Home, About Us, Services, Careers, and Contact pages
- **Interactive Components**: Reusable components with Framer Motion animations
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance**: Optimized with lazy loading and code splitting

## 🛠️ Tech Stack

- **Framework**: React.js 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form (ready to integrate)
- **SEO**: React Helmet Async

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd visionTech
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
visionTech/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Card, Input, etc.)
│   │   ├── layout/          # Layout components (Header, Footer, Layout)
│   │   └── sections/        # Page sections (Hero, Features, etc.)
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/                # Static data files
│   │   ├── programs.js
│   │   ├── team.js
│   │   ├── reviews.js
│   │   ├── partners.js
│   │   ├── certificates.js
│   │   └── contact.js
│   ├── assets/              # Static assets (images, icons)
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main App component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── public/                  # Public assets
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

## 🎨 Color Palette

- **Primary**: #3B82F6 (Bright Blue)
- **Secondary**: #8B5CF6 (Purple)
- **Accent**: #F59E0B (Amber/Orange)
- **Success**: #10B981 (Emerald Green)
- **Dark**: #1F2937 (Dark Gray)
- **Light**: #F3F4F6 (Light Gray)

## 📄 Pages

### Home (`/`)
- Hero section with animated gradient background
- Trust indicators (review platforms)
- Programs overview (6 categories)
- Features section
- Vision statement
- Call-to-action section

### About Us (`/about`)
- Company mission and vision
- Founders section with profiles
- Team members grid
- Partner companies
- Legal certifications carousel

### Services (`/services`)
- Program categories grid
- Features highlight
- Call-to-action
- Query parameter support (`?program=ProgramName`)

### Careers (`/careers`)
- Job openings list
- Benefits and perks
- Application form

### Contact (`/contact`)
- Contact information cards
- Contact form
- WhatsApp integration
- Office hours and quick links

## 🔧 Customization

### Adding New Programs
Edit `src/data/programs.js`:
```javascript
{
  id: 'unique-id',
  name: 'Program Name',
  slug: 'Program-Slug',
  description: 'Program description',
  icon: '🎓',
  featured: true,
}
```

### Adding Team Members
Edit `src/data/team.js`:
```javascript
{
  id: 1,
  name: 'Name',
  role: 'Position',
  image: '/images/team/photo.jpg',
  linkedin: 'https://linkedin.com/in/profile',
}
```

### Updating Contact Information
Edit `src/data/contact.js` to change phone, email, or address.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms
The build output is in the `dist` folder after running `npm run build`.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px - 1440px
- **Large Desktop**: 1441px+

## ✨ Key Features Implementation

### Animations
- Framer Motion for smooth page transitions
- Scroll-triggered animations on sections
- Hover effects on cards and buttons
- Floating background elements

### Forms
- Real-time validation
- Loading states
- Success/error messages
- File upload support (Careers page)

### Navigation
- Sticky header with scroll effect
- Mobile hamburger menu
- Active link indicators
- Smooth scroll to sections

## 🔐 Environment Variables (Optional)

Create a `.env` file for any API keys or configuration:
```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=support@techvid.world
```

## 📝 License

Copyright © 2024 TechVid. All rights reserved.

## 👥 Contact

- **Phone**: +91 72073 76333
- **Email**: support@techvid.world
- **Address**: Module No.1, Q3-A3, Quadrant 3, 1st Floor, Cyber Towers, HITEC City, Hyderabad, Telangana, 500081

## 🤝 Contributing

This is a proprietary project. For any contributions or suggestions, please contact the development team.

---

Built with ❤️ by the TechVid Team
