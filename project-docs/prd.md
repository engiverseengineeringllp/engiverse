# 📋 **PRD: Engiverse Engineering LLP Website**

## **Product Requirements Document**

---

## **1. PRODUCT OVERVIEW**

### **1.1 Product Name**
Engiverse Engineering LLP Corporate Website

### **1.2 Purpose**
Build a professional, modern, and conversion-focused website to attract international clients (USA, Europe, Middle East) for engineering design and software development services.

### **1.3 Target Audience**
- **Primary:** Decision-makers at OEMs, Engineering Firms, EPC Companies
- **Secondary:** Startups, Product Development Teams, Technical Managers
- **Geography:** USA, Europe, Middle East

### **1.4 Success Metrics**
- 100+ monthly organic visitors within 3 months
- 5% conversion rate (contact form submissions)
- Average session duration: 2+ minutes
- Mobile traffic: 40%+ of total
- Page load speed: Under 2 seconds

---

## **2. TECHNICAL SPECIFICATIONS**

### **2.1 Technology Stack**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email Service:** Resend or SendGrid
- **Analytics:** Google Analytics 4
- **Hosting:** Vercel (recommended) or Netlify
- **CMS (Optional Phase 2):** Sanity or Contentful for blog

### **2.2 Performance Requirements**
- **Lighthouse Score:** 90+ across all metrics
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Image Optimization:** Next.js Image component, WebP format
- **Code Splitting:** Automatic with Next.js
- **Lazy Loading:** Below-the-fold content

### **2.3 Browser Support**
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile: iOS Safari 14+, Chrome Android 90+

### **2.4 Responsive Breakpoints**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

---

## **3. FEATURE REQUIREMENTS**

### **3.1 HOMEPAGE (Priority: P0 - Must Have)**

#### **Hero Section**
- **Headline:** "Smart Engineering Solutions for Your Business"
- **Sub-headline:** Short description (2-3 lines)
- **CTA Buttons:**
  - Primary: "Get Started" → Contact Form
  - Secondary: "Our Services" → Services Section
- **Hero Image:** Right side (transparent background, engineering/tech theme)
- **Trust Indicators:** Client count, regions served
- **Animation:** Fade-in on load, parallax scroll effect

#### **Services Overview Section**
- **Title:** "What We Do"
- **Grid Layout:** 2 main categories
  1. **Engineering Design Services**
     - Product Design & 3D Modeling
     - Drafting & CAD Automation
     - FEA & CFD Simulation
     - Mechanical/Electrical/Electronics Design
  2. **Software Services**
     - Custom Engineering Software
     - Web & App Development
     - IoT & Embedded Systems
     - Software Testing
- **Card Design:** Icon + Title + Short Description (2 lines) + "Learn More" link
- **Animation:** Cards fade-in on scroll

#### **Why Choose Us Section**
- **Core Values Display:**
  - Innovation
  - Quality
  - Integrity
  - Collaboration
  - Sustainability
- **Layout:** 5 cards with icons
- **Style:** Minimal, clean design

#### **Industries We Serve**
- Manufacturing & OEMs
- Engineering Consulting Firms
- EPC Companies
- Startups & Product Development
- **Visual:** Industry icons or logos

#### **Process/How We Work**
- **4-Step Process:**
  1. Discovery & Consultation
  2. Design & Development
  3. Testing & Refinement
  4. Delivery & Support
- **Layout:** Horizontal timeline or numbered cards

#### **Statistics/Achievements**
- Projects Completed
- Global Clients
- Years of Combined Experience
- Success Rate
- **Animation:** Count-up animation on scroll

#### **Call-to-Action Section**
- **Headline:** "Ready to Start Your Project?"
- **Sub-text:** Short persuasive copy
- **Button:** "Get Free Consultation"
- **Background:** Gradient or subtle pattern

---

### **3.2 SERVICES PAGE (Priority: P0)**

#### **Engineering Design Services**
- **Individual Service Cards:**
  - Product Design & 3D Modeling
    - Description (3-4 lines)
    - Tools: SolidWorks, CATIA, AutoCAD
    - Use Cases
  - Drafting & CAD Automation
  - FEA & CFD Simulation
  - Mechanical Design
  - Electrical Design
  - Electronics Design

