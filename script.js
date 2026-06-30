// ============================================
// PROGRESS BAR ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) navLinks.classList.remove('show');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
const subtitle = document.getElementById('typewriterText');
const originalText = 'Remote Practice Solutions · Patient Coordination · Administrative Support';
subtitle.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        subtitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}
setTimeout(typeWriter, 1200);

// ============================================
// GLOW TRAIL
// ============================================
const glowTrail = document.getElementById('glowTrail');
let glowTimeout;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    glowTrail.style.left = e.clientX + 'px';
    glowTrail.style.top = e.clientY + 'px';
    glowTrail.classList.add('active');

    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => {
        glowTrail.classList.remove('active');
    }, 3000);
});

document.addEventListener('mouseleave', () => {
    glowTrail.classList.remove('active');
});

// ============================================
// CUSTOM CURSOR
// ============================================
const customCursor = document.getElementById('customCursor');
let cursorTimeout;

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        customCursor.classList.add('active');

        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            customCursor.classList.remove('active');
        }, 2000);
    });

    document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });

    document.querySelectorAll('a, .btn, .work-compact-card, .service-hex, .testimonial-flip-card, .tilt-card')
        .forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                customCursor.classList.remove('hover');
            });
        });
}

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    if (window.innerWidth < 768) return;

    const particleCount = 35;
    const colors = ['rgba(201,168,76,0.6)', 'rgba(201,168,76,0.3)', 'rgba(224,200,116,0.4)'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 10;
        const drift = (Math.random() - 0.5) * 200;
        const opacity = Math.random() * 0.3 + 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${Math.random() * 100}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --drift: ${drift}px;
            --opacity: ${opacity};
            animation-delay: ${delay}s;
        `;

        container.appendChild(particle);
    }
}

// ============================================
// 3D TILT ON CARDS
// ============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: width 0.6s ease, height 0.6s ease;
        `;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
        }, 10);
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SMOOTH SECTION TRANSITIONS
// ============================================
const hiddenSections = document.querySelectorAll('.section-hidden');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

hiddenSections.forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// STAGGERED CARD ENTRANCE
// ============================================
const revealCards = document.querySelectorAll('.reveal-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealCards.forEach(card => {
    revealObserver.observe(card);
});

// ============================================
// STATS COUNTER (with suffix support for 500+)
// ============================================
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const suffix = entry.target.getAttribute('data-suffix') || '';
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                entry.target.textContent = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    entry.target.textContent = target + suffix;
                }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ============================================
// CASE STUDY MODAL SYSTEM
// ============================================
const caseStudies = {
    trello: {
        title: "Trello Board Setup & Workflow Management",
        subtitle: "Project Coordination for a Smooth Agency Launch",
        problem: "The client needed a centralized system to organize launch tasks, improve collaboration, and track progress efficiently across a distributed team.",
        process: "I set up and managed a structured Trello workflow with task assignments, deadlines, checklists, and progress tracking. I coordinated team communication, provided regular updates, and ensured all tasks were aligned with project milestones.",
        result: "✅ The workflow became more organized and efficient\n✅ Improved accountability and collaboration\n✅ Ensured a smooth and successful agency launch",
        tools: ["Trello", "Slack", "Google Workspace"]
    },
    brand: {
        title: "Brand Identity & Visual Strategy",
        subtitle: "Building a Cohesive Brand for NovaCore VA Agency",
        problem: "The client needed a professional and cohesive brand identity that reflected professionalism, structure, and reliability while maintaining a premium visual appeal.",
        process: "Using Canva, I developed a cohesive visual identity by designing branded assets with the agency's burgundy and gold color palette, typography, and logo system. I organized brand elements ensuring consistency across all platforms.",
        result: "✅ Polished and recognizable brand presence\n✅ Consistent visual identity across platforms\n✅ Strong foundation for future marketing",
        tools: ["Canva", "Google Drive", "Brand Strategy"]
    },
    onboarding: {
        title: "Client Onboarding & Administrative Coordination",
        subtitle: "Structured Onboarding for Professional Client Experience",
        problem: "The agency needed a structured onboarding process to communicate project expectations, assign tasks clearly, and maintain professional client communication from the start.",
        process: "I supported the onboarding workflow by organizing client communication, coordinating assigned tasks, and ensuring onboarding details, timelines, and communication channels were clearly structured and professionally presented.",
        result: "✅ Onboarding process became more organized and efficient\n✅ Improved communication clarity and task coordination\n✅ Smoother client experience from project kickoff",
        tools: ["Google Workspace", "Trello", "Email"]
    },
    google: {
        title: "Google Workspace & Task Brief Development",
        subtitle: "Operations Management for a 9-Member Team",
        problem: "The client needed a structured system to manage urgent administrative tasks and brand development work, with clear accountability and workflow visibility across the team.",
        process: "I implemented an organized workflow using Google Workspace and Trello, created a comprehensive Task Brief Document to define responsibilities, timelines, and execution guidelines. I managed internal communication and drafted client onboarding emails.",
        result: "✅ Successfully coordinated a 9-member team\n✅ Improved accountability through structured communication\n✅ Streamlined operations system and cohesive brand foundation",
        tools: ["Google Workspace", "Trello", "Slack", "Email"]
    }
};

