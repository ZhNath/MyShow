export const getTvStateFromLocalStorage = (id) => {
  const state = JSON.parse(localStorage.getItem(`tvState-${id}`)) || {};
  return state;
};

export const saveTvStateToLocalStorage = (id, state) => {
  localStorage.setItem(`tvState-${id}`, JSON.stringify(state));
};

export const deleteTvStateFromLocalStorage = (id) => {
  localStorage.removeItem(`tvState-${id}`);
};
