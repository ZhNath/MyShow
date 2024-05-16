import "../../styles/Header.css";
import { Input } from "./Input";
import { SearchingResult } from "./SearchingResult";
import { useState } from "react";

export const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="header">
      <h1>My Show</h1>
      <Input
        setSearchResults={setSearchResults}
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
      />

      {isDropDown && (
        <div className="dropdown">
          <SearchingResult
            searchResults={searchResults}
            setIsDropDown={setIsDropDown}
          />
        </div>
      )}
    </div>
  );
};
