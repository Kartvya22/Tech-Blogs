import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import {MdOutlineLightMode} from 'react-icons/md'
import {MdOutlineNightlight} from 'react-icons/md'

function Header() {

  const {darkMode,setDarkMode} = useContext(AppContext);
 
  return (
    <div className={` flex w-full border-b-2  shadow-sm  ${darkMode ? 'border-white shadow-white text-white' : 'border-black shadow-black' }`}>
        <header className={`w-11/12 mx-auto flex justify-evenly items-center  `}>
            <h1 className='py-2 font-bold text-4xl text-center mx-auto'>Tech. Blog</h1>
            <button onClick={() => setDarkMode(!darkMode)} className=' font-extrabold text-4xl'>
            {
              darkMode ? (<MdOutlineLightMode/>) : (<MdOutlineNightlight/>)
            }
            </button>
        </header>
    </div>
  )
}

export default Header