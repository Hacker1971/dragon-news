import React, { createContext } from "react";
export const AuthContext = createContext(null);
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const Provider = ({ children }) => {
    const user = {
        DisplayName : 'tanvir islam'
    }
  const AuthInfo = {
    user
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default Provider;
