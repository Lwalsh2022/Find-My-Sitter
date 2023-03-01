




function Header(){
    return (
        <div className='App-header'>
            <nav className="flex items-centre justify-between">  
                <div className="logo">  
                    
                </div>  
                <div id="navLinkContainer" className="left">  
                    {/* <a href="#">Home</a>   */}
                    <a href="#right flex-1">Home</a>  
                    <a href="#socials">Sitters</a>
                    <a href="#container">Contact</a>  
                </div>  
            </nav>
        </div>
    )
}
export default Header;