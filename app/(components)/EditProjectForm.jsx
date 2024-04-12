"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditProjectForm({
  id,
  projectTitle,
  shortDescription,
  description,
  logo,
  updatedAt,
}) {
  const [newTitle, setNewTitle] = useState(projectTitle);
  const [newLogoImg, setNewLogoImg] = useState(logo);
  const [newShortDescr, setNeShortDescr] = useState(shortDescription);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
          newShortDescr,
          newLogoImg,
        }),
      });

      if (!res.ok) {
        throw new Error("Faild to do what you initially thought you can do");
      }

      router.refresh();
      router.push(`/EditProject/${id}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col max-w-[900px] m-auto w-full">
      <div className="text-white font-bold text-[24px]">{projectTitle}</div>
      <div className="text-white font-bold text-[15px]">{updatedAt}</div>

      <form className="bg-backgroundMain w-full m-auto rounded-lg p-3" onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-full justify-center items-center">
          <label className="text-white font-bold" htmlFor="">Title</label>
          <input
            className="m-2 max-w-[1000px] max-h-[450px] h-[30px] w-full rounded-lg  text-black p-2"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            name="projectTitle"
            id="projectTitle"
            required={true}
          />
          <label className="text-white font-bold">Logo Image</label>
          <input
            onChange={(e) => {
              setNewLogoImg(e.target.value);
            }}
            className="m-2 max-w-[1000px] max-h-[450px] h-[30px] w-full  text-black rounded-lg p-2"
            type="text"
            name="logo"
            id="logo"
            value={newLogoImg}
            required={true}
          />
          <textarea
            className="max-w-[1000px] max-h-[100px] w-full p-2   m-3 rounded-lg text-black"
            onChange={(e) => {
              setNeShortDescr(e.target.value);
            }}
            value={newShortDescr}
            placeholder="Short Description"
            name="shortDescription"
            id="shortDescription"
            cols="30"
            rows="10"
          ></textarea>
          <textarea
            className="max-w-[1000px] max-h-[100px] w-full p-2 m-3 rounded-lg text-black"
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
            value={newDescription}
            placeholder="Description"
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          {/* List of Categories to select from the available categories in the webpage */}

          <input
            type="submit"
            value={"Edit Project"}
            className="cursor-pointer bg-backgroundMain p-2 m-2 border text-white rounded-lg max-w-[150px]"
          ></input>
        </div>
      </form>
    </div>
  );
}
