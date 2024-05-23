import { saveTvStateToLocalStorage } from "../../assets/utils/LocalStorage";

export const EpisodeTracker = ({
  tv,
  visibilitySeasons,
  tvState,
  setTVState,
}) => {
  const handleLiOnChange = (seasonIndex, episodeIndex) => {
    const newState = { ...tvState };
    newState[tv.id].seasons[seasonIndex].episodes[episodeIndex].watched =
      !newState[tv.id].seasons[seasonIndex].episodes[episodeIndex].watched;
    setTVState(newState);
    saveTvStateToLocalStorage(newState);
  };

  const handleUlOnChange = (seasonIndex) => {
    const newState = { ...tvState };
    newState[tv.id].seasons[seasonIndex].episodes.forEach((episode) => {
      if (episode.isChecked) {
        episode.isChecked = false;
        episode.watched = false;
      } else {
        episode.isChecked = true;
        episode.watched = true;
      }
    });
    setTVState(newState);
    saveTvStateToLocalStorage(newState);
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
            />

            {Array.from({ length: season?.episodeCount }, (_, episodeIndex) => (
              <li
                key={episodeIndex + 1}
                className={
                  tvState?.[tv?.id]?.seasons?.[seasonIndex]?.episodes?.[
                    episodeIndex
                  ]?.watched
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
                    tvState?.[tv?.id]?.seasons?.[seasonIndex]?.episodes?.[
                      episodeIndex
                    ]?.watched
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
