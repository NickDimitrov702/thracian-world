import React from "react";
import EditProjectForm from "../../(components)/EditProjectForm";

const getProjectById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Not Ok Bro");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProject({ params }) {
  const { id } = params;
  const { project } = await getProjectById(id);
  console.log(project);
  const { projectTitle, shortDescription, logo, description, updatedAt } = project;
  return (
    <EditProjectForm
      id={id}
      projectTitle={projectTitle}
      logo={logo}
      shortDescription={shortDescription}
      description={description}
      updatedAt={updatedAt}
    />
  );
}
