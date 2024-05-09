import ThredButton from "@/components/cutombutton/ThredButton";
import PichartComponent from "@/components/herocomponentdashbord/PichartComponent";
import SidebarContent from "@/components/sidebar/SidebarContent";
import UserTable from "@/components/usertable/UserTable";
import React from "react";

const page = () => {
  const sampleData = [
    { column1: "Data 1", column2: "Data A" },
    { column1: "Data 2", column2: "Data B" },
    { column1: "Data 3", column2: "Data C" },
    // Add more data objects as needed
  ];
  return (
    <>
      <div className="  flex-grow  bg-[#F5F5F5] flex ">
        <div className=" w-[15%] bg-[#1A2942] border-[#00B7FE] text-white font-customTherdFont py-3 gap-2 ">
          <SidebarContent title={"Company Name"} />
          <SidebarContent title={"New"} />
          <SidebarContent title={"Open File"} />
          <SidebarContent title={"Announcement"} />
          <SidebarContent title={"Information"} />
          <SidebarContent title={"Memos"} />
          <SidebarContent title={"Complaints"} />
          <SidebarContent title={"Calender"} />
          <SidebarContent title={"Notices"} />
          <SidebarContent title={"Reminders"} />
          <SidebarContent title={"Scheduled Tasks & Services"} />
          <SidebarContent title={"Risks & Threats"} />
          <SidebarContent title={"Meetings"} />
          <SidebarContent title={"Assigned Tasks"} />
          <SidebarContent title={"Dashboard"} />
          <SidebarContent title={"Profiles"} />
          <SidebarContent title={"Operation Modules"} />
          <SidebarContent title={"Users Management"} />
          <SidebarContent title={"Bulletin Board"} />
          <SidebarContent title={"Shift Transition Notes"} />
          <SidebarContent title={"My Notes"} />
          <SidebarContent title={"Job Postings"} />
          <SidebarContent title={"Forbidden Persons"} />
          <SidebarContent title={"Messages"} />
          <SidebarContent title={"Discussion board"} />
          <SidebarContent title={"Contacts"} />
          <SidebarContent title={"Setting"} />
          <SidebarContent title={"Reports"} />
        </div>
        {/* <div className="  bg-gray-100">
          <UserTable data={sampleData} />
        </div> */}
        <div className="flex-grow ">
          <div className=" flex w-full justify-center mt-10 font-customfouthdFont font-bold  ">
            <h1>RISKS AND THREATENS LEVEL</h1>
          </div>
          <div className=" flex w-full h-auto px-2  gap-4 justify-evenly my-4 ">
            <ThredButton title={"Normal"} className={"bg-[#F24F7C]"} />
            <ThredButton title={"Low"} className={"bg-[#716CB0]"} />
            <ThredButton title={"Medium"} className={"bg-[#33B0E0]"} />
            <ThredButton title={"High"} className={"bg-[#3BC0C3]"} />
            <ThredButton title={"Urgent"} className={"bg-[#F24F7C]"} />
          </div>
          <div className=" flex w-full h-auto px-3 overflow-hidden mt-4 ">
            <PichartComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
