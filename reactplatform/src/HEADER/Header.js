import React from 'react';
import Logo from '../logga svart.png';

function Header () {
    return (
<header class=" mdc-top-app-bar headernav">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <span class="mdc-top-app-bar__title">S</span> </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Download">FÖRETAG</button>
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Print this page">KONSULT</button>
      <button class="mdc-button mdc-top-app-bar__action-item--unbounded headeritem" aria-label="Bookmark this page">bookmark</button>
      <button class="mdc-button material-icons mdc-top-app-bar__navigation-icon--unbounded iconstyle">menu</button>
    </section>
  </div>
</header>
    )
}

export default Header