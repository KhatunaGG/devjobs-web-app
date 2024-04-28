"use client";
import { useContext } from "react";
import { GlobalContext } from "../Context";
import { JobDetailPropsType } from "../Interface";
import data from "../data.json";
import Requirements from "./Requirements";
import RoleSection from "./RoleSection";
import BgFooter from "./BgFooter";
import { motion } from "framer-motion";

const JobDetail = ({ params }: JobDetailPropsType) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { isDark } = context;

  const jobDetaileData = data.filter((item) => item.id === Number(params[0]));

  const letters = jobDetaileData[0].company;
  const newLetters = Array.from(letters);

  const variants = {
    hidden: { opacity: 0 },
    visible: (i = 0.5) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <>
      <div className="container bg-transparent w-[87.2%] md:w-[89.71%] lg:w-[50.69%] mx-auto mt-[-15px] md:mt-[-33px] lg:mt-[-45px]  relative z-30">
        <div
          className={`${
            isDark ? "bg-[#19202D]" : "bg-[#fff]"
          } transition duration-500 flex flex-col items-center justify-center gap-6 relative h-[205px] 
        md:static md:flex md:flex-row md:w-full md:items-betwwen md:h-[140px] mb-6 md:mb-8  shadow-lg rounded-[6px] `}
        >
          <div className="w-full flex flex-col items-center md:flex-row md:gap-10 ">
            <div
              style={{ backgroundColor: jobDetaileData[0].logoBackground }}
              className="w-[50px] h-[50px]  rounded-[15px] flex items-center justify-center absolute top-[-25px]
            md:static md:w-[140px] md:h-[140px] md:rounded-none
            "
            >
              <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                className="text-white font-bold text-base md:text-xl lowercase"
              >
                {newLetters.map((letter, i) => (
                  <motion.span variants={child} key={i}>
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="flex flex-col gap-[13.13px] items-center">
              <h2
                className={`${
                  isDark ? "text-[#f2f2f2]" : "text-[#19202D]"
                } font-bold text-[20px]`}
              >
                {jobDetaileData[0].company}
              </h2>
              <p className="font-normal text-base text-[#6E8098]">
                scooter.com
              </p>
              <a href={jobDetaileData[0].website}></a>
            </div>
          </div>

          <button
            className={`${isDark ? "bg-[#9DAEC2]" : "bg-[#e3e4f2]"} ${
              isDark ? "text-[#f2f2f2]" : "text-[#5964E0]"
            } transition duration-500 font-bold text-base rounded-[5px] px-[20.5px] py-4 whitespace-nowrap md:mr-10 hover:bg-[#6E8098]`}
          >
            Company Site
            <a href={jobDetaileData[0].website}></a>
          </button>
        </div>

        <div
          className={`${
            isDark ? "bg-[#19202D]" : "bg-[#fff] transition duration-500"
          }  transition duration-500 shadow-lg rounded-[6px] py-10 md:py-[48px] px-6 lg:px-[48px] flex flex-col gap-10`}
        >
          <div className="flex flex-col gap-[50px] md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-2">
              <div className="flex flex-roe items-center gap-4">
                <span className="text-base font-normal text-[#6E8098]">
                  {jobDetaileData[0].postedAt}
                </span>
                <div className="dot w-[4px] h-[4px] bg-[#6E8098] rounded-full"></div>
                <span className="text-base font-normal text-[#6E8098]">
                  {jobDetaileData[0].contract}
                </span>
              </div>
              <h2
                className={`${
                  isDark ? "text-[#f2f2f2]" : "text-[#19202D]"
                } font-bold text-[20px] whitespace-nowrap`}
              >
                {jobDetaileData[0].position}
              </h2>
              <p className="text-[#5964E0] font-bold text-[14px]">
                {jobDetaileData[0].location}
              </p>
            </div>
            <button
              className="text-white font-bold text-base bg-[#5964E0] pt-4 pb-3 w-full rounded-[5px] 
          md:w-[20.46%] hover:bg-[#939BF4]"
            >
              Apply Now
            </button>
          </div>
          <p
            className={`${
              isDark ? "text-[#9DAEC2]" : "text-[#6E8098]"
            } text-base font-normal  leading-[1.62]`}
          >
            {jobDetaileData[0].description}
          </p>
          <Requirements itemContent={jobDetaileData[0].requirements} />
          <RoleSection roleContent={jobDetaileData[0].role} />
        </div>
      </div>

      <BgFooter jobDetaileData={jobDetaileData} isDark={isDark} />
    </>
  );
};

export default JobDetail;
