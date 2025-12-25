
document.addEventListener('DOMContentLoaded', () => {
    
    // --- DEMO INTERACTION ---
    const demoInput = document.getElementById('demoInput');
    const demoTooltip = document.getElementById('demoTooltip');
    const typingArea = document.getElementById('typingArea');
    
    // The trigger keyword we are looking for
    const TRIGGER = '/hi';
    const EXPANSION = "Hi {name}, thanks for reaching out! I've received your message and will get back to you within 24 hours.";

    if (demoInput) {
        demoInput.addEventListener('input', (e) => {
            const val = e.target.value;
            
            // Check if the text ends with the trigger
            if (val.endsWith(TRIGGER)) {
                // Show tooltip
                demoTooltip.style.display = 'block';
            } else {
                // Hide tooltip if they delete it or keep typing something else
                // (In a real app, logic is more complex, but this is a landing page demo)
                if (!val.includes(TRIGGER)) {
                    demoTooltip.style.display = 'none';
                }
            }
        });

        demoInput.addEventListener('keydown', (e) => {
            // IF tooltip is visible AND user hits TAB or ENTER
            if (demoTooltip.style.display === 'block') {
                if (e.key === 'Tab' || e.key === 'Enter') {
                    e.preventDefault();
                    
                    // Simple "typing effect" for the expansion
                    demoTooltip.style.display = 'none';
                    demoInput.value = ''; // clear first
                    
                    expandText(EXPANSION);
                }
            }
        });
    }

    function expandText(text) {
        let i = 0;
        demoInput.value = "";
        demoInput.classList.add('expanding'); // Optional css hook
        
        const interval = setInterval(() => {
            demoInput.value += text.charAt(i);
            i++;
            if (i > text.length - 1) {
                clearInterval(interval);
                demoInput.classList.remove('expanding');
            }
        }, 10); // Speed of typing effect
    }


    // --- SMOOTH SCROLL FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
