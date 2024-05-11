"use client";
import React from "react";

import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import Image from "next/image";

import Filter from "../../public/dashbordheader/Filter.png";

ChartJS.register(BarElement, Tooltip, LinearScale, Legend, CategoryScale);

const BarchartComponent = () => {
  const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        label: "My Horizontal Bar Chart",
        data: [50, 30, 20],
        backgroundColor: ["#FFBB33", "#99FF99", "#FFCC99"],
        hoverBackgroundColor: ["#FFA500", "#7FFF00", "#FFA07A"],
      },
    ],
  };

  const options = {
    responsive: true, // Maintain aspect ratio on resize
    maintainAspectRatio: false, // Enable full-width container
    indexAxis: "y", // Flip the axes for horizontal bars
    layout: {
      padding: {
        left: 50, // Adjust padding for desired bar width
        right: 50,
      },
    },
  };
  return (
    <>
      <div className=" flex flex-col w-[420px] h-[1330px] rounded-md shadow-lg bg-[#FFFFFF] p-3 ">
        <div className=" flex justify-between items-center w-full h-auto">
          <div className=" flex flex-col px-2  ">
            <h1 className="  font-bold ">Current Plan</h1>
            {/* <p>Information and usages of your current plan</p> */}
          </div>
          <div className="  ">
            <Image src={Filter} />
          </div>
        </div>
        <div className=" h-[200px] ">
          <div className=" h-[100px">
            <h2>My Horizontal Bar Chart</h2>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarchartComponent;
