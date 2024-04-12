import React from "react";
import Dashboard from "../(components)/Dashboard";
import ListOfProjects from "../(components)/ListOfProjects";
function AccountPage() {
  return (
    <div className="text-white max-w-[1900px] flex items-center justify-center w-full m-auto">
      <div className="max-w-[1700px] w-full m-auto flex flex-row-reverse justify-between items-start">
        <Dashboard />
        <ListOfProjects />
      </div>
    </div>
  );
}

export default AccountPage;
