import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI-komponenter/logga.png';

import './Header.css';

function Header() {
  return (
    <div className="container">
      <Link to="/start">
        <img src={Logo} alt="Shaya Solutions Logotype" className="logotype" />
      </Link>
      <ul class="nav justify-content-end">
        <Link to="/företag">
          <li class="nav-item">
            <a class="nav-link menulink">FÖRETAG</a>
          </li>
        </Link>
        <Link to="/konsult">
          <li class="nav-item">
            <a class="nav-link menulink">KONSULT</a>
          </li>
        </Link>
        <Link to="/uppdrag">
        <li class="nav-item">
          <a class="nav-link menulink">UPPDRAG</a>
        </li>
        </Link>
        <Link to="/faktura">
        <li class="nav-item">
          <a class="nav-link menulink">FAKTURA</a>
        </li>
        </Link>
        <Link to="/tidrapport">
        <li class="nav-item">
          <a class="nav-link menulink">TIDRAPPORT</a>
        </li>
        </Link>
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
            <Link to="/åtkomst">
            <a class="dropdown-item menulink-dropdown">
              <i class="fas fa-users-cog"></i> ÅTKOMST
            </a>
            </Link>
            <Link to="/inställningar">
            <a class="dropdown-item menulink-dropdown">
              <i class="fas fa-cog"></i> INSTÄLLNINGAR
            </a>
            </Link>
            <Link to="/statistik">
            <a class="dropdown-item menulink-dropdown">
              <i class="far fa-chart-bar"></i> STATISTIK
            </a>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="/">
            <a class="dropdown-item menulink-dropdown">
              <i class="fas fa-sign-out-alt"></i> LOGGA UT
            </a>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
