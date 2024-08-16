header =/*html*/`
    <header>
          <!-- Header with Navbar -->
  <nav class="container navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- 品牌 Logo -->
      <a class="navbar-brand" href="#"><img src="image/logo.png" alt=""></a>
      
      <!-- 漢堡選單按鈕 (手機版) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- 導航選單 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">富邦技術</a>
          </li>
          <!-- 下拉選單 -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              關於我們
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">概述</a></li>
              <li><a class="dropdown-item" href="#">責任</a></li>
              <li><a class="dropdown-item" href="#">發展</a></li>
              <li><a class="dropdown-item" href="#">環境</a></li>
              <li><a class="dropdown-item" href="#">研發(特別研發對象)</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">產品總覽</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">聯絡我們</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">合作案例</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </header>
`;
document.currentScript.insertAdjacentHTML('beforebegin', header);