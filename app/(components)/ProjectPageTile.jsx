import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { TbWorldDollar } from "react-icons/tb";
import Link from "next/link";

function ProjectPageTile({
  projectTitle,
  logo,
  shortDescription,
  description,
  x_social_link,
}) {
  return (
    <div className="max-w-[1800px] m-auto mt-[20px] flex flex-col items-center justify-evenly gradiant-layout-bg p-3">
      <div className="flex flex-col items-center">
        <div className="text-white font-bold text-[25px]">{projectTitle}</div>
        <div className="flex max-w-[400px] w-full justify-evenly m-2">
          <Link href={`${x_social_link}`}>
            <FaSquareXTwitter size={24} className="text-white" />
          </Link>
          <Link href={"/"}>
            <FaTelegramPlane size={24} className="text-white" />
          </Link>
          <Link href={"/"}>
            <TbWorldDollar size={24} className="text-white" />
          </Link>
        </div>
      </div>
      <div
        style={{
          background:
            "url(https://assets-global.website-files.com/65c40424140167a7aaf4c471/65c40424140167a7aaf4c5f2_web-inf2.png)",
          backgroundPositionX: "-165px",
          backgroundPositionY: "-185px",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center p-2 m-10 justify-evenly w-full border"
      >
        <div className="max-w-[500px] flex">
          <img className="rounded-[50%] border p-2" src={logo}></img>
        </div>
        <div className="font uppercase font-900 flex flex-row-reverse w-full justify-evenly  max-w-full text-[22px] text-white">
          <div className="flex flex-col max-w-[600px] text-[16px] border p-2">
            <h2 className="font-bold underline mb-1">Statistics</h2>
            <div className="flex w-[300px] justify-between">
              Coin: <p className="text-red-400">$MCC</p>
            </div>
            <div className="flex w-[300px] justify-between">
              Open Beta: <p className="text-red-400">2 IS LIVE! </p>
            </div>
            <div className="flex w-full justify-between">
              Type:{" "}
              <p className="text-red-400 ml-2">
                1st/3rd Person Shooter, Teritorial Shooter PvPvE
              </p>
            </div>
            <div className="flex w-[300px] justify-between">
              Open Beta:<p className="text-red-400">2 IS LIVE! </p>
            </div>
            <div className="flex w-[300px] justify-between">
              Devs: <p className="text-red-400">@Studio369</p>
            </div>
          </div>
          {shortDescription}
        </div>
      </div>
      {/* Project content here */}
      <div className="font text-[50px] text-white font-900 "></div>
      <div className="max-w-[900px] p-2 m-auto text-white text-[25px]">
        {description}
      </div>
    </div>
  );
}

export default ProjectPageTile;
