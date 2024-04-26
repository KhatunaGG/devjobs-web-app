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
  screenWidth: number;
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
};

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [data, setData] = useState<DataType[]>(jobsdata);
  const [isChacked, setIsCheckes] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [locatinInputValue, setLocationInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(toggle,   'Toggle')

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        screenWidth,
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
        setToggle
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
