import React, { FC } from "react";

interface Props {
  heading: string;
  text: string;
  number: number;
  borderStatus?: boolean;
}

const QuarterBox: FC<Props> = ({
  heading,
  text,
  number,
  borderStatus = true,
}) => {
  return (
    <div
      className={`rounded-md w-full px-6 py-8 md:py-6 relative -z-10 ${
        borderStatus === true ? "border" : ""
      }`}
    >
      <h4 className="font-bold text-lg">{heading}</h4>
      <p className="mt-2 text-slate-600">{text}</p>
      <span className="absolute top-2 right-10 text-gray-200 font-bold text-9xl -z-10">
        {number}
      </span>
    </div>
  );
};

export default QuarterBox;
