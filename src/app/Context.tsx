"use client";
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { DataType } from "./Interface";
import jobsdata from "./data.json";

export const GlobalContext = createContext<GlobalContextType | null>(null);

type GlobalContextType = {
  // screenWidth: number;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  handleFilterTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  titlehandleClick: (value: string) => void;
  isChacked: boolean;
  setIsCheckes: (value: boolean) => void;
  titleInputValue: string;
  setTitleInputValue: (value: string) => void;
  locatinInputValue: string;
  setLocationInputValue: (value: string) => void;
  locationHandleClick: (value: string) => void;
  handleFilterLocation: (e: ChangeEvent<HTMLInputElement>) => void;
  toggle: boolean;
  setToggle: (value: boolean) => void;


  isDesktop: boolean;
  isTablet: boolean
};

function GlobalContextProvider({ children }: { children: ReactNode }) {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [data, setData] = useState<DataType[]>(jobsdata);
  const [isChacked, setIsCheckes] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [locatinInputValue, setLocationInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(toggle, "Toggle");

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

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };


  //   if (typeof window !== "undefined") {
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }
  // }, []);

  //   const [isDesktop, setIsDesktop] = useState(true);
  //   const [isTablet, setIsTablet] = useState(true)
  //   let windowWidth: windowWidthType;
  //   type windowWidthType = number;
  //   const checkWindowSize = () => {
  //     if (typeof window !== "undefined") {
  //       windowWidth = window.innerWidth;
  //     }
  //     if (windowWidth >= 1024) {
  //       setIsDesktop(true)
  //     }
  //     if (windowWidth >= 768 && windowWidth < 1014) {
  //       setIsTablet(true)
  //     }
  //     else {
  //       setIsDesktop(false)
  //       setIsTablet(false)
  //     }
  //   };

  // useEffect(() => {
  //   checkWindowSize()
  // }, [isDesktop])

  // if (typeof window !== "undefined") {
  //   window.addEventListener('resize', checkWindowSize)
  // }

  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  let windowWidth: windowWidthType;
  type windowWidthType = number;

  const checkWindowSize = () => {
    if (typeof window !== "undefined") {
      windowWidth = window.innerWidth;
    }
    if (windowWidth >= 1024) {
      setIsDesktop(true);
    }
    if (windowWidth >= 768 && windowWidth < 1014) {
      setIsTablet(true);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
  }, [isDesktop]);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", checkWindowSize);
  }

  return (
    <GlobalContext.Provider
      value={{
        // screenWidth,
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
        isTablet
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

// useEffect(() => {
//   if(inputValue.length !==  0) {
//     const ww: DataType | undefined = data.find((item) => item.company.toLowerCase() === inputValue.toLowerCase())
//     setData(ww)
//   }

// }, [inputValue]);

// useEffect(() => {
//   if (inputValue.length !== 0) {
//     const filteredData: DataType[] = data.filter((item) =>
//       item.company.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setData(filteredData);
//   } else {
//     setData(jobsdata);
//   }
// }, [inputValue, data]);

// useEffect(() => {
//   if (inputValue.length !== 0) {
//     const filteredData: DataType[] = data.filter((item) =>
//       item.company.toLowerCase().includes(inputValue.toLowerCase()) ||
//       item.location.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setData(filteredData);
//   } else {
//     setData(jobsdata);
//   }
// }, [inputValue]);

// const handleClick = (value: string) => {
//   if (inputValue.length !== 0) {
//     const filteredData: DataType[] = data.filter(
//       (item) =>
//         item.company.toLowerCase().includes(inputValue.toLowerCase()) ||
//         item.location.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setData(filteredData);
//   } else {
//     setData(jobsdata);
//   }
// };

// const handleClick = (value: string) => {
//   let filteredData: DataType[] = [];
//   if (inputValue.length !== 0) {
//     filteredData = data.filter(
//       (item) =>
//         item.company.toLowerCase().includes(inputValue.toLowerCase()) ||
//         item.location.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setData(filteredData);
//   } else {
//     setData(jobsdata);
//   }

//   if (!isChacked) {
//     filteredData = filteredData.filter(
//       (item) => item.contract === "Full Time"
//     );
//     setData(filteredData);
//   } else {
//     setData(jobsdata);
//   }

// };

// const handleClick = (value: string, val: string) => {
//   let filteredData: DataType[] = [];

//   if (titleInputValue.length !== 0) {
//     filteredData = data.filter(
//       (item) =>
//         item.company.toLowerCase().includes(titleInputValue.toLowerCase()) ||
//         item.location.toLowerCase().includes(titleInputValue.toLowerCase())
//     );
//   } else {
//     filteredData = [...jobsdata];
//   }

//   if (isChacked) {
//     filteredData = filteredData.filter(
//       (item) => item.contract === "Full Time"
//     );
//   }

//   setData(filteredData);
// };
