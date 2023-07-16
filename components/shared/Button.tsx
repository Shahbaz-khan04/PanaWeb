import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-[#00616C] font-medium text-lg text-white px-7 py-3 rounded-full shadow-[#00616C] hover:scale-105 duration-300 hover:shadow-lg">
      {text}
    </button>
  );
};

export default Button;
