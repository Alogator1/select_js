/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React from 'react';
// styles
import './dropdown_item.css';



/* ========== ~~~~~~~~~~ DROPDOWN ~~~~~~~~~~ ========== */
const DropdownItem = (props) => {
	const { item, isActive, onClick } = props;

	return (
		<div className='dropdownItem' onClick={()=>{onClick(item)}}>
			<div className='dropdownItemContent'>
				<input type={'checkbox'} className='dropdownItemInput' checked={isActive} />
				
				<span className="dropdownItemText">{item.label}</span>
			</div>
		</div>
	)
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default DropdownItem;
