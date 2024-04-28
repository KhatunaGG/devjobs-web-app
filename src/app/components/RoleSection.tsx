"use client";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { RoleContentPropsType } from "../Interface";

const RoleSection = ({ roleContent }: RoleContentPropsType) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { isDark } = context;

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[28px]">
        <h2 className="font-bold text-[20px] text-[#19202D] capitalize">
          What You Will Do
        </h2>
        <p
          className={`${
            isDark ? "text-[#9DAEC2]" : "text-[#6E8098]"
          } text-base font-normal  leading-[1.62]`}
        >
          {roleContent.content}
        </p>
      </div>

      {roleContent.items.map((item, i) => (
        <div key={i} className="flex flex-row gap-[32px] items-start">
          <div className="text-[#5964E0] text-base font-bold leading-[1.62]">
            {i + 1}
          </div>
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

export default RoleSection;
