import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [session_id, setSession_id] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const new_username = localStorage.getItem("username");
    const new_session_id = localStorage.getItem("session_id");
    if (new_session_id) {
      setUsername(new_username);
      setSession_id(new_session_id);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, session_id, username }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
