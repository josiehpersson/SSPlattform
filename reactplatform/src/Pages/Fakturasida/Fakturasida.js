import React from 'react';
import './Fakturasida.css';
import Header from '../../Komponenter/Navbar/Header';
import Boll from '../../Komponenter/Bollar/Boll';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';

import PopupFaktura from '../../Komponenter/PopupFaktura/PopupFaktura';
import FakturaBoll from '../../Komponenter/PopupFaktura/Fakturaboll';
import SkapaFaktura from '../../Komponenter/PopupFaktura/SkapaFaktura';

function Fakturasida(props) {
    return(
        <div className="faktura-sida-container">
            <Header />
            <div className="header-filler">
            <Boll className="grönboll" height="180px" width="180px" zIndex="9" left="70px" top="50px" />
            <Boll className="blåboll" height="80px" width="80px" zIndex="10" left="200px" top="70px" />
            <p className="faktura">FAKTUROR</p>
            <div className="faktura-bollar">
            <FakturaBoll />
            <FakturaBoll className="gulboll"/>
            </div>
            </div>
            <div className="frostatGlas">
                <div className="fakturor-btn-holder">
                    <SkapaFaktura />
                    <div className="filter-btn-holder">
                        <SecondaryButton text="FILTER" />
                        <SearchBar />
                    </div>
                </div>
                <div className="faktura-holder">
                <PopupFaktura />
                <PopupFaktura />
                <PopupFaktura />
                <PopupFaktura />
                <PopupFaktura />
                <PopupFaktura />

                </div>
            </div>
            

        </div>
    )
}

export default Fakturasida;