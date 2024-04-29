"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import FormImage from "../../public/FormImage/formImage.jpeg";
import Logo from "../../public/Logo/Logo.png";
import Message from "../../public/FormImage/message.svg";

import { AuthContext } from "@/context/AuthContext";

import { useRouter } from "next/navigation";
import Tab from "@/components/tab/Tab";
import LoginForm from "@/components/LoginForm/LoginForm";
import CreateAccountForm from "@/components/CreateAccountForm/CreateAccountForm";

const page = () => {
  const { devicedata } = useContext(AuthContext);
  const router = useRouter();

  console.log(devicedata);
  const [formData, setFormData] = useState({
    company_name: "",
    company_id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    router.push("/creataccount/subscription");
  };
  return (
    <>
      <div className=" relative w-screen min-h-screen bg-[#0A66C1]/75 flex flex-col items-center justify-center px-3  py-4 ">
        <Image
          src={FormImage}
          className=" absolute top-0 left-0 object-cover h-full w-full -z-10 opacity-50 "
        />

        <div className=" flex flex-col md:flex-row bg-[#FFFFFF]/75 h-auto w-auto rounded-lg overflow-hidden    ">
          <div className="  flex flex-col items-center justify-between  flex-1 bg-[#FFFFFF] rounded-lg px-5 py-4 ">
            <div className=" w-[345px] flex flex-col items-center text-center  ">
              <Image src={Logo} className="" />
              <h1 className=" font-customFot font-bold text-lg my-5 ">
                ARTEMIS SECURITY & CONCIERGE TECHNOLOGY LTD.
              </h1>
              <h1 className=" font-customFot font-semibold  mt-16 text-xl ">
                Front Desk to Frontline
              </h1>
              <p className=" font-customFot my-8 text-lg">
                Elevating Security and Service for Security Guard and Concierge
                Companies
              </p>
            </div>
            <div className=" w-[345px] flex items-center justify-between mt-5 ">
              <div className=" flex flex-col gap-2  ">
                <h1>Sales: 1(888)- 888-888</h1>
                <h1>Support: 1(888)- 777- 7777</h1>
              </div>
              <div className=" bg-[#1C98F7] overflow-hidden rounded-full p-2 cursor-pointer ">
                <Image src={Message} />
              </div>
            </div>
          </div>
          <div className=" p-5 max-w-lg ">
            <Tab items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

const items = [
  {
    title: "Login",
    content: <LoginForm />,
  },
  {
    title: "Creat account",
    content: <CreateAccountForm />,
  },
];
