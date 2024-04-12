import { icon } from "@fortawesome/fontawesome-svg-core";
import { faHome, faSign } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogInSignUp from "../(components)/LogInSignUp";
import Link from "next/link";
import React from "react";
import AccountStatus from "../(components)/AccountStatus";


function Navigation() {
  let user = false;

  return (
    <div
      className="flex flex-col justify-center items-center bg-backgroundMain max-w-full max-h-[250px] bg-cover "
      style={{
        background: "transparent",
      }}
    >
      <div className=" flex max-w-full w-full flex-grow items-center max-h-[200px] ">
        <img
          className="max-h-full max-w-[200px] m-auto rounded-[50%]"
          src="https://pbs.twimg.com/profile_images/1746882725288513536/TJ0H9bub_400x400.jpg"
          alt=""
        />
        {user ? (
          <>
            <div className="absolute right-0 m-auto p-10 flex max-w-[300px] w-ful text-white"><LogInSignUp/></div>
          </>
        ) : (
          <AccountStatus />
        )}
      </div>
      <div className="font text-[25px] font-400 text-default-text uppercase">
        For many men, the acquisition of wealth does not end their troubles, it
        only changes them.
      </div>
    </div>
  );
}

export default Navigation;
