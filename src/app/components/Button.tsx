
import { ButtonPropsType } from "../Interface";

const Button = ({ text }: ButtonPropsType) => {
  return (
    <button
      className={`${text === "Load More" && 'w-[full]'} ${text === "Load More" && 'md:w-[20%]'} ${text === "Load More" && 'md:w-[20%]'} bg-[#5964E0] w-full hover:bg-[#939BF4] text-base text-white font-bold color-white 
    py-4 px-[28px] rounded-[5px] whitespace-nowrap `}
    >
      {text}
    </button>
  );
};

export default Button;