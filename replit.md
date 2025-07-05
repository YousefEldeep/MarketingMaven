# Saudi Marketing Agency Website

## Overview

This is a full-stack web application for Saudi Marketing, a creative agency that brings Saudi excellence to the Egyptian market. The application features a modern, professional website with a contact form system and admin functionality for managing submissions.

## System Architecture

The application follows a monorepo structure with separate client and server directories:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theming

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Comprehensive shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming

### Backend Architecture
- **Express Server**: RESTful API with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **API Routes**: Contact form submission and retrieval endpoints

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Store contact form data (name, email, company, service, message, timestamp)

### UI Design System
- **Typography**: Inter for body text, Playfair Display for headings
- **Color Scheme**: Black and white theme with neutral grays
- **Components**: Full shadcn/ui component suite for consistency

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using Zod schema
   - API call to `/api/contact` endpoint
   - Data validated and stored in database
   - Success/error feedback to user

2. **Admin Dashboard** (Future):
   - Retrieve contact submissions via `/api/contact-submissions`
   - Display submissions in admin interface

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation
- **@radix-ui/***: Primitive UI components
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight router

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **tsx**: TypeScript execution
- **esbuild**: Fast bundling for production

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- tsx for running TypeScript server directly
- In-memory storage for quick development

### Production Build
1. Frontend built with Vite to `dist/public`
2. Server bundled with esbuild to `dist/index.js`
3. Static files served by Express in production
4. PostgreSQL database connection via environment variables

### Environment Configuration
- `NODE_ENV`: Development/production mode switching
- `DATABASE_URL`: PostgreSQL connection string
- Vite handles environment-specific builds

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 05, 2025: Enhanced website with real Saudi Marketing branding
  - Integrated actual company logo asset
  - Updated portfolio with authentic Saudi-Egyptian partnership projects
  - Expanded partners list to include major Saudi and Egyptian companies
  - Added portfolio metrics and enhanced hover effects
  - Removed contact form to simplify user experience
  - Cleaned up backend by removing unused API routes
  - Fixed TypeScript issues in backend storage

## Changelog

- July 05, 2025: Initial setup and branding enhancement