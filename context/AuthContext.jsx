"use client";

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [devicedata, setDevicedata] = useState("Nahid");

  return (
    <AuthContext.Provider
      value={{
        devicedata,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
