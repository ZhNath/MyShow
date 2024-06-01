export const handleOnClick = ({
  ratingValue,
  filterList,
  languageFilter,
  allData,
  setGallery,
}) => {
  const genreFilterActive = filterList.length > 0;
  const languageFilterActive = languageFilter.length > 0;
  const ratingFilterActive = ratingValue > 0;

  if (genreFilterActive || languageFilterActive || ratingFilterActive) {
    const filteredData = allData.filter((tv) => {
      const genreMatch =
        !genreFilterActive ||
        filterList.every((genreId) => tv.genre_ids.includes(genreId));

      const languageMatch =
        !languageFilterActive || languageFilter.includes(tv.original_language);

      const ratingMatch = !ratingValue || tv.vote_average >= ratingValue;

      return genreMatch && languageMatch && ratingMatch;
    });

    const sortedResults = filteredData.sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setGallery(sortedResults);
  } else {
    setGallery(allData);
  }
};
