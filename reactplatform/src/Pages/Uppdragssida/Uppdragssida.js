import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import SearchBar from '../../Komponenter/UI-komponenter/SearchBar';
import InfoRadUppdrag from '../../Komponenter/UI-komponenter/InfoRadUppdrag';
import './Uppdragssida.css';
import Header from '../../Komponenter/Navbar/Header';
import Boll from '../../Komponenter/Bollar/Boll';
import Offert from './Offert';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import FilterPopup from '../../Komponenter/Filter/FilterPopup';
import SkapaUppdrag from './PopupSkapa';

function Uppdragssida() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
        <h3 className="uppdrag-page-header">UPPDRAG</h3>
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
        <div className="tabBox">
          <div className="uppdrag-button-holder">
            <SkapaUppdrag />
            <FilterPopup />
            <SearchBar />
          </div>
          <Nav tabs>
            <NavItem className="tabbar">
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                UPPDRAG
              </NavLink>
            </NavItem>
            <NavItem className="tabbar">
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                OFFERTER
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            {/* Det som ska finnas i uppdrag   */}
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div className="InforaderUppdrag">
                    <InfoRadUppdrag
                      namn="Rara"
                      uppdrag="it/ samhälle"
                      tidsspan="2020/02/15 - 2020/06/19"
                      pris="500 kr"
                    />
                    <InfoRadUppdrag
                      namn="Rara"
                      uppdrag="it/ samhälle"
                      tidsspan="2020/02/15 - 2020/06/19"
                      pris="500 kr"
                    />
                    <InfoRadUppdrag
                      namn="Rara"
                      uppdrag="it/ samhälle"
                      tidsspan="2020/02/15 - 2020/06/19"
                      pris="500 kr"
                    />
                    <InfoRadUppdrag
                      namn="Rara"
                      uppdrag="it/ samhälle"
                      tidsspan="2020/02/15 - 2020/06/19"
                      pris="500 kr"
                    />
                    <InfoRadUppdrag
                      namn="Rara"
                      uppdrag="it/ samhälle"
                      tidsspan="2020/02/15 - 2020/06/19"
                      pris="500 kr"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>

            {/* Det som ska finnas i Offerter  */}
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Offert
                    företag="Ett bra"
                    antal="3"
                    uppdrag="IT/ Samhälle"
                    tidsspan="2020/02/15 - 2020/06/19"
                    timmar="700"
                  />

                  <Offert
                    företag="Ett bra"
                    antal="3"
                    uppdrag="IT/ Samhälle"
                    tidsspan="2020/02/15 - 2020/06/19"
                    timmar="700"
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
      <MaskotBoll top="68%" right="1%" />
      <Boll className="grönboll" top="58%" left="5%" />
      <Boll className="gulboll" left="15%" bottom="-2%" />
      <Boll className="blåboll" right="13%" top="-5%" />
    </div>
  );
}

export default Uppdragssida;
