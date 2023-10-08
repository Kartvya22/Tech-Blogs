import React, { useContext } from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

function CategoryPage() {
  const { darkMode } = useContext(AppContext);
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div
      className={`min-h-screen w-full flex flex-col gap-4 ${
        darkMode ? "bg-black text-white" : " bg-white  text-black"
      }  `}
    >
      <Header />
      <div className="  w-11/12 mx-auto  flex flex-wrap justify-between items-center gap-4 ml-4 px-4">
        <button
          onClick={() => navigation(-1)}
          className={`font-semibold border-2 border-slate-700 rounded-md  py-1 px-4 transition-all duration-200 shadow-sm  ${
            darkMode 
              ? "hover:bg-white hover:text-black shadow-white"
              : "hover:bg-black hover:text-white shadow-black"
          }`}
        >
          {" "}
          Back{" "}
        </button>
        <p className="  font-bold text-2xl w-11/12 ">
          Blogs On... <span className="underline font-semibold"> # {category} </span>
        </p>
      </div>
      <div className="h-10 w-40 bg-black "></div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage