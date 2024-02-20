import { removeHeader, setHeader } from "@/services/api";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

export const roles = {
  admin: "admin",
  user: "user",
};

// Context
const AuthContext = createContext({
  loggedInUser: null,
  loginUser: () => {},
  logoutUser: () => {},
  modifyUser: () => {},
});

// Setting token on page load
const token = localStorage.getItem("token");
token && setHeader("Authorization", `Bearer ${token}`);

function AuthProvider({ children }) {
  // Logged in user state
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  // Manage logged in user
  const logoutUser = () => {
    removeHeader("Authorization");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  const loginUser = (token) => {
    const user = jwtDecode(token);
    setHeader("Authorization", `Bearer ${token}`);
    localStorage.setItem("token", token);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
  };

  const modifyUser = (modifiedEntries) => {
    const modifiedUser = { ...loggedInUser, ...modifiedEntries };
    localStorage.setItem("loggedInUser", JSON.stringify(modifiedUser));
    setLoggedInUser(modifiedUser);
  };

  // JSX
  return (
    <AuthContext.Provider
      value={{ loggedInUser, loginUser, logoutUser, modifyUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
