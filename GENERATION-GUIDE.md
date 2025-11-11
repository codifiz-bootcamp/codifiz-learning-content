# 📚 CURRICULUM GENERATION GUIDE

This guide shows you how to generate the complete 20-week bootcamp curriculum using the HTML template system.

## 🎯 What You Have Now

✅ Complete platform infrastructure (HTML/CSS/JS)
✅ Week -4, Day 1 as a complete example
✅ Responsive design with dark mode
✅ Progress tracking system
✅ All interactive components

## 📋 What Needs to be Generated

### Pre-Work (3 more weeks)
- Week -3: HTML & CSS (5 days)
- Week -2: JavaScript Basics (5 days)
- Week -1: JavaScript DOM (5 days)

### Main Bootcamp (16 weeks)
- Phase 1: Weeks 1-4 (20 days total)
- Phase 2: Weeks 5-8 (20 days total)
- Phase 3: Weeks 9-12 (20 days total)
- Phase 4: Weeks 13-16 (20 days total)

### Additional Resources
- Career Services pages
- Instructor Guides
- Project Templates
- FAQ/Troubleshooting

**Total**: ~100 lesson pages to generate

---

## 🚀 GENERATION STRATEGY

### Option 1: AI-Assisted Generation (RECOMMENDED)

Use Claude/ChatGPT to generate each lesson systematically:

#### Step-by-Step Process:

**1. Start with a Week Overview**

Prompt:
```
Using the master bootcamp curriculum, generate Week -3 (HTML & CSS Fundamentals) 
with the following:

1. Week overview page (week-3/index.html)
2. List of 5 daily topics
3. Learning objectives for the week
4. Projects students will build
5. Time estimates for each day

Use the exact HTML structure from week-4/day1.html as a template.
```

**2. Generate Each Day's Lesson**

Prompt for each day:
```
Generate Day [X] of Week -3: [Topic Name]

Include:
- Clear learning objectives (4-6 items)
- Step-by-step instructions with code examples
- Interactive checklists
- Code blocks with copy buttons
- Info boxes (tips, warnings, success messages)
- Hands-on exercises
- Self-check quiz (3-5 questions)
- Links to resources

Follow the exact HTML structure and styling from prework/week-4/day1.html.

Content should:
- Assume zero prior knowledge
- Include real-world examples
- Provide detailed explanations
- Have copy-paste code that works
- Include common errors and solutions
```

**3. Review and Refine**

After generating each lesson:
- Test all code examples
- Verify links work
- Check mobile responsiveness
- Proofread for typos
- Update navigation links

---

### Option 2: Manual Writing

If you prefer to write content manually:

1. Copy `/prework/week-4/day1.html`
2. Rename to appropriate week/day
3. Update all content sections
4. Test locally
5. Commit to repository

---

## 📝 LESSON TEMPLATE STRUCTURE

Every lesson should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard head content -->
    <title>Week X, Day Y: Topic | AI Full-Stack Bootcamp</title>
    <link rel="stylesheet" href="../../styles/main.css">
    <link rel="stylesheet" href="../../styles/lesson.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="lesson-nav">...</nav>

    <div class="lesson-layout">
        <!-- Sidebar -->
        <aside class="lesson-sidebar">
            <!-- Progress circle -->
            <!-- Day navigation -->
        </aside>

        <!-- Main Content -->
        <main class="lesson-content">
            <!-- 1. Header with title and meta -->
            <header class="lesson-header">
                <h1>Day X: Topic Name</h1>
                <div class="lesson-meta">
                    <span><i class="fas fa-clock"></i> X hours</span>
                    <span><i class="fas fa-check-circle"></i> X tasks</span>
                </div>
            </header>

            <!-- 2. Why This Matters -->
            <section class="info-box info-primary">
                <h3><i class="fas fa-lightbulb"></i> Why This Matters</h3>
                <p>Real-world context...</p>
            </section>

            <!-- 3. Learning Objectives -->
            <section class="objectives">
                <h2>Learning Objectives</h2>
                <ul class="checklist">
                    <li><input type="checkbox" id="obj1" class="task-checkbox">
                        <label for="obj1">Objective 1</label>
                    </li>
                </ul>
            </section>

            <!-- 4. Main Tasks (Sections) -->
            <section class="lesson-section">
                <h2><span class="step-number">1</span> Task Title</h2>
                <!-- Task content -->
            </section>

            <!-- 5. Self-Check Quiz -->
            <section class="lesson-section">
                <h2>Self-Check Questions</h2>
                <div class="quiz-container">
                    <!-- Quiz questions -->
                </div>
            </section>

            <!-- 6. Next Steps -->
            <section class="next-steps">
                <h2>What's Next?</h2>
                <div class="nav-buttons">
                    <a href="..." class="btn btn-secondary">← Previous</a>
                    <a href="..." class="btn btn-primary">Next Day →</a>
                </div>
            </section>
        </main>
    </div>

    <!-- Scripts -->
    <script src="../../js/main.js"></script>
    <script src="../../js/lesson.js"></script>
