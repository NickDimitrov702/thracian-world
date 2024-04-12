import Link from "next/link";
import React from "react";

function AccountStatus() {
  return (
    <div className="flex border rounded-lg flex-col max-w[350px] p-2 m-10 absolute right-0">
      <div className="max-w-[110px] m-2">
        <Link href={"/AccountPage"}>
          <img
            className="rounded-[100%] w-full h-[90px] border"
            src="https://cdn.midjourney.com/c32d82ea-f8f8-400c-96ef-4d83c8bfcc2d/0_2.webp"
          ></img>
        </Link>
      </div>
      <div className="text-white uppercase">
        <div>NickSonMan21</div>
      </div>
    </div>
  );
}

export default AccountStatus;
