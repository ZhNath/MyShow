import { WatchList } from "./WatchList";

export const IsTVinWatchList = (tvId) => {
  const data = WatchList();
  console.log("IsTVinWatchList data:", data);
  return data.results.some((tv) => tv.id === tvId);
};
