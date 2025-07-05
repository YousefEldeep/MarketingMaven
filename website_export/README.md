# Saudi Marketing Website

A sophisticated black and white marketing agency website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5000 in your browser

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility libraries
│   └── index.html        # HTML entry point
├── server/                # Express.js backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # In-memory storage
│   └── vite.ts           # Vite integration
├── shared/                # Shared TypeScript types
└── attached_assets/       # Company assets (logo, images)
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Black & White Theme**: Professional color scheme matching brand identity
- **Company Logo**: Integrated authentic Saudi Marketing branding
- **Client Showcase**: Real client portfolio with 30+ companies
- **Contact Information**: Business details and social media links
- **Performance Optimized**: Fast loading with Vite build system

## 🛠 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme variables
- **Icons**: Lucide React

## 📄 Pages & Sections

1. **Hero Section**: Company introduction with call-to-action
2. **Services**: Digital campaigns, branding, market research, content creation
3. **Portfolio**: Saudi-Egyptian partnership projects with metrics
4. **Clients**: 30+ real client companies 
5. **About**: Company background and core values
6. **Contact**: Business information and contact details

## 🎭 Customization

### Colors
Edit `client/src/index.css` to modify the color scheme:
```css
:root {
  --saudi-black: hsl(0, 0%, 0%);
  --saudi-white: hsl(0, 0%, 100%);
  --off-white: hsl(0, 0%, 97%);
}
```

### Content
- Update client list in `client/src/components/partners.tsx`
- Modify portfolio projects in `client/src/components/portfolio.tsx`
- Edit company information in `client/src/components/contact.tsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Files Generated
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server bundle

### Environment Variables
Set these for production deployment:
- `NODE_ENV=production`
- `PORT=5000` (or your preferred port)

## 📝 Development Notes

- Uses in-memory storage (no database required)
- Contact form removed for simplified user experience
- All images optimized for web performance
- SEO-friendly with proper meta tags

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📞 Support

For questions about this codebase, refer to the original developer or check the documentation in `replit.md`.

---

Built with ❤️ for Saudi Marketing - Bringing Saudi excellence to the Egyptian market.