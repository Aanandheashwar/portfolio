// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigation-custom');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Simple Scroll Animation Observer (AOS lightweight replacement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// Case Study Data
const caseStudies = {
    hospital: {
        title: "Hospital Management System",
        image: "assets/hospital.png",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        problem: "Healthcare facilities often struggle with fragmented patient data and inefficient appointment scheduling systems.",
        process: "Designed a centralized database using MongoDB, built a RESTful API with Node/Express, and created a responsive dashboard with React.",
        solution: "A unified platform where patients can book appointments, doctors can track history, and admins can manage resources in real-time.",
        outcome: "Streamlined hospital operations, reduced waiting times by 30%, and ensured 100% data integrity."
    },
    nutrient: {
        title: "Nutrient Analysis and Diet Plan System",
        image: "assets/nutrient.png",
        tech: ["MERN Stack", "Nutrition APIs", "MySQL"],
        problem: "Users often find it difficult to track complex nutritional data and create balanced meal plans without professional help.",
        process: "Integrated third-party nutrition APIs for accurate data, implemented a custom algorithm for diet calculation, and built a persistent user profile system.",
        solution: "A comprehensive tool that analyzes input meals and generates tailored caloric and macronutrient goals based on user health metrics.",
        outcome: "Helping over 500+ users track their health goals with a 95% satisfaction rate on usability."
    },
    attendance: {
        title: "Student Attendance Prediction",
        image: "assets/prediction.jpg",
        tech: ["Python", "SciKit-Learn", "Pandas", "Matplotlib"],
        problem: "Educational institutions lack early warning systems for students likely to drop out or fail due to poor attendance.",
        process: "Analyzed historical student datasets, performed feature engineering on attendance logs, and trained several ML models (Random Forest, SVM).",
        solution: "A predictive analytics tool that identifies patterns and flags at-risk students before attendance falls below critical thresholds.",
        outcome: "Achieved 92% accuracy in predicting end-of-semester attendance levels."
    }
};

// Open Case Study
function openCaseStudy(id) {
    const data = caseStudies[id];
    const body = document.getElementById('caseStudyBody');
    const overlay = document.getElementById('caseStudyOverlay');

    body.innerHTML = `
        <h1 class="display-4 fw-bold mb-4">${data.title}</h1>
        <div class="d-flex flex-wrap gap-2 mb-5">
            ${data.tech.map(t => `<span class="badge bg-primary-soft text-primary px-3 py-2 rounded-pill">${t}</span>`).join('')}
        </div>
        
        <div class="row g-5">
            <div class="col-md-6">
                <h4 class="fw-bold mb-3 text-primary">The Problem</h4>
                <p class="text-secondary">${data.problem}</p>
            </div>
            <div class="col-md-6">
                <h4 class="fw-bold mb-3 text-primary">The Process</h4>
                <p class="text-secondary">${data.process}</p>
            </div>
            <div class="col-md-6">
                <h4 class="fw-bold mb-3 text-primary">The Solution</h4>
                <p class="text-secondary">${data.solution}</p>
            </div>
            <div class="col-md-6">
                <h4 class="fw-bold mb-3 text-primary">The Outcome</h4>
                <p class="text-secondary">${data.outcome}</p>
            </div>
        </div>

        <div class="mt-5 pt-5 border-top">
            <h4 class="fw-bold mb-4">Project Preview</h4>
            ${data.image ? `
                <div class="case-study-image-container rounded-4 overflow-hidden shadow-soft">
                    <img src="${data.image}" alt="${data.title}" class="img-fluid w-100">
                </div>
            ` : `
                <div class="case-study-placeholder rounded-4 glass d-flex align-items-center justify-content-center text-secondary" style="height: 300px; background: #f0f2f5;">
                    <i data-lucide="image" class="me-2"></i> Screenshot Placeholder
                </div>
            `}
        </div>
    `;

    overlay.classList.remove('d-none');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

// Close Case Study
function closeCaseStudy() {
    const overlay = document.getElementById('caseStudyOverlay');
    overlay.classList.add('d-none');
    document.body.style.overflow = 'auto';
}

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i data-lucide="check" class="me-2"></i> Message Sent!';
    btn.classList.replace('btn-primary', 'btn-success');
    lucide.createIcons();

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.replace('btn-success', 'btn-primary');
        e.target.reset();
        lucide.createIcons();
    }, 3000);
});
