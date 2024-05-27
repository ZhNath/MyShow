import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>© 2024 TMDB. All rights reserved.</p>
        <Link to="/">
          <h2>My Show</h2>
        </Link>
      </div>
      <img src="../../../public/logobig.svg" alt="" width="70rem" />
    </footer>
  );
};
export default Footer;
