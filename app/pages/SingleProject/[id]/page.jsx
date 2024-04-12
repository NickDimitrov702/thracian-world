import React from "react";
import ProjectPageTile from "../../../(components)/ProjectPageTile";
const getOne = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
      cache: "no-store",
    });

    console.log(res);
    return res.json();
  } catch (error) {
    console.log("Fail", error);
  }
};

export default async function SingleProject({ params }) {
  const { id } = params;
  const { project } = await getOne(id);
  const { projectTitle, logo, shortDescription, description, x_social_link } = project;

  return (
    <div>
      <ProjectPageTile
        id={id}
        projectTitle={projectTitle}
        logo={logo}
        shortDescription={shortDescription}
        description={description}
        x_social_link={x_social_link}
      />
    </div>
  );
}
