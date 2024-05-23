import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 TMDB. All rights reserved.</p>
      <Link to="/">
        <h2>My Show</h2>
      </Link>
    </footer>
  );
};
export default Footer;
