import Dropdown from 'react-bootstrap/Dropdown';
import Item from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

function DropDownCF() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Re-Evaluation</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Sar7</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Discontinue</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDownCF;