import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import HeroPoster from "@/assets/images/heroPoster.png";
import Button from "../shared/Button";

function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-[#00616C] font-bold">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl font-bold leading-tight">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-4 text-xl text-slate-700">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet. <br />
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-6">
              <Button text={"Read More"} />
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
