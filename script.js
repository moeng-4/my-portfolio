
// Find the menu button
const menuToggle = document.getElementById("menu-toggle");

// Find the navigation links
const navLinks = document.getElementById("nav-links");

// Listen for a button click
menuToggle.addEventListener("click", function() {

    // Show or hide the menu
    navLinks.classList.toggle("active");

});

const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});