</body>
</html>
```

---

## 🎨 CONTENT COMPONENTS

### Code Block Template

```html
<div class="code-block">
    <pre><code class="language-javascript">
// Your code here
const example = "Hello";
console.log(example);
    </code></pre>
    <button class="copy-button" data-clipboard-text="const example = 'Hello';
console.log(example);">
        <i class="fas fa-copy"></i>
    </button>
</div>
```

### Info Box Templates

```html
<!-- Informational -->
<div class="info-box info-primary">
    <h4><i class="fas fa-info-circle"></i> Info Title</h4>
    <p>Content...</p>
</div>

<!-- Success/Achievement -->
<div class="info-box info-success">
    <h4><i class="fas fa-check-circle"></i> Success Title</h4>
    <p>Content...</p>
</div>

<!-- Warning/Important -->
<div class="info-box info-warning">
    <h4><i class="fas fa-exclamation-triangle"></i> Warning Title</h4>
    <p>Content...</p>
</div>
```

### Tab System (for OS-specific instructions)

```html
<div class="task-tabs">
    <button class="tab-button active" data-tab="windows">
        <i class="fab fa-windows"></i> Windows
    </button>
    <button class="tab-button" data-tab="mac">
        <i class="fab fa-apple"></i> Mac
    </button>
    <button class="tab-button" data-tab="linux">
        <i class="fab fa-linux"></i> Linux
    </button>
</div>

<div class="tab-content active" id="windows">
    <!-- Windows content -->
</div>
<div class="tab-content" id="mac">
    <!-- Mac content -->
</div>
<div class="tab-content" id="linux">
    <!-- Linux content -->
</div>
```

---

## 📅 RECOMMENDED GENERATION SCHEDULE

### Week 1-2: Complete Pre-Work
- Generate Weeks -3, -2, -1 (15 lessons)
- Test all exercises
- Get feedback from beta testers

### Week 3-4: Phase 1 (Foundations)
- Generate Weeks 1-4 (20 lessons)
- Create starter code repositories
- Build example projects

### Week 5-6: Phase 2 (Production)
- Generate Weeks 5-8 (20 lessons)
- Create testing examples
- Build capstone project specs

### Week 7-8: Phase 3 (AI Integration)
- Generate Weeks 9-12 (20 lessons)
- Set up API examples
- Create AI project templates

### Week 9-10: Phase 4 (Career Launch)
- Generate Weeks 13-16 (20 lessons)
- Create interview prep materials
- Build capstone project examples

### Week 11-12: Resources & Polish
- Career services pages
- Instructor guides
- Project templates
- FAQ/troubleshooting
- Final testing and refinement

---

## 🤖 AI PROMPTS FOR GENERATION

### For Conceptual Lessons

```
Generate a comprehensive lesson on [TOPIC] for Week [X], Day [Y].

Target Audience: Complete beginners transitioning to full-stack development
Duration: [X] hours
Format: Self-paced with interactive examples

Include:
1. Real-world context (why this matters)
2. Clear learning objectives (4-6 items)
3. Core concepts explained simply
4. 3-5 code examples with detailed explanations
5. Hands-on exercise with solution
6. Common mistakes and how to avoid them
7. Self-check quiz (3 questions)
8. Resources for deeper learning

Use HTML structure matching prework/week-4/day1.html.
Include proper semantic HTML, code blocks with syntax highlighting,
interactive checkboxes, and info boxes for tips/warnings.
```

### For Project-Based Lessons

```
Generate a project-based lesson for Week [X], Day [Y]: Building [PROJECT NAME].

Students should build: [PROJECT DESCRIPTION]

Include:
1. Project overview and demo
2. Step-by-step build instructions (10-15 steps)
3. Code snippets for each step
4. Common errors at each step
5. Verification checkpoints
6. Stretch goals for advanced students
7. How to deploy the project
8. GitHub commit best practices

