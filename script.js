// Function to toggle navigation menu on smaller screens
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
  }
  
  // Function to close navigation menu when a link is clicked
  function closeNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.remove('show');
  }
  
  // Event listener for menu toggle button
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', toggleNav);
  
  // Event listeners for closing navigation menu when a link is clicked
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
  