# 🚀 Giovanni Proaño - Portfolio

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Accessibility](https://img.shields.io/badge/WCAG-2.1_AA-green?style=for-the-badge&logo=accessibility)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

> Personal portfolio of Giovanni Proaño, Full Stack TypeScript Developer specializing in React, Next.js and Node.js, with a focus on web accessibility and development best practices.

## 🌐 Live Demo

**🔗 [View Portfolio](https://portfolio-rbe9qwgwg-giodavids-projects.vercel.app)**

## ✨ Key Features

### 🎨 **Design & UX**
- ✅ Modern and responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Parallax effects and floating particles
- ✅ Elegant dark theme with gradients
- ✅ Smooth navigation between sections
- ✅ Functional contact form with EmailJS

### ♿ **Complete Accessibility (WCAG 2.1 AA)**
- ✅ **Full keyboard navigation**
- ✅ **Screen reader support** with ARIA
- ✅ **Reduced motion preferences** support
- ✅ **High contrast mode** support
- ✅ **Skip links** for quick navigation
- ✅ **Accessible forms** with validation
- ✅ **Enhanced focus indicators**
- ✅ **Complete semantic structure**
- ✅ **Descriptive alt text**
- ✅ **Proper heading hierarchy**

### 📱 **Technical Features**
- ✅ **Static export** for better performance
- ✅ **SEO optimized** with complete metadata
- ✅ **Image optimization** with Next.js Image
- ✅ **TypeScript** for type safety
- ✅ **ESLint** and strict code standards
- ✅ **Responsive design** for all devices

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 15.3.3** - React framework with SSG
- **React 19** - User interface library
- **TypeScript 5** - JavaScript with static types
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library

### **Tools & Libraries**
- **EmailJS** - Email sending service
- **React Icons** - Optimized SVG icons
- **next/font** - Font optimization (Geist)

### **Development & Deployment**
- **ESLint** - Code linter
- **Vercel** - Deployment platform
- **Git** - Version control
- **npm** - Package manager

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

```bash
# Clone repository
git clone https://github.com/GioDavid/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run in development mode
npm run dev

# Open in browser
open http://localhost:3000
```

### **Environment Variables**

Create a `.env.local` file in the project root:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm run start        # Production server
npm run export       # Static export

# Code quality
npm run lint         # Run ESLint

# Deployment
npm run serve        # Serve static files locally
```

## 📁 Project Structure

```plain
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About me page
│   │   ├── globals.css        # Global styles + a11y utilities
│   │   ├── layout.tsx         # Main layout with metadata
│   │   └── page.tsx           # Main page (Hero + sections)
│   ├── components/            # Reusable components
│   │   ├── contact-section/   # Accessible contact form
│   │   ├── experience-timeline/ # Experience timeline
│   │   ├── navigation/        # Accessible navigation
│   │   ├── project-gallery/   # Project gallery
│   │   ├── services-section/  # Services offered
│   │   └── skill-section/     # Technical skills
│   └── types/                 # TypeScript definitions
├── public/                    # Static files
│   ├── CV DAVID PROANO SOFTWARE DEVELOPER.pdf
│   ├── profile.jpg           # Profile photo with descriptive alt
│   └── *.svg                 # Icons and images
├── .vercelignore             # Files ignored in deployment
├── vercel.json               # Vercel configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── eslint.config.mjs         # ESLint configuration
```

## ♿ Accessibility Testing

### **Automated Tools**

```bash
# Lighthouse (Chrome DevTools)
1. F12 → Lighthouse → Accessibility → Analyze

# axe DevTools (Recommended extension)
https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd

# pa11y (command line)
npx pa11y https://your-portfolio-url.com
```

### **Manual Testing**

**🔹 Keyboard Navigation**
- `Tab` - Navigate forward
- `Shift + Tab` - Navigate backward  
- `Enter/Space` - Activate buttons/links
- `Escape` - Close mobile menu

**🔹 Screen Readers**
- macOS: `Cmd + F5` (VoiceOver)
- Windows: NVDA (free)
- Test navigation by landmarks, headings and forms

**🔹 User Preferences**
- Enable "Reduce Motion" in system settings
- Test with high contrast mode
- Verify text scaling up to 200%

## 🌐 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### **Other Options**

```bash
# Static build for any hosting
npm run build
npm run export
# Files are in ./out/
```

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ in all categories
- **Accessibility Score**: 100/100
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with tree-shaking

## 🤝 Contributing

Contributions are welcome. For major changes:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Contribution Standards**
- ✅ Maintain WCAG 2.1 AA compatibility
- ✅ Include tests for new features
- ✅ Follow TypeScript conventions
- ✅ Document changes in README

## 📄 License

This project is under the MIT License. See `LICENSE` for more details.

## 📞 Contact

**Giovanni Proaño** - Full Stack TypeScript Developer

- 🌐 **Portfolio**: [https://your-portfolio-url.com](https://portfolio-rbe9qwgwg-giodavids-projects.vercel.app)
- 📧 **Email**: [davisxdpfr@gmail.com](mailto:davisxdpfr@gmail.com)
- 💼 **LinkedIn**: [David Proaño](https://www.linkedin.com/in/david-pfr-60038570/)
- 🐱 **GitHub**: [@GioDavid](https://github.com/GioDavid)
- 📱 **WhatsApp**: [Contact](https://wa.me/593998405156)

## 🙏 Acknowledgments

- **Vercel** for hosting and development tools
- **Next.js Team** for the excellent framework
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the design system
- **axe-core** for accessibility tools

---

<div align="center">

**⭐ If you find this project useful, consider giving it a star! ⭐**

*Made with ❤️ by Giovanni Proaño using Next.js and lots of ☕*

</div>
