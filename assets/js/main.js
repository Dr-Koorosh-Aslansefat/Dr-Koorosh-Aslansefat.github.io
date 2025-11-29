// Main JavaScript for Dr. Koorosh Aslansefat's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    renderPublications();
    renderTalks();
    initMobileMenu();
    initBioToggle();
});

// --- Typewriter Effect ---
const typewriterText = ["Researching AI Safety", "Exploring Computational Intelligence", "Building Reliable Systems"];
const typewriterElement = document.getElementById('typewriter-text');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function initTypewriter() {
    if (!typewriterElement) return;
    type();
}

function type() {
    const currentText = typewriterText[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

// --- Data Rendering (Simulated) ---
const publications = [
    {
        title: "Safe Reinforcement Learning in Critical Infrastructure",
        authors: "K. Aslansefat, et al.",
        venue: "IEEE Transactions on Neural Networks",
        year: 2024,
        tags: ["AI Safety", "RL"]
    },
    {
        title: "Explainable AI for Medical Diagnosis",
        authors: "S. Smith, K. Aslansefat",
        venue: "NeurIPS Workshop",
        year: 2023,
        tags: ["XAI", "Healthcare"]
    },
    {
        title: "Robustness Certification of Deep Neural Networks",
        authors: "K. Aslansefat",
        venue: "CVPR",
        year: 2023,
        tags: ["Robustness", "Vision"]
    }
];

const talks = [
    {
        title: "The Future of Safe AI",
        event: "International AI Safety Conference",
        date: "Nov 2024",
        location: "London, UK"
    },
    {
        title: "Trustworthy Autonomous Systems",
        event: "University Seminar",
        date: "Sep 2024",
        location: "Online"
    }
];

function renderPublications() {
    const container = document.getElementById('publications-list');
    if (!container) return;

    container.innerHTML = publications.map(pub => `
        <div class="research-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4 border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${pub.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-1">${pub.authors}</p>
            <div class="flex justify-between items-center mt-3">
                <span class="text-sm text-blue-600 dark:text-blue-400 font-medium">${pub.venue}, ${pub.year}</span>
                <div class="flex gap-2">
                    ${pub.tags.map(tag => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderTalks() {
    const container = document.getElementById('talks-timeline');
    if (!container) return;

    container.innerHTML = talks.map(talk => `
        <div class="timeline-item relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
            <h4 class="text-lg font-bold text-gray-900 dark:text-white">${talk.title}</h4>
            <p class="text-blue-600 dark:text-blue-400 font-medium">${talk.event}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${talk.date} | ${talk.location}</p>
        </div>
    `).join('');
}

// --- Mobile Menu ---
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// --- Bio Toggle ---
function initBioToggle() {
    const shortBio = document.getElementById('bio-short');
    const longBio = document.getElementById('bio-long');
    const toggleBtn = document.getElementById('bio-toggle');

    if (toggleBtn && shortBio && longBio) {
        toggleBtn.addEventListener('click', () => {
            if (shortBio.classList.contains('hidden')) {
                shortBio.classList.remove('hidden');
                longBio.classList.add('hidden');
                toggleBtn.textContent = "Read More";
            } else {
                shortBio.classList.add('hidden');
                longBio.classList.remove('hidden');
                toggleBtn.textContent = "Read Less";
            }
        });
    }
}
