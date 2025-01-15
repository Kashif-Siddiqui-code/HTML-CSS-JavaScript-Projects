// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    const totalPanels = document.querySelectorAll('.panel');

    // Loop through all panels and add an event listener for 'click' event.
    totalPanels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });

    // Function to remove active classes from all panels when a new one is clicked.
    function removeActiveClasses() {
        totalPanels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});