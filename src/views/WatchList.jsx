import { useAuthContext } from "../globalContext/AuthContext";
import "../styles/watchList.css";
import { WatchListCard } from "../components/WatchList/WatchListCard";

export const WatchList = () => {
  const { watchList } = useAuthContext();
  return (
    <div>
      {watchList?.results?.map((item) => (
        <div key={item?.id} className="watchListCard">
          <WatchListCard id={item?.id} />
        </div>
      ))}
    </div>
  );
};