#### **Software Services**
- **Individual Service Cards:**
  - Custom Engineering Software Development
  - Web & App Development
  - IoT & Embedded Systems
  - Software Testing & Deployment

#### **Each Service Card Includes:**
- Icon/Visual
- Title
- Detailed description
- Technologies/Tools used
- Key benefits
- "Request Quote" CTA

---

### **3.3 ABOUT US PAGE (Priority: P1)**

#### **Company Story**
- Who we are
- Our vision & mission
- What makes us different

#### **Core Values**
- Detailed explanation of each value with examples

#### **Team Section (Optional for Phase 1)**
- Founder/Key team members
- Photos + Bio
- LinkedIn links

#### **Infrastructure & Tools**
- Software we use
- Certifications (ISO in progress)
- Quality processes

---

### **3.4 CONTACT PAGE (Priority: P0)**

#### **Contact Form**
- **Fields:**
  - Full Name (required)
  - Company Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Country/Region (dropdown)
  - Service Interested In (dropdown)
  - Project Details (textarea, required)
  - Budget Range (dropdown, optional)
  - Preferred Contact Method
- **Validation:** Real-time with error messages
- **Submit:** "Send Message" button
- **Success State:** Thank you message + redirect option
- **Backend:** Email notification to admin

#### **Contact Information**
- Email address
- Phone number (if available)
- Business hours
- Location: India (city)

#### **Map (Optional)**
- Google Maps embed (if physical office)

#### **Social Links**
- LinkedIn
- Twitter/X (if active)
- GitHub (if applicable)

---

### **3.5 GLOBAL COMPONENTS (Priority: P0)**

#### **Navigation Bar**
- **Logo:** Left side (clickable → home)
- **Menu Items:**
  - Home
  - Services (dropdown or direct link)
  - About Us
  - Contact
- **CTA Button:** "Get Started" (sticky)
- **Mobile:** Hamburger menu
- **Behavior:** 
  - Sticky on scroll
  - Background blur/opacity on scroll
  - Active state indication

#### **Footer**
- **Column 1: About**
  - Short company description
  - Logo
- **Column 2: Quick Links**
  - Services
  - About Us
  - Contact
- **Column 3: Services**
  - Engineering Design
  - Software Services
- **Column 4: Contact**
  - Email
  - Phone
  - Social media icons
- **Bottom Bar:**
  - Copyright © 2024 Engiverse Engineering LLP
  - Privacy Policy (link)
  - Terms of Service (link)

#### **Loading States**
- Page transitions
- Form submissions
- Image loading (skeleton screens)

#### **404 Page**
- Custom error page
- "Page not found" message
- Navigation back to home

---

## **4. DESIGN SPECIFICATIONS**

### **4.1 Color Palette**
```
Primary Navy: #0C3C5C
Primary Cyan: #00A8CC
Light BG: #F5F7FA
White: #FFFFFF
Dark Text: #1A2332
Gray Text: #64748B
Silver: #8B9DAF
Success: #10B981
Warning: #F59E0B
```

### **4.2 Typography**
- **Headings:** Inter or Poppins (Bold, 600-700 weight)
  - H1: 48px (desktop), 32px (mobile)
  - H2: 40px (desktop), 28px (mobile)
  - H3: 32px (desktop), 24px (mobile)
- **Body:** Inter or Open Sans (Regular, 400 weight)
  - Body: 16px
  - Small: 14px

### **4.3 Spacing System**
- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96, 128px
- Consistent padding/margin across components

### **4.4 Component Styles**

#### **Buttons**
- **Primary Button:**
  - Background: Cyan #00A8CC
  - Text: White
  - Padding: 12px 32px
  - Border-radius: 8px
  - Hover: Darken 10%
  - Transition: 0.3s ease

- **Secondary Button:**
  - Background: Transparent
  - Border: 2px solid Navy
  - Text: Navy
  - Hover: Navy background, white text

#### **Cards**
- Background: White
- Border: 1px solid #E5E7EB
- Border-radius: 12px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover: Lift effect (translateY -4px) + stronger shadow

#### **Forms**
- Input height: 48px
- Border: 1px solid #D1D5DB
- Border-radius: 8px
- Focus: Cyan border + shadow
- Error: Red border + error message below

---

## **5. CONTENT REQUIREMENTS**

