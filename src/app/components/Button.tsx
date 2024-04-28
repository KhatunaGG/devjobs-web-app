'use client'
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { ButtonPropsType } from "../Interface";

const Button = ({ text }: ButtonPropsType) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data, setArrLength, arrLangth } = context;

  
  return (
    <button
    onClick={() => {
      if(text === "Load More") {
        setArrLength(Number(data.length))
      }
    }}
      className={`${text === "Load More" && 'w-[full]'} ${text === "Load More" && 'md:w-[20%]'} ${text === "Load More" && 'md:w-[20%]'} bg-[#5964E0] w-full hover:bg-[#939BF4] text-base text-white font-bold color-white 
    py-4 px-[28px] rounded-[5px] whitespace-nowrap `}
    >
      {text}
    </button>
  );
};

export default Button;