import Image from "next/image";
import React from "react";
import Filter from "../../public/dashbordheader/Filter.png";

const PichartComponent = () => {
  return (
    <>
      <div className=" flex flex-col w-[420px] h-[330px] rounded-md shadow-lg bg-[#FFFFFF] p-3 ">
        <div className=" flex justify-between items-center w-full h-auto">
          <div className=" flex flex-col px-2  ">
            <h1>P&L</h1>
            <p>Total profit growth of 25%</p>
          </div>
          <div className="  ">
            <Image src={Filter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PichartComponent;
