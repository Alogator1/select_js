/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
// libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";
import {
  setPhones,
  updatePhones
} from "../state/actions/dropdownstatus";
// material
import DropDown from '../material/dropdown/dropdown';
// styles
import './app.css';
import phonesData from "../phones.json";


/* ========== ~~~~~~~~~~ APP ~~~~~~~~~~ ========== */
const App = () => {
  const dispatch = useDispatch();

  const { phones, selectedPhones } = useSelector((state) => state.dropdownStatus);

  const onSelectAll = (phones = []) => {
    dispatch(updatePhones(phones))
  }

  const onUpdate = (phone) => {

    let newPhones = [...selectedPhones];

    const indexOfPhone = selectedPhones.findIndex((item) => item.label === phone.label);

    if(indexOfPhone !== -1) {
      newPhones.splice(indexOfPhone, 1);
      dispatch(updatePhones(newPhones));
    }
    else {
      dispatch(updatePhones([...newPhones, phone]))
    }
  }

  useEffect(() => {
    dispatch(setPhones(phonesData))
  }, []);

  return (
    <div className={`app`}>
      <DropDown 
      selectedItems={selectedPhones}
      itemList={phones}
      label='Devices'
      onUpdate={onUpdate}
      icon={faTabletScreenButton}
      onSelectAll={onSelectAll}
      />
    </div>
  )
};



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default App;
