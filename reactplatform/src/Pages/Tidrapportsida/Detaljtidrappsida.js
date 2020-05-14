import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Tidrapplåda from '../../Komponenter/TidrappLåda/TidrappLåda';
import Boll from '../../Komponenter/Bollar/Boll';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import PopupKommentar from '../../Komponenter/TidrappLåda/PopupKommentar';
import './Tidrapportsida.css';

class Detaljtidrapportsida extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                ID: '',
        }
    }
    render() {

        return (
          <div className="tidrapportsida-container">
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
          </div>
        );
    }
  }
  export default Detaljtidrapportsida;