document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation buttons and sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    // Map nav buttons to section IDs based on their text or a data attribute
    const sectionIds = [
        'intro',
        'fundamentals',
        'orderbook',
        'footprint',
        'volume',
        'liquidity',
        'strategies',
        'advanced'
    ];

    // Assign data-section attributes to nav buttons if not present
    navButtons.forEach((btn, idx) => {
        btn.setAttribute('data-section', sectionIds[idx]);
    });

    // Navigation click handler
    navButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove 'active' from all buttons and sections
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active', 'fade-in'));

            // Add 'active' to clicked button
            btn.classList.add('active');
            // Show the corresponding section with fade-in
            const sectionId = btn.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active', 'fade-in');
            }
        });
    });

    // Optionally, show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active', 'fade-in');
        navButtons[0].classList.add('active');
    }
});

// Optional: Add fade-in animation via JS if not in CSS
// Add this CSS to your stylesheet for fade-in effect:
/*
.fade-in {
    animation: fadeIn 0.5s;
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
*/