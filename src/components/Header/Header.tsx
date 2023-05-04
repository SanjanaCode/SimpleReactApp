import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="route-button-container">
      <div>Click these to go to your page:</div>
      <div>
        <Link to="/" className="link">
          <button className="route-button">Home</button>
        </Link>
        <Link to="/sebi" className="link">
          <button className="route-button">Sebi</button>
        </Link>
        <Link to="/samir" className="link">
          <button className="route-button">Samir</button>
        </Link>
        <Link to="/sanjana" className="link">
          <button className="route-button">Sanjana</button>
        </Link>
        <Link to="/tushan" className="link">
          <button className="route-button">Tushan</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
