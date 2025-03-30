document.querySelectorAll('.project-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const projectType = icon.querySelector('.tooltip').textContent;
        
        setTimeout(() => {
            const projectCards = document.querySelectorAll('.project-card');
            let matchedCard = null;
            
            for (let i = 0; i < projectCards.length; i++) {
                const title = projectCards[i].querySelector('.project-title').textContent;
                if (title === projectType) {
                    matchedCard = projectCards[i];
                    break;
                }
            }
            
            if (!matchedCard) {
                for (let i = 0; i < projectCards.length; i++) {
                    const title = projectCards[i].querySelector('.project-title').textContent.toLowerCase();
                    const tooltipText = projectType.toLowerCase();
                    
                    if (title.includes(tooltipText) || tooltipText.includes(title)) {
                        matchedCard = projectCards[i];
                        break;
                    }
                }
            }
            
            if (!matchedCard) {
                const specialCases = {
                    "Suroi": "Suroi.io",
                    "S4D": "Scratch for Discord",
                    "Scratch for Discord": "Scratch for Discord",
                    "Discodes": "Discodes",
                    "SillyPU": "SillyPU",
                    "Syncet": "Syncet",
                    "C(ly)PU": "SillyPU"
                };
                
                if (specialCases[projectType]) {
                    for (let i = 0; i < projectCards.length; i++) {
                        const title = projectCards[i].querySelector('.project-title').textContent;
                        if (title === specialCases[projectType]) {
                            matchedCard = projectCards[i];
                            break;
                        }
                    }
                }
            }
            
            if (matchedCard) {
                matchedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                highlightCard(matchedCard);
            } else {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
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