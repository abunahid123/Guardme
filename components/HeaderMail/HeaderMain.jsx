"use client";
import React from "react";
import MailBox from "../../public/headermain/mailbox.svg";
import Phone from "../../public/headermain/phone.svg";
import Fb from "../../public/headermain/Fb.png";
import Insta from "../../public/headermain/Insta.png";
import Linkedin from "../../public/headermain/Linkedin.png";
import YouTube from "../../public/headermain/YouTube.png";
import Logo from "../../public/Logo/Logo.png";
import Image from "next/image";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <>
      <div className=" w-full flex flex-col h-auto items-center  ">
        <div className=" w-full h-auto flex bg-black text-white justify-center   ">
          <div className=" w-full  max-w-7xl flex justify-between py-2 ">
            <div className=" flex gap-12 ">
              <div className=" flex gap-2 ">
                <Image src={MailBox} />
                <h1>info@artemis.com</h1>
              </div>
              <div className=" flex gap-2 ">
                <Image src={Phone} />
                <h1>+1001215331663</h1>
              </div>
            </div>
            <div className=" flex gap-3 ">
              <Image src={Fb} className=" w-[22px] h-[22px] " />
              <Image src={Insta} className=" w-[22px] h-[22px] " />
              <Image src={Linkedin} className=" w-[22px] h-[22px] " />
              <Image src={YouTube} className=" w-[22px] h-[22px] " />
            </div>
          </div>
        </div>
        <div className=" w-full flex border border-[#000000]  ">
          <div className=" flex items-center pl-20  pr-14  gap-2 text-center ">
            <Image src={Logo} className=" w-[70px] -[81.5px] " />
            <h1 className=" w-[339px] text-black font-customFot  ">
              ARTEMIS SECURITY & CONCIERGE TECHNOLOGY LTD.
            </h1>
          </div>
          <div className=" w-full bg-gradient-to-r to-[#3B71F9] from-[#234393] flex  gap-32 px-12 text-white font-medium items-center text-[20px] ">
            <div className=" flex gap-24 ">
              <Link href={"/"}>
                <h1>Home </h1>
              </Link>
              <Link href={"/"}>
                <h1>About </h1>
              </Link>
              <Link href={"/"}>
                <h1> Plan </h1>
              </Link>
              <Link href={"/"}>
                <h1>Contuct </h1>
              </Link>
            </div>
            <div className=" flex gap-6 ">
              <Link href={"/creataccount"}>
                <h1>Log In </h1>
              </Link>
              <Link href={"/creataccount"}>
                <h1>Creat Account </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;

// 3B71F9
