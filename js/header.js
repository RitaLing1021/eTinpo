header =/*html*/`
    <header id="mainNavbar">
          <!-- Header with Navbar -->
  <nav class="container navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- 品牌 Logo -->
      <a class="navbar-brand" href="#">
      <svg id="logoSVG" width="150" data-name="eTinpo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.64 91.17">
  <defs>
    
  </defs>
  <g id="logoSVG" data-name="eTinpo">
    <g>
      <g>
        <path class="cls-1" d="M223.65,82.69l1.8,6.23h.02l1.93-6.23h.94l1.94,6.23h.02l1.81-6.23h.75l-2.18,7.12h-.8l-2.01-6.37h-.02l-2,6.37h-.82l-2.19-7.12h.81Z"/>
        <path class="cls-1" d="M236.62,88.11c.07,.24,.18,.46,.34,.65,.16,.19,.35,.35,.59,.48,.24,.13,.52,.19,.85,.19,.51,0,.91-.12,1.2-.36,.29-.24,.49-.56,.6-.96h.7c-.15,.59-.42,1.04-.81,1.36-.4,.32-.96,.48-1.68,.48-.45,0-.84-.07-1.17-.21-.33-.14-.6-.34-.8-.59-.21-.25-.36-.54-.46-.87-.1-.33-.15-.68-.15-1.04,0-.34,.05-.67,.15-1,.1-.32,.25-.62,.46-.87,.21-.26,.47-.46,.8-.62,.33-.16,.72-.24,1.17-.24s.85,.08,1.17,.25c.33,.17,.59,.38,.79,.65s.35,.58,.44,.93c.09,.35,.13,.7,.11,1.06h-4.4c0,.23,.03,.46,.11,.7Zm3.46-1.92c-.09-.22-.21-.41-.36-.58-.16-.17-.34-.31-.57-.41-.22-.1-.47-.15-.75-.15s-.54,.05-.76,.15c-.22,.1-.41,.24-.57,.41-.15,.17-.28,.36-.37,.59-.09,.22-.15,.45-.18,.68h3.7c0-.24-.05-.47-.14-.69Z"/>
        <path class="cls-1" d="M244.74,85.46c.12-.22,.28-.4,.48-.54s.44-.24,.72-.31c.27-.07,.58-.1,.91-.1,.25,0,.5,.02,.75,.06s.48,.13,.68,.24c.2,.12,.36,.29,.49,.5,.13,.22,.19,.5,.19,.84v2.73c0,.25,.14,.38,.41,.38,.08,0,.15-.01,.22-.04v.53c-.08,.01-.15,.02-.22,.03-.06,0-.14,0-.24,0-.18,0-.32-.02-.43-.06-.11-.04-.19-.11-.25-.18-.06-.08-.1-.17-.12-.28-.02-.11-.03-.23-.03-.36h-.02c-.13,.17-.25,.32-.38,.44-.13,.13-.27,.24-.43,.32-.16,.09-.34,.15-.54,.2s-.45,.07-.73,.07c-.27,0-.52-.03-.75-.09-.23-.06-.44-.15-.61-.27-.17-.12-.31-.28-.41-.47-.1-.19-.15-.41-.15-.67,0-.36,.09-.64,.27-.84,.18-.2,.41-.36,.7-.46,.29-.11,.62-.18,.99-.23,.37-.04,.74-.08,1.11-.12,.15-.01,.28-.03,.39-.05,.11-.02,.2-.05,.28-.1,.07-.05,.13-.12,.17-.21,.04-.09,.06-.2,.06-.34,0-.21-.04-.39-.12-.52-.08-.14-.18-.24-.32-.32-.14-.08-.3-.13-.48-.17-.18-.03-.37-.04-.58-.04-.44,0-.81,.1-1.09,.28-.28,.19-.43,.49-.44,.91h-.7c.02-.3,.09-.56,.21-.78Zm3.49,1.54c-.04,.07-.13,.13-.25,.16-.13,.03-.24,.06-.33,.07-.3,.05-.6,.09-.91,.13-.31,.04-.6,.09-.86,.16-.26,.07-.47,.18-.64,.31-.17,.14-.25,.33-.25,.58,0,.16,.03,.3,.11,.42s.16,.23,.28,.32c.12,.09,.25,.16,.41,.21s.31,.07,.48,.07c.27,0,.52-.04,.76-.11,.24-.07,.46-.18,.64-.32,.18-.14,.33-.31,.43-.51,.11-.2,.16-.43,.16-.68v-.82h-.02Z"/>
        <path class="cls-1" d="M253.74,84.66v1.21h.02c.18-.42,.45-.74,.83-.97,.37-.23,.82-.33,1.34-.31v.63c-.32-.01-.61,.03-.86,.12-.26,.09-.48,.22-.67,.38-.19,.17-.33,.36-.44,.59-.1,.23-.16,.48-.16,.75v2.74h-.7v-5.15h.64Z"/>
        <path class="cls-1" d="M259.66,89.81c0,.15-.02,.29-.06,.43-.04,.14-.1,.28-.18,.4-.08,.12-.18,.23-.3,.32-.12,.09-.26,.16-.43,.2v-.43c.09-.03,.17-.08,.23-.15s.12-.15,.17-.24c.04-.09,.08-.18,.09-.28,.02-.1,.02-.18,.02-.26h-.47v-1.06h.93v1.06Z"/>
        <path class="cls-1" d="M271.19,82.69l2.63,6.24,2.73-6.24h1.11v7.12h-.75v-6.15h-.02l-2.7,6.15h-.71l-2.6-6.15h-.02v6.15h-.75v-7.12h1.11Z"/>
        <path class="cls-1" d="M285.39,84.73c.34,.15,.62,.34,.85,.59s.4,.53,.52,.86c.12,.33,.18,.68,.18,1.05s-.06,.72-.18,1.05c-.12,.33-.29,.62-.52,.86-.23,.25-.51,.44-.85,.58-.34,.14-.72,.21-1.16,.21s-.82-.07-1.16-.21c-.34-.14-.62-.34-.85-.58-.23-.25-.4-.53-.52-.86-.12-.33-.18-.68-.18-1.05s.06-.72,.18-1.05c.12-.33,.29-.62,.52-.86,.23-.25,.51-.44,.85-.59,.34-.15,.72-.22,1.16-.22s.82,.07,1.16,.22Zm-2.03,.5c-.25,.13-.46,.29-.63,.5-.17,.21-.29,.44-.38,.7-.09,.26-.13,.53-.13,.8s.04,.54,.13,.8c.09,.26,.21,.5,.38,.7,.17,.21,.37,.37,.63,.5,.25,.13,.54,.19,.88,.19s.62-.06,.88-.19c.25-.13,.46-.29,.63-.5,.17-.21,.29-.44,.38-.7s.13-.53,.13-.8-.04-.54-.13-.8c-.09-.26-.21-.5-.38-.7-.17-.21-.37-.37-.63-.5-.25-.13-.54-.19-.88-.19s-.62,.06-.88,.19Z"/>
        <path class="cls-1" d="M290.86,84.66l1.8,4.52h.02l1.77-4.52h.72l-2.14,5.15h-.74l-2.21-5.15h.78Z"/>
        <path class="cls-1" d="M299.12,88.11c.07,.24,.18,.46,.34,.65,.16,.19,.35,.35,.59,.48,.24,.13,.52,.19,.85,.19,.51,0,.91-.12,1.2-.36,.29-.24,.49-.56,.6-.96h.7c-.15,.59-.42,1.04-.81,1.36-.4,.32-.96,.48-1.68,.48-.45,0-.84-.07-1.17-.21-.33-.14-.6-.34-.8-.59-.21-.25-.36-.54-.46-.87s-.15-.68-.15-1.04c0-.34,.05-.67,.15-1,.1-.32,.25-.62,.46-.87,.21-.26,.47-.46,.8-.62s.72-.24,1.17-.24,.85,.08,1.17,.25c.33,.17,.59,.38,.79,.65s.35,.58,.44,.93c.09,.35,.13,.7,.11,1.06h-4.4c0,.23,.03,.46,.11,.7Zm3.46-1.92c-.09-.22-.21-.41-.36-.58-.16-.17-.34-.31-.57-.41-.22-.1-.47-.15-.75-.15s-.54,.05-.76,.15c-.22,.1-.41,.24-.57,.41-.15,.17-.28,.36-.37,.59-.09,.22-.15,.45-.18,.68h3.7c0-.24-.05-.47-.14-.69Z"/>
        <path class="cls-1" d="M308.45,89.81c0,.15-.02,.29-.06,.43-.04,.14-.1,.28-.18,.4-.08,.12-.18,.23-.3,.32-.12,.09-.26,.16-.43,.2v-.43c.09-.03,.17-.08,.23-.15s.12-.15,.17-.24c.04-.09,.08-.18,.09-.28,.02-.1,.02-.18,.02-.26h-.47v-1.06h.93v1.06Z"/>
        <path class="cls-1" d="M318.91,85.46c.12-.22,.28-.4,.48-.54s.44-.24,.72-.31c.27-.07,.58-.1,.91-.1,.25,0,.5,.02,.75,.06s.48,.13,.68,.24c.2,.12,.36,.29,.49,.5,.13,.22,.19,.5,.19,.84v2.73c0,.25,.14,.38,.41,.38,.08,0,.15-.01,.22-.04v.53c-.08,.01-.15,.02-.22,.03-.06,0-.14,0-.24,0-.18,0-.32-.02-.43-.06-.11-.04-.19-.11-.25-.18-.06-.08-.1-.17-.12-.28-.02-.11-.03-.23-.03-.36h-.02c-.13,.17-.25,.32-.38,.44-.13,.13-.27,.24-.43,.32-.16,.09-.34,.15-.54,.2s-.45,.07-.73,.07c-.27,0-.52-.03-.75-.09-.23-.06-.44-.15-.61-.27-.17-.12-.31-.28-.41-.47-.1-.19-.15-.41-.15-.67,0-.36,.09-.64,.27-.84,.18-.2,.41-.36,.7-.46,.29-.11,.62-.18,.99-.23,.37-.04,.74-.08,1.11-.12,.15-.01,.28-.03,.39-.05,.11-.02,.2-.05,.28-.1,.07-.05,.13-.12,.17-.21,.04-.09,.06-.2,.06-.34,0-.21-.04-.39-.12-.52-.08-.14-.18-.24-.32-.32-.14-.08-.3-.13-.48-.17-.18-.03-.37-.04-.58-.04-.44,0-.81,.1-1.09,.28-.28,.19-.43,.49-.44,.91h-.7c.02-.3,.09-.56,.21-.78Zm3.49,1.54c-.04,.07-.13,.13-.25,.16-.13,.03-.24,.06-.33,.07-.3,.05-.6,.09-.91,.13-.31,.04-.6,.09-.86,.16-.26,.07-.47,.18-.64,.31-.17,.14-.25,.33-.25,.58,0,.16,.03,.3,.11,.42s.16,.23,.28,.32c.12,.09,.25,.16,.41,.21s.31,.07,.48,.07c.27,0,.52-.04,.76-.11,.24-.07,.46-.18,.64-.32,.18-.14,.33-.31,.43-.51,.11-.2,.16-.43,.16-.68v-.82h-.02Z"/>
        <path class="cls-1" d="M327.95,84.66v.89h.02c.13-.31,.37-.56,.71-.75,.34-.19,.71-.28,1.12-.28s.73,.05,1,.14c.27,.09,.49,.22,.65,.39,.16,.17,.28,.38,.34,.62,.07,.25,.1,.52,.1,.83v3.31h-.7v-3.21c0-.22-.02-.42-.07-.61-.04-.19-.12-.35-.23-.49-.11-.14-.26-.25-.45-.33-.19-.08-.42-.12-.7-.12s-.53,.04-.75,.13-.4,.21-.55,.37c-.15,.16-.27,.34-.35,.56-.09,.22-.13,.45-.14,.7v3h-.7v-5.15h.7Z"/>
        <path class="cls-1" d="M340.35,89.81v-.98h-.02c-.07,.17-.18,.32-.32,.46-.15,.14-.31,.26-.49,.35-.18,.1-.38,.17-.59,.22-.21,.05-.42,.08-.63,.08-.44,0-.81-.07-1.14-.21-.32-.14-.59-.34-.8-.59-.21-.25-.37-.54-.48-.87-.1-.33-.15-.68-.15-1.04s.05-.71,.15-1.04c.1-.33,.26-.62,.48-.87,.21-.25,.48-.45,.8-.59,.32-.15,.7-.22,1.14-.22,.21,0,.42,.02,.63,.07,.2,.05,.39,.12,.57,.21,.18,.1,.33,.21,.47,.35,.14,.14,.24,.3,.32,.49h.02v-2.95h.7v7.12h-.64Zm-3.83-1.78c.07,.26,.18,.5,.33,.7,.15,.21,.35,.37,.58,.5s.52,.19,.85,.19c.37,0,.68-.06,.94-.19,.25-.13,.46-.3,.62-.5,.16-.21,.27-.44,.34-.7,.07-.26,.11-.53,.11-.79s-.04-.53-.11-.79c-.07-.26-.19-.5-.34-.7s-.37-.37-.62-.5c-.26-.13-.57-.19-.94-.19-.33,0-.62,.06-.85,.19s-.43,.3-.58,.5-.26,.44-.33,.7c-.07,.26-.11,.53-.11,.79s.03,.53,.11,.79Z"/>
        <path class="cls-1" d="M354.37,82.69c.33,0,.65,.03,.96,.09,.31,.06,.58,.15,.81,.29,.23,.14,.42,.32,.56,.54s.21,.5,.21,.83c0,.19-.03,.37-.1,.54s-.16,.34-.28,.48c-.12,.14-.27,.26-.43,.36-.17,.1-.35,.17-.56,.21v.02c.51,.06,.92,.25,1.22,.56,.3,.32,.45,.71,.45,1.17,0,.11-.01,.24-.03,.38-.02,.14-.07,.29-.13,.44-.07,.15-.16,.3-.29,.44-.13,.15-.29,.27-.5,.38s-.47,.2-.78,.27-.67,.11-1.1,.11h-3.35v-7.12h3.35Zm0,3.12c.3,0,.56-.03,.79-.09,.22-.06,.41-.15,.55-.26,.15-.11,.26-.24,.33-.38,.07-.15,.11-.3,.11-.47,0-.89-.6-1.34-1.78-1.34h-2.59v2.54h2.59Zm0,3.42c.28,0,.55-.02,.8-.06,.25-.04,.47-.12,.66-.24,.19-.11,.34-.26,.45-.45,.11-.19,.17-.43,.17-.71,0-.46-.18-.8-.54-1.03-.36-.23-.87-.34-1.55-.34h-2.59v2.84h2.59Z"/>
        <path class="cls-1" d="M361.68,84.66v1.21h.02c.18-.42,.45-.74,.83-.97s.82-.33,1.34-.31v.63c-.32-.01-.61,.03-.86,.12-.26,.09-.48,.22-.67,.38-.19,.17-.33,.36-.44,.59-.1,.23-.15,.48-.15,.75v2.74h-.7v-5.15h.64Z"/>
        <path class="cls-1" d="M367.59,88.11c.07,.24,.18,.46,.34,.65,.15,.19,.35,.35,.59,.48,.24,.13,.52,.19,.85,.19,.51,0,.91-.12,1.2-.36,.29-.24,.49-.56,.6-.96h.7c-.15,.59-.42,1.04-.81,1.36-.4,.32-.96,.48-1.68,.48-.45,0-.84-.07-1.17-.21-.33-.14-.6-.34-.8-.59s-.36-.54-.46-.87c-.1-.33-.15-.68-.15-1.04,0-.34,.05-.67,.15-1,.1-.32,.25-.62,.46-.87,.21-.26,.47-.46,.8-.62,.33-.16,.72-.24,1.17-.24s.85,.08,1.18,.25c.32,.17,.59,.38,.79,.65,.2,.27,.35,.58,.44,.93,.09,.35,.13,.7,.11,1.06h-4.4c0,.23,.04,.46,.11,.7Zm3.46-1.92c-.09-.22-.21-.41-.36-.58-.16-.17-.34-.31-.57-.41-.22-.1-.47-.15-.75-.15s-.54,.05-.77,.15c-.22,.1-.41,.24-.56,.41-.16,.17-.28,.36-.37,.59-.09,.22-.15,.45-.18,.68h3.7c0-.24-.05-.47-.14-.69Z"/>
        <path class="cls-1" d="M375.72,85.46c.12-.22,.28-.4,.48-.54s.44-.24,.71-.31c.27-.07,.58-.1,.91-.1,.25,0,.5,.02,.75,.06,.25,.04,.48,.13,.68,.24,.2,.12,.36,.29,.49,.5,.13,.22,.19,.5,.19,.84v2.73c0,.25,.14,.38,.41,.38,.08,0,.16-.01,.22-.04v.53c-.08,.01-.15,.02-.22,.03-.06,0-.14,0-.24,0-.18,0-.32-.02-.43-.06-.11-.04-.19-.11-.25-.18-.06-.08-.1-.17-.12-.28s-.03-.23-.03-.36h-.02c-.13,.17-.25,.32-.38,.44s-.27,.24-.43,.32-.34,.15-.54,.2c-.2,.05-.45,.07-.73,.07-.27,0-.51-.03-.75-.09-.23-.06-.44-.15-.61-.27-.17-.12-.31-.28-.41-.47-.1-.19-.15-.41-.15-.67,0-.36,.09-.64,.27-.84,.18-.2,.41-.36,.71-.46,.29-.11,.62-.18,.99-.23,.36-.04,.74-.08,1.11-.12,.15-.01,.28-.03,.39-.05,.11-.02,.2-.05,.28-.1,.07-.05,.13-.12,.17-.21,.04-.09,.06-.2,.06-.34,0-.21-.04-.39-.12-.52-.08-.14-.18-.24-.32-.32-.14-.08-.3-.13-.48-.17-.18-.03-.37-.04-.58-.04-.44,0-.81,.1-1.09,.28-.28,.19-.43,.49-.44,.91h-.7c.02-.3,.09-.56,.21-.78Zm3.49,1.54c-.04,.07-.13,.13-.26,.16-.13,.03-.24,.06-.33,.07-.3,.05-.6,.09-.91,.13-.31,.04-.6,.09-.86,.16-.26,.07-.47,.18-.64,.31-.17,.14-.25,.33-.25,.58,0,.16,.04,.3,.11,.42s.16,.23,.28,.32c.12,.09,.26,.16,.41,.21s.31,.07,.48,.07c.27,0,.52-.04,.77-.11s.46-.18,.64-.32c.18-.14,.32-.31,.43-.51,.11-.2,.16-.43,.16-.68v-.82h-.02Z"/>
        <path class="cls-1" d="M386.34,84.66v.53h-1.16v3.47c0,.21,.03,.37,.09,.48,.06,.12,.22,.18,.47,.19,.2,0,.4-.01,.6-.03v.53c-.1,0-.21,0-.31,.01-.1,0-.21,0-.31,0-.47,0-.79-.08-.98-.24-.18-.16-.27-.46-.27-.9v-3.52h-1v-.53h1v-1.55h.7v1.55h1.16Z"/>
        <path class="cls-1" d="M390.78,82.69v2.86h.02c.13-.31,.37-.56,.71-.75,.34-.19,.71-.28,1.12-.28s.73,.05,1,.14c.27,.09,.49,.22,.65,.39,.16,.17,.28,.38,.34,.62,.07,.25,.1,.52,.1,.83v3.31h-.7v-3.21c0-.22-.02-.42-.07-.61-.04-.19-.12-.35-.23-.49-.11-.14-.26-.25-.45-.33-.19-.08-.42-.12-.7-.12s-.53,.04-.75,.13-.4,.21-.56,.37-.27,.34-.35,.56c-.09,.22-.13,.45-.14,.7v3h-.7v-7.12h.7Z"/>
        <path class="cls-1" d="M399.31,88.11c.07,.24,.18,.46,.34,.65,.15,.19,.35,.35,.59,.48,.24,.13,.52,.19,.85,.19,.51,0,.91-.12,1.2-.36,.29-.24,.49-.56,.6-.96h.7c-.15,.59-.42,1.04-.81,1.36-.4,.32-.96,.48-1.68,.48-.45,0-.84-.07-1.17-.21-.33-.14-.6-.34-.8-.59s-.36-.54-.46-.87c-.1-.33-.15-.68-.15-1.04,0-.34,.05-.67,.15-1,.1-.32,.25-.62,.46-.87,.21-.26,.47-.46,.8-.62,.33-.16,.72-.24,1.17-.24s.85,.08,1.18,.25c.32,.17,.59,.38,.79,.65,.2,.27,.35,.58,.44,.93,.09,.35,.13,.7,.11,1.06h-4.4c0,.23,.04,.46,.11,.7Zm3.46-1.92c-.09-.22-.21-.41-.36-.58-.16-.17-.34-.31-.57-.41-.22-.1-.47-.15-.75-.15s-.54,.05-.77,.15c-.22,.1-.41,.24-.56,.41-.16,.17-.28,.36-.37,.59-.09,.22-.15,.45-.18,.68h3.7c0-.24-.05-.47-.14-.69Z"/>
      </g>
      <path class="cls-1" d="M129.39,84.59c-20.67,0-37.61-15.53-39.61-35.77h39.61c13.45,0,24.39-10.95,24.39-24.41S142.84,0,129.39,0c-4.42,0-8.79,.64-12.99,1.91h-.01s-.64,.21-.64,.21h0c-.06,.01-.12,.04-.17,.06h0S18.91,32.98,18.91,32.98C7.6,37.25,0,48.24,0,60.33c0,16.11,13.11,29.22,29.22,29.22h100.17s82.68,0,82.68,0v-4.96h-82.68Zm19.43-60.18c0,10.72-8.72,19.45-19.43,19.45h-39.79c.38-17.02,11.38-31.82,27.65-37.02h0s.13-.04,.13-.04l.45-.14c3.73-1.13,7.61-1.7,11.55-1.7,10.71,0,19.43,8.72,19.43,19.45Z"/>
      <g>
        <path class="cls-1" d="M369.35,2.83c-5.04,0-9.91,1.01-14.49,3.01-13.24,5.77-21.8,18.84-21.8,33.28,0,3.2,.41,6.38,1.24,9.43,4.24,15.82,18.66,26.86,35.05,26.86,20.01,0,36.29-16.28,36.29-36.29S389.36,2.83,369.35,2.83Zm0,64.05c-12.54,0-23.57-8.45-26.82-20.55-.63-2.33-.95-4.76-.95-7.22,0-11.05,6.55-21.04,16.68-25.46,3.5-1.52,7.22-2.3,11.08-2.3,15.31,0,27.76,12.45,27.76,27.76s-12.45,27.76-27.76,27.76Z"/>
        <rect class="cls-1" x="222.72" y="32.33" width="7.92" height="43.52"/>
        <polygon class="cls-1" points="160.23 9.83 184.92 9.83 184.92 75.84 192.84 75.84 192.84 9.83 215.63 9.83 215.63 1.91 160.23 1.91 160.23 9.83"/>
        <path class="cls-1" d="M304.01,1.91h-31.99v7.92h31.99c9.04,0,16.38,7.35,16.38,16.39s-7.35,16.39-16.38,16.39h-13.43v7.92h13.43c13.4,0,24.3-10.9,24.3-24.3s-10.9-24.3-24.3-24.3Z"/>
        <polygon class="cls-1" points="272.05 66.38 234.21 1.91 222.72 1.91 222.72 21.7 230.64 21.7 230.64 11.47 268.42 75.84 279.97 75.84 279.97 20.59 272.05 20.59 272.05 66.38"/>
      </g>
    </g>
  </g>
</svg>
      </a>
      
      <!-- 漢堡選單按鈕 (手機版) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- 導航選單 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="technologies.html">富邦技術</a>
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
            <a class="nav-link" href="contact.html">聯絡我們</a>
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