/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretDown
  } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
// styles
import './dropdown.css';
import DropdownBody from '../dropdown_body/dropdown_body';



/* ========== ~~~~~~~~~~ DROPDOWN ~~~~~~~~~~ ========== */
const DropDown = (props) => {
	const {label, itemList, selectedItems, icon, onUpdate, onSelectAll} = props;

	const [isActive, setIsActive] = useState(false);

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		if(!isActive) setSearchValue('');
	}, [isActive])

	const onSearch = (value) => {
		setSearchValue(value);
	}

	const openDropdown = (state) => {
		setIsActive(state);
	}

	const onSortClick = () => {
		setIsActive(false);
	}

	let header = '';

	switch (+itemList?.length - +selectedItems?.length) {
		case 0:
			header = `All ${label}`

			break;
		case itemList.length: 
			header = `Nothing`

			break;
		
		default: 
			header = `${selectedItems?.length} ${label}`;
	}

	return (
		<div className={`dropdown`}
		>
			<div className='dropdownHead' 
			onClick={() => {openDropdown(!isActive)}} 
			style={isActive ? {'border': '2px solid rgb(20, 148, 244)'} : {}}>
				
			<FontAwesomeIcon icon={icon} className='dropdownIcon' />

			<div className='dropdownContent'>
				<div className='dropdownLabel'>{label}</div>

				<div className='dropdownHeader'>{header}</div>
			</div>

			<FontAwesomeIcon icon={faCaretDown}  className='dropdownArrow' rotation={isActive ? 180 : 0}/>
			</div>
			{ isActive && 
			<DropdownBody itemList={itemList.filter((item) => item.label.includes(searchValue))} 
				selectedItems={selectedItems} 
				onUpdate={onUpdate} 
				onSearch={onSearch} 
				searchValue={searchValue} 
				onSortClick={onSortClick} 
				onSelectAll={onSelectAll}/> }
		</div>
	)
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default DropDown;
