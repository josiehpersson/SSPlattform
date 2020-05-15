import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Företagslåda from '../../Komponenter/FöretagsLådor/Företagslåda';
import Boll from '../../Komponenter/Bollar/Boll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import FilterPopup from '../../Komponenter/Filter/FilterPopup';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import './Företagssida.css';

function FöretagSida(props) {
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
          <h3 className="företag-page-header">FÖRETAG</h3>
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
          <div className="företag-button-holder">
            <FilterPopup />
            <SearchBar />
          </div>
        <div className="företagslåda-container">
          <Företagslåda />
          <Företagslåda />
          <Företagslåda />
          <Företagslåda />
          <Företagslåda />
          <Företagslåda />
          <Företagslåda />
          <Företagslåda />
        </div>
        </div>
        <MaskotBoll top="68%" right="1%" />
      <Boll className="grönboll" bottom="-40%" right="20%" />
      <Boll className="gulboll" left="15%" bottom="-10%" />
      <Boll className="blåboll" right="13%" top="-5%" />
      </div>
    );
  }
  export default FöretagSida;