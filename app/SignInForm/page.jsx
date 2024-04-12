import React from "react";

function SigInForm() {
  return (
    <div className="flex justify-center h-screen mt-10 bg-no-repeat bg-full bg-cover" style={{backgroundImage: "url(https://cdn.midjourney.com/d1a080d6-fedb-4006-81aa-45ce283417f4/0_3.webp)"}}>
      <div className="bg-backgroundMain max-w-[500px] w-full max-h-[500px] h-full rounded-lg m-[65px]">
        <form className="flex flex-col items-center justify-center max-h-[300px] h-[300px]">
          <lable className="text-[30px] p-1">Enter e-mail</lable>
          <input
            placeholder="e-mail"
            className="rounded-lg h-[50px] w-[350px] p-1 cursor-pointer"
          ></input>
          <label className="text-[30px] p-1">Enter passowrd</label>
          <input
            placeholder="password"
            className="rounded-lg h-[50px] w-[350px] p-1 cursor-pointer"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SigInForm;
