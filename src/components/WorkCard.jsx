import React from "react";
import { BiCodeBlock } from "react-icons/bi";

function WorkCard(props) {
  return (
    <div className=" relative max-h-96 min-h-fit border max-w-[384px] p-8 overflow-scroll overflow-x-hidden rounded-md dark:border-gray-900 hover:shadow-2xl hover:bg-gray-900 hover:text-white ease-in-out duration-500 cursor-pointer dark:bg-transpartent">
      <h1 className="dark:text-gray-400 uppercase title text-5xl">
        {props.title}
      </h1>
      <span className=" uppercase font-semibold text-xs dark:text-red-600">{props.date}</span>
      <div className=" overflow-auto">

      <p className="font-light text-sm dark:text-white ">{props.skills}</p>
      </div>
      <BiCodeBlock className="absolute top-6 right-6 text-7xl text-gray-400 dark:text-gray-800" />
    </div>
  );
}

export default WorkCard;
