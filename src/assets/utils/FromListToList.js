import { addTVtoList, removeTVfromList } from "../domain/apiClient";

export const FromListToList = ({ id, newStatus, oldStatus }) => {
  const oldListId = localStorage.getItem(`idList${oldStatus}`);
  if (oldListId) {
    removeTVfromList(oldListId, id)
      .then((response) => {
        console.log("Removed from old list:", response);
      })
      .catch((error) => {
        console.error("Error removing from old list:", error);
      });
  }

  const newListId = localStorage.getItem(`idList${newStatus}`);
  if (newListId) {
    addTVtoList(newListId, id)
      .then((response) => {
        console.log("Added to old list:", response);
      })
      .catch((error) => {
        console.error("Error adding to old list:", error);
      });
  }
};
