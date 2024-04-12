import React from "react";
import ProjectTile from "../(components)/ProjectTile";
import NewsComponent from "../(components)/NewsComponent";
import ProjectsFormTest from "../(components)/ProjectsFormTest";
import Project from "../(models)/Project";
import Link from "next/link";
import { getCoinData } from "../(models)/CoinMarketAPI/CoinMarket";
import Landing from "../Landing/page";

export const getProject = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/ProjectsTest", {
      cache: "no-store",
    });

    console.log(res);
    return res.json();
  } catch (error) {
    console.log("Fail", error);
  }
};

const Home = async () => {
  const data = await getProject();
  const projects = data.projects;
  let user = false;

  const slogan = [
    {
      id: 1,
      text: "Unlock the Secrets of Crypto with Thracian World: Where Experience Meets Education.",
    },
    {
      id: 2,
      text: "Empower Yourself with Crypto Knowledge: Trust Thracian World's 4 Years of Expertise.",
    },
    {
      id: 3,
      text: "Discover the Power of Crypto Education: Backed by Thracian World's Tested Projects.",
    },
  ];

  return (
    <div className="max-w-full flex flex-col max-h-full flex-wrap w-full">
      <div className="flex overflow-auto max-w-full w-full h-full m-auto max-h-full">
        {/* <NewsComponent /> */}
      </div>
      {user ? (
        <Landing />
      ) : (
        <div className="flex flex-wrap m-auto max-w-[1500px] w-full">
          {projects
            // .filter((projects) => projects.category === uniqueCategories)
            .map((filterProject, _index) => (
              <ProjectTile id={_index} key={_index} projects={filterProject} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
