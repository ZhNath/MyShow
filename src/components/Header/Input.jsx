import { dataFetcher } from "../../assets/domain/apiClient";

export const Input = ({ setSearchResults, setIsDropDown }) => {
  const handleOnChange = async (event) => {
    if (event.target.value.length > 0) setIsDropDown(true);
    else setIsDropDown(false);

    const data = await dataFetcher(`/search/tv?query=${event.target.value}&`);
    setSearchResults(data);
  };

  return <input type="text" onChange={(e) => handleOnChange(e)} />;
};
