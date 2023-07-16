import React from "react";
import Wrapper from "../shared/Wrapper";
import Logo from "@/public/panaverse-logo.webp";
import Image from "next/image";
import { ImFacebook, ImGithub, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t-2 ">
      <Wrapper>
        <div className="flex flex-col md:flex-row py-12 gap-y-6 md:gap-x-10">
          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <Image src={Logo} className="h-22 w-36 " alt="Panaverse Logo" />
            <p className="mt-4 text-xl text-slate-700">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>
            <div className="flex gap-x-6 mt-4 text-4xl text-white">
              <Link href="https://www.facebook.com/">
                <ImFacebook className="rounded-full bg-gradient-to-b from-[#5DDDF5] to-[#296570] p-2" />
              </Link>
              <Link href="https://www.github.com/">
                <ImGithub className="rounded-full bg-gradient-to-b from-[#5DDDF5] to-[#296570] p-2" />
              </Link>
              <Link href="https://www.youtube.com/">
                <ImYoutube className="rounded-full bg-gradient-to-b from-[#5DDDF5] to-[#296570] p-2" />
              </Link>
              <Link href="https://www.twitter.com/">
                <ImTwitter className="rounded-full bg-gradient-to-b from-[#5DDDF5] to-[#296570] p-2" />
              </Link>
            </div>
          </div>
          {/* Middle Side */}
          <div className="w-full md:w-1/4 ">
            <h3 className="pb-3 font-semibold text-lg ">Programs</h3>
            <p className="text-slate-700">
              Web 3.0 and Metaverse Developer <br />
              Artificial Intelligence <br />
              Cloud-Native Computing <br />
              Ambient Computing and IoT <br />
              Genomics and Bioinformatics <br />
              Network Programmability and Automation
            </p>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-1/4">
            <h3 className="pb-3 font-semibold text-lg ">Pages</h3>
            <p className="text-slate-700">
              Home <br />
              Quarter 1 <br />
              Quarter 2 <br />
              Quarter 3
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
