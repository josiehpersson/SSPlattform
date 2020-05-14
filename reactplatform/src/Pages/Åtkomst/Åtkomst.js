import React from 'react';
import './Åtkomst.css';
import Header from '../../Komponenter/Navbar/Header';
import Boll from '../../Komponenter/Bollar/Boll';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import Rader from './Rader';

function Åtkomst() {
  return (
    <div>
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
        <h3 className="uppdrag-page-header">ÅTKOMST</h3>
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
        <div className="uppdrag-button-holder">
          <SearchBar />
          <PrimaryButton text="+ Lägg till " />
        </div>
        <div className="ContentBox">
          <Rader />
        </div>
      </div>
    </div>
  );
}

export default Åtkomst;
