import React, {useState} from 'react';
import './PopupFaktura.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PrimaryButton from '../UI-komponenter/PrimaryButton';
import SecondaryButton from '../UI-komponenter/SecondaryButton';
import Inputfält from '../UI-komponenter/InputfältText';
import Boll from '../Bollar/Boll';

function SkapaFaktura (props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
return(
    <div>
        <PrimaryButton onClick={toggle} text="Ny faktura"/>

        <Modal isOpen={modal} toggle={toggle} className="popup-faktura-container">
        <ModalHeader toggle={toggle} className="popup-faktura-header">
          <Boll
            className="gulboll"
            width="50px"
            height="50px"
            left="149px"
            top="30px"
            zIndex="8"
          />
          <Boll className="grönboll" height="130px" width="130px" zIndex="8" left="177px" top="39px" />
          <p className="skapa-faktura-rubrik">
            Ny faktura
          </p>
        </ModalHeader>
        <ModalBody className="popup-faktura-body">
          <div className="skapa-faktura-inputcontainer">
                <Inputfält labeltext="Kontaktperson"/>
                <Inputfält labeltext="Referens"/>
                <Inputfält labeltext="Moms"/>
                <Inputfält labeltext="Villkor"/>
                <Inputfält labeltext="Pris"/>
                <Inputfält labeltext="Antal"/>
                <Inputfält labeltext="Summa"/>
                <Inputfält labeltext="Meddelande"/>
          </div>
        </ModalBody>
        <ModalFooter>
            <SecondaryButton text="AVBRYT" onClick={toggle} />
            <PrimaryButton text="SKICKA" />
        </ModalFooter>
      </Modal>
    </div>
)
}
export default SkapaFaktura;