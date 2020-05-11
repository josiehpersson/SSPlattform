import React, { useState } from 'react';
import '../KonsultLådor/POPUPCSS.css';
import ProfilBild from '../FöretagsLådor/ProfilBild';
import PrimaryButton from '../UI-komponenter/PrimaryButton';
import Textfält from '../KonsultLådor/Textfält';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function PopupCompanyProfile(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <PrimaryButton onClick={toggle} text="INFO" />
      <Modal isOpen={modal} toggle={toggle} className="popup-container">
        <ModalHeader toggle={toggle} className="popup-header"></ModalHeader>
        <ModalBody className="popup-body">
          <ProfilBild top="-15px" />
          <Textfält titel="Stad" content={props.företagstad || 'Stockholm'} />
          <Textfält
            titel="Kontakt"
            content={props.företagadmin || 'Arne Bengtsson'}
          />
          <Textfält
            titel="Organisationsnr."
            content={props.organisationsnummer || '#2342'}
          />
          <Textfält titel="Bransch" content={props.företagbransch || 'IT'} />
          <Textfält
            titel="Telefon"
            content={props.företagtelefon || '070-123 456 789'}
          />
          <Textfält
            titel="E-mail"
            content={props.företagmail || 'b@minemail.com'}
          />
        </ModalBody>
        <ModalFooter className="popup-footer">
          <PrimaryButton text="MER" />
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default PopupCompanyProfile;
