// ==========================================
// AI FULL-STACK BOOTCAMP - MAIN JAVASCRIPT
// Theme toggling, progress tracking, localStorage
// ==========================================

(function() {
    'use strict';

    // ========== THEME MANAGEMENT ==========
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('bootcamp-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('bootcamp-theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // ========== PROGRESS TRACKING ==========
    // Track completion of individual items (checkboxes, exercises, etc.)
    
    function initializeProgressTracking() {
        // Get all progress bars on the page
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const weekId = bar.closest('.week-card')?.querySelector('.week-number')?.textContent;
            if (weekId) {
                const progress = getProgress(weekId);
                updateProgressBar(bar, progress);
            }
        });
    }
    
    function getProgress(weekId) {
        const key = `bootcamp-progress-${weekId}`;
        return parseInt(localStorage.getItem(key) || '0', 10);
    }
    
    function setProgress(weekId, percentage) {
        const key = `bootcamp-progress-${weekId}`;
        localStorage.setItem(key, percentage.toString());
    }
    
    function updateProgressBar(bar, percentage) {
        if (bar) {
            bar.style.width = `${percentage}%`;
            bar.setAttribute('data-progress', percentage);
        }
    }

    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== ANIMATION ON SCROLL ==========
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Animate week cards, resource cards, etc.
        const animatedElements = document.querySelectorAll('.week-card, .resource-card, .phase');
        
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // ========== INITIALIZE ON PAGE LOAD ==========
    window.addEventListener('DOMContentLoaded', () => {
        initializeProgressTracking();
        initScrollAnimations();
        
        // Add current year to footer if exists
        const yearElement = document.querySelector('.current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    });

    // ========== UTILITY: GET ALL USER PROGRESS ==========
    window.bootcampUtils = {
        getAllProgress: function() {
            const progress = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('bootcamp-progress-')) {
                    const weekId = key.replace('bootcamp-progress-', '');
                    progress[weekId] = parseInt(localStorage.getItem(key), 10);
                }
            }
            return progress;
        },
        
        resetProgress: function(weekId) {
            if (weekId) {
                localStorage.removeItem(`bootcamp-progress-${weekId}`);
            } else {
                // Reset all progress
                const keys = Object.keys(localStorage).filter(k => k.startsWith('bootcamp-progress-'));
                keys.forEach(key => localStorage.removeItem(key));
            }
            location.reload();
        },
        
        exportProgress: function() {
            const progress = this.getAllProgress();
            const dataStr = JSON.stringify(progress, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'bootcamp-progress.json';
            link.click();
        },
        
        importProgress: function(jsonData) {
            try {
                const progress = JSON.parse(jsonData);
                Object.keys(progress).forEach(weekId => {
                    setProgress(weekId, progress[weekId]);
                });
                location.reload();
            } catch (e) {
                console.error('Invalid progress data:', e);
            }
        }
    };

})();
