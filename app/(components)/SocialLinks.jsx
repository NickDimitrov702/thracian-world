import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSign } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function SocialLinks() {
  return (
    <div className="flex max-w-[300px] w-full">
      <div className="flex items-center justify-evenly max-w-[300px] w-full ">
        <Link className="" href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
        </Link>
        <a target="_blank" href={"https://twitter.com/0xThracian"}>
          <FontAwesomeIcon icon={faXTwitter} className="icon"></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
