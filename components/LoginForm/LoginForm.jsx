import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className=" w-full h-auto flex flex-col my-5  ">
        <form className=" flex flex-col font-customSndFont gap-2 ">
          <div className="">
            <label>
              <h1>Company ID</h1>
            </label>
            <input
              type="text"
              placeholder="Enter your Company ID"
              className=" w-[470px] rounded-xl px-4 py-2 outline-none "
            />
          </div>
          <div className="">
            <label>
              <h1>User Name</h1>
            </label>
            <input
              type="text"
              placeholder="Enter your User Name"
              className=" w-[470px] rounded-xl px-4 py-2 outline-none "
            />
          </div>
          <div className="">
            <label>
              <h1>Password</h1>
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className=" w-[470px] rounded-xl px-4 py-2 outline-none "
            />
          </div>
          <div className="">
            <label>
              <h1>MFA</h1>
            </label>
            <input
              type="text"
              placeholder="Enter your MFA"
              className=" w-[470px] rounded-xl px-4 py-2 outline-none "
            />
          </div>
          <div className="">
            <label>
              <h1>PIN CODE</h1>
            </label>
            <input
              type="text"
              placeholder="Enter your Company Name"
              className=" w-[470px] rounded-xl px-4 py-2 outline-none "
            />
          </div>
          <div className="">
            <label>
              <h1>Verification Code</h1>
            </label>
            <input
              type="text"
              placeholder="Enter your Company Name"
              className=" w-[470px] rounded-xl px-4 py-2 outline-none "
            />
          </div>
          <div className="flex w-[240px] self-center items-center bg-[#FFFF] border-2 border-[#000000]/60 my-5 rounded-lg ">
            <div className=" flex px-3 py-1 items-center gap-x-2  ">
              <div className=" h-[50px] w-[50px] rounded-full bg-[#D9D9D9] border-[#000000]/45 border-4  "></div>
              <h1>I am not a robot</h1>
            </div>
          </div>
          <div className=" w-full h-auto bg-[#0A69C8] flex justify-center items-center text-white p-2 rounded-lg  ">
            <h1>Log In</h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;