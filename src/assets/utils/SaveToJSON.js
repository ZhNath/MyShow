import fs from "fs";
import { getGenres, getLanguages } from "../domain/apiClient.js";

export const SaveToJSON = async () => {
  const genres = await getGenres();
  const jsonFilePathG = "public/genres.json";

  try {
    fs.writeFileSync(jsonFilePathG, JSON.stringify(genres, null, 2));
    console.log("Genres have been saved to genres.json");
  } catch (error) {
    console.error("Failed to save genres to JSON file:", error);
  }
  const languages = await getLanguages();
  const jsonFilePathL = "public/languages.json";

  try {
    fs.writeFileSync(jsonFilePathL, JSON.stringify(languages, null, 2));
    console.log("Languages have been saved to languages.json");
  } catch (error) {
    console.error("Failed to save lsnguages to JSON file:", error);
  }
};

SaveToJSON();
// node src/assets/utils/SaveToJSON.js
