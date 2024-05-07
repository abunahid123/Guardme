import Image from "next/image";
import React from "react";

import Logodash from "../../public/Logodash.svg";
import SearchIcon from "../../public/dashbordheader/search.png";
import Bell from "../../public/dashbordheader/bell.png";
import Message from "../../public/dashbordheader/message.png";
import Boxicon from "../../public/dashbordheader/boxicon.png";
import Shawn from "../../public/shawn.png";

const DashbordHeader = () => {
  return (
    <>
      <div className=" w-full h-auto flex justify-between lg:px-12 py-2  ">
        <div className=" mx-5 ">
          <Image src={Logodash} className=" w-[54px] h-[60px] " />
        </div>
        <div className=" flex justify-between items-center  ">
          <div className=" flex items-center justify-between gap-4 ">
            <div className=" px-3 rounded-lg items-center flex justify-between overflow-hidden flex-1 border border-[#EBEBEB] w-[888px] ">
              <input
                placeholder="Search here "
                className=" w-full px-4 py-2 outline-none flex-grow"
              />

              <Image src={SearchIcon} />
            </div>
            <div className=" flex justify-around gap-3 ">
              <div className=" relative w-[48px] h-[48px] flex items-center justify-center  rounded-lg bg-[#BEBEBE]/15 ">
                <Image src={Bell} className=" w-[28px] h-[28px] " />
                <div className=" absolute -top-1 -right-1 w-[19px] h-[20.45px] rounded-full bg-[#2D9CDB] border-[#F3F2F7] border-2 text-white flex justify-center items-center p-1 ">
                  <p className=" text-[12px] ">21</p>
                </div>
              </div>
              <div className=" relative w-[48px] h-[48px] flex items-center justify-center  rounded-lg bg-[#2D9CDB]/15 ">
                <Image src={Message} className=" w-[28px] h-[28px] " />
                <div className=" absolute -top-1 -right-1 w-[19px] h-[20.45px] rounded-full bg-[#2D9CDB] border-[#F3F2F7] border-2 text-white flex justify-center items-center p-1 ">
                  <p className=" text-[12px] ">36</p>
                </div>
              </div>
              <div className=" relative w-[48px] h-[48px] flex items-center justify-center  rounded-lg bg-[#5E6C93]/15 ">
                <Image src={Boxicon} className=" w-[28px] h-[28px] " />
                <div className=" absolute -top-1 -right-1 w-[19px] h-[20.45px] rounded-full bg-[#5E6C93] border-[#F3F2F7] border-2 text-white flex justify-center items-center p-1 ">
                  <p className=" text-[12px] ">53</p>
                </div>
              </div>
            </div>
            <div className=" ml-8 flex justify-between items-center gap-2 ">
              <div className="  ">
                <h1>
                  Hello,{" "}
                  <span className=" text-[#464255] font-semibold">Shawn</span>
                </h1>
              </div>
              <Image
                src={Shawn}
                className=" w-[48px] h-[50px] rounded-full overflow-hidden object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashbordHeader;
