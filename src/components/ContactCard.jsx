import React from "react";

export default function ContactCard(props) {
  return (
    <div className=" m-2 flex items-center justify-center flex-col">
      <a
        href={props.link}
        className=" border overflow-hidden p-3 dark:text-white hover:bg-slate-800 rounded-md flex items-center flex-col ease-in-out duration-700 justify-center m-2 hover:text-white dark:border-gray-800 text-gray-900"
      >
        <div className="flex  items-center justify-center">
          {props.icon}

          <span className="flex items-center gap-2 text-sm  font-light hover:underline">
            {props.detail}
          </span>
        </div>
      </a>
    </div>
  );
}
