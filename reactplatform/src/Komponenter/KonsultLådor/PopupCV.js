import React, { useState } from 'react';
import './POPUPCSS.css';
import ProfilBild from '../FöretagsLådor/ProfilBild';
import PrimaryButton from '../UI-komponenter/PrimaryButton';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function PopupCV(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="popup-button" onClick={toggle}>
        <i class="fas fa-file-alt"></i> CV
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="popup-container">
        <ModalHeader toggle={toggle} className="popup-header"></ModalHeader>
        <ModalBody className="popup-body">
          <ProfilBild top="-15px" />
          <img src={props.konsultCV} alt="konsultens CV" />
        </ModalBody>
        <ModalFooter className="popup-footer">
          <PrimaryButton text="MER" />
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default PopupCV;
