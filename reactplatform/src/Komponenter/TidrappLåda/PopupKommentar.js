import React, {useState} from 'react';
import './TidrappLåda.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import SecondaryButton from '../UI-komponenter/SecondaryButton';
import PrimaryButton from '../UI-komponenter/PrimaryButton';


function PopupKommentar(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        console.log('klick');
    }
  
    return (
        <div className="popup-kommentar-container">
      <SecondaryButton text="KOMMENTAR" onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} className="popup-kommentar-container">
        <ModalHeader toggle={toggle} className="popup-kommentar-header">
        </ModalHeader>
          <ModalBody className="popup-kommentar-body">
          <FormGroup>
        <Label for="kommentar" className="kommentar-label">Lämna kommentar...</Label>
        <Input type="textarea" name="text" id="kommentar" />
      </FormGroup>
          </ModalBody>
          <ModalFooter>
              <div className="kommentar-btn-container">
              <SecondaryButton text="AVRBYT" />
              <PrimaryButton text="SPARA" />
              </div>
          </ModalFooter>
      </Modal>
        </div>
    )
}

export default PopupKommentar;