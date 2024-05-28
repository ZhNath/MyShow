import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer">
 
    <p>© 2024 TMDB. All rights reserved.</p>

    <div className="footer-basic">THE BASIC
    <ul>
    <li>
      <a href="https://www.themoviedb.org/about">About TMDB</a>
      <a href="https://www.themoviedb.org/talk">Support Forum</a>
      </li>
      </ul>
    </div>
    <div className="footer-basic">COMMUNITY
    <ul>
    <li>
      <a href="https://www.themoviedb.org/discuss">Discussion</a>
      <a href="https://www.themoviedb.org/documentation/community/guidelines">Guidelines</a>
      </li>
      </ul>
    </div>
    <div className="footer-basic">LEGAL
    <ul>
    <li>
    <a href="https://www.themoviedb.org/terms-of-use">Terms of Use</a>
     <a href="https://www.themoviedb.org/dmca-policy">DMCA Policy</a>
      </li>
      </ul>
    </div>

    <Link to="/">
      <h1>My Show</h1>
    </Link>
    </footer>
  );
};
export default Footer;
