import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Tidrapplåda from '../../Komponenter/TidrappLåda/TidrappLåda';
import Boll from '../../Komponenter/Bollar/Boll';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import PopupKommentar from '../../Komponenter/TidrappLåda/PopupKommentar';
import './Tidrapportsida.css';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';

class Detaljtidrapportsida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ID: '',
    };
  }
  render() {
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
          <h3 className="tidrapport-detalj-page-header">TIDRAPPORT</h3>
          <div className="information-container">
            <p>{this.state.name || 'Anna'}</p>
            <p>{this.state.ID || '#3456'}</p>
          </div>
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


          <div className="tidrapport-detalj-låda-container">
            <ul className="weekDays">
              <li className="weekDay">Måndag</li>
              <li className="weekDay">Tisdag</li>
              <li className="weekDay">Onsdag</li>
              <li className="weekDay">Torsdag</li>
              <li className="weekDay">Fredag</li>
              <li className="weekDay">Lördag</li>
              <li className="weekDay">Söndag</li>
            </ul>
        <div className="frostatGlas">
          <div className="information-container">
            <p>{this.state.name || 'Anna'}</p>
            <p>{this.state.ID || '#3456'}</p>
          </div>

          <div className="tidrapport-detalj-låda-container">
            <Tidrapplåda />
          </div>
        </div>
        <div className="tidrapport-detalj-button-holder">
          <PopupKommentar />
          <PrimaryButton text="GODKÄNN" />
        </div>
        <MaskotBoll top="68%" right="1%" />
        <Boll className="grönboll" bottom="-40%" right="20%" />
        <Boll className="gulboll" left="35%" bottom="70px" />
        <Boll className="blåboll" left="13%" bottom="-40%" />
      </div>
    );
  }
}
export default Detaljtidrapportsida;
