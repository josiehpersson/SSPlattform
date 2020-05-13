import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import './Filter.css';
function FilterForm(props) {
  return (
    <div className="filter-form-container">
      <Form>
        <FormGroup>
          <Label for="Checkbox" className="filter-form-header">
            FILTRERA
          </Label>
          <div>
            <CustomInput
              type="checkbox"
              id="Checkbox"
              label="Check this custom checkbox"
            />
            <CustomInput type="checkbox" id="Checkbox2" label="Or this one" />
            <CustomInput
              type="checkbox"
              id="Checkbox3"
              label="But not this disabled one"
            />
            <CustomInput
              type="checkbox"
              id="Checkbox4"
              label="Can't click this label to check!"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <CustomInput
              type="switch"
              id="Switch"
              name="customSwitch"
              label="Turn on this custom switch"
            />
            <CustomInput
              type="switch"
              id="Switch2"
              name="customSwitch"
              label="Or this one"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <CustomInput type="select" id="Select" name="Select">
            <option value="">RUBRIK</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="Range">RUBRIK</Label>
          <CustomInput type="range" id="Range" name="customRange" />
        </FormGroup>
      </Form>
    </div>
  );
}
export default FilterForm;
