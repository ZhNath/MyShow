import { IMG_URL } from "../domain/apiClient";

export const ResultOfSearchingByName = (item) => {
  const tv = {
    id: item?.id,
    name: item?.name,
    date: `${item?.first_air_date?.substring(
      0,
      4
    )} - ${item?.last_air_date?.substring(0, 4)}`,
    image: `${IMG_URL}${item?.poster_path}`,
    rating: item?.vote_average.toFixed(1),
  };

  return tv;
};
