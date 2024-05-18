import { SmallTVCard } from "../../components/SmallTVCard/SmallTVCard.jsx";

export const DisplayOfSearchingByName = ({ searchResults }) => {
  return searchResults?.results?.map((item) => {
    return <SmallTVCard key={item.id} item={item} />;
  });
};
