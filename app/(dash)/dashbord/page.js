import SidebarContent from "@/components/sidebar/SidebarContent";
import React from "react";

const page = () => {
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
        <div className=" flex-grow bg-gray-100"> all check </div>
      </div>
    </>
  );
};

export default page;
