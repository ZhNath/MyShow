import { dataFetcher } from "../../assets/domain/apiClient";
import { useState, useRef } from "react";
import { DropDown } from "../../assets/utils/DropDown";
import { DisplayOfSearchingByName } from "../../assets/utils/DisplayOfSearchingByName";

export const Input_DropDown = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchResults, setSearchResults] = useState();
  // const dropdownRef = useRef(null);

  const handleOnChange = async (event) => {
    if (event.target.value.length > 0)
      setIsDropDown((prev) => {
        return true;
      });
    else
      setIsDropDown((prev) => {
        return false;
      });

    const data = await dataFetcher(`/search/tv?query=${event.target.value}&`);
    setSearchResults(data);
  };

  return (
    <>
      <input type="text" onChange={(e) => handleOnChange(e)} />
      <DropDown
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        classes="dropdown"
        // dropdownRef={dropdownRef}
      >
        <DisplayOfSearchingByName searchResults={searchResults} />
      </DropDown>
    </>
  );
};
