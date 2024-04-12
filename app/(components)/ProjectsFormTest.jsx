"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ProjectsFormTest() {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/ProjectsTest", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-type": "application/json",
    });

    console.log(res)

    if (!res.ok) {
      throw new Error("Failed to create Ticket");
    }

    router.refresh();
    router.push("/");

    console.log("submitted");
  };

  const startingProjectData = {
    projectTitle: "",
    shortDescription: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "SOL",
  };

  const [formData, setFormData] = useState(startingProjectData);

  return (
    <div className="flex flex-col text-white">
      ProjectsFormTest
      <form onSubmit={handleSumbit}>
        <label htmlFor="">Title</label>
        <input
          className="text-black"
          type="text"
          name="projectTitle"
          id="projectTitle"
          onChange={handleChange}
          required={true}
          value={formData.projectTitle}
        />
        <label htmlFor="">Title</label>
        <textarea
          className="text-black"
          type="text"
          name="projectTitle"
          id="projectTitle"
          onChange={handleChange}
          required={true}
          value={formData.projectTitle}
        />
        <input
          type="submit"
          className="text-white font-bold bg-backgroundMain cursor-pointer"
          value={"Create project"}
        />
      </form>
    </div>
  );
}

export default ProjectsFormTest;
