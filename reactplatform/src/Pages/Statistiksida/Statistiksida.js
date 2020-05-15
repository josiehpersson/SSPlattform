import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Boll from '../../Komponenter/Bollar/Boll';
import './Statistiksida.css';

function Statistiksida(props) {
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
        <h3 className="statistik-page-header">STATISTIK</h3>
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
        <div className="statistik-låda-container">
          <div className="statistik-låda">
            <div className="statistik-låda-header">
              <p className="statistik-låda-rubrik">GENOMSNITT/MÅNAD</p>
            </div>
            <p className="statistik-låda-liten-text">Inkomster</p>
            <p className="statistik-låda-stor-text">
              {props.inkomster || '0000000'} SEK
            </p>
            <p className="statistik-låda-liten-text">Utgifter</p>
            <p className="statistik-låda-stor-text">
              {props.utgifter || '0000000'} SEK
            </p>
          </div>

          <div className="container2">
            <div className="statistik-låda">
              <div className="statistik-låda-header">
                <p className="statistik-låda-rubrik">GENOMSNITT/MÅNAD</p>
              </div>
              <p className="statistik-låda-liten-text">Inkomna uppdrag</p>
              <p className="statistik-låda-stor-text">
                {props.inkuppdrag || '0'} ST
              </p>
            </div>
            <div className="statistik-låda">
              <div className="statistik-låda-header">
                <p className="statistik-låda-rubrik">GENOMSNITT/MÅNAD</p>
              </div>
              <p className="statistik-låda-liten-text">Tillsatta uppdrag</p>
              <p className="statistik-låda-stor-text">
                {props.tilluppdrag || '0'} ST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Statistiksida;
