// Add interactivity to the floating icons
document.querySelectorAll('.project-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const projectType = icon.querySelector('.tooltip').textContent;
        const projectSection = document.getElementById('projects');
        
        // Scroll to projects section
        projectSection.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight the corresponding project card
        setTimeout(() => {
            const projectCards = document.querySelectorAll('.project-card');
            for (let i = 0; i < projectCards.length; i++) {
                const title = projectCards[i].querySelector('.project-title').textContent;
                if (title === projectType) {
                    projectCards[i].style.transform = 'scale(1.05)';
                    projectCards[i].style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                    
                    setTimeout(() => {
                        projectCards[i].style.transform = '';
                        projectCards[i].style.boxShadow = '';
                    }, 1000);
                    break;
                }
            }
        }, 500);
    });
});

document.getElementById('quote').textContent = ["Certified Spaghetti Code Chef", "Full-Stack Overflow Developer",
    "Runtime Error Enthusiast", 'Bug Creator & Occasional Fixer',
    "Commit, Push, Pray", "Writes Code, Regrets It Later"][Math.floor(Math.random() * 6)];