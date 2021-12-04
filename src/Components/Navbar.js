import './Navbar.css'

function Navbar () {
  return(
    <nav className="navbar">
    <div className="nav-wrapper">
        <img src="img/fig1logo.PNG" className="brand-img" alt="" />
        <input type="text" className="search-box" placeholder="search" />
        <div className="nav-items">
            <img src="img/home.PNG" className="icon" alt="" />
            <img src="img/messenger.PNG" className="icon" alt="" />
            <img src="img/add.PNG" className="icon" alt="" />
            <img src="img/explore.PNG" className="icon" alt="" />
            <img src="img/like.PNG" className="icon" alt="" />
            <div className="icon user-profile"></div>
        </div>
    </div>
</nav>
  )
}

export default Navbar;

