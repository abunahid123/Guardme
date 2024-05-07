import Image from "next/image";
import React from "react";
import RightArrow from "../../public/Rightarrow.png";
import OpenFile from "../../public/SidebarImage/OpenFile.png";

const SidebarContent = ({ title }) => {
  return (
    <>
      <div className=" w-full flex justify-between items-center px-3 bg-transparent  ">
        <div className=" flex gap-2 items-center ">
          <Image src={OpenFile} />
          <h1>{title}</h1>
        </div>

        <Image src={RightArrow} />
      </div>
    </>
  );
};

export default SidebarContent;
