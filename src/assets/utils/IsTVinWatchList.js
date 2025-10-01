import { useAuthContext } from "../../globalContext/AuthContext";

export const IsTVinWatchList = (tvId) => {
  const { idWatchList } = useAuthContext();
  return idWatchList.includes(tvId);
};
