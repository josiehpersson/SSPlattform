import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Företagslåda from '../../Komponenter/FöretagsLådor/Företagslåda';
import Boll from '../../Komponenter/Bollar/Boll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import FilterPopup from '../../Komponenter/Filter/FilterPopup';
import './Företagssida.css';

function FöretagSida(props) {
    return (
      <div className="företagsida-container">
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
      </div>
    );
  }
  export default FöretagSida;