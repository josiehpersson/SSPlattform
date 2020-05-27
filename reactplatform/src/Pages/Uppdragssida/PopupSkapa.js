import React, { useState } from 'react';
import './Uppdragssida.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';
import Inputfält from '../../Komponenter/UI-komponenter/InputfältText';
import Boll from '../../Komponenter/Bollar/Boll';

function SkapaUppdrag(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <PrimaryButton onClick={toggle} text="+ SKAPA" />

      <Modal
        isOpen={modal}
        toggle={toggle}
        className="popup-nytt-uppdrag-container"
      >
        <ModalHeader toggle={toggle} className="popup-nytt-uppdrag-header">
          <Boll
            className="gulboll"
            width="50px"
            height="50px"
            left="149px"
            top="30px"
            zIndex="8"
          />
          <Boll
            className="grönboll"
            height="130px"
            width="130px"
            zIndex="8"
            left="177px"
            top="39px"
          />
          <p className="nytt-uppdrag-rubrik">Nytt uppdrag</p>
        </ModalHeader>
        <ModalBody className="popup-nytt-uppdrag-body">
          <div className="skapa-nytt-uppdrag-inputcontainer">
            <Inputfält labeltext="Kontaktperson" />
            <Inputfält labeltext="Bransch" />
            <Inputfält labeltext="Positioner" />
            <Inputfält labeltext="Antal" />
            <Inputfält labeltext="Timmar/vecka" />
            <Inputfält labeltext="From" />
            <Inputfält labeltext="Tom" />
            <Inputfält labeltext="Övrigt" />
          </div>
        </ModalBody>
        <ModalFooter className="skapa-nytt-uppdrag-footer">
          <SecondaryButton text="AVBRYT" onClick={toggle} />
          <PrimaryButton text="SPARA" />
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default SkapaUppdrag;
