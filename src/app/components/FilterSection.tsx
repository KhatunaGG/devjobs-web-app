"use client";

import { useContext } from "react";
import { GlobalContext } from "../Context";

const FilterSection = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    setData,
    handleFilterTitle,
    titlehandleClick,
    setIsCheckes,
    isChacked,
    setTitleInputValue,
    titleInputValue,
    locatinInputValue,
    setLocationInputValue,
    locationHandleClick,
    handleFilterLocation,
  } = context;

  return (

    <div className="container bg-[white] w-[87.2%] md:w-[89.71%] lg:w-[77.03%] mx-auto  py-4 shadow-lg rounded-[6px] mt-[-45px] md:mt-[-60px] lg:mt-[-45px] 
    
    ">
      <div className="flex  bg-[white]  flex-row items-center justify-between pl-6 pr-4 ">
        <div className="search-block flex flex-row items-center lg:gap-4">
          <img
            className="hidden md:flex lg:flex "
            src="assets/desktop/icon-search.svg"
            alt=""
          />
          <input
            onChange={handleFilterTitle}
            className="border-none outline-none"
            type="text"
            placeholder="Filter by title…"
            value={titleInputValue}
          />
        </div>

        <div className="location-block hidden md:flex md:flex-row md:gap-4 lg:gap-4">
          <img src="assets/desktop/icon-location.svg" alt="" />
          <input
            onChange={handleFilterLocation}
            className="border-none outline-none"
            type="text"
            placeholder="Filter by location…"
            value={locatinInputValue}
          />
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="check-block hidden md:flex md:flex-row md:gap-4">
            <input
              onChange={() => setIsCheckes(!isChacked)}
              type="checkbox"
              className="w-5 h-5"
            />
            <label htmlFor="">Full Time</label>
            <img
              className="hidden"
              src="assets/desktop/icon-check.svg"
              alt=""
            />
          </div>
          <img
            className="md:hideden lg:hidden w-[20px] h-[20px]"
            src="/assets/mobile/icon-filter.svg"
            alt=""
          />

          <button
            onClick={() => {
              if (locatinInputValue !== "") {
                locationHandleClick(locatinInputValue);
                setLocationInputValue("");
              } else {
                titlehandleClick(titleInputValue);
                setTitleInputValue("");
              }
            }}
            className="bg-[#5964E0] p-[14px] md:py-[16px] md:px-[12px] lg:px-[35px] rounded-[5px] "
          >
            <div className=" w-[20px] h-[20px] md:hidden lg:hidden">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                  fill="#ffffff"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            <span className="hidden md:block lg:block text-white font-bold text-base">
              search
            </span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default FilterSection;