Project Requirements:
- Technologies: [LIST]
- Estimated time: [X] hours
- Difficulty: [Beginner/Intermediate/Advanced]

Use HTML structure matching prework/week-4/day1.html.
```

### For Tool Installation Lessons

```
Generate installation and setup instructions for [TOOL NAME].

Include:
- Why this tool is important
- System requirements
- Step-by-step installation for Windows, Mac, and Linux
- Configuration and setup
- Verification steps
- Common installation problems and solutions
- First hands-on exercise using the tool
- Best practices and tips

Use tabbed layout for OS-specific instructions.
Include copy-paste commands with copy buttons.
Use the HTML structure from prework/week-4/day1.html.
```

---

## ✅ QUALITY CHECKLIST

Before marking a lesson as complete:

### Content
- [ ] Clear learning objectives stated upfront
- [ ] Real-world context provided
- [ ] Concepts explained at beginner level
- [ ] At least 3 code examples included
- [ ] Code examples are tested and work
- [ ] Common errors addressed
- [ ] Self-check quiz included (3-5 questions)
- [ ] Resources for deeper learning provided

### Technical
- [ ] All links work (no 404s)
- [ ] Navigation buttons correct
- [ ] Copy buttons on all code blocks
- [ ] Syntax highlighting working
- [ ] Responsive on mobile
- [ ] Dark mode looks good
- [ ] Progress tracking functional

### Style
- [ ] Follows template structure
- [ ] Consistent heading levels
- [ ] Proper use of info boxes
- [ ] Good balance of text and visuals
- [ ] Friendly, encouraging tone
- [ ] No typos or grammar errors

### Accessibility
- [ ] Semantic HTML used
- [ ] Alt text on images
- [ ] Sufficient color contrast
- [ ] Keyboard navigable
- [ ] Screen reader friendly

---

## 🔄 WORKFLOW AUTOMATION

### Create a Generation Script

Save this as `generate-lesson.sh`:

```bash
#!/bin/bash

# Usage: ./generate-lesson.sh week-3 day2 "CSS Selectors"

WEEK=$1
DAY=$2
TITLE=$3

WEEK_DIR="prework/$WEEK"
mkdir -p $WEEK_DIR

# Copy template
cp prework/week-4/day1.html "$WEEK_DIR/$DAY.html"

# Update title (basic - you'll need to manually finish)
sed -i "s/Week -4/Week $WEEK/g" "$WEEK_DIR/$DAY.html"
sed -i "s/Day 1/$DAY/g" "$WEEK_DIR/$DAY.html"

echo "Created $WEEK_DIR/$DAY.html"
echo "Now edit the file and add content for: $TITLE"
```

---

## 📊 PROGRESS TRACKING

Track your curriculum generation progress:

```markdown
## Pre-Work Progress
- [x] Week -4: Dev Environment (COMPLETE)
- [ ] Week -3: HTML & CSS (0/5 days)
- [ ] Week -2: JavaScript Basics (0/5 days)
- [ ] Week -1: JavaScript DOM (0/5 days)

## Main Bootcamp Progress
Phase 1: (0/20 days)
Phase 2: (0/20 days)
Phase 3: (0/20 days)
Phase 4: (0/20 days)

## Resources
- [ ] Career Services
- [ ] Instructor Guides
- [ ] Project Templates
- [ ] FAQ
```

---

## 🆘 NEED HELP?

Common questions:

**Q: Can I use AI to generate everything at once?**
A: Not recommended. Generate week-by-week and test thoroughly. Quality > Speed.

**Q: How do I test the lessons?**
A: Have someone unfamiliar with the topic try to follow the instructions.

**Q: Should I create video content too?**
A: Optional. The HTML curriculum is the primary resource. Videos are supplementary.

**Q: Can I modify the template structure?**
A: Yes! The template is a starting point. Improve it as you go.

**Q: How do I handle code that needs a server?**
A: Provide CodeSandbox/Replit links, or include simple server setup instructions.

---

## 🎓 BEST PRACTICES

1. **Start Small**: Perfect one week before moving to the next
2. **Get Feedback**: Have students test early versions
3. **Iterate**: Improve based on real usage
4. **Stay Consistent**: Use the template structure throughout
5. **Test Everything**: All code must actually work
6. **Document Well**: Clear instructions prevent support requests
7. **Update Regularly**: Technology changes - keep content current

---

Ready to build the complete curriculum? Start with Week -3! 🚀
