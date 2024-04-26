// "use client";

import data from "../data.json";
import Requirements from "./Requirements";
import RoleSection from "./RoleSection";

type JobDetailPropsType = {
  params: string;
};

const JobDetail = ({ params }: JobDetailPropsType) => {

  const jobDetaileData = data.filter((item) => item.id === Number(params[0]));


  return (
    <div className="container bg-transparent  w-[87.2%] md:w-[89.71%] lg:w-[50.69%] mx-auto mt-[-15px] md:mt-[-33px] lg:mt-[-45px] mb-[64px] relative z-30">
      <div
        className="bg-[white] flex flex-col items-center justify-center gap-6 relative h-[205px] 
            md:static md:flex md:flex-row md:w-full md:items-betwwen md:h-[140px] mb-6 md:mb-8  shadow-lg rounded-[6px] "
      >
        <div className="w-full flex flex-col items-center md:flex-row md:gap-10 ">
          <div
            style={{ backgroundColor: jobDetaileData[0].logoBackground }}
            className="w-[50px] h-[50px]  rounded-[15px] flex items-center justify-center absolute top-[-25px]
            md:static md:w-[140px] md:h-[140px] md:rounded-none
            "
          >
            <p className="text-white font-bold text-base md:text-xl lowercase">
              {jobDetaileData[0].company}
            </p>
          </div>

          <div className="flex flex-col gap-[13.13px] items-center">
            <h2 className="font-bold text-[20px] text-[#19202D]">
              {jobDetaileData[0].company}
            </h2>
            <p className="font-normal text-base text-[#6E8098]">scooter.com</p>
            <a href={jobDetaileData[0].website}></a>
          </div>
        </div>

        <button className="bg-[#e3e4f2] font-bold text-base text-[#5964E0] rounded-[5px] px-[20.5px] py-4 whitespace-nowrap md:mr-10">
          Company Site
          <a href={jobDetaileData[0].website}></a>
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-[6px] py-10 md:py-[48px] px-6 lg:px-[48px] flex flex-col gap-10">
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
            <h2 className="text-[#19202D] font-bold text-[20px] whitespace-nowrap">
              {jobDetaileData[0].position}
            </h2>
            <p className="text-[#5964E0] font-bold text-[14px]">
              {jobDetaileData[0].location}
            </p>
          </div>
          <button
            className="text-white font-bold text-base bg-[#5964E0] pt-4 pb-3 w-full rounded-[5px] 
          md:w-[20.46%] "
          >
            Apply Now
          </button>
        </div>

        <p className="text-base font-normal text-[#6E8098] leading-[1.62]">
          {jobDetaileData[0].description}
        </p>
        <Requirements itemContent={jobDetaileData[0].requirements} />
        <RoleSection roleContent={jobDetaileData[0].role} />
      </div>
    </div>
  );
};

export default JobDetail;
