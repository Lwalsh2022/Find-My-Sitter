import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* Images for page */
import HomeImg from '../assets/home.png';
import SitterImg from '../assets/Sitters.png';

function Nav(){
    return(
        <div>
            <div id='navBar'>
  <a href="/" className="site-title">Find A Sitter</a>
<<<<<<< HEAD
  <Link to={{pathname: `/`}} className="w3-bar-item w3-button App-link">Home</Link>
  <ion-icon name="home-outline"></ion-icon>
  <Link to={{pathname: `/sitters`}} className="w3-bar-item w3-button App-link">SittersPage</Link>
  <ion-icon name="man-outline"></ion-icon>
=======
  <Link to={{pathname: `/`}} className="headerImage"><img src={HomeImg} alt="Home Image"></img></Link>
  <Link to={{pathname: `/sitters`}} className="headerImage"><img src={SitterImg} alt="babysitter image"></img></Link>
>>>>>>> 647dc7213136405e9236d2dffdf75b2d902bca13
            </div>
        </div>
    )
}
export default Nav;