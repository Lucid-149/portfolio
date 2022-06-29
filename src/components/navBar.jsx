import React from "react";
import { BiBarcode, BiAt, BiHdd, BiBookBookmark } from "react-icons/bi";
export default function navBar() {
  return (
    <div className=" fixed bottom-0 left-0 right-0 flex  lg:justify-start md:justify-center sm:justify-center  z-30">
      <div className=" dark:bg-gray-900 bg-white dark:text-gray-700 rounded-full shadow-2xl  max-w-xs m-6 flex justify-center items-center p-4 hover:-translate-y-3 ease-in-out duration-500  ">
        <a href="#Home" className=" text-2xl hover:text-red-500  p-2">
          <BiBarcode />
        </a>
        <a href="#Work" className=" text-2xl hover:text-red-500  p-2">
          <BiHdd />
        </a>
        <a href="#Skills" className=" text-2xl hover:text-red-500  p-2">
          <BiBookBookmark />
        </a>
        <a href="#Contact" className=" text-2xl hover:text-red-500  p-2">
          <BiAt />
        </a>
      </div>
    </div>
  );
}
