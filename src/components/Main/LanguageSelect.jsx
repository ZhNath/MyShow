import { useState } from "react";
import languages from "../../../public/languages.json";

export const LanguageSelect = ({ setLanguageFilter }) => {
  const handleLanguageSelectOnChange = (event) => {
    const value = event.target.value;
    if (value === "xx") {
      setLanguageFilter([]);
    } else {
      setLanguageFilter([value]);
    }
  };

  return (
    <select onChange={handleLanguageSelectOnChange}>
      <option value="">Select language </option>
      {languages?.map((language) => (
        <option key={language.iso_639_1} value={language.iso_639_1}>
          {language?.english_name}
        </option>
      ))}
    </select>
  );
};
