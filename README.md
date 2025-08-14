# 🌱 GreenView Landscaping Website

A modern, responsive website for professional landscaping services in Phoenix, Arizona. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 **Design & User Experience**

- **Mobile-First Design**: Optimized for all screen sizes
- **Advanced Animations**: Smooth transitions and micro-interactions
- **Professional UI**: Modern, clean interface with glass morphism effects
- **Accessibility**: WCAG compliant with proper ARIA labels

### 📱 **Mobile & PWA Features**

- **Progressive Web App**: Installable on mobile devices
- **Touch Gestures**: Swipe navigation and pull-to-refresh
- **Offline Support**: Service worker with caching strategies
- **Mobile Optimized**: Touch-friendly buttons and navigation

### 🗺️ **Local Business Optimization**

- **Phoenix Metro Focus**: Comprehensive service area coverage
- **Local SEO**: Optimized for Phoenix, Arizona market
- **Service Areas**: 8 major cities with detailed information
- **Local Content**: Native plants and desert landscaping expertise

### 🛠️ **Technical Features**

- **Performance**: Optimized images, lazy loading, and code splitting
- **SEO Ready**: Meta tags, structured data, and sitemap
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Loading States**: Skeleton components and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/greenview-landscaping.git
   cd greenview-landscaping
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
greenview-landscaping/
├── public/                 # Static assets
│   ├── icons/             # PWA icons
│   ├── images/            # Project images
│   ├── manifest.json      # PWA manifest
│   └── sw.js             # Service worker
├── src/
│   ├── app/              # Next.js app router
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects portfolio
│   │   ├── services/     # Services page
│   │   ├── globals.css   # Global styles
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable components
│   │   ├── ui/          # Base UI components
│   │   ├── sections/    # Page sections
│   │   └── navigation/  # Navigation components
│   ├── content/         # Content management
│   │   ├── data.ts      # Static data
│   │   └── schema.ts    # TypeScript schemas
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── styles/          # Additional styles
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🎯 Key Components

### **Navigation & Layout**

- `Navbar`: Responsive navigation with mobile menu
- `Layout`: Root layout with metadata and PWA setup
- `Footer`: Site footer with contact information

### **Page Sections**

- `Hero`: Landing section with call-to-action
- `ServicesGrid`: Service offerings display
- `ProjectsGrid`: Portfolio showcase
- `TestimonialsSlider`: Client reviews
- `ServiceAreaMap`: Phoenix metro coverage

### **Advanced UI Components**

- `LoadingSkeleton`: Loading state components
- `ErrorBoundary`: Error handling and fallbacks
- `MobileGestureHandler`: Touch gesture support
- `SwipeableCard`: Interactive card components

### **PWA Components**

- `usePWA`: PWA functionality hook
- `useOfflineSupport`: Offline capabilities
- Service worker with caching strategies

## 🎨 Design System

### **Color Palette**

```css
/* Primary Colors */
--green-500: #22c55e --green-600: #16a34a --green-700: #15803d
  /* Accent Colors */ --blue-500: #3b82f6 --purple-500: #9333ea
  --yellow-500: #eab308 /* Neutral Colors */ --gray-50: #f9fafb
  --gray-100: #f3f4f6 --gray-900: #111827;
```

### **Typography**

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient effects
- **Body Text**: Optimized for readability
- **Mobile**: Responsive font sizing

### **Spacing & Layout**

- **Container**: Max-width 7xl (80rem)
- **Section Padding**: py-20 (5rem)
- **Grid Gaps**: gap-6 to gap-12
- **Mobile Margins**: px-4 to px-8

## 📱 Mobile-First Features

### **Touch Interactions**

- **Swipe Navigation**: Left/right swipes for navigation
- **Pull to Refresh**: Refresh content with pull gesture
- **Touch Targets**: Minimum 44px for all interactive elements
- **Gesture Support**: Custom gesture handlers

### **Responsive Design**

- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile Navigation**: Slide-out mobile menu
- **Touch-Friendly**: Optimized for thumb navigation
- **Performance**: Optimized for mobile devices

## 🗺️ Local Business Features

### **Phoenix Metro Coverage**

- **Central Phoenix**: Downtown and surrounding areas
- **East Valley**: Mesa, Chandler, Gilbert, Tempe
- **North Valley**: Scottsdale, Peoria, Surprise
- **Service Areas**: 8 major cities with detailed information

