export const BackButton = () => {
  return (
    <button
      className="back-button"
      onClick={() => {
        window.history.back();
      }}
    >
      Back
    </button>
  );
};
