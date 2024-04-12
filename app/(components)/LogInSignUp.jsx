import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSign } from "@fortawesome/free-solid-svg-icons";

function LogInSignUp() {
  return (
    <div className="flex max-w-[300px] w-full justify-between">
      <div className="flex m-auto justify-around w-[300px]">
        <Link className="flex items-center justify-between max-w-[100px] w-full" href={"/SignInForm"}>
          <FontAwesomeIcon icon={faSign} className="icon" />
          <p>Sign Up</p>
        </Link>
        <Link href={"/SigningForm"}>
          <div>Sign in</div>
        </Link>
      </div>
    </div>
  );
}

export default LogInSignUp;
