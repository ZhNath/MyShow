import { useState } from "react";
import {
  saveTvStateToLocalStorage,
  getTvStateFromLocalStorage,
} from "../../assets/utils/LocalStorage";

export const EpisodeTracker = ({
  tv,
  visibilitySeasons,
  tvState,
  setTVState,
}) => {
  const handleOnChange = (seasonIndex, episodeIndex) => {
    const newState = { ...tvState };
    newState[tv.id].seasons[seasonIndex].episodes[episodeIndex].watched =
      !newState[tv.id].seasons[seasonIndex].episodes[episodeIndex].watched;
    setTVState(newState);
    saveTvStateToLocalStorage(newState);
    console.log("storage", getTvStateFromLocalStorage());
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
            />

            {Array.from({ length: season?.episodeCount }, (_, episodeIndex) => (
              <li key={episodeIndex + 1}>
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
                    handleOnChange(seasonIndex, episodeIndex);
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
