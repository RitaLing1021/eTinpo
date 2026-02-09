// ======= LOGO / NAVBAR SCROLL 顏色 =======
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link'); 
  const dropDown = document.querySelectorAll('.dropdown-item'); 

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = '#004E42';
    navLinks.forEach(link => link.style.color = '#fff');
    dropDown.forEach(link => link.style.color = '#fff');
    dropdownMenus.forEach(menu => menu.style.backgroundColor = '#004E42');
  } else {
    navbar.style.backgroundColor = '#004E42';
    navLinks.forEach(link => link.style.color = '#fff');
    dropDown.forEach(link => link.style.color = '#fff');
    dropdownMenus.forEach(menu => menu.style.backgroundColor = 'transparent');
  }
});

document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const logoSVG = document.querySelector('#logoSVG');

  if (logoSVG) {
    logoSVG.querySelectorAll('.cls-1').forEach(path => {
      path.style.fill = scrollPosition > 80 ? '#FFF' : '#fff';
    });
  }
});

window.addEventListener("resize", updateNavLinkColors);
window.addEventListener("scroll", updateNavLinkColors);
document.addEventListener("DOMContentLoaded", updateNavLinkColors);

function updateNavLinkColors() {
  const navLinks = document.querySelectorAll(".nav-link");
  const isMobile = window.innerWidth <= 768;
  const scrollHeight = window.scrollY;

  navLinks.forEach(link => {
    if (isMobile) {
      link.style.color = "#FFF";
    } else {
      link.style.color = scrollHeight > 80 ? "#FFF" : "#fff";
    }
  });
}

// ======= SWIPER INITIALIZE =======
document.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector(".swiper");

  if (swiperEl && window.Swiper) {
    new window.Swiper(".swiper", {
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      },
      // 🔥 防止 Swiper 阻擋點擊事件
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false
    });
  }

  // 🔥 阻止 dropdown toggle 點擊冒泡，保證手機漢堡正常
  document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
});
