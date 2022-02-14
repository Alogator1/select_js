/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
// styles
import './dropdown_inner_button.css';


/* ========== ~~~~~~~~~~ DROPDOWN ~~~~~~~~~~ ========== */
const DropdownInnerButton = (props) => {
	const { label, icon, onClick } = props;

	return (
		<div className='dropdownInnerButton' onClick={onClick}>
      <FontAwesomeIcon icon={icon} className='dropdownInnerIcon'/>

      <span className="dropdownInnerIconButton">{label}</span>
		</div>
	)
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default DropdownInnerButton;
