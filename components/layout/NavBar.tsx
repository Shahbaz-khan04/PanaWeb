"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  function showDropdown() {
    setDropdownVisible(true);
  }

  function hideDropdown() {
    setDropdownVisible(false);
  }
  return (
    <nav className="flex space-x-4">
      <ul>
        <Link href="/" className="hover:text-[#00616C]">
          Home
        </Link>
      </ul>
      <ul>
        <div
          className="relative hover:text-[#00616C]"
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <div className="flex items-center gap-x-1 cursor-pointer">
            <button className="mb-3 ">Courses</button>
            <svg
              className="mb-2 "
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.55554L4.5 5.44443L8 1.55554"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
          {isDropdownVisible && (
            <div className="absolute right-0 w-72 rounded-md border bg-white">
              {/* Dropdown content */}
              <div className="flex flex-col font-light text-black text-sm py-2">
                <Link
                  href=""
                  className="py-2 px-4 hover:bg-gray-200 hover:text-[#00616C]"
                >
                  Web 3.0 and Metaverse Developer
                </Link>

                <Link
                  href=""
                  className="py-2 px-4 hover:bg-gray-200 hover:text-[#00616C]"
                >
                  Artificial Intelligence
                </Link>

                <Link
                  href=""
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointerhover:text-[#00616C]"
                >
                  Cloud-Native Computing
                </Link>

                <Link
                  href=""
                  className="py-2 px-4 hover:bg-gray-200 hover:text-[#00616C]"
                >
                  Ambient Computing and IoT
                </Link>
                <Link
                  href=""
                  className="py-2 px-4 hover:bg-gray-200 hover:text-[#00616C]"
                >
                  Genomics and Bioinformatics
                </Link>
                <Link
                  href=""
                  className="py-2 px-4 hover:bg-gray-200 hover:text-[#00616C]"
                >
                  Network Programmability and Automation
                </Link>
              </div>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
