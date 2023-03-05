import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  return (
    <div id="navBar" className="w3-bar w3-black flex gap-5 text-white">
      <Link to={{ pathname: `/` }} className="w3-bar-item w3-button text-white">
        Home
      </Link>
      <Link to={{ pathname: `/sitters` }} className="w3-bar-item w3-button text-white">
        SittersPage
      </Link>

      <Link to={{ pathname: `/register` }} className="w3-bar-item w3-button text-white">
        Register Parent
      </Link>
      <Link to={{ pathname: `/register/sitter` }} className="w3-bar-item w3-button text-white">
        Register Sitter
      </Link>
    </div>
  );
}
export default Nav;
