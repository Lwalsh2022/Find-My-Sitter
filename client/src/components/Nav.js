import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Nav(){
    return(
        <div>
            <div id='navBar' className="w3-bar w3-black">
  <a href="/" className="site-title">Find A Sitter</a>
  <Link to={{pathname: `/`}} className="w3-bar-item w3-button App-link">Home</Link>
  <ion-icon name="home-outline"></ion-icon>
  <Link to={{pathname: `/sitters`}} className="w3-bar-item w3-button App-link">SittersPage</Link>
  <ion-icon name="man-outline"></ion-icon>
            </div>
        </div>
    )
}
export default Nav;