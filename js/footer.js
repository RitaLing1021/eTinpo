footer =/*html*/`
<footer>
    <div class="container">
        <div><img src="image/footer-logo.png" alt="eTinpo-footerlogo"></div>
        <div>
            聯絡電話 / +886-6505-1179<br>
            電子信箱 / sales@foresight-web.com.tw <br>
            服務時間 / 週一至週五 9:30 A.M. to 5 P.M.<br>
            聯絡地址/74144台南市新市區創業路16號5樓<br>
            No. 16, Chuangye Rd., Xinshi Dist., Tainan City 74144 , Taiwan
        </div>
        <div>
            <a href="#"><img src="image/icon-fb.png" alt="facebook"></a>
            <a href="#"><img src="image/icon-line.png" alt="Line"></a>
            <a href="#"><img src="image/icon-ig.png" alt="ig"></a>

            <div>
                <a href="#">富邦技術</a>
                <a href="#">關於我們</a>
                <a href="#">產品總覽</a>
                <a href="#">聯絡我們</a>
                <a href="#">合作案例</a>
            </div>
        </div>
    </div>
    <div class="text-center copyright">
        Copyright © 2024 富邦先進材料股份有限公司 All Rights Reserved.
    </div>
</footer>
`;

// navbar
const navHrefs = document.querySelectorAll('.navbar-nav .nav-link');
navHrefs.forEach((navHref, index) => {
    hrefURL = navHref.getAttribute('href');
    if (location.href.includes(hrefURL)) {
        navHref.classList.add('active');
        console.log('ture');
    } else {
        navHref.classList.remove('active');
        console.log('false');
    }
});

document.currentScript.insertAdjacentHTML('beforebegin', footer);