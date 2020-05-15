import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Konsultlåda from '../../Komponenter/KonsultLådor/Konsultlåda';
import Boll from '../../Komponenter/Bollar/Boll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import FilterPopup from '../../Komponenter/Filter/FilterPopup';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import './Konsultsida.css';

function KonsultSida(props) {
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
        <h3 className="page-header">KONSULTER</h3>
        <Boll
          className="gulboll"
          height="50px"
          width="50px"
          top="210px"
          left="210px"
          zIndex="2"
        />
      </div>

      <div className="frostatGlas">
        <div className="konsult-button-holder">
          <FilterPopup />
          <SearchBar />
        </div>
        <div className="konsultlåda-container">
          <Konsultlåda />
          <Konsultlåda />
          <Konsultlåda />
          <Konsultlåda />
          <Konsultlåda />
          <Konsultlåda />
          <Konsultlåda />
          <Konsultlåda />
        </div>
      </div>
      <MaskotBoll left="15%" bottom="-10%" />
      <Boll className="grönboll" right="60%" top="30%" />
      <Boll className="gulboll" bottom="-25%" right="20%"  />
      <Boll className="blåboll" top="68%" right="1%"  />
    </div>
  );
}
export default KonsultSida;
