import React from 'react';
import Logo from './logga.png';
import './Header.css';

function Header() {
  return (
    <div className="container">
      <img src={Logo} alt="Shaya Solutions Logotype" className="logotype" />
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link menulink">FÖRETAG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menulink">KONSULT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menulink">FÖRFRÅGAN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menulink">FAKTURA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menulink">TIDRAPPORT</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link menu-dropdown-link"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user-circle"></i>
          </a>
          <div class="dropdown-menu menu-dropdown">
            <a class="dropdown-item menulink-dropdown">
              <i class="fas fa-users-cog"></i> ÅTKOMST
            </a>
            <a class="dropdown-item menulink-dropdown">
              <i class="fas fa-cog"></i> INSTÄLLNINGAR
            </a>
            <a class="dropdown-item menulink-dropdown">
              <i class="far fa-chart-bar"></i> STATISTIK
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item menulink-dropdown">
              <i class="fas fa-sign-out-alt"></i> LOGGA UT
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
