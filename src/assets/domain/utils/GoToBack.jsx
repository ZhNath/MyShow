import { Link, useHistory } from "react-router-dom";

export const GoToBack = () => {
  const history = useHistory();
  return <div onClick={() => history.goBack()}> Back</div>;
};
