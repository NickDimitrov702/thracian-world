import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

function ProjectTile({ projects }) {
  return (
    <div className="flex flex-col justify-center  max-w-[360px] max-h-[500px] h-[410px] w-full p-1 border bg-backgroundMain rounded-[10px] mt-[20px] m-auto">
      <div className="flex justify-center p-2">
        <Link
          href={`http://localhost:3000/pages/SingleProject/${projects._id}`}
        >
          <img
            className="rounded-[100%] w-[160px] h-[150px]"
            src={projects.logo}
            alt="no image"
          />
        </Link>
      </div>
      <div className="text-white font-bold bg-backgroundMain uppercase p-2">
        {projects.projectTitle}
      </div>
      <div className="bg-backgroundMain text-white p-2 max-h-[50px] h-full overflow-hidden">
        {projects.shortDescription}
      </div>
      <p className="text-white font-bold p-2">Action: Claim now</p>
      <div className="relative flex bg-backgroundMain items-center max-h-[100px] w-full justify-end border-t-[1px] border-white-200 p-2 pt-5">
        {/* <div className="">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
        </div> */}
        <div className="p-2">
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
        <div
          id="project_tile_tag"
          className="absolute font-bold text-white bg-green-200 p-2 left-[1px] rounded-e-xl"
        >
          Featured
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
