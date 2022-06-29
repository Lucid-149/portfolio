import React from "react";
import Profile from "../assets/profile.png";
import { BiDownload, BiPhoneCall, BiSpaceBar } from "react-icons/bi";
export default function Home() {
  return (
    <div className="  dark:text-white text-black flex w-screen h-screen mx-auto relative justify-center items-start">
      <div className=" flex justify-between flex-wrap w-full ">
        <div className=" max-w-lg flex flex-col items-start mx-auto">
          <div className=" text-9xl">
            <BiSpaceBar className="text-gray-600 ease-in-out duration-700 hover:translate-y-6" />
          </div>
          <h1 className="title text-5xl m-2 text-red-900 dark:text-red-500">
            Software Developer
          </h1>
          <p className=" m-2 leading-tight text-xs">
            Skilled blockchain developer with 3 years of experience, solid
            leadership skills, and unrivaled building skills. Competent in cloud
            platforms (GCP and AWS), databases (Mongo, MySQL, and SQL), tools
            (VS Code and Eclipse IDE), version control (Git), Ethereum tools
            (Ganache CLI, Truffle, Solidity, Ethereum Virtual Machine, and
            Remix), debugging, and product testing. Additionally proficient at
            working on blockchain projects using tools such as Moralis, Block
            Native, Etherscan, and Nansen Ready to take on assigned duties,
            report on the progress of the job and deliver work on time and work
            as per the set guidelines.
          </p>
          <div className="flex flex-wrap m-2 gap-2 text-sm">
            <button className=" p-4 border my-2  border-gray-900 flex text-gray-900 dark:text-gray-300 items-center font-regular hover:shadow-lg hover:bg-gray-900 ease-in-out duration-300 hover:text-white gap-2 rounded-md">
              {" "}
              <BiDownload className="text-2xl" /> Download CV
            </button>
            <button className=" p-4 my-2 text-white font-light hover:bg-gray-600 hover:shadow-lg ease-in-out duration-300  bg-gray-800 flex items-center gap-4 rounded-md">
              {" "}
              <BiPhoneCall className="text-2xl" /> Contact Me
            </button>
          </div>
        </div>
        <div className=" h-full mx-auto max-w-2xl pt-10 flex items-center justify-center flex-col">
          <div className="flex flex-col items-start pb-9">
            <span className="title text-5xl text-transparent bg-clip-text bg-gradient-to-br from-red-900 to-red-600">
              James Muema
            </span>
          </div>
        </div>
      </div>
      <img
        className=" w-1/2 sm:w-1/3 mb-4 dark:border-gray-800 z-10 absolute bottom-0  hover:w-1/4 ease-in-out duration-500 object-cover rounded-sm "
        src={Profile}
        alt="Profile"
      />
      <div className=" w-60 h-2 absolute rounded-full bottom-0 z-0 shadow-2xl"></div>
    </div>
  );
}
