window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = navbar.offsetHeight > 80 ? '#004E42' : '#004E42';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });