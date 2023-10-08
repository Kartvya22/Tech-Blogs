import React, { useContext } from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/AppContext'

function Home() {
    const {darkMode} = useContext(AppContext);
  return (
    <div className={`min-h-screen w-full flex flex-col gap-8 mx-auto ${darkMode ? 'bg-black text-white' : ' bg-white  text-black' }  `}>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default Home