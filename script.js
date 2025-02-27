// Select elements for the scroll effect
const header = document.getElementById("header");
const logo = document.getElementById("logo");

// Function to handle scroll effect
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // If the user scrolls more than 100px, shrink header and logo
    if (scrollPosition > 100) {
        header.classList.add('shrink');  // Shrink header and logo
    } else {
        header.classList.remove('shrink');  // Reset to original size
    }
});
