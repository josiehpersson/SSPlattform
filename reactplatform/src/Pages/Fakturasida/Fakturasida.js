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
            <p className="faktura-sida-rubrik">FAKTUROR</p>
            <Boll className="grönboll" height="180px" width="180px" />
            <Boll className="blåboll" height="80px" width="80px" />
            <FakturaBoll className="gulboll" />
            <FakturaBoll className="blåboll" />
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