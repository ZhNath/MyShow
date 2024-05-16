import { Link } from "react-router-dom";
import { Main } from "../components/Main/Main";

function Homepage() {
  return (
    <>
      <Link to="/">
        <Main />
      </Link>
    </>
  );
}

export default Homepage;
