export const getTvStateFromLocalStorage = () => {
  const state = JSON.parse(localStorage.getItem("tvShowState")) || {};
  return state;
};

export const saveTvStateToLocalStorage = (state) => {
  localStorage.setItem("tvShowState", JSON.stringify(state));
  // return null;
};
