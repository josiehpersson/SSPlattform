import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Komponenter/Navbar/Header';
import Tidrapplåda from '../Uppdragssida/Offert';
import Boll from '../../Komponenter/Bollar/Boll';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import FilterPopup from '../../Komponenter/Filter/FilterPopup';
import './Tidrapportsida.css';
import FakturaBoll from '../../Komponenter/PopupFaktura/Fakturaboll';

function Tidrapportsida(props) {
  return (
    <div className="sida-container">
      <Header />
      <div className="header-filler">
        <Boll
          className="grönboll"
          height="180px"
          width="180px"
          top="70px"
          left="100px"
          zIndex="1"
        />
        <h3 className="tidrapport-page-header">TIDRAPPORTER</h3>
        <Boll
          className="gulboll"
          height="50px"
          width="50px"
          top="210px"
          left="210px"
          zIndex="2"
        />

        <div className="tidrapp-bollar">
          <FakturaBoll />
          <FakturaBoll className="gulboll" bottom="40%" right="20%" />
        </div>
      </div>

      <div className="frostatGlas">
        <div className="tidrapport-button-holder">
          <FilterPopup />
          <SearchBar />
        </div>
        <div className="tidrapport-låda-container">
          <div className="tidrapp-spacer"></div>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
          <Link to="/tidrapportdetalj">
            <Tidrapplåda />
          </Link>
        </div>
      </div>
      <MaskotBoll left="15%" bottom="10%" />
      <Boll className="grönboll" top="95%" right="60%" />
      <Boll className="gulboll" top="100%" right="1%" />
      <Boll className="blåboll" right="13%" top="30%" />
    </div>
  );
}
export default Tidrapportsida;
