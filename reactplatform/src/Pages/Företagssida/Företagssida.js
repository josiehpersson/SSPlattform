import React from 'react';
import Header from '../../Komponenter/Navbar/Header';
import Företagslåda from '../../Komponenter/FöretagsLådor/Företagslåda';
import FrostatGlas from '../../Komponenter/UI-komponenter/Frostatglas';
import Boll from '../../Komponenter/Bollar/Boll';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';

import '../Konsultsida/Konsultsida.css';

function FöretagSida (props) {
    return (
        <div>
            <Header />
            <div className="header-content">
                <Boll 
                className="grönboll"
                height="150px"
                width="150px"
                top="70px"
                left="100px" 
                zIndex="1"/>
                <h3 className="page-header">Företag</h3>
                <Boll
                className="gulboll"
                height="50px"
                width="50px" 
                top="180px"
                left="187px"
                zIndex="2"/>
            </div>

            <div className="konsultsida-container">
                <FrostatGlas height="700px" width="800px">
                </FrostatGlas>
                    <div className="konsult-button-holder">
                        <SecondaryButton 
                        text="Filter" />
                        <SearchBar />
                    </div>
            </div>
                    <div className="konsultlåda-container">
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
    )
}
export default FöretagSida;