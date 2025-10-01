import { useEffect, useState } from "react";
import languages from "../../assets/languages.json";

export const LanguageSelect = ({ setLanguageFilter, languageFilter }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelectOnChange = (event) => {
    const value = event.target.value;
    setSelectedLanguage(value);
    if (value === "xx") {
      setLanguageFilter([]);
    } else {
      setLanguageFilter([value]);
    }
  };

  useEffect(() => {
    if (languageFilter.length === 0) {
      setSelectedLanguage("");
    }
  }, [languageFilter]);

  return (
    <select value={selectedLanguage} onChange={handleLanguageSelectOnChange}>
      <option value="">Select language </option>
      {languages?.map((language) => (
        <option key={language.iso_639_1} value={language.iso_639_1}>
          {language?.english_name}
        </option>
      ))}
    </select>
  );
};
