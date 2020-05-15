import React from 'react';
import Inputfält from '../../Komponenter/UI-komponenter/InputfältText';
import Header from '../../Komponenter/Navbar/Header';
import Boll from '../../Komponenter/Bollar/Boll';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import './Inställningar.css';
class Inställningarsida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titel: '',
      kontaktperson: '',
      VATnr: '',
      bransch: '',
      telefon: '',
      epost: '',
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
          <h3 className="inställningar-page-header">INSTÄLLNINGAR</h3>
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
          <div className="inställningar-information-container">
            <div className="inställningar-header">
              <p>{this.state.titel || 'FÖRETAGSNAMN'}</p>
            </div>
            <Inputfält
              labeltext="Företag"
              placeholder={this.state.titel || 'FÖRETAGSNAMN'}
            />
            <Inputfält
              labeltext="Kontaktperson"
              placeholder={this.state.kontaktperson || 'KONTAKTPERSON'}
            />
            <Inputfält
              labeltext="VAT-nummer"
              placeholder={this.state.VATnr || 'VAT-NUMMER'}
            />
            <Inputfält
              labeltext="Bransch"
              placeholder={this.state.bransch || 'IT'}
            />
            <Inputfält
              labeltext="Epost"
              placeholder={this.state.epost || 'epost@epost.se'}
            />
            <Inputfält
              labeltext="Telefon"
              placeholder={this.state.telefon || '070-695847'}
            />
          </div>
        </div>
        <div className="inställningar-btn-holder">
          <SecondaryButton text="AVBRYT" />
          <PrimaryButton text="SPARA" />
        </div>
      </div>
    );
  }
}

export default Inställningarsida;