### **Local SEO Optimization**

- **Service Area Pages**: City-specific content
- **Local Keywords**: Phoenix landscaping, Arizona landscaping
- **Structured Data**: Local business schema markup
- **Google My Business**: Integration ready

## 🚀 Performance Optimization

### **Image Optimization**

- **Next.js Image**: Automatic optimization
- **Lazy Loading**: Images load as needed
- **WebP Format**: Modern image formats
- **Responsive Images**: Multiple sizes for different devices

### **Code Optimization**

- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Webpack bundle analyzer
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization

### **Caching Strategies**

- **Service Worker**: Offline caching
- **Static Assets**: Long-term caching
- **API Responses**: Intelligent caching
- **CDN Ready**: Cloud deployment optimized

## 🔧 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# PWA
npm run generate-pwa # Generate PWA assets
npm run analyze      # Analyze bundle size
```

### **Code Quality**

#### **TypeScript**

- Strict mode enabled
- Proper type definitions
- Interface-first development
- Generic components

#### **ESLint Configuration**

- Next.js recommended rules
- TypeScript support
- Accessibility rules
- Performance best practices

#### **Prettier**

- Consistent code formatting
- Automatic formatting on save
- Tailwind CSS class sorting

### **Testing Strategy**

- **Unit Tests**: Component testing with Jest
- **Integration Tests**: API route testing
- **E2E Tests**: Playwright for user flows
- **Accessibility Tests**: Screen reader testing

## 📊 Analytics & SEO

### **Google Analytics**

- **GA4 Integration**: Modern analytics setup
- **Event Tracking**: User interaction tracking
- **Conversion Goals**: Quote request tracking
- **Performance Monitoring**: Core Web Vitals

### **SEO Features**

- **Meta Tags**: Dynamic meta information
- **Structured Data**: JSON-LD markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives

### **Performance Monitoring**

- **Core Web Vitals**: LCP, FID, CLS tracking
- **Lighthouse**: Performance scoring
- **Real User Monitoring**: Field data collection
- **Error Tracking**: User experience monitoring

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push
4. Enable preview deployments

### **Other Platforms**

- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **DigitalOcean App Platform**: Container deployment
- **Traditional Hosting**: Static file hosting

### **Environment Variables**

```env
# Production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXX

# Development
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🔒 Security

### **Security Headers**

- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure connections
- **Frame Options**: Clickjacking protection
- **Referrer Policy**: Privacy protection

### **Input Validation**

- **Form Validation**: Client and server-side validation
- **Sanitization**: XSS prevention
- **Rate Limiting**: API abuse prevention
- **CSRF Protection**: Cross-site request forgery

## 📈 Business Features

### **Lead Generation**

- **Contact Forms**: Multiple contact methods
- **Quote Requests**: Project estimation forms
- **Appointment Booking**: Consultation scheduling
- **Lead Tracking**: Conversion monitoring

### **Customer Engagement**

- **Project Portfolio**: Before/after galleries
- **Client Testimonials**: Social proof
- **Service Information**: Detailed service descriptions
- **Local Content**: Phoenix-specific information

## 🤝 Contributing

### **Development Workflow**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### **Code Standards**

- Follow TypeScript best practices
- Use meaningful commit messages
- Add JSDoc comments for complex functions
- Maintain consistent code style

### **Testing Requirements**

- All new features must have tests
- Maintain >80% code coverage
- Pass all linting checks
- Ensure accessibility compliance

## 📚 Resources

### **Documentation**

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### **Design Resources**

- [Figma Design System](https://figma.com)
- [Icon Libraries](https://lucide.dev)
- [Color Palettes](https://coolors.co)
- [Typography](https://fonts.google.com)

### **Performance Tools**

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### **Technical Issues**

- Create a GitHub issue
- Provide detailed error information
- Include browser and device details
- Share console logs if applicable

### **Business Questions**

- Contact: support@greenview.com
- Phone: (602) 555-0123
- Address: Phoenix, Arizona

### **Feature Requests**

- Use GitHub discussions
- Provide use case details
- Consider business impact
- Suggest implementation approach

---

**Built with ❤️ for the Phoenix landscaping community**

_Last updated: December 2024_
