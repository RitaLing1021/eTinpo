window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = navbar.offsetHeight > 80 ? '#004E42' : '#004E42';
      dropdownMenus.forEach(menu => {
        if (navbar.offsetHeight > 80) {
          menu.style.backgroundColor = '#004E42'; // 設置下拉選單背景色
        } else {
          menu.style.backgroundColor = '#004E42'; // 保持透明
        }
      });
    } else {
      navbar.style.backgroundColor = 'transparent';
      dropdownMenus.forEach(menu => menu.style.backgroundColor = 'transparent'); // 當回到頂部時，下拉選單也保持透明
    }
  });