// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#menu a');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get the target section id from the href
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Hide all sections first
                document.querySelectorAll('section').forEach(section => {
                    section.style.opacity = '0';
                    section.style.display = 'none';
                });
                
                // Show and animate the target section
                targetSection.style.display = 'block';
                
                // Use setTimeout to ensure display change has taken effect
                setTimeout(() => {
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                }, 10);
                
                // Smooth scroll to the section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