### **5.1 SEO Requirements**
- **Meta Titles:** Unique per page, 50-60 characters
  - Home: "Engiverse Engineering LLP | Engineering Design & Software Services"
  - Services: "Engineering & Software Services | Engiverse"
  - About: "About Engiverse | Your Global Engineering Partner"
  - Contact: "Contact Us | Engiverse Engineering LLP"

- **Meta Descriptions:** 150-160 characters, compelling
- **H1 Tags:** One per page, keyword-rich
- **Alt Text:** All images
- **Structured Data:** Organization, LocalBusiness schemas
- **Sitemap:** Auto-generated (Next.js)
- **Robots.txt:** Allow all, point to sitemap

### **5.2 Copy Requirements**
- **Tone:** Professional, confident, approachable
- **Language:** Clear, jargon-free (but technical when needed)
- **Length:**
  - Hero headlines: 5-8 words
  - Service descriptions: 50-80 words
  - About page: 300-500 words

### **5.3 Image Requirements**
- **Format:** WebP (with JPG fallback)
- **Hero Image:** 1920x1080px minimum
- **Service Icons:** 64x64px, SVG preferred
- **Logo:** SVG format, multiple sizes
- **Optimization:** Next.js Image component

---

## **6. FUNCTIONALITY REQUIREMENTS**

### **6.1 Contact Form**
- **Frontend Validation:**
  - Required fields checked
  - Email format validation
  - Phone number format (optional)
  - Character limits on textarea

- **Backend Processing:**
  - API route in Next.js (/api/contact)
  - Send email to admin (info@engiverse.com or similar)
  - Store submission in database (optional Phase 2)
  - Auto-reply to user

- **Error Handling:**
  - Display user-friendly error messages
  - Log errors to console/service (Sentry)
  - Retry logic for failed sends

- **Success Flow:**
  - Show success message
  - Clear form
  - Optional: Redirect to thank you page

### **6.2 Analytics & Tracking**
- Google Analytics 4 integration
- Track events:
  - Form submissions
  - Button clicks (CTAs)
  - Page views
  - Time on page
  - Scroll depth

### **6.3 Performance Optimization**
- **Image Optimization:**
  - Next.js Image component
  - Lazy loading below fold
  - Responsive images (srcset)

- **Code Optimization:**
  - Tree shaking
  - Dynamic imports for heavy components
  - Minimize JavaScript bundle

- **Caching:**
  - Static generation where possible
  - CDN caching (Vercel Edge)
  - Browser caching headers

---

## **7. ACCESSIBILITY (WCAG 2.1 Level AA)**

### **7.1 Requirements**
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratios:
  - Normal text: 4.5:1 minimum
  - Large text: 3:1 minimum
- Alt text for all images
- Form labels properly associated
- Skip to main content link

### **7.2 Testing**
- Lighthouse accessibility audit
- Keyboard-only navigation test
- Screen reader testing (NVDA/JAWS)

---

## **8. SECURITY REQUIREMENTS**

### **8.1 Form Security**
- CSRF protection
- Rate limiting on API routes
- Input sanitization
- Spam protection (honeypot field or reCAPTCHA)
- Email validation (server-side)

### **8.2 General Security**
- HTTPS only
- Security headers (Next.js config)
- No sensitive data in frontend code
- Environment variables for API keys
- Regular dependency updates

---

## **9. DEVELOPMENT PHASES**

### **Phase 1: MVP (4-6 weeks) - PRIORITY**
✅ Homepage (all sections)
✅ Services page
✅ About Us page
✅ Contact page (with working form)
✅ Navigation & Footer
✅ Responsive design
✅ Basic SEO
✅ Analytics integration
✅ Performance optimization

### **Phase 2: Enhancement (2-3 weeks)**
- Blog/Case Studies section
- Portfolio/Projects showcase
- Client testimonials
- Newsletter signup
- Advanced animations
- Multi-language support (if needed)

### **Phase 3: Advanced (Ongoing)**
- CMS integration
- Customer portal/login
- Live chat integration
- Advanced analytics
- A/B testing
- Marketing automation

---

## **10. PROJECT FILE STRUCTURE**

