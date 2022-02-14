/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React from 'react';
// styles
import './button.css';


/* ========== ~~~~~~~~~~ DROPDOWN ~~~~~~~~~~ ========== */
const Button = (props) => {
	const { onClick, label, isChanged } = props;

	return (
		<div className='button' onClick={isChanged ? onClick : () => {}} style={isChanged ? {backgroundColor: 'rgba(6, 43, 117, 0.2)'} : {}}>
			{label}
		</div>
	)
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Button;
