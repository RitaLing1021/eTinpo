window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link'); // 取得所有導航連結
  const dropDown = document.querySelectorAll('.dropdown-item'); // 取得所有導航連結
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = navbar.offsetHeight > 80 ? '#004E42' : '#004E42';
    navLinks.forEach(link => {
      if (navbar.offsetHeight > 80) {
        link.style.color = '#004E42'; // 當高度超過 80px 時，連結文字顏色變為白色
      } else {
        link.style.color = '#FFF'; // 高度未超過 80px 時，連結文字顏色變為 #004E42
      }
    });
    dropDown.forEach(link => {
      if (navbar.offsetHeight > 80) {
        link.style.color = '#004E42'; // 當高度超過 80px 時，連結文字顏色變為白色
      } else {
        link.style.color = '#FFF'; // 高度未超過 80px 時，連結文字顏色變為 #004E42
      }
    });
    dropdownMenus.forEach(menu => {
      if (navbar.offsetHeight > 80) {
        menu.style.backgroundColor = '#004E42'; // 設置下拉選單背景色
      } else {
        menu.style.backgroundColor = '#004E42'; // 保持透明
      }
    });
  } else {
    navbar.style.backgroundColor = 'transparent';
    navLinks.forEach(link => {link.style.color = '#004E42';}); // 連結文字顏色變為 #004E42
    dropDown.forEach(link => {link.style.color = '#004E42';}); // 連結文字顏色變為 #004E42
    dropdownMenus.forEach(menu => menu.style.backgroundColor = 'transparent'); // 當回到頂部時，下拉選單也保持透明
  }
});

document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoSVG = document.querySelector('#logoSVG');

  if (scrollPosition > 80) {
      logoSVG.querySelectorAll('.cls-1').forEach(function(path) {
          path.style.fill = '#FFF'; // 滾動超過 80px 時變白色
      });
  } else {
      logoSVG.querySelectorAll('.cls-1').forEach(function(path) {
          path.style.fill = '#004E42'; // 初始時綠色
      });
  }
});

window.addEventListener("resize", updateNavLinkColors);
window.addEventListener("scroll", updateNavLinkColors);

// 頁面載入時執行一次
document.addEventListener("DOMContentLoaded", updateNavLinkColors);

function updateNavLinkColors() {
  const navLinks = document.querySelectorAll(".nav-link");
  const isMobile = window.innerWidth <= 768;
  const scrollHeight = window.scrollY;

  navLinks.forEach(link => {
    if (isMobile) {
      // 手機視圖：無論滾動高度，顏色都應該是白色
      link.style.color = "#FFF";
    } else {
      // 桌面視圖：根據滾動高度改變顏色
      if (scrollHeight > 80) {
        link.style.color = "#FFF";
      } else {
        link.style.color = "#004E42";
      }
    }
  });
}


var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  autoplay: false,
  //{
  //  delay: 2500,
  //  disableOnInteraction: false,
  //},
});