import { saveTvStateToLocalStorage } from "../../assets/utils/LocalStorage";

export const EpisodeTracker = ({
  tv,
  visibilitySeasons,
  tvState,
  setTVState,
}) => {
  const handleLiOnChange = (seasonIndex, episodeIndex) => {
    const newState = { ...tvState };
    newState.seasons[seasonIndex].episodes[episodeIndex].watched =
      !newState.seasons[seasonIndex].episodes[episodeIndex].watched;
    setTVState(newState);
    saveTvStateToLocalStorage(id, newState);
  };

  const handleUlOnChange = (seasonIndex) => {
    const newState = { ...tvState };
    const isChecked = !newState.seasons[seasonIndex].isChecked;
    newState.seasons[seasonIndex].isChecked = isChecked;
    newState.seasons[seasonIndex].episodes.forEach((episode) => {
      episode.isChecked = isChecked;
      episode.watched = isChecked;
    });
    setTVState(newState);
    saveTvStateToLocalStorage(id, newState);
  };

  return (
    <div className={`seasonsBox ${visibilitySeasons ? "visible" : ""}`}>
      <h3>Check watched episodes</h3>
      <div>
        {tv?.seasons?.map((season, seasonIndex) => (
          <ul key={seasonIndex}>
            <label htmlFor={`ul-${seasonIndex}`}>{season?.name}</label>
            <input
              type="checkbox"
              name={`ul-${seasonIndex}`}
              id={`ul-${seasonIndex}`}
              onChange={() => handleUlOnChange(seasonIndex)}
              checked={tvState?.seasons?.[seasonIndex]?.isChecked || false}
            />

            {Array.from({ length: season?.episodeCount }, (_, episodeIndex) => (
              <li
                key={episodeIndex + 1}
                className={
                  tvState?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]
                    ?.watched
                    ? "strikethrough"
                    : ""
                }
              >
                <label htmlFor={`li-${seasonIndex}-${episodeIndex + 1}`}>
                  Episode {episodeIndex + 1}
                </label>
                <input
                  type="checkbox"
                  name={`li-${seasonIndex}-${episodeIndex + 1}`}
                  id={`li-${seasonIndex}-${episodeIndex + 1}`}
                  checked={
                    tvState?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]
                      ?.watched || false
                  }
                  onChange={() => {
                    handleLiOnChange(seasonIndex, episodeIndex);
                  }}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