const modalOverlay = document.getElementById('caseModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.work-compact-card').forEach(card => {
    card.addEventListener('click', function() {
        const caseKey = this.dataset.case;
        const study = caseStudies[caseKey];
        if (!study) return;

        modalContent.innerHTML = `
            <h2>${study.title}</h2>
            <p class="modal-subtitle">${study.subtitle}</p>

            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle" style="color:var(--gold);"></i> The Challenge</h3>
                <p>${study.problem}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-cogs" style="color:var(--gold);"></i> What I Did</h3>
                <p>${study.process}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-chart-line" style="color:var(--gold);"></i> The Outcome</h3>
                <div class="modal-result">
                    <p>${study.result.replace(/\n/g, '<br>')}</p>
                </div>
            </div>

            <div class="modal-section" style="margin-bottom:0;">
                <h3><i class="fas fa-tools" style="color:var(--gold);"></i> Tools Used</h3>
                <div class="modal-tags">
                    ${study.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// TESTIMONIALS FLIP CAROUSEL
// ============================================
let currentFlipIndex = 0;
const flipCards = document.querySelectorAll('.testimonial-flip-card');
const flipTrack = document.getElementById('testimonialTrack');
const flipPrevBtn = document.getElementById('flipPrev');
const flipNextBtn = document.getElementById('flipNext');
const flipDotsContainer = document.getElementById('flipDots');

let itemsPerView = getFlipItemsPerView();
const totalFlipCards = flipCards.length;
let flipAutoSlideInterval;

function getFlipItemsPerView() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function updateFlipCarousel() {
    itemsPerView = getFlipItemsPerView();
    const maxIndex = Math.max(0, totalFlipCards - itemsPerView);
    if (currentFlipIndex > maxIndex) currentFlipIndex = maxIndex;
    const gap = 16;
    const cardWidth = flipCards[0]?.offsetWidth || 280;
    const offset = currentFlipIndex * (cardWidth + gap);
    flipTrack.style.transform = `translateX(-${offset}px)`;

    const totalDots = Math.ceil(totalFlipCards / itemsPerView);
    const dots = flipDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === Math.floor(currentFlipIndex / itemsPerView));
    });
}

function createFlipDots() {
    const totalDots = Math.ceil(totalFlipCards / itemsPerView);
    flipDotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            const newIndex = i * itemsPerView;
            currentFlipIndex = Math.min(newIndex, totalFlipCards - itemsPerView);
            updateFlipCarousel();
            resetFlipAutoSlide();
        });
        flipDotsContainer.appendChild(dot);
    }
}

function goToFlipNext() {
    const maxIndex = Math.max(0, totalFlipCards - itemsPerView);
    if (currentFlipIndex + itemsPerView < totalFlipCards) {
        currentFlipIndex += itemsPerView;
    } else {
        currentFlipIndex = 0;
    }
    updateFlipCarousel();
}

function goToFlipPrev() {
    const maxIndex = Math.max(0, totalFlipCards - itemsPerView);
    if (currentFlipIndex - itemsPerView >= 0) {
        currentFlipIndex -= itemsPerView;
    } else {
        currentFlipIndex = maxIndex;
    }
    updateFlipCarousel();
}

function startFlipAutoSlide() {
    if (flipAutoSlideInterval) clearInterval(flipAutoSlideInterval);
    flipAutoSlideInterval = setInterval(goToFlipNext, 5000);
}

function resetFlipAutoSlide() {
    if (flipAutoSlideInterval) {
        clearInterval(flipAutoSlideInterval);
        startFlipAutoSlide();
    }
}

flipCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.closest('.flip-carousel-btn')) return;
        this.classList.toggle('flipped');
    });
});

if (flipPrevBtn) flipPrevBtn.addEventListener('click', () => { goToFlipPrev();
    resetFlipAutoSlide(); });
if (flipNextBtn) flipNextBtn.addEventListener('click', () => { goToFlipNext();
    resetFlipAutoSlide(); });

let flipResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(flipResizeTimeout);
    flipResizeTimeout = setTimeout(() => {
        const newItemsPerView = getFlipItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            createFlipDots();
            currentFlipIndex = 0;
            updateFlipCarousel();
            resetFlipAutoSlide();
        } else {
            updateFlipCarousel();
        }
    }, 200);
});

createFlipDots();
updateFlipCarousel();
startFlipAutoSlide();

// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        const btn = this.querySelector('.btn-submit');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        // Form will submit normally to Formspree
        // The thank you page will be handled by Formspree
    });
}

// ============================================
// BACK TO TOP
// ============================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// INITIALIZE PARTICLES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    let particleTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(particleTimeout);
        particleTimeout = setTimeout(() => {
            const container = document.getElementById('particlesContainer');
            if (container) container.innerHTML = '';
            createParticles();
        }, 500);
    });
});

console.log('✨ Bankesola Banjo · Medical Virtual Assistant Portfolio ready!');