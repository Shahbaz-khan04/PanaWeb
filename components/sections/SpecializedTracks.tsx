"use client";

import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";
import Web3Img from "@/assets/images/metaverse.webp";
import AiImg from "@/assets/images/ai.webp";
import CloudImg from "@/assets/images/cloud.webp";
import AmbientImg from "@/assets/images/ambient.webp";
import GeonomicsImg from "@/assets/images/genomics.webp";
import NetworkImg from "@/assets/images/network.webp";
import Image from "next/image";
import { useState } from "react";

const specializedTracksData = [
  {
    heading: "Quarter IV",
    text: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    number: 4,
  },
  {
    heading: "Quarter V",
    text: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    number: 5,
  },
];
const specializedProgramsData = [
  {
    slug: "wmd",
    heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
    image: Web3Img,
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    quarters: [
      {
        heading: "Quarter IV",
        text: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        heading: "Quarter V",
        text: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
    image: AiImg,
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    quarters: [
      {
        heading: "Quarter IV",
        text: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        heading: "Quarter V",
        text: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cn",
    heading: "Cloud-Native Computing Specialization",
    image: CloudImg,
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    quarters: [
      {
        heading: "Quarter IV",
        text: "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        heading: "Quarter V",
        text: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "iot",
    heading: "Ambient Computing and IoT Specialization",
    image: AmbientImg,
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    quarters: [
      {
        heading: "Quarter IV",
        text: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        heading: "Quarter V",
        text: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "geo",
    heading: "Genomics and Bioinformatics Specialization",
    image: GeonomicsImg,
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    quarters: [
      {
        heading: "Quarter IV",
        text: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        heading: "Quarter V",
        text: "io-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "npa",
    heading: "Network Programmability and Automation Specialization",
    image: NetworkImg,
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    quarters: [
      {
        heading: "Quarter IV",
        text: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        heading: "Quarter V",
        text: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];

const SpecializedTracks = () => {
  const [selectedItem, setselectedItem] = useState("wmd");
  const selectedProgramData = specializedProgramsData.find(
    (item) => item.slug === selectedItem
  );
  console.log(selectedItem);
  return (
    <section className="mt-12 lg:mt-20">
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Specialized Tracks:
          </h2>
          <p className="mt-4 text-xl text-slate-700 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="flex flex-col-reverse items-start my-6 gap-y-4 lg:flex-row lg:gap-x-4 ">
          {/* Content Left */}
          <div className="shadow-lg rounded-xl border px-8 py-8 basis-3/5 sticky top-24 -z-10">
            <h4 className="text-[#00616C] text-lg font-medium">
              Specialized Program
            </h4>
            <h2 className="mt-2 text-4xl font-bold">
              {selectedProgramData?.heading}
            </h2>
            <p className="mt-4 text-xl text-slate-700 max-w-screen-sm">
              {selectedProgramData?.description}
            </p>
            <button className="text-[#00616C] text-lg mt-4 font-bold underline flex items-center gap-x-1">
              Learn More
              <svg
                width="10"
                height="12"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="mt-8 flex flex-col md:flex-row">
              {selectedProgramData?.quarters.map((item) => (
                <QuarterBox
                  key={item.number}
                  heading={item.heading}
                  text={item.text}
                  number={item.number}
                  borderStatus={false}
                />
              ))}
            </div>
          </div>
          {/* Content Right */}
          <div className="space-y-4 px-6 basis-2/5">
            {specializedProgramsData.map((item, index) => (
              <>
                <div
                  onClick={() => setselectedItem(item.slug)}
                  key={index}
                  className="flex gap-x-3 cursor-pointer border-b-2 pb-4 hover:scale-105 duration-300"
                >
                  <div className="flex-shrink-0 w-36">
                    <Image
                      src={item.image}
                      alt="Course Image"
                      className="h-24 object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#00616C] font-semibold">
                      Specialized Program
                    </h4>
                    <h3 className="text-lg font-semibold">{item.heading}</h3>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
