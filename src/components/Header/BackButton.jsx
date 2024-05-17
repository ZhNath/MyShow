export const BackButton = () => {
  return (
    <div
      className="back-button"
      onClick={() => {
        window.history.back();
      }}
    >
      Back
    </div>
  );
};
