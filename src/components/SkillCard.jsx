import React from "react";
function SkillCard(props) {
  return (
    <div className="p-4 dark:border dark:border-gray-900 w-48 h-48 hover:border-none hover:w-56 hover:h-56   border rounded-md m-2 shadow-sm hover:rotate-12 hover:shadow-2xl ease-in-out duration-500 hover:text-red-600 hover:bg-gray-900">
      <div className="flex flex-col justify-between h-full items-center">
        <span className="text-xs w-full text-center flex items-center justify-center gap-2">
          {props.skillName}
        </span>
        <div className=" flex flex-col items-center justify-center text-6xl">
          <h1 className="title text-2xl">{props.tech}</h1>
          <div className="hover:animate-pulse">{props.img}</div>
        </div>
        <a
          href={props.skillLink}
          className=" p-2 text-xs cursor-pointer hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default SkillCard;
