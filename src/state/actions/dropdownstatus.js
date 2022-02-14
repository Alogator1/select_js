/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export const SET_PHONES = 'SET_PHONES'; // please update and add more if necessary
export const UPDATE_PHONES = 'UPDATE_PHONES';

export const setPhones = (phones) => ({
    type: SET_PHONES,
    phones
});

export const updatePhones = (phones) => ({
    type: UPDATE_PHONES,
    phones
});