export const FormElements = ({ id, listener }) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        id={id}
        type={id === "password" ? "password" : "text"}
        placeholder={id}
        autoComplete="on"
        onChange={listener}
      />
    </>
  );
};
