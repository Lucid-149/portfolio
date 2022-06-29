import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin, SiUpwork } from "react-icons/si";

export default function Social() {
  return (
    <div>
      <div className=" min-h-screen flex flex-col fixed right-0 top-0 items-center justify-center p-4 dark:text-gray-500 z-30 text-2xl gap-3 my-3">
        <a
          className="hover:text-gray-500 hover:text-3xl ease-in-out duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/muemajk"
        >
          <AiOutlineGithub />
        </a>
        <a
          className="hover:text-gray-500 hover:text-3xl ease-in-out duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <SiUpwork />
        </a>
        <a
          className="hover:text-gray-500 hover:text-3xl ease-in-out duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/james-kennedy-a85a98172"
        >
          <SiLinkedin />
        </a>
      </div>
    </div>
  );
}
