import React from 'react';
import Header from '../Components/Header';
import Konsultlåda from '../Components/KonsultLådor/Konsultlåda';
import FrostatGlas from '../Components/Frostatglas';
import Boll from '../Components/Boll';
import SearchBar from '../Components/SearchBar';
import SecondaryButton from '../Components/SecondaryButton';
import './Konsultsida.css';

function KonsultSida (props) {
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
                <h3 className="page-header">Konsulter</h3>
                <Boll
                className="gulboll"
                height="50px"
                width="50px" 
                top="180px"
                left="187px"
                zIndex="2"/>
            </div>

            <div className="konsultsida-container">
                <FrostatGlas height="500px" width="800px">
                </FrostatGlas>
                    <div className="button-holder">
                        <SecondaryButton />
                        <SearchBar />
                    </div>
            </div>

        </div>
    )
}
export default KonsultSida;