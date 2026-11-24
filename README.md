# Professional Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Performance Optimized**: 
  - Lazy-loaded components using React Suspense
  - Code splitting for optimal bundle sizes
  - Production build with minification
- **Modern UI/UX**:
  - Dark theme with gradient accents
  - Smooth animations with Framer Motion
  - Clean, professional typography
- **Sections**:
  - About Me with statistics
  - Projects showcase with technology tags
  - Skills with progress bars
  - Resume with work experience and education
  - Contact form with social links

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 8
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS with CSS Variables
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shivayadav89/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── assets/          # Images and icons
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Update Personal Information

Edit the following files to customize the portfolio:

1. **About Section**: `src/components/About.jsx`
   - Update name, location, and bio
   - Modify statistics

2. **Projects**: `src/components/Projects.jsx`
   - Add/remove projects
   - Update GitHub URLs

3. **Skills**: `src/components/Skills.jsx`
   - Adjust skill levels
   - Add/remove skills

4. **Resume**: `src/components/Resume.jsx`
   - Update work experience
   - Add education details

5. **Contact**: `src/components/Contact.jsx`
   - Update email and phone
   - Modify social media links

### Change Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  --bg-dark: #0f172a;
  /* ... more variables */
}
```

## 🚢 Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### GitHub Pages

1. Build the project: `npm run build`
2. Install gh-pages: `npm install -D gh-pages`
3. Add to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
4. Deploy: `npm run deploy`

## 📊 Performance

- **First Load JS**: ~220 KB (gzipped: ~70 KB)
- **CSS**: ~11 KB (gzipped: ~2.5 KB)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Shiva Yadav**
- GitHub: [@shivayadav89](https://github.com/shivayadav89)
- LinkedIn: [Shiva Yadav](https://www.linkedin.com/in/shiva-yadav-604355409/)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Font by [Google Fonts](https://fonts.google.com/)

## 📸 Screenshots

Add screenshots of your portfolio here after deployment.

---

Built with ❤️ using React and Vite
