import React from "react";
import SkillCard from "./SkillCard";
import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaEthereum,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io";
import { SiSolidity } from "react-icons/si";
export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center dark:text-gray-200">
      <h1 className="title text-5xl">Programing Languages</h1>
      <p className=" w-3/5 text-sm text-center py-10 font-light italic">
        “When to use iterative development? You should use iterative development
        only on projects that you want to succeed.” – Martin Fow
      </p>
      <div className="mx-auto py-10 w-full flex flex-wrap items-center justify-center dark:text-gray-200">
        <SkillCard
          skillName="5Years Experience"
          skillLink="/home"
          tech="JAVASCRIPT"
          img={<IoLogoJavascript />}
        />
        <SkillCard
          skillName="5Years Experience"
          skillLink="/home"
          tech="Python"
          img={<IoLogoPython />}
        />
        <SkillCard
          skillName="4Years Experience"
          skillLink="/home"
          tech="Php"
          img={<FaPhp />}
        />
        <SkillCard
          skillName="5Years Experience"
          skillLink="/home"
          tech="Html - CSS"
          img={
            <div className="flex">
              <IoLogoHtml5 />
              <IoLogoCss3 />
            </div>
          }
        />

        <SkillCard
          skillName="2Years Experience"
          skillLink="/home"
          tech="Solidity"
          img={<SiSolidity />}
        />
      </div>
      <h1 className="title text-5xl">Frameworks</h1>

      <div className="mx-auto py-10 w-full flex flex-wrap items-center justify-center dark:text-gray-200">
        <SkillCard
          skillName="Frontend Development"
          skillLink="/home"
          tech="React"
          img={<FaReact />}
        />
        <SkillCard
          skillName="Frontend Development"
          skillLink="/home"
          tech="Vue"
          img={<FaVuejs />}
        />
        <SkillCard
          skillName="Backend Development"
          skillLink="/home"
          tech="Laravel"
          img={<FaLaravel />}
        />
        <SkillCard
          skillName="Backend Developer"
          skillLink="/home"
          tech="NodeJs"
          img={<FaNodeJs />}
        />
        <SkillCard
          skillName="Web3 Development"
          skillLink="/home"
          tech="Blockchain"
          img={<FaEthereum />}
        />
      </div>
    </div>
  );
}
