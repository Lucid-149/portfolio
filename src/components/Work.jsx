import React from "react";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="title text-6xl text-transparent bg-clip-text bg-gradient-to-br from-red-900 to-red-600 pb-10">
        Work Experience
      </h1>
      <div className="mx-auto p-2 flex flex-wrap gap-4 justify-center ">
        <WorkCard
          title="Software Developer"
          date="Upwork 2020-present"
          skills="E-commerce Website Development| Blockchain Decoder Application| Blockchain extraction &
        Analysis| Blockchain Molaris API Development| ERC 20 Token Development| Blockchain
        Protocol Development| Trading Bot development
        • Undertook initial client evaluation and analysis necessary for starting the research process.
        • Defined Blockchain Development Structure for product teams, and successfully navigated
        the project development cycle
        • Heavily involved in writing and deploying smart contracts"
        />
        <WorkCard
          title="NFT Development"
          date="Freelance 2021- To date"
          skills="Undertook individualized NFT Development and implementation projects"
        />
        <WorkCard
          title="Software Engineer Intern"
          date="Bata Shoe Kenya PLC | Kiambu Jan 2021 – Dec 2021"
          skills="• Wrote clean, clear, and well-tested code for various projects such as blockchain e-commerce,
          web e-commerce, automation, and blogs
          Python, JavaScript, Golang | Database Management Software| Portable Code Writer| HTML &
          XML| Algorithm Implementation| Software Applications| An understanding of coding
          languages| Cryptography| Data structures| Basic architectures| Communication architectures|
          Web development| Smart contract development| Flexibility
          Code Review| Problem solving and creativity| People skills and management| Client
          relationship| Telephone etiquette| Flexibility| Time Management| Team Player
          •
          • Collaborated with other developers to identify and alleviate a number of bugs and errors in
          software.
          • Used development tools such as Figma and Jupyter notebook on regular basis.
          • Handled scripting tasks for debugging and automation using vs code
          • Designed and developed reports using SQL server reporting services."
        />
        <WorkCard
          title="Software Engineer"
          date="Armstone Ford Limited| Nairobi Sep 2019 - Oct 2020"
          skills="• Reviewed project specifications and designed technology solutions that met or exceeded
          performance expectations.
          • Checked client code for bugs and weaknesses using approved troubleshooting methods.
          • Communicated technical development stages and provided design support to businesses and
          other stakeholders encouraging participation for on-time execution.
          • Created procedures for system monitoring, recovery, backup, and optimization.
          • Developed holistic systems in programming languages, including Python and JavaScript"
        />
        <WorkCard
          title="Vendor Relations Manager"
          date="Jumia Kenya| Nairobi Oct 2018 - Mar 2019"
          skills="• Generated weekly, monthly, quarterly and yearly reports on vendor communication
          operations.
          • Developed productive relationships with key account holders.
          • Participated in continuous improvement by generating suggestions, and engaging in problemsolving activities to support teamwork.
          • Increased vendor satisfaction by resolving payout issues and order cancellation"
        />
      </div>
    </div>
  );
}
