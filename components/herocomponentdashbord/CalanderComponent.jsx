"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalanderComponent = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className=" flex flex-col w-[420px] h-[330px] rounded-md shadow-lg bg-[#FFFFFF] p-3 ">
        <Calendar
          onChange={onChange}
          value={value}
          className=" h-full w-full border-none bg-stone-600 "
        />
      </div>
    </>
  );
};

export default CalanderComponent;
