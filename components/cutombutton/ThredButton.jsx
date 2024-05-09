"use client";

import React from "react";

const ThredButton = ({ title, className }) => {
  const handleclick = () => {};
  return (
    <>
      <div
        onClick={handleclick}
        className={`w-[240px] h-[79px] flex items-center ${className} justify-center font-customfouthdFont  rounded-lg overflow-hidden font-semibold cursor-pointer `}
      >
        <h1> {title} </h1>
      </div>
    </>
  );
};

export default ThredButton;
