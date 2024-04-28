"use client";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { motion } from "framer-motion";

const Overlay = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    isDark,
    setOverlay,
    overlay,
    handleFilterLocation,
    locatinInputValue,
    locationHandleClick,
    setLocationInputValue,
    titleInputValue,
    titlehandleClick,
    setIsCheckes,
    isChacked,
  } = context;

  return (
    <>
      {overlay && (
        <div className="w-full bg-[#00000071] h-screen absolute top-0 left-0 z-40 flex items-center justify-center">
          <motion.div
            initial={{ y: "-300%" }}
            animate={{ y: overlay ? 0 : "-300%" }}
            transition={{ type: "spring", damping: 30, delay: 0.3 }}
            className={`${isDark ? "bg-[#19202D]" : "bg-white"
              }  w-[87.2%]  absolute z-50 h-[217px] rounded-md flex flex-col shadow-lg`}
          >
            <div
              className={`${isDark ? "border-[#2e3c48]" : ""
                } w-full  flex flex-row gap-4 py-6 px-6 border-b-[1px] `}
            >
              <img src="assets/desktop/icon-location.svg" alt="" />
              <input
                onChange={handleFilterLocation}
                className={`${isDark ? "text-[#f2f2f2]" : "text-[#19202D]"
                  } border-none outline-none bg-transparent`}
                type="text"
                placeholder="Filter by location…"
                value={locatinInputValue}
              />
            </div>

            <div className="check-block flex flex-row gap-4 py-6 px-6">
              <input
                onChange={() => setIsCheckes(!isChacked)}
                type="checkbox"
                className="w-5 h-5 "
              />
              <label
                className={`${isDark ? "text-[#f2f2f2]" : "text-[#19202D]"}`}
                htmlFor=""
              >
                Full Time
              </label>
            </div>

            <div
              onClick={() => {
                setOverlay(false);
                if (locatinInputValue !== "") {
                  locationHandleClick(locatinInputValue);
                  setLocationInputValue("");
                } else {
                  titlehandleClick(titleInputValue);
                }
              }}
              className="px-6"
            >
              <button
                className="bg-[#5964E0] w-full  hover:bg-[#939BF4] text-base text-white font-bold color-white 
                    py-4 px-[28px] rounded-[5px] whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Overlay;
