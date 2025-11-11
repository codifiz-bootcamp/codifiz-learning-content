# AI Full-Stack Developer Bootcamp - Interactive Curriculum Platform

A modern, self-paced web-based curriculum for teaching full-stack development with AI integration. Built with pure HTML, CSS, and JavaScript - no build tools required!

## 🚀 Quick Start

### For Students

1. **Download the curriculum**
   ```bash
   # Clone or download this repository
   git clone [your-repo-url]
   cd bootcamp-curriculum
   ```

2. **Open in your browser**
   - Simply open `index.html` in any modern web browser
   - Or use Live Server in VS Code for best experience

3. **Start learning!**
   - Begin with Week -4, Day 1
   - Your progress is automatically saved in your browser

### For Instructors/Administrators

The curriculum can be hosted on any static web hosting service:
- **GitHub Pages** (Free)
- **Netlify** (Free tier available)
- **Vercel** (Free tier available)
- **AWS S3 + CloudFront**
- Any web server (Apache, Nginx, etc.)

## 📁 Project Structure

```
bootcamp-curriculum/
├── index.html                 # Main landing page
├── styles/
│   ├── main.css              # Global styles, theme system
│   └── lesson.css            # Lesson-specific styles
├── js/
│   ├── main.js               # Theme toggle, progress tracking
│   └── lesson.js             # Lesson interactions, quizzes
├── prework/
│   ├── week-4/
│   │   ├── index.html        # Week overview
│   │   ├── day1.html         # Day 1 lesson
│   │   ├── day2.html         # Day 2 lesson
│   │   └── ...
│   ├── week-3/
│   ├── week-2/
│   └── week-1/
├── bootcamp/
│   ├── week-1/
│   ├── week-2/
│   └── ...
├── resources/
│   ├── career-services.html
│   ├── instructor-guides.html
│   ├── project-templates.html
│   └── faq.html
└── README.md
```

## ✨ Features

### For Students

- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📊 Progress Tracking**: Automatic progress saving with localStorage
- **✅ Interactive Checklists**: Track completed tasks and objectives
- **📋 Copy Code Blocks**: One-click code copying
- **🎯 Self-Assessment Quizzes**: Test your knowledge
- **🔗 Smart Navigation**: Easy navigation between lessons
- **💾 No Account Required**: Everything works offline after initial load

### For Instructors

- **📝 Easy Content Updates**: Edit HTML files directly
- **🎨 Customizable Branding**: Modify CSS variables
- **📈 Analytics Ready**: Add Google Analytics or similar
- **🔧 No Build Process**: Pure HTML/CSS/JS
- **📤 Export Progress**: Students can export their progress
- **🎓 Scalable**: Add unlimited weeks/lessons

## 🎨 Customization

### Change Colors/Branding

Edit `/styles/main.css`:

```css
:root {
    --accent-primary: #0066ff;      /* Primary brand color */
    --accent-secondary: #00d4ff;    /* Secondary brand color */
    --phase-0: #9333ea;             /* Pre-work phase color */
    --phase-1: #0066ff;             /* Phase 1 color */
    /* ... more variables ... */
}
```

### Add Your Logo

Replace the logo in `/index.html`:

```html
<div class="logo">
    <img src="your-logo.png" alt="Your Bootcamp">
    <span>Your Bootcamp Name</span>
</div>
```

### Modify Content

All content is in standard HTML files. Edit any `.html` file to update:
- Lesson text
- Code examples
- Projects
- Instructions

## 📊 Progress Tracking

Progress is automatically saved to the browser's localStorage:

```javascript
// Access progress data
console.log(window.bootcampUtils.getAllProgress());

// Reset a specific week
window.bootcampUtils.resetProgress('Week -4');

// Reset all progress
window.bootcampUtils.resetProgress();

// Export progress as JSON
window.bootcampUtils.exportProgress();
```

## 🚀 Deployment

### GitHub Pages (Free)

1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and `/root` folder
4. Save and wait for deployment
5. Access at `https://username.github.io/repo-name`

### Netlify (Free)

1. Push to Git repository (GitHub, GitLab, Bitbucket)
2. Sign up at netlify.com
3. Click "New site from Git"
4. Select your repository
5. Deploy!

### Simple HTTP Server (Testing)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🛠️ Creating New Lessons

### Use the Template

