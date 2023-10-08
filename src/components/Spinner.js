import React from 'react';
import "./Spinner.css";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Spinner() {
  const {darkMode} = useContext(AppContext);
  return (
    <div className='w-11/12 min-h-[70vh] h-screen flex justify-center items-center pb-56'>
        <div className={` h-full flex justify-center items-center ${darkMode ? 'darkSpinner' : "lightSpinner" }`}></div>

    </div>
  )
}

export default Spinner