document.addEventListener('DOMContentLoaded', function() {

  /* Toggle Header */
  const headerToggle = document.querySelector('.header-toggle');
  const navMenu = document.querySelector('.navmenu');

  if (headerToggle && navMenu) {
    headerToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  /* Close Mobile Menu When Clicking Outside */
  document.addEventListener('click', function(e) {
    const isClickInside = navMenu.contains(e.target) || headerToggle.contains(e.target);
    
    if (!isClickInside) {
      navMenu.classList.remove('active');
    }
  });

  /* Smooth Scrolling */
  const scrollLinks = document.querySelectorAll('.scrollto');

  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Close the mobile menu if open
        navMenu.classList.remove('active');
      }
    });
  });

});
