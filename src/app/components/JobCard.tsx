import React from "react";
import { DataType } from "../Interface";
import { Variants, motion } from "framer-motion";

type JobCardType = {
  item: DataType;
};


const variants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 * i,
    },
  }),
};

function JobCard({ item }: JobCardType) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      custom={`${item.id}`}
      className="relative w-[31.53.%]"
    >
      <div
        style={{ background: item.logoBackground }}
        className={` w-[50px] h-[50px]  absolute top-[-25px] left-[32px] rounded-[15px] flex items-center justify-center`}
      >
        <img className="" src={item.logo} alt="" />
      </div>

      <div className="pl-8  bg-white  pt-[10.52%]   flex flex-col gap-[19.29%]  h-[228px] rounded-[6px] shadow-lg   ">
        <div className="flex flex-col gap-[7.5%]">
          <div className="flex flex-roe items-center gap-4">
            <span className="text-base font-normal text-[#6E8098]">
              {item.postedAt}
            </span>
            <div className="dot w-[4px] h-[4px] bg-[#6E8098] rounded-full"></div>
            <span className="text-base font-normal text-[#6E8098]">
              {item.contract}
            </span>
          </div>
          <h2 className="text-[#19202D] font-bold text-[20px] ">
            {item.position}
          </h2>
          <p className="text-base font-normal text-[#6E8098]">{item.company}</p>
        </div>

        <div className="text-[#5964E0] font-bold text-[14px]">
          {item.location}
        </div>
      </div>
    </motion.div>
  );
}

export default JobCard;
