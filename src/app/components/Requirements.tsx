"use client";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { RequirementsPropsType } from "../Interface";

const Requirements = ({ itemContent }: RequirementsPropsType) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { isDark } = context;

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[28px]">
        <h2 className="font-bold text-[20px] text-[#19202D] capitalize">
          Requirements
        </h2>
        <p
          className={`${
            isDark ? "text-[#9DAEC2]" : "text-[#6E8098]"
          } text-base font-normal  leading-[1.62]`}
        >
          {itemContent.content}
        </p>
      </div>

      {itemContent.items.map((item, i) => (
        <div key={i} className="flex flex-row gap-[32px] items-start">
          <div className="dot w-[4px] h-[4px] bg-[#5964E0] rounded-full "></div>
          <p
            className={`${
              isDark ? "text-[#9DAEC2]" : "text-[#6E8098]"
            } text-base font-normal  leading-[1.62]`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Requirements;
