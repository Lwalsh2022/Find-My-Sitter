import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* Images for page */
import HomeImg from '../assets/home.png';
import SitterImg from '../assets/Sitters.png';

function sitterNav(){
    return(
        <div>
            <div id='navSitter'>
  <Link to={{pathname: `/`}}><img src={HomeImg} alt="Home Image"></img></Link>
  <Link to={{pathname: `/sitters`}}><img src={SitterImg} alt="babysitter image"></img></Link>
            </div>
        </div>
    )
}
export default sitterNav;