Copy an existing lesson file (e.g., `/prework/week-4/day1.html`) and modify:

1. **Update metadata**:
   ```html
   <title>Week X, Day Y: Topic | AI Full-Stack Bootcamp</title>
   ```

2. **Change header**:
   ```html
   <h1>Day Y: Your Topic Name</h1>
   ```

3. **Update lesson objectives**:
   ```html
   <ul class="checklist">
       <li><input type="checkbox" id="obj1" class="task-checkbox">
           <label for="obj1">Your objective here</label>
       </li>
   </ul>
   ```

4. **Add your content**:
   - Use `<section class="lesson-section">` for main topics
   - Use `<div class="info-box">` for callouts
   - Use `<div class="code-block">` for code examples

5. **Update navigation**:
   - Modify prev/next buttons
   - Update sidebar links

## 📝 Content Writing Guidelines

### Code Blocks

```html
<div class="code-block">
    <pre><code class="language-javascript">
// Your code here
const greeting = "Hello, World!";
console.log(greeting);
    </code></pre>
    <button class="copy-button" data-clipboard-text="const greeting = 'Hello, World!';
console.log(greeting);">
        <i class="fas fa-copy"></i>
    </button>
</div>
```

### Info Boxes

```html
<!-- Primary (informational) -->
<div class="info-box info-primary">
    <h4><i class="fas fa-lightbulb"></i> Pro Tip</h4>
    <p>Your tip content here</p>
</div>

<!-- Success -->
<div class="info-box info-success">
    <h4><i class="fas fa-check-circle"></i> Well Done!</h4>
    <p>Success message</p>
</div>

<!-- Warning -->
<div class="info-box info-warning">
    <h4><i class="fas fa-exclamation-triangle"></i> Important!</h4>
    <p>Warning message</p>
</div>
```

### Interactive Checklists

```html
<ul class="checklist">
    <li>
        <input type="checkbox" id="task1" class="task-checkbox" data-task="task-id">
        <label for="task1">Task description</label>
    </li>
</ul>
```

## 🔧 Technical Details

### Browser Compatibility

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Features Used**:
  - CSS Grid & Flexbox
  - CSS Custom Properties (variables)
  - LocalStorage API
  - Intersection Observer (for animations)

### Dependencies

- **Font Awesome 6.4.0** (icons)
- **Prism.js 1.29.0** (syntax highlighting)
- **Zero build dependencies!**

### File Size

- Total: ~500KB uncompressed
- Loads in <1 second on decent connection
- Can be heavily cached for repeat visits

## 📖 Curriculum Overview

### Pre-Work (4 Weeks, Self-Paced)

**Week -4**: Development Environment & Command Line  
**Week -3**: HTML & CSS Fundamentals  
**Week -2**: JavaScript Basics  
**Week -1**: JavaScript DOM & Events

### Main Bootcamp (16 Weeks, Live Instruction)

**Phase 1 (Weeks 1-4)**: Modern Web Foundations  
**Phase 2 (Weeks 5-8)**: Production Engineering  
**Phase 3 (Weeks 9-12)**: AI Integration  
**Phase 4 (Weeks 13-16)**: Career Launch

## 🤝 Contributing

Want to improve the curriculum?

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Content Guidelines

- **Clear explanations**: Assume zero prior knowledge
- **Real examples**: Use practical, real-world scenarios
- **Progressive difficulty**: Build complexity gradually
- **Engaging tone**: Friendly but professional
- **Visual aids**: Use diagrams where helpful
- **Hands-on practice**: Every concept needs an exercise

## 📄 License

This curriculum is released under the MIT License. Feel free to use, modify, and distribute for educational purposes.

## 🆘 Support

- **Technical Issues**: Open an issue on GitHub
- **Content Questions**: Contact instructors
- **Feature Requests**: Submit via GitHub issues

## 🎯 Roadmap

- [ ] Complete all 20 weeks of content
- [ ] Add video lesson embeds
- [ ] Create mobile app wrapper
- [ ] Add student dashboard
- [ ] Integrate with LMS systems
- [ ] Add instructor analytics
- [ ] Create printable workbooks
- [ ] Multi-language support

## 📞 Contact

For questions about this curriculum platform:
- Email: support@bootcamp.dev
- Website: https://bootcamp.dev

---

**Built with ❤️ for aspiring developers worldwide**

Last Updated: November 2025
Version: 1.0.0
