import LisaWalshPhotographyWhiteTextHeader from '../LisaWalshPhotographyWhiteTextHeader.png';




function Header(){
    return (
        <div className='App-header'>
            <nav className="flex items-centre justify-between">  
                <div className="logo">  
                    <img src={LisaWalshPhotographyWhiteTextHeader} id= "signaturelogo" alt="logo"></img>  
                </div>  
                <div id="navLinkContainer" className="left">  
                    {/* <a href="#">Home</a>   */}
                    <a href="#right flex-1">About</a>  
                    <a href="#socials">Socials</a>
                    <a href="#container">Contact</a>  
                </div>  
            </nav>
        </div>
    )
}
export default Header;
