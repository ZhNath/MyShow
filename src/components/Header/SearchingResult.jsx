import { IMG_URL } from "../../assets/server.js";
import { Link } from "react-router-dom";

export const SearchingResult = ({ searchResults, setIsDropDown }) => {
  return (
    searchResults &&
    searchResults.results &&
    searchResults.results.length > 0 &&
    searchResults.results.map((item) => (
      <div key={item.id}>
        <Link
          to={`filter/${item.id}`}
          onClick={() => {
            setIsDropDown(false);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            textAlign: "start",
          }}
        >
          <img
            style={{ width: "50px" }}
            className="backdrop"
            src={`${IMG_URL}${item.poster_path}`}
            alt=""
          />
          <h4>{item.name}</h4>
        </Link>
      </div>
    ))
  );
};
