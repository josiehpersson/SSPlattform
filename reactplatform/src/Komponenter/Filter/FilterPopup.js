import React, { useState } from 'react';
import './Filter.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import SecondaryButton from '../UI-komponenter/SecondaryButton';
import FilterForm from './FilterForm';

function FilterPopup(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal);
      console.log('klick');
  }

  return (
    <div className="filter-popup-holder">
      <SecondaryButton text="FILTRERA" onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} className="popup-filter-container">
        <ModalHeader toggle={toggle} className="popup-filter-header">
          <ModalBody className="popup-filter-body">
            <FilterForm />
          </ModalBody>
        </ModalHeader>
      </Modal>
    </div>
  );
}
export default FilterPopup;
