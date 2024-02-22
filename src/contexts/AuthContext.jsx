/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function retrieveStoredToken() {
  const token = Cookies.get("token");
  return {
    token: token,
  };
}

export const AuthProvider = ({ children }) => {
  const storedToken = retrieveStoredToken();
  const initialToken = storedToken.token || "";
  const [userToken, setUserToken] = useState(initialToken);
  const isLoggedIn = !!userToken;

  return (
    <AuthContext.Provider value={{ isLoggedIn, userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};
