/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import {
	faCirclePlus,
	faCircleXmark,
  } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Button from "../button/button";
import DropdownInnerButton from "../dropdown_inner_button/dropdown_inner_button";
import Search from "../search/search";
// styles
import './dropdown_body.css';
import DropdownItem from "./dropdown_item/dropdown_item";



const DropdownBody = (props) => {
	const {itemList, selectedItems, onUpdate, onSortClick, onSearch, sortValue, onSelectAll} = props;

	return (
		<div className='dropdownBody'>
			<div className="dropdownBodyWrapper">

			<Search label={'Search Site'} value={sortValue} onChange={onSearch}/>

			<DropdownInnerButton
			icon={faCirclePlus}
			label="Select all"
			onClick={() => {onSelectAll(itemList)}}
			/>

			<DropdownInnerButton
				icon={faCircleXmark}
				label="Select none"
				onClick={() => {onSelectAll([])}}
			/>

			<div className="dropdownList">
				{itemList.map((item) => <DropdownItem key={item.label} item={item} isActive={selectedItems.findIndex((selectedItem) => selectedItem.label === item.label) !== -1} onClick={onUpdate}/>)}
			</div>

			</div>

			<Button label='Filter' onClick={onSortClick} isActive={true} />
		</div>
	)
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default DropdownBody;
