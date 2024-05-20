import { createContext, useContext, useState, useEffect } from "react";
import { getWatchList } from "../assets/domain/apiClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [session_id, setSession_id] = useState("");
  const [username, setUsername] = useState("");
  const [watchList, setWatchList] = useState([]);
  const [idWatchList, setIdWatchList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const new_username = localStorage.getItem("username");
      const new_session_id = localStorage.getItem("session_id");
      if (new_session_id) {
        setUsername(new_username);
        setSession_id(new_session_id);
        setIsAuthenticated(true);
        const watchListData = await getWatchList();
        console.log("Watchlist data:", watchListData);
        setWatchList(watchListData);
        setIdWatchList(watchListData.results.map((tv) => tv.id));
      } else {
        setIsAuthenticated(false);
      }
    };
    fetchData();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        session_id,
        username,
        watchList,
        setWatchList,
        idWatchList,
        setIdWatchList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
