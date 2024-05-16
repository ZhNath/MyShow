import { dataFetcher } from "../../assets/domain/apiClient";

export const Input = ({ setSearchResults, setIsDropDown }) => {
  const handleOnChange = async (event) => {
    const data = await dataFetcher(`/search/tv?query=${event.target.value}&`);
    setSearchResults(data);
    if (event.target.value.length > 0) setIsDropDown(true);
  };

  return (
    <input
      type="text"
      onChange={(e) => handleOnChange(e)}
      // onBlur={() => setIsDropDown(false)}
    />
  );
};
