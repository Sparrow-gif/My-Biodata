const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('close');
});

  window.addEventListener('scroll', function() {
    var scrollBox = document.getElementById('header');
    if (window.scrollY > 20) {
        scrollBox.style.backgroundColor = "#333";
        scrollBox.style.color = "black"; // Change text color to black
        scrollBox.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"; // Add box-shadow
    } else {                             
        scrollBox.style.backgroundColor = 'transparent';
        scrollBox.style.color = " "; // Reset text color to white or any other desired color when background is transparent
        scrollBox.style.boxShadow = "none"; // Remove box-shadow when background is transparent
    }
});
