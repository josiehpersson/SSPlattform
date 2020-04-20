import React from 'react';
import Logo from './logga.png';

function Header () {
    return (
<header class=" mdc-top-app-bar headernav">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <span class="mdc-top-app-bar__title"> <img src={Logo} alt="Shaya Solutions Logo" className="Logo"/> </span> </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Download">FÖRETAG</button>
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Print this page">KONSULT</button>
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Bookmark this page">FÖRFRÅGAN</button>
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Bookmark this page">FAKTURA</button>
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Bookmark this page">TIDRAPPORT</button>


      <button class="mdc-button mdc-icon material-icons mdc-top-app-bar__navigation-icon--unbounded iconstyle">person</button>
    </section>
  </div>
</header>
    )
}

export default Header