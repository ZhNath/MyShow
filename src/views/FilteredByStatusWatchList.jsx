import { useAuthContext } from "../globalContext/AuthContext";
import { WatchListCard } from "../components/WatchList/WatchListCard";
import { useParams } from "react-router-dom";

export const FilteredByStatusWatchList = () => {
  const { watchList } = useAuthContext();
  const { statfilter } = useParams();

  const filteredList = watchList?.results?.filter((item) => {
    const status = localStorage.getItem(`statusTV-${item.id}`);
    return status === statfilter;
  });

  return (
    <div>
      {filteredList?.map((item) => (
        <div key={item?.id} className="watchListCard">
          <WatchListCard id={item?.id} />
        </div>
      ))}
    </div>
  );
};
