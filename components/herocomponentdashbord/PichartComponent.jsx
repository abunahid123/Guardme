"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Image from "next/image";
import React from "react";
import Filter from "../../public/dashbordheader/Filter.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const PichartComponent = () => {
  const data = {
    // labels: ["Category 1", "Category 2", "Category 3"],
    datasets: [
      {
        // label: "My Doughnut Chart",
        data: [30, 50, 20],
        backgroundColor: ["#FD2254", "#00B7FE", "#D0D2DA"],
        hoverBackgroundColor: ["#FFA500", "#7FFF00", "#FFA07A"],
      },
    ],
  };

  const options = {
    responsive: true, // Maintain aspect ratio on resize
    maintainAspectRatio: true, // Enable full-width container
  };
  return (
    <>
      <div className=" flex flex-col w-[420px] h-[330px] rounded-md shadow-lg bg-[#FFFFFF] p-3 ">
        <div className=" flex justify-between items-center w-full h-auto">
          <div className=" flex flex-col px-2  ">
            <h1 className=" font-bold ">P&L</h1>
            <p>Total profit growth of 25%</p>
          </div>
          <div className="  ">
            <Image src={Filter} />
          </div>
        </div>
        <div className=" flex items-center ">
          <div className=" w-full ">
            <h1>Api call</h1>
            <h1>Api call</h1>
            <h1>Api call</h1>
          </div>
          <div className=" h-[205px] w-[205px] ">
            <div className="  ">
              {/* <h2>My Doughnut Chart</h2> */}
              <Doughnut data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PichartComponent;
