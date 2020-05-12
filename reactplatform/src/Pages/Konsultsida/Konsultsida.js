import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Konsultlåda from '../../Komponenter/KonsultLådor/Konsultlåda';
import FrostatGlas from '../../Komponenter/UI-komponenter/Frostatglas';
import Boll from '../../Komponenter/Bollar/Boll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';

import './Konsultsida.css';

function KonsultSida(props) {
  return (
    <div>
      <Header />
      <div className="header-filler">
        <Boll
          className="grönboll"
          height="150px"
          width="150px"
          top="70px"
          left="100px"
          zIndex="1"
        />
        <h3 className="page-header">Konsult</h3>
        <Boll
          className="gulboll"
          height="50px"
          width="50px"
          top="180px"
          left="187px"
          zIndex="2"
        />
      </div>

      <div className="frostatGlas">
        <div className="konsult-button-holder">
          <SecondaryButton text="Filter" />
          <SearchBar />
        </div>
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
  );
}
export default KonsultSida;
