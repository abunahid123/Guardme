"use client";

import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handeClick = () => {
    router.push("/creataccount/confirmation");
  };
  return (
    <>
      <div className=" h-screen  w-full bg-[#202227] flex flex-col items-center  gap-5 text-[#CFDAF8] px-3 py-20 ">
        <h1 className=" font-semibold text-4xl ">Choose Your Plane please.</h1>
        <div className=" flex w-full max-w-5xl px-3 py-20 gap-16 md:flex-row flex-col ">
          <div className=" bg-[#282C37] w-full h-full p-7 rounded-xl overflow-hidden flex flex-col ">
            <h1>Basic</h1>
            <h1 className=" font-semibold text-[#CFDAF8] text-3xl ">Free</h1>
            <div className=" flex flex-col mt-6 gap-4 ">
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
            </div>
            <div
              onClick={handeClick}
              className="mt-7 w-full  bg-gradient-to-r from-[#879EDB] to-[#485475] flex justify-center rounded-full py-3 cursor-pointer "
            >
              <h1>Get Start</h1>
            </div>
          </div>
          <div className="bg-[#282C37] w-full h-full p-7 rounded-xl overflow-hidden ">
            <h1>Pro</h1>
            <h1 className=" font-semibold text-[#CFDAF8] text-3xl ">$200</h1>
            <div className=" flex flex-col mt-6 gap-4 ">
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
            </div>
            <div
              onClick={handeClick}
              className="mt-7 w-full  bg-gradient-to-r from-[#879EDB] to-[#485475] flex justify-center rounded-full py-3 cursor-pointer "
            >
              <h1>Get Start</h1>
            </div>
          </div>
          <div className="bg-[#282C37] w-full h-full p-7 rounded-xl overflow-hidden ">
            <h1>Cuatom</h1>
            <h1 className=" font-semibold text-[#CFDAF8] text-3xl ">$300</h1>
            <div className=" flex flex-col mt-6 gap-4 ">
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaPlus />
                <p>Lorem, ipsum dolor sit amet</p>
              </div>
            </div>
            <div
              onClick={handeClick}
              className="mt-7 w-full  bg-gradient-to-r from-[#879EDB] to-[#485475] flex justify-center rounded-full py-3 cursor-pointer"
            >
              <h1>Get Start</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
