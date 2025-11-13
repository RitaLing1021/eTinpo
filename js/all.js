window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link'); // 取得所有導航連結
  const dropDown = document.querySelectorAll('.dropdown-item'); // 取得所有導航連結
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = navbar.offsetHeight > 80 ? '#004E42' : '#004E42';
    navLinks.forEach(link => {
      if (navbar.offsetHeight > 80) {
        link.style.color = '#fff'; // 當高度超過 80px 時，連結文字顏色變為白色
      } else {
        link.style.color = '#FFF'; // 高度未超過 80px 時，連結文字顏色變為 #004E42
      }
    });
    dropDown.forEach(link => {
      if (navbar.offsetHeight > 80) {
        link.style.color = '#fff'; // 當高度超過 80px 時，連結文字顏色變為白色
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
    navbar.style.backgroundColor = '#004E42';
    navLinks.forEach(link => {link.style.color = '#fff';}); // 連結文字顏色變為 #004E42
    dropDown.forEach(link => {link.style.color = '#fff';}); // 連結文字顏色變為 #004E42
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
          path.style.fill = '#fff'; // 初始時綠色
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
        link.style.color = "#fff";
      }
    }
  });
}


var swiper = new Swiper('.swiper', {
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  autoplay: false,
/*   {
   delay: 2500,
  disableOnInteraction: false,
  }, */
  navigation: {
    nextEl: '.swiper-button-next',  // 設置下一個按鈕
    prevEl: '.swiper-button-prev',  // 設置上一個按鈕
  },
  breakpoints: {
    // 當螢幕寬度小於768px，顯示一張
    768: {
      slidesPerView: 1,
      centeredSlides: false, // 如果不需要居中
    },
    // 當螢幕寬度大於等於768px，顯示三張
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  },
});
