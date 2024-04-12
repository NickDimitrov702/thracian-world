import React from "react";

function HomepageBlocks({ slogan, shortExp }) {



  return (
    <div className="max-w-[1500px] m-auto flex flex-col justify-center itemscenter">
      <div className="w-full justify-center items-center p-10 mt-10 rounded-lg text-[80px] text-purple-500 uppercase">
        {slogan}
        <div className="text-[20px]">{shortExp}</div>
      </div>
    </div>
  );
}

export default HomepageBlocks;
