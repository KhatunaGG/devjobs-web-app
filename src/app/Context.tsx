"use client";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { DataType, GlobalContextType } from "./Interface";
import jobsdata from "./data.json";
import Header from "./components/Header";

export const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[]>(jobsdata);
  const [isChacked, setIsCheckes] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [locatinInputValue, setLocationInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [arrLangth, setArrLength] = useState(12)


  const [footerData, setFooterData] = useState<DataType>();
  const getFooterData = (val: DataType) => {
    setFooterData(val);
  };


  const toogleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };


  let filteredData: DataType[] = [];
  const titlehandleClick = (value: string) => {
    if (titleInputValue !== "" && locatinInputValue == "") {
      filteredData = data.filter((item) =>
        item.company.toLowerCase().includes(titleInputValue.toLowerCase())
      );
    } else {
      filteredData = [...jobsdata];
    }
    if (isChacked) {
      filteredData = filteredData.filter(
        (item) => item.contract === "Full Time"
      );
    }
    setData(filteredData);
  };


  const locationHandleClick = (value: string) => {
    if (locatinInputValue !== "" && titleInputValue == "") {
      filteredData = data.filter((item) =>
        item.location.toLowerCase().includes(locatinInputValue.toLowerCase())
      );
    } else {
      filteredData = [...jobsdata];
    }
    setData(filteredData);
  };


  const handleFilterTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleInputValue(e.target.value);
  };


  const handleFilterLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationInputValue(e.target.value);
  };

  
  let windowWidth: windowWidthType;
  type windowWidthType = number;
  const checkWindowSize = () => {
    if (typeof window !== "undefined") {
      windowWidth = window.innerWidth;
    }
    if (windowWidth >= 1024) {
      setIsDesktop(true);
    }
    if (windowWidth >= 768 && windowWidth < 1024) {
      setIsTablet(!false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
      setIsTablet(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
  }, [isDesktop, isTablet, isMobile]);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", checkWindowSize);
  }

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        handleFilterTitle,
        titlehandleClick,
        isChacked,
        setIsCheckes,
        titleInputValue,
        setTitleInputValue,
        locatinInputValue,
        setLocationInputValue,
        locationHandleClick,
        handleFilterLocation,
        toggle,
        setToggle,
        isDesktop,
        isTablet,
        isDark,
        setIsDark,
        getFooterData,
        isMobile,
        setOverlay,
        overlay,
        arrLangth,
        setArrLength
      }}
    >
      <div
        className={`${
          isDark ? "bg-[#121721]" : "bg-[#f2f2f2]"
        } transition duration-500 w-full relative `}
      >
        <Header />
        {children}
      </div>
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
