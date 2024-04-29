"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";

import { AuthContext } from "@/context/AuthContext";

import { useRouter } from "next/navigation";

const page = () => {
  const { devicedata } = useContext(AuthContext);
  const router = useRouter();

  console.log(devicedata);
  const [formData, setFormData] = useState({
    use_name: "",
    password: "",
    varificarion_code: "",
    pin_code: "",
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
    router.push("/login");
  };
  return (
    <>
      <div className=" flex flex-col items-center  text-center text-white bg-[#202227]  ">
        {/* <Image
          src={FormImage}
          className=" w-full h-full object-cover -z-10 absolute top-0 left-0 "
        /> */}
        <div className=" py-10 flex flex-col items-center justify-center w-full h-screen  gap-6 ">
          <h1 className=" font-semibold text-6xl "> Create Account </h1>
          <div className=" py-7 px-5  m-3 bg-[#282C37] rounded-lg overflow-hidden ">
            <form
              action=""
              onSubmit={handleSubmit}
              className=" flex flex-col gap-5 px-6 "
            >
              <div className=" flex flex-col gap-4 ">
                <div className=" flex flex-col items-start gap-2 ">
                  <label className=" text-3xl ">User Name</label>
                  <input
                    type="text"
                    name="use_name"
                    value={formData.use_name}
                    placeholder=" Enter Your Company Name "
                    onChange={handleChange}
                    className=" bg-gray-600 outline-none px-4 py-2 rounded-lg overflow-hidden "
                  />
                </div>
                <div className=" flex flex-col items-start gap-2 ">
                  <label className=" text-3xl ">Password</label>
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    placeholder=" Enter Your Company ID "
                    onChange={handleChange}
                    className=" bg-gray-600 outline-none px-4 py-2 rounded-lg overflow-hidden "
                  />
                </div>
                <div className=" flex flex-col items-start gap-2 ">
                  <label className=" text-3xl ">Varification Code</label>
                  <input
                    type="text"
                    name="varificarion_code"
                    value={formData.varificarion_code}
                    placeholder=" Enter Your Company ID "
                    onChange={handleChange}
                    className=" bg-gray-600 outline-none px-4 py-2 rounded-lg overflow-hidden "
                  />
                </div>
                <div className=" flex flex-col items-start gap-2 ">
                  <label className=" text-3xl ">pin_code</label>
                  <input
                    type="text"
                    name="pin_code"
                    value={formData.pin_code}
                    placeholder=" Enter Your Company Name "
                    onChange={handleChange}
                    className=" bg-gray-600 outline-none px-4 py-2 rounded-lg overflow-hidden "
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-blue-600 py-3 rounded-xl my-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