```
engiverse-website/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-image.png
│   │   └── icons/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Homepage)
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   └── CTASection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── styles/
│   │   └── animations.ts
│   └── types/
│       └── index.ts
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## **11. DEPENDENCIES**

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0",
    "@react-email/components": "^0.0.14",
    "resend": "^3.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

---

## **12. ENVIRONMENT VARIABLES**

```env
# Email Service
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@engiverse.com
EMAIL_TO=info@engiverse.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site Config
NEXT_PUBLIC_SITE_URL=https://engiverse.com
```

---

## **13. TESTING REQUIREMENTS**

### **13.1 Testing Checklist**
- [ ] All forms submit successfully
- [ ] Email notifications received
- [ ] All links work (internal & external)
- [ ] Images load correctly
- [ ] Responsive on all breakpoints
- [ ] Cross-browser testing
- [ ] Page load speed < 2s
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Accessibility audit passed

### **13.2 User Acceptance Testing**
- Navigation flow is intuitive
- Content is clear and error-free
- CTAs are prominent and working
- Contact form is easy to use
- Mobile experience is smooth

---

## **14. DEPLOYMENT**

### **14.1 Pre-Deployment**
- Run production build locally
- Check all environment variables
- Test contact form in production mode
- Verify analytics tracking
- Review all content for typos

### **14.2 Deployment Steps**
1. Push code to GitHub repository
2. Connect to Vercel
3. Configure environment variables
4. Set custom domain
5. Enable automatic deployments
6. Configure redirects (if needed)

### **14.3 Post-Deployment**
- Submit sitemap to Google Search Console
- Set up Google Analytics
- Test all forms and functionality
- Check mobile performance
- Monitor error logs

---

## **15. MAINTENANCE & UPDATES**

### **15.1 Regular Tasks**
- Weekly: Review contact form submissions
- Monthly: Check analytics and performance
- Quarterly: Update dependencies
- Annually: Review and refresh content

### **15.2 Content Updates**
- Add new projects to portfolio
- Update statistics/achievements
- Publish blog posts (Phase 2)
- Update certifications when obtained

---

## **16. SUCCESS CRITERIA**

### **16.1 Launch Criteria (Must-Have)**
✅ All pages load without errors
✅ Contact form works and sends emails
✅ Mobile responsive on all pages
✅ Lighthouse score > 85 on all metrics
✅ No broken links
✅ SEO meta tags on all pages
✅ Analytics tracking active

### **16.2 Business Goals (3 Months)**
- 100+ monthly visitors
- 10+ contact form submissions per month
- Average session duration: 2+ minutes
- Bounce rate: < 60%
- 5+ new client inquiries

---

## **17. RISKS & MITIGATION**

| Risk | Impact | Mitigation |
|------|--------|------------|
| Slow page load | High | Use Next.js Image optimization, CDN |
| Form spam | Medium | Add honeypot field, rate limiting |
| Poor mobile UX | High | Mobile-first design, thorough testing |
| Low conversion | High | Clear CTAs, trust indicators, A/B testing |
| Content errors | Medium | Thorough proofreading, client review |

---

## **18. BUDGET & TIMELINE**

### **18.1 Development Timeline**
- **Week 1-2:** Setup, Homepage, Navigation
- **Week 3:** Services & About Pages
- **Week 4:** Contact Page, Form Integration
- **Week 5:** Polish, Animations, Optimization
- **Week 6:** Testing, Fixes, Deployment

### **18.2 Ongoing Costs**
- Domain: ~$15/year
- Hosting (Vercel): Free tier (or $20/month Pro)
- Email service (Resend): Free tier (or $20/month)
- Analytics: Free (Google Analytics)

---

## **19. APPROVAL SIGN-OFF**

**Prepared by:** [Your Name]  
**Date:** December 3, 2024  
**Version:** 1.0  

**Stakeholder Approvals:**
- [ ] Business Owner/Founder
- [ ] Technical Lead
- [ ] Marketing/Content Lead

---

## **20. APPENDIX**

### **20.1 Competitor Analysis**
Research 3-5 similar engineering services websites to understand:
- Design trends
- Service presentation
- User flows
- Content structure

### **20.2 Keywords for SEO**
- Engineering design services
- CAD design services
- 3D modeling services
- FEA simulation services
- Custom engineering software
- Product development services
- Mechanical design services
- IoT development services

### **20.3 Content Inspiration**
Reference the company vision document for:
- Core values messaging
- Service descriptions
- Company positioning

---

**This PRD is a living document and will be updated as requirements evolve.**