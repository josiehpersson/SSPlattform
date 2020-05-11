import React, { useState } from 'react';
import './POPUPCSS.css';
import ProfilBild from '../FöretagsLådor/ProfilBild';
import PrimaryButton from '../UI-komponenter/PrimaryButton';
import Textfält from './Textfält';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function PopupProfile(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="popup-button" onClick={toggle}>
        <i class="fas fa-user-circle"></i> Profil
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="popup-container">
        <ModalHeader toggle={toggle} className="popup-header"></ModalHeader>
        <ModalBody className="popup-body">
          <ProfilBild top="-15px" />
          <Textfält titel="Namn" content={props.konsultnamn || 'Arne Bengtsson'}/>
          <Textfält titel="#" content={props.konsultid || '#2342'} />
          <Textfält titel="Titel" content={props.konsulttitel || 'Utvecklare'} />
          <Textfält titel="Telefon" content={props.konsulttelefon || '070-123 456 789'} />
          <Textfält titel="E-mail" content={props.konsultmail || 'b@minemail.com'}/>
        </ModalBody>
        <ModalFooter className="popup-footer">
          <PrimaryButton text="MER" />
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default PopupProfile;
