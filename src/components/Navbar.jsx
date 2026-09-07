//this react component is the navigation bar for the application. 
// It contains the logo, navigation links, and a profile button.

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">✈</span>
        {" "}
        RoamReady
      </div>

      <div className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#trips">My Trips</a>
        <a href="#explore">Explore</a>
      </div>

      <button className="profile-button">TR</button>
    </nav>
  )
}

export default Navbar