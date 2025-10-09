document.addEventListener('DOMContentLoaded', () => {
    const projectData = [
        {
            name: 'suroi',
            title: 'Suroi.io',
            subtitle: '37K+ users',
            image: '/assets/suroi_icon.png',
            fullTitle: 'Suroi.io'
        },
        {
            name: 'discodes',
            title: 'Discodes',
            subtitle: 'In Development',
            image: '/assets/discodes_icon.png',
            fullTitle: 'Discodes'
        },
        {
            name: 'syncet',
            title: 'Syncet',
            subtitle: 'Cloud Sync',
            image: '/assets/dc6e8dc6374e8898ff00a1fed4ed1377.jpg',
            fullTitle: 'Syncet'
        },
        {
            name: 's4d',
            title: 'Scratch for Discord',
            subtitle: '500+ users',
            image: '/assets/scratch.png',
            fullTitle: 'Scratch for Discord'
        },
        {
            name: 'sillypu',
            title: 'SillyPU',
            subtitle: 'CPU Design',
            image: '/assets/alu_icon.png',
            fullTitle: 'SillyPU'
        },
        {
            name: 'beetroot',
            title: 'Beetroot',
            subtitle: '~20 users',
            image: '/assets/beetroot_pfp.jpg',
            fullTitle: 'Beetroot'
        }
    ];

    const showcase = document.querySelector('.project-showcase');
    let currentIndex = 0;
    let isAnimating = false;

    function createProjectElement(data) {
        const project = document.createElement('div');
        project.className = 'featured-project';
        project.dataset.project = data.name;

        project.innerHTML = `
            <img src="${data.image}" alt="${data.title}" />
            <div class="project-info">
                <h3>${data.title}</h3>
                <p>${data.subtitle}</p>
            </div>
        `;

        project.addEventListener('click', () => {
            const projectCards = document.querySelectorAll('.project-card');
            let matchedCard = null;

            for (let card of projectCards) {
                const title = card.querySelector('.project-title').textContent;
                if (title === data.fullTitle) {
                    matchedCard = card;
                    break;
                }
            }

            if (matchedCard) {
                matchedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                highlightCard(matchedCard);
            } else {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        });

        return project;
    }

    function initializeCarousel() {
        showcase.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            const project = createProjectElement(projectData[i]);
            project.style.transform = `translateY(${i * 60}px)`;
            project.style.opacity = i < 3 ? '1' : '0';
            showcase.appendChild(project);
        }
        currentIndex = 3; 
    }

    function cycleProjects() {
        if (isAnimating) return;
        isAnimating = true;

        const newProject = createProjectElement(projectData[currentIndex % projectData.length]);
        newProject.style.transform = 'translateY(-60px)';
        newProject.style.opacity = '0';
        showcase.insertBefore(newProject, showcase.firstChild);

        showcase.offsetHeight;

        setTimeout(() => {
            const allProjects = showcase.querySelectorAll('.featured-project');
            allProjects.forEach((project, index) => {
                project.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease';
                const newPosition = (index - 1) * 60;
                project.style.transform = `translateY(${newPosition}px)`;

                if (newPosition < 0) {
                    project.style.opacity = '1'; 
                } else if (newPosition < 180) {
                    project.style.opacity = '1';
                } else {
                    project.style.opacity = '0';
                }
            });
        }, 50);

        setTimeout(() => {
            const allProjects = showcase.querySelectorAll('.featured-project');
            if (allProjects.length > 4) {
                showcase.removeChild(allProjects[allProjects.length - 1]);
            }
            isAnimating = false;
        }, 700);

        currentIndex = (currentIndex + 1) % projectData.length;
    }

    initializeCarousel();
    setInterval(cycleProjects, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const techCarousel = document.querySelector('.tech-carousel');
    const techItems = document.querySelectorAll('.tech-item');

    techItems.forEach(item => {
        item.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(techCarousel);
            const matrix = computedStyle.transform;
            let currentX = 0;

            if (matrix !== 'none') {
                const values = matrix.split('(')[1].split(')')[0].split(',');
                currentX = parseFloat(values[4]) || 0;
            }

            techCarousel.style.setProperty('--current-position', `${currentX}px`);

            techCarousel.classList.add('fast-forward');

            setTimeout(() => {
                techCarousel.classList.remove('fast-forward');
                techCarousel.style.animation = 'none';
                techCarousel.offsetHeight;
                techCarousel.style.animation = 'horizontalCarousel 20s linear infinite';
            }, 2000);
        });
    });
});

function highlightCard(card) {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    
    setTimeout(() => {
        card.style.transform = '';
        card.style.boxShadow = '';
    }, 1500);
}

document.getElementById('quote').textContent = ["Certified Spaghetti Code Chef", "Full-Stack Overflow Developer",
    "Runtime Error Enthusiast", 'Bug Creator & Occasional Fixer',
    "Commit, Push, Pray", "Writes Code, Regrets It Later"][Math.floor(Math.random() * 6)];

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .experience-item, .about-content, .skill-category');
    animateElements.forEach(el => observer.observe(el));
});

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card, .experience-content, .featured-project');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const distance = Math.sqrt(
            Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
        );

        const maxDistance = 200;
        const proximity = Math.max(0, 1 - distance / maxDistance);

        if (proximity > 0.3) {
            const borderIntensity = proximity * 0.3;
            const glowIntensity = proximity * 8;

            card.style.setProperty('--border-intensity', borderIntensity);
            card.style.setProperty('--glow-intensity', `${glowIntensity}px`);
            card.classList.add('mouse-proximity');
        } else {
            card.classList.remove('mouse-proximity');
            card.style.removeProperty('--border-intensity');
            card.style.removeProperty('--glow-intensity');
        }
    });
});