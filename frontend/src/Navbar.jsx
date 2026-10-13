import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="Nav">
        <div className="Nav_logo">
          <img src="/media/RoadRakshak_logo.svg" alt="RoadRakshak Logo" />
        </div>
        <div className="Nav_links">
          <a href="#">How it works</a>
          <a href="#">Report issues</a>
          <a href="#">My reports</a>
          <a href="#">About</a>
          <button className="Nav_button">Make a Report</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
