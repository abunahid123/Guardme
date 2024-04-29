"use client";

import React, { useState } from "react";

const page = () => {
  const [showitem, setShowitem] = useState(false);

  const handeClick = () => {
    setShowitem(!showitem);
  };
  return (
    <>
      <div className=" h-screen w-full flex text-[#CFDAF8] ">
        <div className=" h-screen w-[20%] bg-[#282C37] flex flex-col py-4 gap-4  ">
          <div className=" justify-center w-full flex  ">
            <h1 className=" text-5xl font-bold  ">Gurd Me</h1>
          </div>
          <div className="flex flex-col px-4 ">
            <div onClick={handeClick} className=" text-2xl cursor-pointer    ">
              <h1>New Company</h1>
            </div>
            {showitem && (
              <div className=" flex flex-col ml-9  gap-2 ">
                <h1>Nahid</h1>
                <h1>Nahid</h1>
              </div>
            )}
            <div className="">
              <h1>Abu Nahid</h1>
            </div>
          </div>
        </div>
        <div className=" h-screen w-full flex-1 bg-red-500 "></div>
      </div>
    </>
  );
};

export default page;
