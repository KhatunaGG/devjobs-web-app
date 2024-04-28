import { BgFooterPropsType, DataType } from "../Interface";
import Button from "./Button";



const BgFooter = ({ jobDetaileData, isDark }: BgFooterPropsType) => {
  console.log(jobDetaileData, "from bgfooter");

  return (
    <div
      className={`${
        isDark ? "bg-[#19202D]" : "bg-[#fff]"
      } transition duration-500 w-full py-[25px] md:py-[23px] lg:py-[23px] mt-10 md:mt-[30px] lg:mt-[33px] `}
    >
      <div
        className={` container w-[87.2%] md:w-[89.71%] lg:w-[50.69%] mx-auto 
        `}
      >
        <div className={` w-full flex flex-row items-center justify-between`}>
          {jobDetaileData.length > 0 && (
            <div
              className={` hidden md:flex md:flex-col md:gap-y-3 lg:flex lg:flex-col lg:gap-y-3 `}
            >
              <h2
                className={`${
                  isDark ? "text-[#fff]" : "text-[#19202D]"
                } font-bold text-[20px] whitespace-nowrap`}
              >
                {jobDetaileData[0].position}
              </h2>

              <h3
                className={`${
                  isDark ? "text-[#9DAEC2]" : "text-[#6E8098]"
                } font-normal text-base`}
              >
                {jobDetaileData[0].company}
              </h3>
            </div>
          )}

          <div className="w-full md:w-[32%] lg:w-[32%]">
            <Button text="Apply Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgFooter;
