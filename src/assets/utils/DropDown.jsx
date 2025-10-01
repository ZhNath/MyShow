import { useEffect } from "react";

export const DropDown = ({
  children,
  setIsDropDown,
  isDropDown,
  classes,
  dropdownRef,
}) => {
  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsDropDown((prev) => {
  //       return false;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      {" "}
      {isDropDown && (
        <div ref={dropdownRef} className={classes}>
          {children}
        </div>
      )}
    </>
  );
};
