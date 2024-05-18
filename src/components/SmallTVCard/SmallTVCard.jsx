import { ResultOfSearchingByName } from "../../assets/utils/ResultOfSearchingByName";
import { Link } from "react-router-dom";
import "../../styles/smallCard.css";

export const SmallTVCard = ({ item, setIsDropDown }) => {
  const tvData = ResultOfSearchingByName(item);
  return (
    <Link
      to={`filter/${tvData.id}`}
      onClick={() => {
        setIsDropDown(false);
      }}
    >
      <div className="smallCardBox">
        <img src={tvData.image} alt="" />
        <h4>{tvData.name}</h4>
        <div className="rating">{tvData.rating}</div>
        <div className="years">{tvData.date}</div>
      </div>
    </Link>
  );
};
