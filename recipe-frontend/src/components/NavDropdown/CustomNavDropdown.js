import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function CustomNavDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavDropdown show={isOpen} onToggle={handleToggle} title={title}>
      {children}
      <style jsx="true">
        {`
          .custom-nav-dropdown .dropdown-toggle::after {
            display: none; /* Hide the default arrow */
          }

          .custom-nav-dropdown .dropdown-toggle {
            position: relative; /* Needed for custom arrow positioning */
          }

          .custom-nav-dropdown .dropdown-toggle::before {
            content: '\\f063'; /* FontAwesome down arrow icon */
            font-family: 'Font Awesome 5 Free'; /* Specify the font family */
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'}); /* Rotate the arrow icon */
            transition: transform 0.3s ease; /* Add smooth transition */
          }
        `}
      </style>
    </NavDropdown>
  );
}

export default CustomNavDropdown;
