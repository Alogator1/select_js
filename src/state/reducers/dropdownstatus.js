/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// actions
import {
    SET_PHONES,
    UPDATE_PHONES // please update this and add more if necessary 
} from '../actions/dropdownstatus';



/* ========== ~~~~~~~~~~ DROPDOWN STATUS : REDUCER ~~~~~~~~~~ ========== */
// DEFAULT STATE
const defaultState = {
    phones: [],
    selectedPhones: []
    // please fill this in
};


// REDUCER
export const dropdownStatus = (state = defaultState, action) => {
	let newState = Object.assign({}, state);

    switch (action.type) {
        case SET_PHONES:
            newState = { ...state, phones: action.phones, selectedPhones: action.phones };

            return newState;
        
        case UPDATE_PHONES:
            newState = { ...state, selectedPhones: [...action.phones] };
    
            return newState;

        default:
            console.log('Some weird action: ', action.type);

            return newState;
    }
};
