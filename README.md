# Expensify Website

A modern, clean website for Expensify built with Next.js and Tailwind CSS.

## 🎨 Design Features

- **Color Palette:**
  - Primary Green: `#00C46B`
  - Accent Green: `#00E08A`
  - Dark Background: `#0F1A1A`
  - Light Background: `#F3FFFA`
  - Neutral Gray: `#E5E7EB`

- **Characteristics:**
  - Modern, minimalistic design
  - Premium look with green digital/tech vibe
  - Smooth animations
  - Clean typography (Inter font)
  - Fully responsive

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
expensify-website/
├── components/          # Reusable React components
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Services.js     # Services with cards
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── _document.js   # HTML document
│   └── index.js       # Main page
├── styles/             # Global styles
│   └── globals.css    # Tailwind + custom styles
└── public/            # Static files
```

## ✏️ Easy Customization

### Editing Content

**Services** - Edit `components/Services.js`:
- Modify the `servicesData` array at the top of the file
- Change title, description, or icons easily

**Contact Info** - Edit `components/Contact.js`:
- Update email, phone, and location in the contact section

**About Text** - Edit `components/About.js`:
- Change the company description paragraphs

**Hero Section** - Edit `components/Hero.js`:
- Modify headline and description text

### Changing Colors

All colors are defined in `tailwind.config.js`:
```javascript
colors: {
  primary: '#00C46B',
  accent: '#00E08A',
  dark: '#0F1A1A',
  light: '#F3FFFA',
  neutral: '#E5E7EB',
}
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast loading & optimized
- ✅ SEO ready (meta tags included)
- ✅ Smooth animations
- ✅ Contact form with validation
- ✅ Clean, maintainable code

## 🛠️ Technologies

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **React 18** - UI library

## 📝 Notes

- Form submission is currently simulated. Connect to your backend API in `components/Contact.js`
- Social links in footer need to be updated with real URLs
- Images can be added to `/public` folder
