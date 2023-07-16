import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";

const quarterBoxData = [
  {
    heading: "Quarter I",
    text: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    heading: "Quarter II",
    text: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    heading: "Quarter III",
    text: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreCourses = () => {
  return (
    <section className="mt-12 lg:mt-20">
      <Wrapper>
        <div className="max">
          <h4 className="text-[#00616C] font-bold">Program of Studies</h4>
          <h2 className="text-4xl font-bold leading-tight">
            Core Courses <br /> (Common in All Specializations):
          </h2>
          <p className="mt-4 text-xl text-slate-700 max-w-screen-sm">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-5">
            <Button text={"Read More"} />
          </div>
        </div>
        {/* Boxes */}
        <div className="flex flex-col gap-y-4 my-6 max-w-sm mx-auto md:max-w-screen-xl md:flex-row  md:gap-x-4">
          {quarterBoxData.map((item) => (
            <QuarterBox
              key={item.number}
              heading={item.heading}
              text={item.text}
              number={item.number}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreCourses;
