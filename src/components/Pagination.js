import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages, darkMode } =
    useContext(AppContext);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-screen mx-auto mt-16 px-4  border-slate-400 ${
        darkMode ? "bg-black border-t-2" : " bg-white border-t-[1px]"
      }`}
    >
      <div className="w-full  flex flex-wrap gap-4 justify-between items-center px-4 py-4 mx-auto ">
        <div className="flex gap-4">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className={`font-semibold border-2 border-slate-700 rounded-md py-1 px-3  transition-all duration-200 shadow-sm  ${
                darkMode
                  ? "hover:bg-white hover:text-black shadow-white"
                  : "hover:bg-black hover:text-white shadow-black"
              }`}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className={`font-semibold border-2 border-slate-700 rounded-md py-1 px-6  transition-all duration-200 shadow-sm ${
                darkMode
                  ? "hover:bg-white hover:text-black shadow-white"
                  : "hover:bg-black hover:text-white shadow-black"
              }`}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-semibold ">
          Page {page} of {totalPages}
        </p>
      </div>
    </footer>
  );
}

export default Pagination;
