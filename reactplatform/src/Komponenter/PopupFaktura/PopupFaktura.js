import React, { useState } from 'react';
import './PopupFaktura.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Boll from '../Bollar/Boll';
import FakturaLåda from './FakturaLåda';

function PopupFaktura(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="faktura-holder">
      <FakturaLåda onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} className="popup-faktura-container">
        <ModalHeader toggle={toggle} className="popup-faktura-header">
          <p>{props.fakturanummer || '#102764537'}</p>
          <Boll className="gulboll" zIndex="8" left="177px" top="39px" />
          <p className="faktura-rubrik">
            {props.fakturaföretag || 'Teststugan AB'}
          </p>
          <Boll
            className="blåboll"
            width="50px"
            height="50px"
            zIndex="10"
            left="288px"
            top="45px"
          />
        </ModalHeader>
        <ModalBody className="popup-faktura-body">
          <div className="faktura-card-container">
            <div className="faktura-card">
              <div className="text-faktura-container">
                <p>Vår referens: {props.referens || 'Shaya Solutions'}</p>
                <p>Betalningsvillkor: {props.villkor || '30 dagar'}</p>
                <p>Fakturanummer: {props.fakturanummer || '123456789'}</p>
                <p>Kundnummer: {props.kundnummer || '55'}</p>
              </div>
            </div>
            <div className="faktura-card">
              <div className="text-faktura-container">
                <p>Avsändare</p>
                <p>{props.företag || 'Teststugan AB'}</p>
                <p>{props.adressrad1 || 'Testgatan 14'}</p>
                <p>{props.adressrad2 || '22211 TESTBERGA'}</p>
                <hr></hr>
                <p>{props.email || 'kontaktuppgifter@faktura.se'}</p>
                <p>{props.telefon || '070-123456789'}</p>
              </div>
            </div>
          </div>

          <div className="faktura-card-container">
            <div className="faktura-card">
              <div className="text-faktura-container">
                <p>Att betala: {props.belopp || '10 SEK'}</p>
                <p>Till: {props.bgpg || 'BG 517-596'}</p>
                <p>Förfallodatum: {props.förfallodatum || '2030-05-26'}</p>
                <p>Dröjmålsränta: {props.ränta || '7.5%'}</p>
                <p>OCR-nummer: {props.ocr || '000 111 222 333 444 555'}</p>
              </div>
            </div>
            <div className="faktura-card">
              <div className="text-faktura-container">
                <p>Specifikation</p>
                <p>{props.tjänst || 'Konsult'}</p>
                <p>
                  {props.timmar || '40'}h á {props.timpris || '800'}SEK/h
                </p>
                <p>Summa</p>
                <p>{props.summa || '10652,00'}SEK</p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default PopupFaktura;
