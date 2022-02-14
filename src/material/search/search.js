/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// styles
import './search.css';

const Search = (props) => {
	const { onChange, label, value } = props;

	return (
		<div className="searchWrapper">
			<div className='searchIconWrapper'>
			<FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
			</div>

			<input placeholder={label} onChange={(e) => {onChange(e.target.value)}} value={value} className='search'/>
		</div>
	)
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Search;
