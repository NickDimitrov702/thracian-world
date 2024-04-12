import React from "react";
import Link from "next/link";
import { getProject } from "../Home/page";
import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiEdit } from "react-icons/ci";
import RemoveBtn from "./RemoveBtn";
async function ListOfProjects({ params }) {
  const data = await getProject();
  const projects = data.projects;

  console.log(
    projects.map((updatedAt) => {
      const upd = updatedAt.updatedAt;

      return upd;
    })
  );
  return (
    <div className="flex justify-center items-center h-full max-w-[880px] mb-auto ml-auto mr-auto w-full">
      <div className="m-auto max-w-[1500px] w-full max-h-full overflow-auto bg-backgroundMain border rounded-[25px]">
        <div className="flex w-full text-center">
          <div className="p-2 bg-backgroundMain border w-full">Title</div>
          <div className="p-2 bg-backgroundMain border w-full">
            Data base Id
          </div>
          <div className="p-2 bg-backgroundMain border w-full">Updated At</div>
        </div>
        <div className="max-w-[1200px] ml-auto mr-auto">
          {projects.map((p) => (
            <div
              key={p._id}
              className="grid grid-cols-3 w-full p-2 justify-items-center"
            >
              <div className="text-white w-full">{p.projectTitle}</div>
              <div>{p._id}</div>
              {p.updatedAt && (
                <>
                  <div className="flex justify-between w-full">
                    <span>Date: {p.updatedAt.split("T")[0]}</span>
                    <span>Time: {p.updatedAt.split("T")[1].split(".")[0]}</span>
                    <Link href={`http://localhost:3000/EditProject/${p._id}`}>
                      <CiEdit />
                    </Link>
                    <RemoveBtn key={p._id} id={p._id} />
                  </div>
                </>
              )}
              <div className="max-w-[50px] w-[50px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListOfProjects;
